/* Two-beolsik input for #section-quiz #user-answer only. No network dependencies. */
(() => {
    'use strict';
    const initials=[...'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'];
    const vowels=[...'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'];
    const finals=['',...'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'];
    const vowelPairs={'ㅗㅏ':'ㅘ','ㅗㅐ':'ㅙ','ㅗㅣ':'ㅚ','ㅜㅓ':'ㅝ','ㅜㅔ':'ㅞ','ㅜㅣ':'ㅟ','ㅡㅣ':'ㅢ'};
    const finalPairs={'ㄱㄱ':'ㄲ','ㄱㅅ':'ㄳ','ㄴㅈ':'ㄵ','ㄴㅎ':'ㄶ','ㄹㄱ':'ㄺ','ㄹㅁ':'ㄻ','ㄹㅂ':'ㄼ','ㄹㅅ':'ㄽ','ㄹㅌ':'ㄾ','ㄹㅍ':'ㄿ','ㄹㅎ':'ㅀ','ㅂㅅ':'ㅄ','ㅅㅅ':'ㅆ'};
    const initialPairs={'ㄱㄱ':'ㄲ','ㄷㄷ':'ㄸ','ㅂㅂ':'ㅃ','ㅅㅅ':'ㅆ','ㅈㅈ':'ㅉ'};
    const vowelSplit=Object.fromEntries(Object.entries(vowelPairs).map(([pair,ch])=>[ch,[...pair]]));
    const finalSplit=Object.fromEntries(Object.entries(finalPairs).filter(([,ch])=>!['ㄲ','ㅆ'].includes(ch)).map(([pair,ch])=>[ch,[...pair]]));
    const base={q:'ㅂ',w:'ㅈ',e:'ㄷ',r:'ㄱ',t:'ㅅ',y:'ㅛ',u:'ㅕ',i:'ㅑ',o:'ㅐ',p:'ㅔ',a:'ㅁ',s:'ㄴ',d:'ㅇ',f:'ㄹ',g:'ㅎ',h:'ㅗ',j:'ㅓ',k:'ㅏ',l:'ㅣ',z:'ㅋ',x:'ㅌ',c:'ㅊ',v:'ㅍ',b:'ㅠ',n:'ㅜ',m:'ㅡ'};
    const upper={Q:'ㅃ',W:'ㅉ',E:'ㄸ',R:'ㄲ',T:'ㅆ',O:'ㅒ',P:'ㅖ'};
    const mapKey=key=>upper[key]||base[String(key).toLowerCase()]||null;
    function compose(tokens){
        let result='',l='',v='',t='',tParts=null;
        const character=()=>l&&v&&initials.includes(l)?String.fromCharCode(0xAC00+(initials.indexOf(l)*21+vowels.indexOf(v))*28+finals.indexOf(t)):l||v||'';
        const flush=()=>{result+=character();l='';v='';t='';tParts=null;};
        for(const ch of tokens){
            if(vowels.includes(ch)){
                if(!l){if(v&&vowelPairs[v+ch])v=vowelPairs[v+ch];else{flush();v=ch;}}
                else if(!v){
                    if(!initials.includes(l)&&finalSplit[l]){const [keep,move]=finalSplit[l];l=keep;flush();l=move;}
                    v=ch;
                }else if(t){
                    const move=tParts?tParts[1]:t;t=tParts?tParts[0]:'';flush();l=move;v=ch;
                }else if(vowelPairs[v+ch])v=vowelPairs[v+ch];
                else{flush();v=ch;}
            }else if(initials.includes(ch)){
                if(!l){flush();l=ch;}
                else if(!v){
                    const joined=initialPairs[l+ch]||finalPairs[l+ch];
                    if(joined)l=joined;else{flush();l=ch;}
                }else if(!t&&finals.includes(ch)){t=ch;tParts=null;}
                else if(t&&finalPairs[t+ch]){const previous=t;t=finalPairs[t+ch];tParts=[previous,ch];}
                else{flush();l=ch;}
            }else{flush();result+=ch;}
        }
        flush();return result;
    }
    function decompose(ch){
        const code=ch.codePointAt(0)-0xAC00;
        if(code>=0&&code<11172){const l=initials[Math.floor(code/588)],v=vowels[Math.floor(code/28)%21],t=finals[code%28];return[l,...(vowelSplit[v]||[v]),...(t?(finalSplit[t]||[t]):[])];}
        return vowelSplit[ch]||finalSplit[ch]||[ch];
    }
    const engine={compose,decompose,mapKey,initials,vowels,finals};
    if(typeof module!=='undefined'&&module.exports){module.exports=engine;return;}
    const copy={
        en:{title:'Korean input help',open:'Open Korean keyboard',close:'Close Korean keyboard',mode:'Input mode',native:'My keyboard / romanization',qwerty:'English QWERTY → Korean',hint:'Tap letters to build Hangul. Example: ㅎ + ㅏ + ㄴ → 한. Shift gives ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㅒ, ㅖ. Combine ㅗ + ㅏ → ㅘ. Backspace removes one typing step.',nativeHint:'Use your installed Korean keyboard as usual, or enter romanization. The on-screen keyboard is optional.',qwertyHint:'Type English keyboard positions: r → ㄱ, k → ㅏ, rk → 가; gksrmf → 한글. This is a keyboard layout, not romanization. For a native Korean keyboard or romanization, choose “My keyboard”.',back:'Backspace',clear:'Clear all',check:'Check answer',space:'Space',shift:'Shift',letters:'Two-beolsik Korean keyboard',answer:'Quiz answer'},
        ja:{title:'韓国語入力のヘルプ',open:'韓国語キーボードを開く',close:'韓国語キーボードを閉じる',mode:'入力モード',native:'端末のキーボード／ローマ字',qwerty:'英語QWERTY → 韓国語',hint:'文字をタップして組み立てます。例：ㅎ + ㅏ + ㄴ → 한。Shiftでㄲ・ㄸ・ㅃ・ㅆ・ㅉ・ㅒ・ㅖ。ㅗ + ㅏ → ㅘ。削除は入力1段階ずつ戻します。',nativeHint:'端末の韓国語キーボードやローマ字入力をそのまま使えます。画面キーボードは任意です。',qwertyHint:'英字キーの位置で入力：r → ㄱ、k → ㅏ、rk → 가、gksrmf → 한글。ローマ字変換ではありません。端末の韓国語入力やローマ字には「端末のキーボード」を選んでください。',back:'1段階削除',clear:'すべて消去',check:'答えを確認',space:'スペース',shift:'Shift',letters:'韓国語2ボル式キーボード',answer:'クイズの答え'},
        zh:{title:'韩语输入帮助',open:'打开韩语键盘',close:'关闭韩语键盘',mode:'输入模式',native:'设备键盘／罗马字',qwerty:'英文QWERTY → 韩语',hint:'点击字母组合韩文。例如：ㅎ + ㅏ + ㄴ → 한。Shift输入ㄲ、ㄸ、ㅃ、ㅆ、ㅉ、ㅒ、ㅖ。ㅗ + ㅏ → ㅘ。退格逐步撤销输入。',nativeHint:'可照常使用已安装的韩语键盘，也可输入罗马字。屏幕键盘可按需开启。',qwertyHint:'按英文键位输入：r → ㄱ、k → ㅏ、rk → 가；gksrmf → 한글。这是键位转换，不是罗马字转换。使用韩语输入法或罗马字时，请选择“设备键盘”。',back:'退格',clear:'全部清除',check:'检查答案',space:'空格',shift:'Shift',letters:'韩语两套式键盘',answer:'测验答案'},
        es:{title:'Ayuda para escribir coreano',open:'Abrir teclado coreano',close:'Cerrar teclado coreano',mode:'Modo de entrada',native:'Mi teclado / romanización',qwerty:'QWERTY inglés → coreano',hint:'Toca las letras para formar Hangul: ㅎ + ㅏ + ㄴ → 한. Shift permite ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㅒ, ㅖ. Combina ㅗ + ㅏ → ㅘ. Retroceso deshace un paso.',nativeHint:'Usa tu teclado coreano instalado o escribe la romanización como antes. El teclado en pantalla es opcional.',qwertyHint:'Escribe por posición de teclas: r → ㄱ, k → ㅏ, rk → 가; gksrmf → 한글. Es una distribución de teclado, no romanización. Para tu teclado coreano o romanización, elige “Mi teclado”.',back:'Borrar',clear:'Borrar todo',check:'Comprobar',space:'Espacio',shift:'Shift',letters:'Teclado coreano de dos conjuntos',answer:'Respuesta del ejercicio'},
        th:{title:'วิธีพิมพ์ภาษาเกาหลี',open:'เปิดแป้นพิมพ์เกาหลี',close:'ปิดแป้นพิมพ์เกาหลี',mode:'โหมดการพิมพ์',native:'แป้นพิมพ์ของฉัน / อักษรโรมัน',qwerty:'QWERTY อังกฤษ → เกาหลี',hint:'แตะตัวอักษรเพื่อประกอบฮันกึล เช่น ㅎ + ㅏ + ㄴ → 한 ใช้ Shift สำหรับ ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㅒ, ㅖ ผสม ㅗ + ㅏ → ㅘ ลบย้อนทีละขั้นการพิมพ์',nativeHint:'ใช้แป้นพิมพ์เกาหลีที่ติดตั้งไว้หรือพิมพ์อักษรโรมันได้ตามเดิม เปิดแป้นพิมพ์บนจอเมื่อจำเป็น',qwertyHint:'พิมพ์ตามตำแหน่งปุ่มอังกฤษ: r → ㄱ, k → ㅏ, rk → 가; gksrmf → 한글 นี่คือการแปลงปุ่ม ไม่ใช่อักษรโรมัน หากใช้แป้นพิมพ์เกาหลีหรืออักษรโรมันให้เลือก “แป้นพิมพ์ของฉัน”',back:'ลบย้อน',clear:'ลบทั้งหมด',check:'ตรวจคำตอบ',space:'เว้นวรรค',shift:'Shift',letters:'แป้นพิมพ์เกาหลีสองชุด',answer:'คำตอบแบบทดสอบ'}
    };
    let input,root,toggle,panel,mode='native',shift=false,run=null,composing=false,ownInput=false,lastEnd=-Infinity,compositionBase=null,pendingNative=null;
    const text=()=>copy[typeof currentLang==='string'?currentLang:'en']||copy.en;
    const rows=['qwertyuiop','asdfghjkl','zxcvbnm'];
    function commit(){run=null;}
    function reset(){commit();pendingNative=null;shift=false;updateKeys();}
    function notify(){ownInput=true;try{input.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText'}));}finally{ownInput=false;}}
    function focus(){input.focus({preventScroll:true});}
    function validRun(){return run&&input.value===run.before+run.rendered+run.after&&input.selectionStart===run.before.length+run.rendered.length&&input.selectionStart===input.selectionEnd;}
    function renderRun(){
        run.rendered=compose(run.tokens);input.value=run.before+run.rendered+run.after;
        const caret=run.before.length+run.rendered.length;input.setSelectionRange(caret,caret);
    }
    function insert(chars){
        if(composing)return;
        if(!validRun())run={before:input.value.slice(0,input.selectionStart),after:input.value.slice(input.selectionEnd),tokens:[],rendered:''};
        run.tokens.push(...chars);renderRun();notify();
    }
    function literal(ch){
        commit();input.setRangeText(ch,input.selectionStart,input.selectionEnd,'end');notify();
    }
    function backspace(){
        if(composing)return;
        const start=input.selectionStart,end=input.selectionEnd;
        if(start!==end){commit();input.setRangeText('',start,end,'end');notify();return;}
        if(validRun()&&run.tokens.length){run.tokens.pop();renderRun();if(!run.tokens.length)commit();notify();return;}
        commit();if(!start)return;
        const ch=Array.from(input.value.slice(0,start)).pop(),tokens=decompose(ch);tokens.pop();
        run={before:input.value.slice(0,start-ch.length),after:input.value.slice(end),tokens,rendered:''};renderRun();
        if(!tokens.length)commit();notify();
    }
    function check(){if(composing)return;commit();window.checkAnswer();}
    function updateKeys(){
        if(!root)return;
        root.querySelectorAll('[data-letter]').forEach(button=>{
            const key=shift?button.dataset.letter.toUpperCase():button.dataset.letter;
            button.querySelector('strong').textContent=mapKey(key);button.querySelector('small').textContent=key.toUpperCase();
            button.setAttribute('aria-label',mapKey(key)+' ('+key.toUpperCase()+')');
        });
        root.querySelector('[data-action=shift]').setAttribute('aria-pressed',String(shift));
    }
    function localize(){
        if(!root)return;
        root.querySelectorAll('[data-qk]').forEach(el=>{el.textContent=text()[el.dataset.qk];});
        root.querySelector('#quiz-keyboard-mode-hint').textContent=mode==='native'?text().nativeHint:text().qwertyHint;
        toggle.textContent=panel.hidden?text().open:text().close;
        root.querySelector('#quiz-hangul-keys').setAttribute('aria-label',text().letters);
        input.setAttribute('aria-label',text().answer);root.setAttribute('aria-label',text().title);
    }
    function open(value){
        commit();panel.hidden=!value;toggle.setAttribute('aria-expanded',String(value));
        // Only the optional on-screen panel suppresses the mobile OS keyboard. Closing restores it.
        if(value)input.setAttribute('inputmode','none');else input.removeAttribute('inputmode');
        localize();if(!value)toggle.focus({preventScroll:true});
    }
    function keydown(e){
        if(e.isComposing||e.keyCode===229||composing)return;
        if(e.key==='Enter'){
            if(Date.now()-lastEnd<50)return;
            e.preventDefault();check();return;
        }
        if(e.ctrlKey||e.metaKey||e.altKey){commit();return;}
        if(mode==='qwerty'&&e.key==='Backspace'){e.preventDefault();backspace();return;}
        if(mode==='qwerty'&&/^[a-z]$/i.test(e.key)){
            e.preventDefault();const key=e.shiftKey?e.key.toUpperCase():e.key.toLowerCase();insert([mapKey(key)]);return;
        }
        if(mode==='qwerty'&&e.key===' '){e.preventDefault();literal(' ');return;}
        if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','Delete','Tab','Escape'].includes(e.key)||e.key.length===1)commit();
    }
    function init(){
        input=document.querySelector('#section-quiz #user-answer[data-quiz-input-kind="text"]');if(!input)return;
        root=document.createElement('section');root.id='quiz-input-tools';root.dataset.noLocalize='';root.setAttribute('aria-label',text().title);
        root.innerHTML=`<label class="qk-mode"><span data-qk="mode"></span><select id="quiz-keyboard-mode"><option value="native" data-qk="native"></option><option value="qwerty" data-qk="qwerty"></option></select></label><p id="quiz-keyboard-mode-hint"></p><button type="button" id="quiz-keyboard-toggle" aria-expanded="false" aria-controls="quiz-keyboard-panel"></button><div id="quiz-keyboard-panel" hidden><p data-qk="hint"></p><div id="quiz-hangul-keys" role="group"></div><div class="qk-controls"><button type="button" data-action="shift" data-qk="shift" aria-pressed="false"></button><button type="button" data-action="back" data-qk="back"></button><button type="button" data-action="space" data-qk="space"></button><button type="button" data-action="clear" data-qk="clear"></button><button type="button" data-action="check" data-qk="check"></button></div></div>`;
        input.parentElement.insertAdjacentElement('afterend',root);
        toggle=root.querySelector('#quiz-keyboard-toggle');panel=root.querySelector('#quiz-keyboard-panel');
        const keys=root.querySelector('#quiz-hangul-keys');
        rows.forEach((row,index)=>{
            const line=document.createElement('div');line.className='qk-row qk-row-'+index;
            for(const letter of row){const b=document.createElement('button');b.type='button';b.dataset.letter=letter;b.innerHTML='<strong lang="ko"></strong><small></small>';line.append(b);}
            keys.append(line);
        });
        toggle.onclick=()=>open(panel.hidden);
        root.querySelector('#quiz-keyboard-mode').onchange=e=>{commit();mode=e.target.value;localize();};
        keys.addEventListener('pointerdown',e=>{if(e.target.closest('button')&&!composing)e.preventDefault();});
        root.querySelector('.qk-controls').addEventListener('pointerdown',e=>{if(e.target.closest('button')&&!composing)e.preventDefault();});
        root.addEventListener('click',e=>{
            const button=e.target.closest('button');if(!button||composing)return;
            if(button.dataset.letter){focus();insert([mapKey(shift?button.dataset.letter.toUpperCase():button.dataset.letter)]);shift=false;updateKeys();}
            if(button.dataset.action){
                const action=button.dataset.action;
                if(action==='shift'){shift=!shift;updateKeys();return;}
                focus();if(action==='back')backspace();if(action==='space')literal(' ');
                if(action==='clear'){commit();input.value='';input.setSelectionRange(0,0);notify();}
                if(action==='check')check();
            }
        });
        input.addEventListener('keydown',keydown);
        input.addEventListener('pointerdown',commit);
        input.addEventListener('blur',e=>{if(!root.contains(e.relatedTarget))commit();});
        input.addEventListener('beforeinput',e=>{
            if(mode!=='qwerty'||composing||e.isComposing||Date.now()-lastEnd<50)return;
            if(e.inputType==='insertText'&&/^[a-z]+$/i.test(e.data||'')){
                if(e.cancelable){e.preventDefault();insert([...e.data].map(mapKey));}
                else pendingNative={value:input.value,start:input.selectionStart,end:input.selectionEnd,data:e.data,type:e.inputType};
            }
            else if(e.inputType==='deleteContentBackward'){
                if(e.cancelable){e.preventDefault();backspace();}
                else pendingNative={value:input.value,start:input.selectionStart,end:input.selectionEnd,type:e.inputType};
            }
            else commit();
        });
        input.addEventListener('input',e=>{
            if(ownInput)return;
            const saved=pendingNative;pendingNative=null;
            if(saved&&mode==='qwerty'&&!composing&&!e.isComposing&&e.inputType===saved.type){
                const prefix=saved.value.slice(0,saved.start),suffix=saved.value.slice(saved.end);
                const expected=saved.type==='insertText'?prefix+saved.data+suffix:(saved.start!==saved.end?prefix:Array.from(prefix).slice(0,-1).join(''))+suffix;
                if(input.value===expected){
                    input.value=saved.value;input.setSelectionRange(saved.start,saved.end);
                    if(saved.type==='insertText')insert([...saved.data].map(mapKey));else backspace();return;
                }
            }
            commit();
        });
        input.addEventListener('compositionstart',()=>{
            commit();pendingNative=null;composing=true;compositionBase={value:input.value,start:input.selectionStart,end:input.selectionEnd};
        });
        input.addEventListener('compositionend',e=>{
            composing=false;lastEnd=Date.now();commit();const saved=compositionBase,data=e.data||'';compositionBase=null;
            // Mobile English keyboards may commit a whole Latin word via composition.
            // Convert only a matching Latin commit in the opt-in QWERTY mode; native Hangul is untouched.
            if(mode==='qwerty'&&saved&&/^[a-z]+$/i.test(data))setTimeout(()=>{
                const expected=saved.value.slice(0,saved.start)+data+saved.value.slice(saved.end);
                if(composing||mode!=='qwerty'||input.value!==expected)return;
                input.value=saved.value;input.setSelectionRange(saved.start,saved.end);insert([...data].map(mapKey));
            },0);
        });
        document.addEventListener('selectionchange',()=>{if(document.activeElement===input&&run&&!validRun())commit();});
        updateKeys();localize();
    }
    window.KTalkQuizKeyboard={init,reset,localize,...engine};
    document.addEventListener('DOMContentLoaded',init,{once:true});
})();
