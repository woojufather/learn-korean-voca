/* First-party, browser-based analytics. No legacy local counters are imported. */
(() => {
    'use strict';
    const copy={
        en:{title:'Site-wide learning statistics',loading:'Loading server statistics…',error:'Statistics could not be loaded. Please refresh to retry.',
            todayVisitors:'Today’s visitors',totalVisitors:'Total visitors',totalViews:'Total page views',todayViews:'Today’s page views',quizzes:'Questions answered today',speech:'Speaking practices started today',
            browsers:'browsers',times:'times',questions:'questions',languages:'Selected learning language · today',devices:'Devices · today',history:'Last 7 days · Korea time',date:'Date',visitors:'Visitors',views:'Views',answers:'Answers',
            started:'New collection started',updated:'Updated',note:'Visitors are counted once per browser, not per person. Changing devices or clearing browser data can count again. Languages show the latest selection of each visiting browser today, not native languages. Owner visits and recognized bots are excluded. Blocked or offline activity may be missing.',
            legacy:'The former badge and this browser’s old counts are not included. — means collection had not started.',owner:'This browser’s owner activity is excluded.',desktop:'Desktop',mobile:'Mobile',tablet:'Tablet'},
        ja:{title:'サイト全体の学習統計',loading:'サーバーの統計を読み込み中…',error:'統計を取得できません。更新してお試しください。',
            todayVisitors:'今日の訪問者',totalVisitors:'累計訪問者',totalViews:'累計ページ閲覧',todayViews:'今日のページ閲覧',quizzes:'今日回答した問題',speech:'今日開始した発話練習',
            browsers:'ブラウザー',times:'回',questions:'問',languages:'選択した学習言語・今日',devices:'端末・今日',history:'過去7日間・韓国時間',date:'日付',visitors:'訪問者',views:'閲覧',answers:'回答',
            started:'新しい集計の開始',updated:'更新',note:'訪問者は人数ではなく、ブラウザー単位で重複を除いて集計します。端末変更やデータ削除で再計上される場合があります。言語は今日の訪問ブラウザーの最新選択で、母語ではありません。管理者と識別できたボットは除外します。通信や追跡の制限により記録されない活動もあります。',
            legacy:'以前のバッジや、このブラウザーの過去の数値は含みません。— は集計開始前です。',owner:'このブラウザーの管理者の利用は除外します。',desktop:'パソコン',mobile:'スマートフォン',tablet:'タブレット'},
        zh:{title:'全站学习统计',loading:'正在读取服务器统计…',error:'无法读取统计，请刷新重试。',
            todayVisitors:'今日访客',totalVisitors:'累计访客',totalViews:'累计页面浏览',todayViews:'今日页面浏览',quizzes:'今日答题数',speech:'今日开始的口语练习',
            browsers:'个浏览器',times:'次',questions:'题',languages:'所选学习语言・今日',devices:'设备・今日',history:'最近7天・韩国时间',date:'日期',visitors:'访客',views:'浏览',answers:'答题',
            started:'新统计开始于',updated:'更新于',note:'访客按浏览器去重，不等于实际人数。更换设备或清除浏览器数据可能重复计数。语言是今日访客浏览器最后选择的学习语言，不是母语。管理员和已识别的机器人不计入。离线或被拦截的活动可能无法记录。',
            legacy:'不包含旧徽章或当前浏览器以前的计数。— 表示尚未开始统计。',owner:'已排除此浏览器的管理员活动。',desktop:'电脑',mobile:'手机',tablet:'平板'},
        es:{title:'Estadísticas de todo el sitio',loading:'Cargando estadísticas del servidor…',error:'No se pudieron cargar las estadísticas. Actualiza para reintentar.',
            todayVisitors:'Visitantes de hoy',totalVisitors:'Visitantes totales',totalViews:'Vistas totales',todayViews:'Vistas de hoy',quizzes:'Preguntas respondidas hoy',speech:'Prácticas de voz iniciadas hoy',
            browsers:'navegadores',times:'veces',questions:'preguntas',languages:'Idioma elegido · hoy',devices:'Dispositivos · hoy',history:'Últimos 7 días · hora de Corea',date:'Fecha',visitors:'Visitantes',views:'Vistas',answers:'Respuestas',
            started:'Inicio de la nueva medición',updated:'Actualizado',note:'Se cuenta cada navegador, no cada persona. Cambiar de dispositivo o borrar sus datos puede contar otra vez. Los idiomas muestran la última elección de cada navegador de hoy, no la lengua materna. Se excluyen el propietario y los bots reconocidos. Puede faltar actividad sin conexión o bloqueada.',
            legacy:'No se incluyen los contadores anteriores del distintivo ni de este navegador. — indica fechas anteriores al inicio.',owner:'Se excluye la actividad del propietario en este navegador.',desktop:'Ordenador',mobile:'Móvil',tablet:'Tableta'},
        th:{title:'สถิติการเรียนทั้งเว็บไซต์',loading:'กำลังโหลดสถิติจากเซิร์ฟเวอร์…',error:'โหลดสถิติไม่ได้ กรุณารีเฟรชเพื่อลองอีกครั้ง',
            todayVisitors:'ผู้เข้าชมวันนี้',totalVisitors:'ผู้เข้าชมสะสม',totalViews:'ยอดเปิดหน้าสะสม',todayViews:'ยอดเปิดหน้าวันนี้',quizzes:'ข้อที่ตอบวันนี้',speech:'ครั้งที่เริ่มฝึกพูดวันนี้',
            browsers:'เบราว์เซอร์',times:'ครั้ง',questions:'ข้อ',languages:'ภาษาที่เลือกเรียน · วันนี้',devices:'อุปกรณ์ · วันนี้',history:'7 วันที่ผ่านมา · เวลาเกาหลี',date:'วันที่',visitors:'ผู้เข้าชม',views:'เปิดหน้า',answers:'ตอบคำถาม',
            started:'เริ่มการเก็บสถิติใหม่',updated:'อัปเดต',note:'นับแยกตามเบราว์เซอร์ ไม่ใช่จำนวนคน การเปลี่ยนอุปกรณ์หรือล้างข้อมูลอาจถูกนับอีก ภาษาแสดงตัวเลือกล่าสุดของเบราว์เซอร์ที่เข้าวันนี้ ไม่ใช่ภาษาแม่ ไม่นับเจ้าของและบอตที่ตรวจพบ กิจกรรมออฟไลน์หรือที่ถูกบล็อกอาจไม่ถูกบันทึก',
            legacy:'ไม่รวมค่าจากป้ายเดิมหรือข้อมูลเก่าของเบราว์เซอร์นี้ — หมายถึงก่อนเริ่มเก็บข้อมูล',owner:'ไม่นับกิจกรรมของเจ้าของจากเบราว์เซอร์นี้',desktop:'คอมพิวเตอร์',mobile:'มือถือ',tablet:'แท็บเล็ต'}
    };
    const detailCopy={
        en:{starts:'Learning starts today',completions:'Quizzes completed today',pages:'By page · last 7 days (Korea time)',page:'Page',pageVisitors:'Browsers',pageViews:'Views',pageStarts:'Starts',pageCompletions:'Completed',detailStarted:'Page and completion tracking started',legacyPage:'Earlier events · page unknown',detailNote:'Starts count the first learning interaction per page view. A completed app quiz is one submitted question; a completed lesson quiz is all three questions submitted. Rechecking does not add a completion. Page totals cover the last 7 Korea-time days; browsers across pages are not additive. Earlier events have no page or completion data.',emptyPages:'No page events recorded in this period.'},
        ja:{starts:'今日の学習開始',completions:'今日完了したクイズ',pages:'ページ別・過去7日間（韓国時間）',page:'ページ',pageVisitors:'ブラウザー',pageViews:'閲覧',pageStarts:'開始',pageCompletions:'完了',detailStarted:'ページ別・完了の計測開始',legacyPage:'以前の記録・ページ不明',detailNote:'開始はページ閲覧ごとの最初の学習操作です。アプリは1問の回答、記事は3問すべての送信をクイズ完了とします。再確認は加算しません。集計は韓国時間の過去7日間で、ページ間のブラウザー数は合算できません。以前の記録にページや完了情報はありません。',emptyPages:'この期間の記録はありません。'},
        zh:{starts:'今日开始学习',completions:'今日完成测验',pages:'按页面・最近7天（韩国时间）',page:'页面',pageVisitors:'浏览器',pageViews:'浏览',pageStarts:'开始',pageCompletions:'完成',detailStarted:'页面与完成统计开始于',legacyPage:'早期记录・页面未知',detailNote:'开始指每次页面浏览中的首次学习操作。应用提交1题算完成一次，文章需提交全部3题。重复检查不累加。按韩国时间统计最近7天，各页面浏览器数不可直接相加。早期记录没有页面或完成信息。',emptyPages:'此期间暂无页面记录。'},
        es:{starts:'Aprendizajes iniciados hoy',completions:'Cuestionarios completados hoy',pages:'Por página · últimos 7 días (hora de Corea)',page:'Página',pageVisitors:'Navegadores',pageViews:'Vistas',pageStarts:'Inicios',pageCompletions:'Completados',detailStarted:'Inicio de medición por página y finalización',legacyPage:'Eventos anteriores · página desconocida',detailNote:'Un inicio es la primera interacción de aprendizaje por vista. En la app, una pregunta enviada completa un ejercicio; en las lecciones, hay que enviar las tres. Repetir la corrección no suma. Se muestran 7 días de Corea; no se pueden sumar navegadores entre páginas. Los eventos anteriores no tienen datos de página o finalización.',emptyPages:'No hay eventos de páginas en este periodo.'},
        th:{starts:'เริ่มเรียนวันนี้',completions:'ทำแบบทดสอบเสร็จวันนี้',pages:'แยกตามหน้า · 7 วันที่ผ่านมา (เวลาเกาหลี)',page:'หน้า',pageVisitors:'เบราว์เซอร์',pageViews:'เปิดหน้า',pageStarts:'เริ่ม',pageCompletions:'เสร็จ',detailStarted:'เริ่มวัดรายหน้าและการทำเสร็จ',legacyPage:'ข้อมูลเก่า · ไม่ทราบหน้า',detailNote:'การเริ่มนับจากการใช้งานบทเรียนครั้งแรกต่อการเปิดหน้า แอปส่งคำตอบ 1 ข้อถือว่าเสร็จ บทความต้องส่งครบ 3 ข้อ การตรวจซ้ำไม่นับเพิ่ม แสดง 7 วันตามเวลาเกาหลี ห้ามบวกจำนวนเบราว์เซอร์ข้ามหน้า ข้อมูลเก่าไม่มีหน้าหรือสถานะเสร็จ',emptyPages:'ยังไม่มีข้อมูลรายหน้าในช่วงนี้'}
    };
    Object.keys(copy).forEach(lang=>Object.assign(copy[lang],detailCopy[lang]));
    const t=()=>copy[typeof currentLang==='string'?currentLang:'en']||copy.en;
    const idPattern=/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
    let initialized=false,visited=false,visitor=null,queue=[],flushing=false,retryTimer=null,lastDay='',lastData=null,loadGeneration=0,ownerRequest=null,activePage='',learningStarted=false;
    const day=()=>new Date(Date.now()+9*3600000).toISOString().slice(0,10);
    function isOwner(){try{return localStorage.getItem('kTalkAnalyticsOwner')==='1'||Boolean(window.KTalkFeedback?.hasSession())||JSON.parse(sessionStorage.getItem('kTalkFeedbackSession')||'null')?.expires_at>Date.now();}catch{return true;}}
    function allowed(){try{return localStorage.getItem('kTalkAnalyticsOptOut')!=='1'&&navigator.doNotTrack!=='1'&&window.doNotTrack!=='1'&&navigator.globalPrivacyControl!==true;}catch{return false;}}
    const tabs=['hangul','quiz','realkorean','flashcard','voca','review','stats'];
    function pageId(){
        const path=location.pathname.replace(/index\.html$/,'');
        if(path!=='/')return path.endsWith('/')?path:path+'/';
        const hash=location.hash.slice(1);
        let saved='';try{saved=localStorage.getItem('kTalkActiveTab');}catch{}
        return '/#'+(tabs.includes(hash)?hash:tabs.includes(saved)?saved:'quiz');
    }
    function startLearning(){if(learningStarted)return;learningStarted=true;event('learning_start');}
    function navigate(tab){
        const next='/#'+tab;if(!tabs.includes(tab)||next===activePage)return;
        activePage=next;learningStarted=false;event('page_view');
    }
    function getVisitor(){
        if(visitor)return visitor;
        try{
            const saved=localStorage.getItem('kTalkAnalyticsVisitor');
            visitor=idPattern.test(saved||'')?saved:crypto.randomUUID();
            localStorage.setItem('kTalkAnalyticsVisitor',visitor);
            return visitor;
        }catch{return null;}
    }
    function device(){
        const ua=navigator.userAgent;
        return /iPad|Tablet/i.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)?'tablet':/Mobi|Android|iPhone/i.test(ua)?'mobile':'desktop';
    }
    function event(type){
        if(!window.KTALK_FEEDBACK_API||!allowed()||isOwner()||location.hash==='#admin'||!getVisitor())return;
        if(!activePage)activePage=pageId();
        if(type==='learning_start')learningStarted=true;
        if(type==='quiz_answer'||type==='quiz_complete'||type==='speech_practice')startLearning();
        lastDay=day();
        if(queue.length>=100)queue.shift();
        queue.push({at:Date.now(),attempts:0,data:{visitor_id:visitor,event_id:crypto.randomUUID(),type,language:currentLang,device:device(),page_path:activePage}});
        flush();
    }
    async function flush(){
        if(!allowed()||isOwner()){discard();return;}
        if(flushing||!navigator.onLine)return;
        flushing=true;
        try{
            while(queue.length){
                if(!allowed()||isOwner()){discard();break;}
                const pending=queue[0];
                if(Date.now()-pending.at>600000||pending.attempts>=3){queue.shift();continue;}
                const controller=new AbortController();
                const timer=setTimeout(()=>controller.abort(),8000);
                try{
                    const response=await fetch(`${String(window.KTALK_FEEDBACK_API).replace(/\/$/,'')}/analytics/events`,{
                        method:'POST',credentials:'omit',cache:'no-store',keepalive:true,signal:controller.signal,
                        headers:{'Content-Type':'application/json'},body:JSON.stringify(pending.data)
                    });
                    if(response.ok||(response.status>=400&&response.status<500&&response.status!==429)){queue.shift();continue;}
                    throw Error('retry');
                }catch{
                    pending.attempts++;
                    clearTimeout(retryTimer);retryTimer=setTimeout(flush,Math.min(30000,1000*2**pending.attempts));
                    break;
                }finally{clearTimeout(timer);}
            }
        }finally{flushing=false;}
    }
    function trackVisit(){if(visited)return;visited=true;activePage=pageId();event('page_view');}
    function discard(){queue=[];clearTimeout(retryTimer);}
    async function excludeOwner(){
        try{localStorage.setItem('kTalkAnalyticsOwner','1');}catch{ /* No identity means no collection. */ }
        discard();
        const id=getVisitor();
        if(!id||!KTalkFeedback.hasSession())return;
        if(!ownerRequest)ownerRequest=KTalkFeedback.adminRequest('/admin/analytics/exclude',{method:'POST',data:{visitor_id:id}}).finally(()=>{ownerRequest=null;});
        await ownerRequest;
    }
    const el=(tag,value,classes)=>{const n=document.createElement(tag);if(value!==undefined)n.textContent=value;if(classes)n.className=classes;return n;};
    const timestamp=value=>new Intl.DateTimeFormat(currentLang,{timeZone:'Asia/Seoul',dateStyle:'medium',timeStyle:'short'}).format(new Date(value));
    function shell(){
        const root=document.getElementById('analytics-admin-panel');if(!root)return;
        root.dataset.noLocalize='';
        root.innerHTML=`<div class="space-y-3">
            <h3 data-an="title" class="font-black text-emerald-200 text-sm"></h3>
            <p id="analytics-status" role="status" aria-live="polite" class="text-xs text-amber-200"></p>
            <div id="analytics-content" class="space-y-3 hidden">
                <div id="analytics-kpis" class="grid grid-cols-2 gap-2"></div>
                <div class="rounded-xl bg-slate-950 border border-slate-700 p-3 space-y-2"><h4 data-an="languages" class="font-bold text-sm"></h4><div id="analytics-languages" class="space-y-2"></div></div>
                <div class="rounded-xl bg-slate-950 border border-slate-700 p-3 space-y-2"><h4 data-an="devices" class="font-bold text-sm"></h4><div id="analytics-devices" class="space-y-2"></div></div>
                <div class="rounded-xl bg-slate-950 border border-slate-700 p-3 space-y-2"><h4 data-an="history" class="font-bold text-sm"></h4><div class="overflow-x-auto"><table class="w-full text-xs"><thead><tr id="analytics-history-head"></tr></thead><tbody id="analytics-history"></tbody></table></div></div>
                <div class="rounded-xl bg-slate-950 border border-slate-700 p-3 space-y-2 min-w-0"><h4 data-an="pages" class="font-bold text-sm"></h4><p id="analytics-page-period" class="text-xs text-slate-400"></p><div class="overflow-x-auto" tabindex="0" role="region" aria-label="Page statistics"><table class="w-full text-xs"><thead><tr id="analytics-pages-head"></tr></thead><tbody id="analytics-pages"></tbody></table></div><p id="analytics-pages-empty" class="text-xs text-slate-400"></p><p id="analytics-detail-started" class="text-xs text-amber-200"></p><p data-an="detailNote" class="text-xs text-slate-400 leading-relaxed"></p></div>
                <p id="analytics-started" class="text-xs text-amber-200"></p><p id="analytics-updated" class="text-xs text-slate-400"></p>
                <p data-an="owner" class="text-xs text-slate-400"></p><p data-an="note" class="text-xs text-slate-400 leading-relaxed"></p><p data-an="legacy" class="text-xs text-slate-400 leading-relaxed"></p>
            </div></div>`;
        localize();
    }
    function localize(){
        document.querySelectorAll('[data-an]').forEach(n=>{n.textContent=t()[n.dataset.an];});
        if(lastData)render(lastData);
    }
    function render(data){
        const root=document.getElementById('analytics-content');if(!root)return;
        root.classList.remove('hidden');
        const kpis=document.getElementById('analytics-kpis');kpis.replaceChildren();
        const formatter=new Intl.NumberFormat(currentLang);
        [['todayVisitors','today_visitors','browsers'],['totalVisitors','total_visitors','browsers'],['todayViews','today_pageviews','times'],['totalViews','total_pageviews','times'],['quizzes','today_quizzes','questions'],['speech','today_speech','times'],['starts','today_learning_starts','times'],['completions','today_quiz_completions','times']].forEach(([label,key,unit])=>{
            const box=el('div',undefined,'rounded-xl border border-slate-700 bg-slate-950 p-3 space-y-1');
            box.append(el('p',t()[label],'text-xs text-slate-300'));
            const value=el('p',formatter.format(data[key]),'text-2xl font-black text-emerald-300');value.dataset.metric=key;
            box.append(value,el('p',t()[unit],'text-xs text-slate-400'));kpis.append(box);
        });
        const fill=(id,entries)=>{
            const box=document.getElementById(id);box.replaceChildren();
            entries.forEach(([key,label,count])=>{
                const percent=data.today_visitors?Math.round(count/data.today_visitors*1000)/10:0;
                const line=el('div',undefined,'space-y-1');
                const text=el('p',`${label}: ${formatter.format(count)} · ${formatter.format(percent)}%`,'text-xs text-slate-300');text.dataset.group=key;
                const bar=el('div',undefined,'h-1.5 rounded-full bg-slate-800 overflow-hidden');const amount=el('div',undefined,'h-full bg-rose-400');amount.style.width=percent+'%';bar.append(amount);line.append(text,bar);box.append(line);
            });
        };
        fill('analytics-languages',[['en','English'],['ja','日本語'],['zh','中文'],['es','Español'],['th','ไทย']].map(([key,label])=>[key,label,data.languages[key]]));
        fill('analytics-devices',['desktop','mobile','tablet'].map(key=>[key,t()[key],data.devices[key]]));
        const head=document.getElementById('analytics-history-head');head.replaceChildren();
        ['date','visitors','views','answers'].forEach(key=>head.append(el('th',t()[key],'py-2 pr-2 text-left text-slate-400 whitespace-nowrap')));
        const rows=document.getElementById('analytics-history');rows.replaceChildren();
        data.history.forEach(row=>{
            const tr=el('tr',undefined,'border-t border-slate-800');
            [row.day,...['visitors','pageviews','quizzes'].map(key=>row.collecting?formatter.format(row[key]):'—')].forEach(value=>tr.append(el('td',String(value),'py-2 pr-2 text-slate-200 whitespace-nowrap')));
            rows.append(tr);
        });
        document.getElementById('analytics-started').textContent=`${t().started}: ${timestamp(data.started_at)} (KST)`;
        document.getElementById('analytics-updated').textContent=`${t().updated}: ${timestamp(data.updated_at)} (KST)`;
        const pageHead=document.getElementById('analytics-pages-head');pageHead.replaceChildren();
        ['page','pageVisitors','pageViews','pageStarts','pageCompletions'].forEach(key=>pageHead.append(el('th',t()[key],'py-2 pr-3 text-left text-slate-400 whitespace-nowrap')));
        const pageRows=document.getElementById('analytics-pages');pageRows.replaceChildren();
        (data.pages||[]).forEach(row=>{
            const tr=el('tr',undefined,'border-t border-slate-800');
            const name=el('td',undefined,'py-2 pr-3 text-slate-200');
            if(row.page_path==='/legacy/')name.textContent=t().legacyPage;
            else{const a=el('a',row.page_path,'text-rose-300 underline');a.href=row.page_path;name.append(a);}
            tr.append(name);
            ['visitors','pageviews','learning_starts','quiz_completions'].forEach(key=>tr.append(el('td',formatter.format(row[key]),'py-2 pr-3 text-slate-200 whitespace-nowrap')));
            pageRows.append(tr);
        });
        document.getElementById('analytics-pages-empty').textContent=data.pages?.length?'':t().emptyPages;
        document.getElementById('analytics-page-period').textContent=data.page_period?`${data.page_period.from} → ${data.page_period.to} (KST)`:'';
        document.getElementById('analytics-detail-started').textContent=data.detail_started_at?`${t().detailStarted}: ${timestamp(data.detail_started_at)} (KST)`:'';
    }
    async function loadDashboard(){
        const root=document.getElementById('analytics-admin-panel');if(!root)return;
        const generation=++loadGeneration;
        document.getElementById('analytics-status').textContent=t().loading;
        document.getElementById('analytics-content').classList.add('hidden');
        try{
            await excludeOwner();
            const data=await KTalkFeedback.adminRequest('/admin/analytics',{method:'POST',data:{}});
            if(generation!==loadGeneration)return;
            lastData=data;render(data);document.getElementById('analytics-status').textContent='';
        }catch{
            if(generation!==loadGeneration)return;
            lastData=null;document.getElementById('analytics-status').textContent=t().error;
        }
    }
    function clearDashboard(){
        loadGeneration++;lastData=null;
        const root=document.getElementById('analytics-admin-panel');if(root)shell();
    }
    function init(){
        if(initialized)return;initialized=true;shell();
        if(window.KTalkFeedback?.hasSession())excludeOwner().catch(()=>{});
        trackVisit();
        document.addEventListener('click',e=>{if(e.target.closest('button,a,input')&&e.target.closest('#section-hangul,#section-quiz,#section-realkorean,#section-flashcard,#section-voca,#section-review,#learning-coach'))startLearning();},{capture:true});
        document.addEventListener('input',e=>{if(e.target.closest('#section-quiz,#section-realkorean'))startLearning();},{capture:true});
        window.addEventListener('online',flush);
        document.addEventListener('visibilitychange',()=>{if(!document.hidden&&day()!==lastDay)event('visit');});
    }
    window.KTalkAnalytics={init,trackVisit,event,startLearning,navigate,discard,excludeOwner,loadDashboard,localize,clearDashboard,copy};
    document.addEventListener('DOMContentLoaded',init,{once:true});
})();
