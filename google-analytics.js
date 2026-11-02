/* Google tag (gtag.js): basic consent mode. Loaded once in every public HTML head. */
(() => {
    'use strict';
    if(window.KTalkGA4)return;
    const id='G-JRM8LY3R2J',key='kTalkGA4ConsentV1',ttl=180*86400000;
    const messages={
        en:['Optional analytics cookies','Allow Google Analytics to measure visits and learning activity? Learning works without it. Advertising consent is separate.','Reject analytics','Allow analytics','Cookie settings','Privacy Policy','Your browser privacy setting or administrator status prevents Google Analytics collection.'],
        ja:['任意のアクセス解析Cookie','Google Analyticsによる訪問・学習状況の計測を許可しますか？拒否しても学習できます。広告への同意は別です。','解析を拒否','解析を許可','Cookie設定','プライバシー','ブラウザーのプライバシー設定または管理者のため、Google Analyticsでは計測しません。'],
        zh:['可选的分析 Cookie','允许 Google Analytics 统计访问和学习活动吗？拒绝后仍可学习。广告同意另行管理。','拒绝分析','允许分析','Cookie 设置','隐私政策','浏览器隐私设置或管理员身份已阻止 Google Analytics 统计。'],
        es:['Cookies de análisis opcionales','¿Permites que Google Analytics mida las visitas y la actividad de aprendizaje? Puedes aprender sin aceptarlo. El consentimiento publicitario es independiente.','Rechazar análisis','Permitir análisis','Ajustes de cookies','Privacidad','La configuración de privacidad o el estado de administrador impide la medición de Google Analytics.'],
        th:['คุกกี้วิเคราะห์ที่ไม่บังคับ','อนุญาตให้ Google Analytics วัดการเข้าชมและกิจกรรมการเรียนหรือไม่? ปฏิเสธแล้วยังเรียนได้ การยินยอมโฆษณาแยกต่างหาก','ปฏิเสธการวิเคราะห์','อนุญาตการวิเคราะห์','ตั้งค่าคุกกี้','ความเป็นส่วนตัว','การตั้งค่าความเป็นส่วนตัวหรือสถานะผู้ดูแลปิดการวัดของ Google Analytics']
    };
    let preference=null,configured=false,banner=null,settings=null,scheduled=false;
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
    // Synchronous defaults precede the existing AdSense library. Analytics permission never grants ads permission.
    gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window['ga-disable-'+id]=true;
    function read(){try{const p=JSON.parse(localStorage.getItem(key)||'null');return p&&['granted','denied'].includes(p.choice)&&Number.isFinite(p.at)&&p.at<=Date.now()&&Date.now()-p.at<ttl?p.choice:null;}catch{return null;}}
    function owner(){try{return location.hash==='#admin'||localStorage.getItem('kTalkAnalyticsOwner')==='1'||JSON.parse(sessionStorage.getItem('kTalkFeedbackSession')||'null')?.expires_at>Date.now();}catch{return true;}}
    function blocked(){return owner()||navigator.doNotTrack==='1'||window.doNotTrack==='1'||navigator.globalPrivacyControl===true;}
    const enabled=()=>preference==='granted'&&!blocked();
    function clearCookies(){
        for(const item of document.cookie.split(';')){
            const name=item.split('=')[0].trim();if(!/^_ga(?:_|$)/.test(name))continue;
            document.cookie=name+'=; Max-Age=0; path=/; SameSite=Lax';
            const parts=location.hostname.split('.');
            for(let i=0;i<parts.length-1;i++)document.cookie=name+'=; Max-Age=0; path=/; domain=.'+parts.slice(i).join('.')+'; SameSite=Lax';
        }
    }
    function suspend(){window['ga-disable-'+id]=true;gtag('consent','update',{analytics_storage:'denied'});clearCookies();}
    function apply(){
        if(!enabled()){suspend();return;}
        // The app restores its initial tab in window.onload. Wait until that route is settled,
        // so its initial history.replaceState cannot create a second initial Google page view.
        if(document.readyState!=='complete'){
            if(!scheduled){scheduled=true;window.addEventListener('load',()=>{scheduled=false;apply();},{once:true});}
            return;
        }
        window['ga-disable-'+id]=false;
        gtag('consent','update',{analytics_storage:'granted'});
        if(configured)return;
        configured=true;
        // Standard Google installation, delayed until consent. Automatic page views are sent once;
        // no manual page_view is sent by KTalkAnalytics. SPA history measurement stays with Google.
        gtag('js',new Date());
        gtag('config',id,{allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:15552000});
        const script=document.createElement('script');script.async=true;
        script.src='https://www.googletagmanager.com/gtag/js?id='+id;
        script.dataset.ktalkGaLoader='';document.head.append(script);
    }
    function choose(choice){
        preference=choice;
        try{localStorage.setItem(key,JSON.stringify({choice,at:Date.now()}));}catch{/* Choice still applies to this page. */}
        apply();banner.hidden=true;settings.focus({preventScroll:true});
    }
    function localize(){
        let lang='en';try{lang=localStorage.getItem('kTalkLang')||'en';}catch{}
        const text=messages[lang]||messages.en;
        if(!banner)return;
        banner.querySelector('h2').textContent=text[0];banner.querySelector('p').textContent=blocked()?text[6]:text[1];
        banner.querySelector('[data-ga-reject]').textContent=text[2];banner.querySelector('[data-ga-allow]').textContent=text[3];
        banner.querySelector('[data-ga-allow]').disabled=blocked();
        banner.querySelector('a').textContent=text[5];settings.textContent=text[4];
    }
    function open(){if(!banner)return;localize();banner.hidden=false;banner.querySelector('[data-ga-reject]').focus();}
    function event(type,page){
        if(!enabled()||!configured||!['learning_start','quiz_complete','speech_practice'].includes(type))return;
        // Only existing fixed page identifiers. Never send answers, emails, browser IDs or admin credentials.
        if(typeof page!=='string'||!/^\/(?:#[a-z]+|(?:learn\/[a-z-]*\/?)?|about\/|contact\/|privacy\/|terms\/)?$/.test(page))return;
        gtag('event',type,{learning_page:page});
    }
    window.KTalkGA4={event,localize,open,suspend};
    document.addEventListener('DOMContentLoaded',()=>{
        preference=read();
        banner=document.createElement('section');banner.id='ktalk-ga-banner';banner.dataset.noLocalize='';
        banner.setAttribute('role','region');banner.setAttribute('aria-labelledby','ktalk-ga-title');
        banner.innerHTML='<h2 id="ktalk-ga-title"></h2><p></p><a href="/privacy/"></a><div class="ga-choices"><button type="button" data-ga-reject></button><button type="button" data-ga-allow></button></div>';
        settings=document.createElement('button');settings.type='button';settings.id='ktalk-cookie-settings';settings.dataset.noLocalize='';settings.onclick=open;
        (document.querySelector('footer nav')||document.querySelector('footer')||document.body).append(settings);
        banner.querySelector('[data-ga-reject]').onclick=()=>choose('denied');banner.querySelector('[data-ga-allow]').onclick=()=>choose('granted');
        banner.hidden=preference!==null||owner();document.body.append(banner);localize();apply();
        window.addEventListener('storage',e=>{if(e.key===key||e.key==='kTalkAnalyticsOwner'){preference=read();apply();localize();banner.hidden=preference!==null||owner();}});
        window.addEventListener('hashchange',()=>{if(owner())suspend();});
    },{once:true});
})();
