/* Interaction is optional: the complete lesson text lives in the HTML. */
var currentLang='en';
(() => {
    'use strict';
    const status=document.getElementById('audio-status');
    let voice=null,started=false,completed=false,utterance=null,speechGeneration=0;
    const start=()=>{if(!started){started=true;window.KTalkAnalytics?.event('learning_start');}};
    function stop(){speechGeneration++;window.speechSynthesis?.cancel();utterance=null;}
    function voices(){voice=window.speechSynthesis?.getVoices().filter(v=>/^ko(?:-|_)/i.test(v.lang)).sort((a,b)=>Number(b.default)-Number(a.default))[0]||null;}
    voices();window.speechSynthesis?.addEventListener('voiceschanged',voices);
    document.querySelectorAll('[data-start]').forEach(button=>button.addEventListener('click',()=>{start();if(button.tagName==='BUTTON')document.getElementById('lesson-content')?.scrollIntoView();}));
    document.querySelectorAll('[data-say]').forEach(button=>button.addEventListener('click',()=>{
        start();stop();voices();
        if(!window.speechSynthesis||!window.SpeechSynthesisUtterance){status.textContent='Speech playback is unavailable in this browser.';return;}
        if(!voice){status.textContent='No Korean voice found. Add a Korean speech voice in your device settings, then try again.';return;}
        const generation=speechGeneration;
        utterance=new SpeechSynthesisUtterance(button.dataset.say);utterance.voice=voice;utterance.lang='ko-KR';utterance.pitch=1;
        utterance.rate=Number(document.getElementById('lesson-speed').value);
        utterance.onend=()=>{if(generation===speechGeneration){status.textContent='Your turn: repeat the complete phrase.';utterance=null;}};
        utterance.onerror=()=>{if(generation===speechGeneration){status.textContent='Audio could not play. Check your Korean voice and try again.';utterance=null;}};
        status.textContent='Listening: '+button.dataset.say;speechSynthesis.speak(utterance);
    }));
    document.getElementById('stop-audio')?.addEventListener('click',()=>{stop();status.textContent='Audio stopped.';});
    window.addEventListener('pagehide',stop);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
    const quiz=document.getElementById('lesson-quiz');
    quiz?.addEventListener('change',start);
    quiz?.addEventListener('submit',event=>{
        event.preventDefault();if(!quiz.reportValidity())return;start();
        let score=0;
        quiz.querySelectorAll('fieldset').forEach(field=>{
            const good=field.querySelector('input:checked')?.value===field.dataset.correct;
            if(good)score++;
            const answer=field.querySelector('.answer-feedback');answer.hidden=false;
            answer.dataset.result=good?'correct':'review';
        });
        document.getElementById('quiz-result').textContent=`${score} / 3 correct. Read the explanations above, then try the examples in the app.`;
        if(!completed){completed=true;for(let i=0;i<3;i++)window.KTalkAnalytics?.event('quiz_answer');window.KTalkAnalytics?.event('quiz_complete');}
    });
    const form=document.getElementById('contact-form');
    let sending=false,lastPayload='',requestId='';
    form?.addEventListener('submit',async event=>{
        event.preventDefault();if(sending||!form.reportValidity())return;
        const result=document.getElementById('contact-status');
        const data={category:form.elements.category.value,message:form.elements.message.value.trim(),email:form.elements.email.value.trim(),website:form.elements.website.value,language:'en',context:{}};
        if(data.message.length<10){result.textContent='Please enter at least 10 characters.';return;}
        const serialized=JSON.stringify(data);if(serialized!==lastPayload){lastPayload=serialized;requestId=crypto.randomUUID();}data.request_id=requestId;
        sending=true;const button=form.querySelector('button[type=submit]');button.disabled=true;result.textContent='Sending…';
        const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
        try{
            const response=await fetch(String(window.KTALK_FEEDBACK_API).replace(/\/$/,'')+'/feedback',{method:'POST',cache:'no-store',credentials:'omit',signal:controller.signal,headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
            const body=await response.json();
            if(!response.ok)throw Object.assign(Error('send_failed'),{status:response.status});
            result.textContent='Message received. Reference: '+body.id;form.reset();lastPayload='';requestId='';
        }catch(error){result.textContent=error.status===429?'Too many attempts. Please try again in 10 minutes. Your message is still here.':'Could not send. Your message is still here. Reconnect and try again, or email wooju200903@gmail.com.';}
        finally{clearTimeout(timer);sending=false;button.disabled=false;}
    });
    function privacyState(){
        const note=document.getElementById('privacy-choice');if(!note)return;
        try{note.textContent=localStorage.getItem('kTalkAnalyticsOptOut')==='1'?'First-party statistics are turned off on this browser.':'First-party statistics are allowed, unless Do Not Track or Global Privacy Control is enabled.';}
        catch{note.textContent='Browser storage is unavailable; first-party statistics are not collected.';}
    }
    document.getElementById('analytics-opt-out')?.addEventListener('click',()=>{try{localStorage.setItem('kTalkAnalyticsOptOut','1');window.KTalkAnalytics?.discard();}catch{}privacyState();});
    document.getElementById('analytics-opt-in')?.addEventListener('click',()=>{try{localStorage.removeItem('kTalkAnalyticsOptOut');}catch{}privacyState();});
    privacyState();
})();
