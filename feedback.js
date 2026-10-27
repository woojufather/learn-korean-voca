(() => {
    'use strict';
    const translations = {
        en: {
            open:'Send feedback', title:'Help us improve K-Talk', category:'What is this about?', translation:'Translation', audio:'Pronunciation / audio', bug:'Something is not working', idea:'Feature suggestion',
            message:'Your feedback', messageHint:'Describe what happened or what would help you (10–3,000 characters).', email:'Email for a reply (optional)', include:'Include this learning screen and device information',
            privacy:'Your feedback is visible only to the site owner. Your email is optional and is used only to follow up on this feedback.', send:'Send feedback', cancel:'Close', sending:'Sending…', success:'Thank you! Your feedback has been received.',
            invalid:'Enter 10–3,000 characters and check your email address.', offline:'You are offline. Your message is still here; reconnect and try again.', unavailable:'Could not send. Your message is still here; please try again.', rate:'Too many attempts. Please try again in 10 minutes.',
            password:'Administrator password', auth:'Sign in with the private administrator password.', loginError:'The password is incorrect or your session has expired.', inbox:'Learner feedback', refresh:'Refresh', all:'All', new:'New', reviewing:'Reviewing', resolved:'Resolved',
            empty:'No feedback in this view.', loading:'Loading…', previous:'Previous', next:'Next', saved:'Status saved.', failed:'Could not load or save feedback. Please try again.', context:'Learning context', noContext:'Screen information not attached', count:'Total', receipt:'Reference', device:'Device', screen:'Screen'
        },
        ja: {
            open:'意見を送る', title:'K-Talkへのご意見', category:'内容の種類', translation:'翻訳について', audio:'発音・音声について', bug:'動作の不具合', idea:'機能の提案',
            message:'ご意見', messageHint:'起きたことや改善のご希望を入力してください（10～3,000文字）。', email:'返信用メール（任意）', include:'現在の学習画面と端末の情報を添付する',
            privacy:'ご意見はサイト管理者だけが閲覧できます。メールは任意で、このご意見への返信にのみ使用します。', send:'送信する', cancel:'閉じる', sending:'送信中…', success:'ありがとうございます。ご意見を受け付けました。',
            invalid:'10～3,000文字で入力し、メールアドレスをご確認ください。', offline:'オフラインです。入力内容は残っています。接続後に再送してください。', unavailable:'送信できませんでした。入力内容は残っています。もう一度お試しください。', rate:'試行回数が多すぎます。10分後にお試しください。',
            password:'管理者パスワード', auth:'非公開の管理者パスワードでログインしてください。', loginError:'パスワードが違うか、セッションの有効期限が切れています。', inbox:'学習者からのご意見', refresh:'更新', all:'すべて', new:'新着', reviewing:'確認中', resolved:'解決済み',
            empty:'この一覧にはご意見がありません。', loading:'読み込み中…', previous:'前へ', next:'次へ', saved:'状態を保存しました。', failed:'読み込みまたは保存ができません。もう一度お試しください。', context:'学習状況', noContext:'画面情報の添付なし', count:'合計', receipt:'受付番号', device:'端末', screen:'画面'
        },
        zh: {
            open:'发送反馈', title:'帮助改进K-Talk', category:'反馈类型', translation:'翻译问题', audio:'发音／音频问题', bug:'使用故障', idea:'功能建议',
            message:'反馈内容', messageHint:'请描述遇到的问题或改进建议（10—3,000字）。', email:'回复邮箱（选填）', include:'附上当前学习页面和设备信息',
            privacy:'反馈仅网站管理员可见。邮箱为选填，仅用于跟进这条反馈。', send:'提交反馈', cancel:'关闭', sending:'正在发送…', success:'谢谢！您的反馈已收到。',
            invalid:'请输入10—3,000字，并检查邮箱格式。', offline:'当前离线，输入内容仍保留，请联网后重试。', unavailable:'发送失败，输入内容仍保留，请重试。', rate:'尝试过于频繁，请10分钟后重试。',
            password:'管理员密码', auth:'请使用私密的管理员密码登录。', loginError:'密码不正确，或登录状态已过期。', inbox:'学习者反馈', refresh:'刷新', all:'全部', new:'新反馈', reviewing:'处理中', resolved:'已解决',
            empty:'当前分类没有反馈。', loading:'正在加载…', previous:'上一页', next:'下一页', saved:'状态已保存。', failed:'无法加载或保存反馈，请重试。', context:'学习信息', noContext:'未附上页面信息', count:'总计', receipt:'反馈编号', device:'设备', screen:'页面'
        },
        es: {
            open:'Enviar opinión', title:'Ayúdanos a mejorar K-Talk', category:'Tipo de comentario', translation:'Traducción', audio:'Pronunciación / audio', bug:'Fallo de funcionamiento', idea:'Propuesta de función',
            message:'Tu comentario', messageHint:'Describe lo ocurrido o tu propuesta (10–3.000 caracteres).', email:'Correo para respuesta (opcional)', include:'Adjuntar esta pantalla y datos del dispositivo',
            privacy:'Solo el propietario puede ver tu comentario. El correo es opcional y se usa únicamente para dar seguimiento a este comentario.', send:'Enviar comentario', cancel:'Cerrar', sending:'Enviando…', success:'¡Gracias! Hemos recibido tu comentario.',
            invalid:'Escribe entre 10 y 3.000 caracteres y revisa el correo.', offline:'No tienes conexión. Tu texto sigue aquí; vuelve a intentarlo al conectarte.', unavailable:'No se pudo enviar. Tu texto sigue aquí; inténtalo otra vez.', rate:'Demasiados intentos. Vuelve a intentarlo en 10 minutos.',
            password:'Contraseña de administrador', auth:'Accede con la contraseña privada de administrador.', loginError:'Contraseña incorrecta o sesión caducada.', inbox:'Opiniones de estudiantes', refresh:'Actualizar', all:'Todas', new:'Nuevas', reviewing:'En revisión', resolved:'Resueltas',
            empty:'No hay comentarios en esta vista.', loading:'Cargando…', previous:'Anterior', next:'Siguiente', saved:'Estado guardado.', failed:'No se pudo cargar o guardar. Inténtalo de nuevo.', context:'Contexto de aprendizaje', noContext:'Sin datos de pantalla adjuntos', count:'Total', receipt:'Referencia', device:'Dispositivo', screen:'Pantalla'
        },
        th: {
            open:'ส่งความคิดเห็น', title:'ช่วยปรับปรุง K-Talk', category:'ประเภทความคิดเห็น', translation:'ปัญหาคำแปล', audio:'การออกเสียง / เสียง', bug:'การใช้งานขัดข้อง', idea:'เสนอฟังก์ชัน',
            message:'ความคิดเห็นของคุณ', messageHint:'อธิบายปัญหาหรือสิ่งที่อยากให้ปรับปรุง (10–3,000 ตัวอักษร)', email:'อีเมลสำหรับตอบกลับ (ไม่บังคับ)', include:'แนบหน้าที่เรียนอยู่และข้อมูลอุปกรณ์',
            privacy:'เฉพาะเจ้าของเว็บไซต์เท่านั้นที่อ่านได้ อีเมลไม่บังคับและใช้เพื่อติดตามความคิดเห็นนี้เท่านั้น', send:'ส่งความคิดเห็น', cancel:'ปิด', sending:'กำลังส่ง…', success:'ขอบคุณ ได้รับความคิดเห็นแล้ว',
            invalid:'กรอก 10–3,000 ตัวอักษรและตรวจสอบอีเมล', offline:'ออฟไลน์อยู่ ข้อความยังอยู่ที่นี่ เชื่อมต่อแล้วลองอีกครั้ง', unavailable:'ส่งไม่ได้ ข้อความยังอยู่ที่นี่ กรุณาลองอีกครั้ง', rate:'ลองบ่อยเกินไป กรุณารอ 10 นาที',
            password:'รหัสผ่านผู้ดูแล', auth:'เข้าสู่ระบบด้วยรหัสผ่านผู้ดูแลแบบส่วนตัว', loginError:'รหัสผ่านไม่ถูกต้องหรือเซสชันหมดอายุ', inbox:'ความคิดเห็นจากผู้เรียน', refresh:'รีเฟรช', all:'ทั้งหมด', new:'ใหม่', reviewing:'กำลังตรวจสอบ', resolved:'แก้ไขแล้ว',
            empty:'ไม่มีความคิดเห็นในรายการนี้', loading:'กำลังโหลด…', previous:'ก่อนหน้า', next:'ถัดไป', saved:'บันทึกสถานะแล้ว', failed:'โหลดหรือบันทึกไม่ได้ กรุณาลองอีกครั้ง', context:'บริบทการเรียน', noContext:'ไม่ได้แนบข้อมูลหน้าจอ', count:'รวม', receipt:'เลขอ้างอิง', device:'อุปกรณ์', screen:'หน้า'
        }
    };
    const t = () => translations[typeof currentLang === 'string' ? currentLang : 'en'] || translations.en;
    const endpoint = () => String(window.KTALK_FEEDBACK_API || '').replace(/\/$/, '');
    let session = null, draftContext = {}, lastPayload = '', requestId = '', sending = false;
    let filter = 'all', offset = 0, adminGeneration = 0, lastList = null;
    try {
        const saved = JSON.parse(sessionStorage.getItem('kTalkFeedbackSession') || 'null');
        if (saved?.expires_at > Date.now() && /^[a-f0-9]{64}$/.test(saved.token)) session = saved;
    } catch { /* Invalid saved sessions never grant access. */ }
    const hasSession = () => Boolean(session && session.expires_at > Date.now());
    function clearSession() {
        session = null;
        sessionStorage.removeItem('kTalkFeedbackSession');
        adminGeneration++;
        lastList = null;
        document.getElementById('feedback-admin-list')?.replaceChildren();
    }
    async function api(path, { method = 'GET', data, token } = {}) {
        if (!endpoint()) throw Object.assign(new Error('unavailable'), { code:'unavailable' });
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 15000);
        try {
            const response = await fetch(`${endpoint()}${path}`, {
                method, credentials:'omit', cache:'no-store', signal:controller.signal,
                headers:{ ...(data ? { 'Content-Type':'application/json' } : {}), ...(token ? { Authorization:`Bearer ${token}` } : {}) },
                ...(data ? { body:JSON.stringify(data) } : {})
            });
            const result = await response.json();
            if (!response.ok) throw Object.assign(new Error(result.error || 'unavailable'), { code:result.error, status:response.status });
            return result;
        } finally { clearTimeout(timer); }
    }
    function messageFor(error, admin = false) {
        if (error.code === 'rate_limited') return t().rate;
        if (error.code === 'invalid_request' || error.code === 'too_large') return t().invalid;
        if (error.code === 'unauthorized') return t().loginError;
        if (!navigator.onLine) return t().offline;
        return admin ? t().failed : t().unavailable;
    }
    function context() {
        const tab = localStorage.getItem('kTalkActiveTab') || 'quiz';
        let phrase = '';
        if (tab === 'realkorean' && typeof rkCurrentList !== 'undefined') {
            const card = rkCurrentList[rkCurrentIdx];
            phrase = card?.target || card?.haeyoche?.split('/')[0] || '';
        } else if (['quiz','flashcard'].includes(tab) && typeof getActiveQuizList === 'function') {
            const list = getActiveQuizList();
            const item = list[tab === 'flashcard' ? flashcardIdx : quizIdx];
            phrase = item?.sentence?.replace(/[\[\]]/g,'') || '';
        } else if (tab === 'hangul' && typeof composeCurrentHangul === 'function') phrase = composeCurrentHangul();
        const ua = navigator.userAgent;
        return {
            tab, phrase:phrase.slice(0,300),
            device:/iPad|Tablet/i.test(ua) ? 'tablet' : /Mobi|Android|iPhone/i.test(ua) ? 'mobile' : 'desktop',
            browser:/Edg\//.test(ua) ? 'Edge' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Other'
        };
    }
    const tabName = key => {
        const dictionary = typeof i18n !== 'undefined' ? i18n[currentLang] || i18n.en : {};
        return dictionary[({hangul:'navHangul',quiz:'navQuiz',realkorean:'navRealKorean',flashcard:'navFc',voca:'navVoca',review:'navReview',stats:'navStreak'})[key]] || key;
    };
    function contextLabel(value) {
        if (!value?.tab) return t().noContext;
        return `${t().screen}: ${tabName(value.tab)}${value.phrase ? ` · “${value.phrase}”` : ''}\n${t().device}: ${value.device || ''} · ${value.browser || ''}`;
    }
    function localize() {
        document.querySelectorAll('[data-fb]').forEach(el => { el.textContent = t()[el.dataset.fb]; });
        const message = document.getElementById('feedback-message');
        if (message) message.placeholder = t().messageHint;
        const preview = document.getElementById('feedback-context');
        if (preview) preview.textContent = contextLabel(draftContext);
        const pin = document.getElementById('admin-pin-input');
        if (pin) { pin.placeholder = t().password; pin.maxLength = 128; pin.autocomplete = 'current-password'; }
        const explanation = document.getElementById('feedback-admin-auth-note');
        if (explanation) explanation.textContent = t().auth;
        if (lastList) displayInbox(lastList);
    }
    function open() {
        draftContext = context();
        localize();
        if (!document.getElementById('feedback-message').value.trim()) document.getElementById('feedback-result').textContent = '';
        const dialog = document.getElementById('feedback-dialog');
        dialog.showModal();
        document.getElementById('feedback-message').focus();
    }
    function close() {
        if (sending) return;
        document.getElementById('feedback-dialog').close();
        document.getElementById('feedback-open').focus();
    }
    async function submit(event) {
        event.preventDefault();
        if (sending) return;
        const form = document.getElementById('feedback-form');
        const status = document.getElementById('feedback-result');
        const message = document.getElementById('feedback-message').value.trim();
        if (!form.reportValidity() || message.length < 10) { status.textContent = t().invalid; return; }
        const data = {
            category:document.getElementById('feedback-category').value, message,
            email:document.getElementById('feedback-email').value.trim(), language:currentLang,
            context:document.getElementById('feedback-include-context').checked ? draftContext : {},
            website:document.getElementById('feedback-website').value
        };
        const payload = JSON.stringify(data);
        if (payload !== lastPayload) { requestId = crypto.randomUUID(); lastPayload = payload; }
        data.request_id = requestId;
        sending = true;
        form.querySelectorAll('input,textarea,select,button').forEach(el => { el.disabled = true; });
        document.getElementById('feedback-close').disabled = true;
        status.textContent = t().sending;
        try {
            if (!navigator.onLine) throw new Error('offline');
            const result = await api('/feedback', {method:'POST',data});
            form.reset();
            document.getElementById('feedback-count').textContent = '0 / 3000';
            lastPayload = ''; requestId = '';
            status.textContent = `${t().success} ${t().receipt}: ${result.id.slice(0,8)}`;
        } catch (error) { status.textContent = messageFor(error); }
        finally {
            sending = false;
            form.querySelectorAll('input,textarea,select,button').forEach(el => { el.disabled = false; });
            document.getElementById('feedback-close').disabled = false;
        }
    }
    async function signIn(password) {
        const result = await api('/admin/login', {method:'POST',data:{password}});
        session = result;
        sessionStorage.setItem('kTalkFeedbackSession', JSON.stringify(session));
        return true;
    }
    async function logout() {
        const oldToken = session?.token;
        clearSession();
        if (oldToken) { try { await api('/admin/logout',{method:'POST',token:oldToken,data:{}}); } catch { /* Local session still closes immediately. */ } }
    }
    function node(tag, value, className) {
        const el = document.createElement(tag);
        if (value !== undefined) el.textContent = value;
        if (className) el.className = className;
        return el;
    }
    function displayInbox(result) {
        const list = document.getElementById('feedback-admin-list');
        list.replaceChildren();
        document.getElementById('feedback-admin-total').textContent = `${t().count}: ${result.total}`;
        document.getElementById('feedback-admin-count').textContent = String(result.counts.find(c=>c.status==='new')?.count || 0);
        if (!result.items.length) list.append(node('p',t().empty,'text-sm text-slate-400 py-4'));
        result.items.forEach(item => {
            const card = node('article',undefined,'rounded-xl border border-slate-600 p-3 space-y-2 break-words');
            const date = new Intl.DateTimeFormat(currentLang,{dateStyle:'short',timeStyle:'short'}).format(new Date(item.created_at));
            card.append(node('p',`${t()[item.category]} · ${date} · ${item.language.toUpperCase()}`,'text-xs text-amber-200'));
            card.append(node('p',item.message,'text-sm text-white whitespace-pre-wrap break-words'));
            if (item.email) card.append(node('p',item.email,'text-xs text-slate-300 break-all'));
            card.append(node('p',contextLabel(item.context),'text-xs text-slate-400 whitespace-pre-wrap'));
            const label = node('label',undefined,'flex gap-2 items-center text-xs');
        label.append(node('span',({en:'Status',ja:'対応状況',zh:'处理状态',es:'Estado',th:'สถานะ'})[currentLang]));
            const select = node('select',undefined,'bg-slate-800 rounded-lg p-2 border border-slate-600');
            select.setAttribute('aria-label',`${t().inbox} ${item.id.slice(0,8)}`);
            ['new','reviewing','resolved'].forEach(value=>select.add(new Option(t()[value],value)));
            select.value = item.status;
            select.onchange = async () => {
                const previous = item.status, next = select.value;
                select.disabled = true;
                try {
                    await api(`/admin/feedback/${item.id}`,{method:'PATCH',token:session?.token,data:{status:next}});
                    item.status = next;
                    document.getElementById('feedback-admin-result').textContent = t().saved;
                    await loadInbox();
                } catch(error) {
                    select.value = previous;
                    document.getElementById('feedback-admin-result').textContent = messageFor(error,true);
                    if(error.status===401) requireLogin();
                } finally { select.disabled = false; }
            };
            label.append(select); card.append(label); list.append(card);
        });
        document.getElementById('feedback-admin-previous').disabled = offset === 0;
        document.getElementById('feedback-admin-next').disabled = offset + 25 >= result.total;
    }
    function requireLogin() {
        clearSession();
        if (typeof isAdminAuthenticated !== 'undefined') isAdminAuthenticated = false;
        document.getElementById('admin-dashboard-view').classList.add('hidden');
        document.getElementById('admin-login-view').classList.remove('hidden');
        document.getElementById('admin-pin-error').textContent = t().loginError;
        document.getElementById('admin-pin-error').classList.remove('hidden');
    }
    async function loadInbox() {
        if (!hasSession()) { requireLogin(); return; }
        const token = ++adminGeneration;
        const status = document.getElementById('feedback-admin-result');
        status.textContent = t().loading;
        try {
            // POST also bypasses older installed service workers that cache all GETs.
            const result = await api('/admin/feedback',{method:'POST',data:{status:filter,offset},token:session.token});
            if (token !== adminGeneration) return;
            if (offset > 0 && !result.items.length) { offset = Math.max(0,offset-25); await loadInbox(); return; }
            lastList = result; displayInbox(result); status.textContent = '';
        } catch(error) {
            if(token !== adminGeneration) return;
            status.textContent = messageFor(error,true);
            if(error.status===401) requireLogin();
        }
    }
    function init() {
        const button = node('button',t().open,'fixed right-4 bottom-24 z-40 bg-slate-800 border border-rose-400 text-rose-200 rounded-full px-4 py-2 text-xs shadow-lg');
        button.id = 'feedback-open'; button.type='button'; button.dataset.fb='open'; button.dataset.noLocalize=''; button.onclick=open;
        document.body.append(button);
        const dialog = node('dialog',undefined,'bg-slate-900 text-white border border-slate-600 rounded-2xl p-5 w-[calc(100%-2rem)] max-w-md max-h-[90vh] overflow-y-auto backdrop:bg-slate-950/80');
        dialog.id='feedback-dialog'; dialog.dataset.noLocalize=''; dialog.setAttribute('aria-labelledby','feedback-title');
        dialog.innerHTML=`<div class="flex justify-between gap-2 items-start mb-4"><h2 id="feedback-title" data-fb="title" class="font-bold text-lg"></h2><button id="feedback-close" type="button" data-fb="cancel" class="text-xs text-slate-300 p-2"></button></div>
            <form id="feedback-form" class="space-y-3">
                <label class="block text-sm"><span data-fb="category"></span><select id="feedback-category" class="block w-full rounded-xl bg-slate-800 border border-slate-600 p-2 mt-1">${['translation','audio','bug','idea'].map(key=>`<option value="${key}" data-fb="${key}"></option>`).join('')}</select></label>
                <label class="block text-sm"><span data-fb="message"></span><textarea id="feedback-message" required minlength="10" maxlength="3000" rows="5" class="block w-full bg-slate-800 border border-slate-600 rounded-xl p-3 mt-1 resize-y"></textarea></label>
                <p id="feedback-count" class="text-xs text-slate-400 text-right">0 / 3000</p>
                <label class="block text-sm"><span data-fb="email"></span><input id="feedback-email" type="email" maxlength="254" autocomplete="email" class="block w-full rounded-xl bg-slate-800 border border-slate-600 p-2 mt-1"></label>
                <div class="hidden" aria-hidden="true"><label>Website<input id="feedback-website" tabindex="-1" autocomplete="off"></label></div>
                <label class="flex gap-2 items-start text-xs"><input id="feedback-include-context" type="checkbox" checked class="mt-1"><span data-fb="include"></span></label>
                <p id="feedback-context" class="rounded-xl bg-slate-950 p-3 whitespace-pre-wrap text-xs text-slate-300 break-words"></p>
                <p data-fb="privacy" class="text-xs text-slate-400 leading-relaxed"></p>
                <button type="submit" data-fb="send" class="w-full bg-rose-600 rounded-xl p-3 font-bold disabled:opacity-50"></button>
            </form><p id="feedback-result" class="text-sm text-amber-200 mt-3" role="status" aria-live="polite"></p>`;
        dialog.addEventListener('cancel',event=>{if(sending)event.preventDefault();});
        document.body.append(dialog);
        document.getElementById('feedback-form').onsubmit=submit;
        document.getElementById('feedback-close').onclick=close;
        document.getElementById('feedback-message').oninput=event=>{document.getElementById('feedback-count').textContent=`${event.target.value.length} / 3000`;};
        const dashboard=document.getElementById('admin-dashboard-view');
        const inbox=node('section',undefined,'rounded-2xl border border-rose-700 bg-slate-950 p-3 space-y-3');
        inbox.id='feedback-admin-inbox';inbox.dataset.noLocalize='';
        inbox.innerHTML=`<div class="flex justify-between gap-2 items-center"><h3 class="font-bold text-rose-200"><span data-fb="inbox"></span> <span id="feedback-admin-count" class="rounded-full px-2 bg-rose-700 text-white">0</span></h3><button id="feedback-admin-refresh" type="button" data-fb="refresh" class="text-xs bg-slate-800 rounded-lg p-2"></button></div>
            <select id="feedback-admin-filter" class="bg-slate-800 border border-slate-600 rounded-xl p-2 w-full text-sm">${['all','new','reviewing','resolved'].map(key=>`<option value="${key}" data-fb="${key}"></option>`).join('')}</select>
            <p id="feedback-admin-total" class="text-xs text-slate-400"></p><p id="feedback-admin-result" role="status" class="text-xs text-amber-200"></p><div id="feedback-admin-list" class="space-y-3"></div>
            <div class="flex justify-between"><button id="feedback-admin-previous" type="button" data-fb="previous" class="bg-slate-800 rounded-lg p-2 text-xs disabled:opacity-40" disabled></button><button id="feedback-admin-next" type="button" data-fb="next" class="bg-slate-800 rounded-lg p-2 text-xs disabled:opacity-40" disabled></button></div>`;
        dashboard.insertBefore(inbox,dashboard.children[1]);
        document.getElementById('feedback-admin-refresh').onclick=loadInbox;
        document.getElementById('feedback-admin-filter').onchange=event=>{filter=event.target.value;offset=0;loadInbox();};
        document.getElementById('feedback-admin-previous').onclick=()=>{offset=Math.max(0,offset-25);loadInbox();};
        document.getElementById('feedback-admin-next').onclick=()=>{offset+=25;loadInbox();};
        const authNote=node('p',undefined,'text-xs text-slate-400');authNote.id='feedback-admin-auth-note';
        document.getElementById('admin-login-view').insertBefore(authNote,document.getElementById('admin-pin-input').parentElement);
        localize();
    }
    window.KTalkFeedback={init,localize,open,hasSession,signIn,logout,loadInbox,messageFor,translations};
})();
