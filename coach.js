/* Korean pronunciation coach. No remote service or API key is required. */
(() => {
    'use strict';
    const copy = {
        en: {
            title: 'Listening & pronunciation coach', voice: 'Korean voice', auto: 'Recommended voice', speed: 'Listening speed',
            repeat: 'Listen & repeat ×3', stop: 'Stop', empty: 'Play a Korean phrase first.', ready: 'Ready to listen.',
            playing: 'Listen', pause: 'Your turn — repeat aloud', done: 'Practice complete', failed: 'Audio could not play. Try another Korean voice and check your connection.',
            missing: 'No Korean voice found. Add a Korean speech voice in your device settings, then reopen this page.',
            unsupported: 'Speech playback is unavailable in this browser.', hint: 'Voice quality and question intonation depend on your device. Try the available Korean voices.',
            roman: 'Show romanization', tipTitle: 'For English speakers',
            tips: 'Keep each Korean vowel steady: 오 is not the English “oh” glide. For 으, keep your lips unrounded. Distinguish ㄱ / ㄲ / ㅋ by tension and breath, not English spelling. Do not add a vowel after a final consonant.',
            intonation: 'Same words, different meaning', statement: 'Statement ↘', question: 'Yes/no question ↗',
            contour: 'A yes/no question often rises gently at the end. A statement usually settles. Not every question rises: questions with who, what or where can fall, depending on context.',
            sounds: 'Hear the contrast', linking: 'Spelling → pronunciation', linkHint: 'Read the whole word smoothly. A final consonant can link to the next vowel; do not pause at each letter.',
            pair: ['You are going. / Are you going?', 'There is some. / Is there any?', 'It is okay. / Is it okay?'],
            contrast: ['ㅓ: open, unrounded / ㅗ: rounded lips', 'ㅡ: unrounded lips / ㅜ: rounded lips', 'Plain / tense / aspirated'],
            rescue: 'Useful when you do not understand', meanings: ['Please speak slowly.', 'Please say that again.', 'What does this mean?'],
            recognition: 'Words recognized — this is not a pronunciation or intonation score.'
        },
        es: {
            title: 'Guía de escucha y pronunciación', voice: 'Voz coreana', auto: 'Voz recomendada', speed: 'Velocidad',
            repeat: 'Escuchar y repetir ×3', stop: 'Detener', empty: 'Primero reproduce una frase en coreano.', ready: 'Listo para escuchar.',
            playing: 'Escucha', pause: 'Tu turno: repite en voz alta', done: 'Práctica terminada', failed: 'No se pudo reproducir el audio. Prueba otra voz coreana y revisa la conexión.',
            missing: 'No hay una voz coreana disponible. Instálala en los ajustes del dispositivo y vuelve a abrir esta página.',
            unsupported: 'Este navegador no permite reproducir voz.', hint: 'La calidad y la entonación dependen del dispositivo. Prueba las voces coreanas disponibles.',
            roman: 'Mostrar romanización', tipTitle: 'Para hablantes de español',
            tips: 'El coreano distingue más vocales que el español: ㅓ y ㅗ no son la misma «o». En ㅡ no redondees los labios. ㄹ no es una erre múltiple. No añadas una vocal después de una consonante final; compara ㄱ / ㄲ / ㅋ por tensión y aire.',
            intonation: 'Mismas palabras, distinto significado', statement: 'Afirmación ↘', question: 'Pregunta de sí/no ↗',
            contour: 'Las preguntas de sí/no suelen subir suavemente al final; las afirmaciones suelen bajar. No todas las preguntas suben: con quién, qué o dónde también pueden bajar según el contexto.',
            sounds: 'Escucha la diferencia', linking: 'Escritura → pronunciación', linkHint: 'Lee la palabra seguida. Una consonante final puede enlazarse con la vocal siguiente; no hagas una pausa entre letras.',
            pair: ['Vas. / ¿Vas?', 'Hay. / ¿Hay?', 'Está bien. / ¿Está bien?'], contrast: ['ㅓ: labios sin redondear / ㅗ: labios redondeados', 'ㅡ: sin redondear / ㅜ: redondeados', 'Simple / tensa / aspirada'],
            rescue: 'Si no entiendes', meanings: ['Hable más despacio, por favor.', 'Repítalo, por favor.', '¿Qué significa esto?'],
            recognition: 'Palabras reconocidas: no es una evaluación de pronunciación ni de entonación.'
        },
        ja: {
            title: '聞き取り・発音コーチ', voice: '韓国語の音声', auto: 'おすすめの音声', speed: '再生速度',
            repeat: '聞いてまねする ×3', stop: '停止', empty: 'まず韓国語のフレーズを再生してください。', ready: '再生できます。',
            playing: '聞いてください', pause: '今度は声に出してまねしましょう', done: '練習完了', failed: '再生できませんでした。別の韓国語音声と通信環境を確認してください。',
            missing: '韓国語音声がありません。端末の設定で追加し、このページを開き直してください。',
            unsupported: 'このブラウザーでは音声再生を利用できません。', hint: '声の自然さや疑問文の抑揚は端末によって異なります。韓国語音声を聞き比べてください。',
            roman: 'ローマ字を表示', tipTitle: '日本語話者のためのヒント',
            tips: 'カタカナは目安です。パッチムの後に母音を足さず、한국を「ハングク」のように一音ずつ区切らないようにしましょう。ㅓとㅗ、ㅡとㅜを聞き分け、平音・濃音・激音を息と喉の緊張で比べましょう。',
            intonation: '同じ言葉でも意味が変わる', statement: '平叙文 ↘', question: 'はい・いいえの疑問文 ↗',
            contour: 'はい・いいえで答える疑問文は語尾が緩やかに上がることが多く、平叙文は落ち着いて下がります。誰・何・どこの疑問文などは、文脈によって下がることもあります。',
            sounds: '音を聞き比べる', linking: '表記 → 発音', linkHint: '単語全体を滑らかに読みましょう。パッチムの後に母音が来ると、次の音節につながることがあります。',
            pair: ['行きます。／行きますか？', 'あります。／ありますか？', '大丈夫です。／大丈夫ですか？'], contrast: ['ㅓ：唇を丸めない／ㅗ：丸める', 'ㅡ：唇を丸めない／ㅜ：丸める', '平音／濃音／激音'],
            rescue: '聞き取れないときの表現', meanings: ['ゆっくり話してください。', 'もう一度言ってください。', 'これはどういう意味ですか？'],
            recognition: '認識された単語の確認です。発音や抑揚の採点ではありません。'
        },
        zh: {
            title: '听力与发音教练', voice: '韩语语音', auto: '推荐语音', speed: '播放速度',
            repeat: '听后跟读 ×3', stop: '停止', empty: '请先播放一句韩语。', ready: '可以开始听了。',
            playing: '请听', pause: '轮到你了——请大声跟读', done: '练习完成', failed: '无法播放。请尝试其他韩语语音并检查网络。',
            missing: '未找到韩语语音。请在设备设置中添加韩语语音，然后重新打开此页面。',
            unsupported: '此浏览器不支持语音播放。', hint: '音质和疑问句语调取决于设备。可以试听不同的韩语语音。',
            roman: '显示罗马字', tipTitle: '给中文母语者的提示',
            tips: '韩语没有普通话那样的词汇声调，不要给每个音节套用四声。ㄱ / ㄲ / ㅋ要区分松紧与送气，不能只分送气和不送气。注意ㅓ / ㅗ、ㅡ / ㅜ，收音后不要添加额外元音。',
            intonation: '词语相同，意思不同', statement: '陈述句 ↘', question: '是非问句 ↗',
            contour: '是非问句的句尾常轻轻上扬，陈述句通常下降收尾。但不是所有问句都上扬：带谁、什么、哪里的问句也可能因语境而下降。',
            sounds: '听辨发音', linking: '书写 → 实际发音', linkHint: '连贯地读整个词。收音遇到后面的元音时可能连到下一音节，不要逐字停顿。',
            pair: ['去。／去吗？', '有。／有吗？', '没关系。／没关系吗？'], contrast: ['ㅓ：不圆唇／ㅗ：圆唇', 'ㅡ：不圆唇／ㅜ：圆唇', '松音／紧音／送气音'],
            rescue: '听不懂时可以这样说', meanings: ['请说慢一点。', '请再说一遍。', '这是什么意思？'],
            recognition: '这里只核对识别到的词语，不评估发音或语调。'
        },
        th: {
            title: 'ฝึกฟังและออกเสียง', voice: 'เสียงภาษาเกาหลี', auto: 'เสียงแนะนำ', speed: 'ความเร็ว',
            repeat: 'ฟังแล้วพูดตาม ×3', stop: 'หยุด', empty: 'กรุณาเปิดฟังประโยคภาษาเกาหลีก่อน', ready: 'พร้อมฟังแล้ว',
            playing: 'ฟัง', pause: 'ตาคุณแล้ว — พูดตามออกเสียง', done: 'ฝึกเสร็จแล้ว', failed: 'เล่นเสียงไม่ได้ ลองเปลี่ยนเสียงภาษาเกาหลีและตรวจสอบอินเทอร์เน็ต',
            missing: 'ไม่พบเสียงภาษาเกาหลี กรุณาเพิ่มเสียงในการตั้งค่าอุปกรณ์ แล้วเปิดหน้านี้ใหม่',
            unsupported: 'เบราว์เซอร์นี้ไม่รองรับการเล่นเสียงพูด', hint: 'คุณภาพเสียงและทำนองคำถามขึ้นอยู่กับอุปกรณ์ ลองฟังเสียงภาษาเกาหลีที่มีให้เลือก',
            roman: 'แสดงอักษรโรมัน', tipTitle: 'คำแนะนำสำหรับผู้ใช้ภาษาไทย',
            tips: 'ภาษาเกาหลีไม่มีวรรณยุกต์ประจำคำแบบภาษาไทย อย่าใส่วรรณยุกต์ให้ทุกพยางค์ แยกเสียง ㄱ / ㄲ / ㅋ ด้วยความเกร็งและลม ฝึก ㅓ / ㅗ และ ㅡ / ㅜ และอย่าเติมสระหลังตัวสะกด',
            intonation: 'คำเหมือนกัน แต่ความหมายต่างกัน', statement: 'ประโยคบอกเล่า ↘', question: 'คำถามใช่หรือไม่ ↗',
            contour: 'คำถามแบบใช่หรือไม่มักยกเสียงท้ายเล็กน้อย ส่วนประโยคบอกเล่ามักลงเสียง แต่คำถามไม่ได้ขึ้นเสียงทุกครั้ง คำถามที่มี ใคร อะไร หรือ ที่ไหน อาจลงเสียงได้ตามบริบท',
            sounds: 'ฟังความแตกต่าง', linking: 'ตัวเขียน → เสียงอ่าน', linkHint: 'อ่านทั้งคำให้ต่อเนื่อง ตัวสะกดอาจเชื่อมกับสระในพยางค์ถัดไป อย่าหยุดทีละตัวอักษร',
            pair: ['ไป / ไปไหม', 'มี / มีไหม', 'ไม่เป็นไร / ไม่เป็นไรใช่ไหม'], contrast: ['ㅓ: ไม่ห่อปาก / ㅗ: ห่อปาก', 'ㅡ: ไม่ห่อปาก / ㅜ: ห่อปาก', 'เสียงธรรมดา / เสียงเกร็ง / เสียงพ่นลม'],
            rescue: 'ใช้เมื่อฟังไม่เข้าใจ', meanings: ['กรุณาพูดช้า ๆ', 'กรุณาพูดอีกครั้ง', 'นี่หมายความว่าอะไร'],
            recognition: 'ตรวจเฉพาะคำที่ระบบได้ยิน ไม่ใช่คะแนนการออกเสียงหรือทำนองเสียง'
        }
    };
    const text = () => copy[typeof currentLang === 'string' ? currentLang : 'en'] || copy.en;
    const savedRate = Number(localStorage.getItem('kTalkSpeechRate') || 1);
    let rate = [0.65, 0.8, 1].includes(savedRate) ? savedRate : 1;
    let selectedVoice = localStorage.getItem('kTalkVoice') || '';
    let lastText = '', generation = 0, timer = null, activeUtterance = null;
    let statusKey = 'ready', progress = '';
    let hideRoman = localStorage.getItem('kTalkHideRoman') === 'true';
    const synth = window.speechSynthesis;
    const voices = () => synth ? synth.getVoices().filter(v => /^ko(?:[-_]|$)/i.test(v.lang)) : [];
    function bestVoice() {
        const list = voices();
        const selected = list.find(v => v.voiceURI === selectedVoice);
        if (selected) return selected;
        const score = v => /natural|neural|online/i.test(v.name) ? 3 : /google|yuna|sunhi|injoon/i.test(v.name) ? 2 : 1;
        return list.slice().sort((a, b) => score(b) - score(a))[0] || null;
    }
    function status(key, count = '') {
        statusKey = key;
        progress = count;
        const el = document.getElementById('coach-status');
        if (el) el.textContent = `${text()[key]}${count ? ` · ${count}` : ''}`;
    }
    function reportError(key) {
        status(key);
        if (typeof showToast === 'function') showToast(text()[key]);
    }
    function busy(value) {
        document.getElementById('speaker-btn')?.classList.toggle('animate-pulse', value);
        const stop = document.getElementById('coach-stop');
        if (stop) stop.disabled = !value;
    }
    function stop() {
        generation++;
        clearTimeout(timer);
        timer = null;
        if (synth) synth.cancel();
        activeUtterance = null;
        busy(false);
        status('ready');
    }
    function normalize(value) {
        let clean = String(value ?? '').normalize('NFC').replace(/[\[\]]/g, '').replace(/？/g, '?').replace(/！/g, '!').replace(/。/g, '.').replace(/\s+/g, ' ').trim();
        if (!clean) return '';
        if (typeof HANGUL_VOWEL_SPEAK_MAP !== 'undefined') clean = HANGUL_VOWEL_SPEAK_MAP[clean] || HANGUL_CONSONANT_SPEAK_MAP[clean] || clean;
        // Keep explicit punctuation. Never infer a question from an ending like 가요.
        return /[.!?…][”’"')]*$/.test(clean) ? clean : `${clean}.`;
    }
    function speak(value, repeats = 1) {
        const clean = normalize(value);
        stop();
        if (!clean) return;
        lastText = clean;
        if (!synth || typeof SpeechSynthesisUtterance === 'undefined') { reportError('unsupported'); return; }
        const token = generation;
        let attempt = 0;
        const begin = () => {
            timer = null;
            if (token !== generation) return;
            const voice = bestVoice();
            // Some browsers populate voices asynchronously after the first request.
            if (!voice && attempt++ < 6) { timer = setTimeout(begin, 150); return; }
            if (!voice) { busy(false); reportError('missing'); return; }
            let played = 0;
            const play = () => {
                timer = null;
                if (token !== generation) return;
                const u = new SpeechSynthesisUtterance(clean);
                activeUtterance = u; // Retain until completion (Safari/Chromium).
                u.lang = 'ko-KR';
                u.voice = voice;
                u.rate = rate;
                u.pitch = 1; // Whole-sentence intonation belongs to the Korean voice.
                u.volume = 1;
                busy(true);
                status('playing', repeats > 1 ? `${played + 1}/${repeats}` : '');
                u.onend = () => {
                    if (token !== generation) return;
                    activeUtterance = null;
                    played++;
                    if (played < repeats) {
                        status('pause', `${played}/${repeats}`);
                        // Give the learner enough time to echo this whole sentence.
                        const pause = Math.min(18000, Math.max(2500, clean.length * 220 / rate));
                        timer = setTimeout(play, pause);
                    } else { busy(false); status('done'); }
                };
                u.onerror = () => {
                    if (token !== generation) return;
                    activeUtterance = null;
                    busy(false);
                    reportError('failed');
                };
                try { synth.speak(u); } catch { u.onerror(); }
            };
            play();
        };
        // Debounce rapid taps; stale onend/onerror handlers cannot restart speech.
        timer = setTimeout(begin, 40);
    }
    function repeat() {
        if (!lastText) { status('empty'); return; }
        speak(lastText, 3);
    }
    function refreshVoices() {
        const select = document.getElementById('coach-voice');
        if (!select) return;
        select.replaceChildren(new Option(text().auto, ''));
        voices().forEach(v => select.add(new Option(v.name, v.voiceURI)));
        select.value = voices().some(v => v.voiceURI === selectedVoice) ? selectedVoice : '';
        if (!synth) status('unsupported');
        else if (!voices().length) status('missing');
        else if (['missing', 'unsupported'].includes(statusKey)) status('ready');
    }
    const button = (label, phrase) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 text-sm text-rose-200';
        b.textContent = `▶ ${label}`;
        b.addEventListener('click', () => speak(phrase));
        return b;
    };
    function render() {
        const panel = document.getElementById('learning-coach');
        if (!panel) return;
        const t = text();
        const open = panel.querySelector('details')?.open || false;
        panel.innerHTML = `<details class="rounded-2xl border border-slate-700 bg-slate-950 p-4 mb-4">
            <summary class="font-bold text-rose-200 cursor-pointer"></summary>
            <div class="space-y-4 mt-4 text-sm">
                <label class="block"><span data-copy="voice"></span><select id="coach-voice" class="block w-full bg-slate-800 rounded-xl p-2 mt-1 border border-slate-600"></select></label>
                <label class="block"><span data-copy="speed"></span><select id="coach-rate" class="block w-full bg-slate-800 rounded-xl p-2 mt-1 border border-slate-600"><option value="1">1×</option><option value="0.8">0.8×</option><option value="0.65">0.65×</option></select></label>
                <p data-copy="hint" class="text-xs text-slate-400"></p>
                <div class="flex flex-wrap gap-2"><button id="coach-repeat" type="button" data-copy="repeat" class="bg-rose-700 rounded-xl px-3 py-2"></button><button id="coach-stop" type="button" data-copy="stop" class="bg-slate-700 rounded-xl px-3 py-2 disabled:opacity-40"></button></div>
                <p id="coach-status" role="status" aria-live="polite" class="text-amber-200 text-xs"></p>
                <label class="flex items-center gap-2"><input id="coach-roman" type="checkbox"><span data-copy="roman"></span></label>
                <div class="border-t border-slate-700 pt-3"><h3 data-copy="tipTitle" class="font-bold text-amber-200"></h3><p data-copy="tips" class="text-slate-300 leading-relaxed mt-2"></p></div>
                <div><h3 data-copy="intonation" class="font-bold text-amber-200"></h3><p data-copy="contour" class="text-slate-300 text-xs leading-relaxed my-2"></p><div id="coach-pairs" class="space-y-3"></div></div>
                <div><h3 data-copy="sounds" class="font-bold text-amber-200 mb-2"></h3><div id="coach-sounds" class="space-y-3"></div></div>
                <div><h3 data-copy="linking" class="font-bold text-amber-200"></h3><p data-copy="linkHint" class="text-xs text-slate-300 my-2"></p><div id="coach-linking" class="flex flex-wrap gap-2"></div></div>
                <div><h3 data-copy="rescue" class="font-bold text-amber-200 mb-2"></h3><div id="coach-rescue" class="space-y-3"></div></div>
            </div></details>`;
        panel.querySelector('summary').textContent = t.title;
        panel.querySelector('details').open = open;
        panel.querySelectorAll('[data-copy]').forEach(el => { el.textContent = t[el.dataset.copy]; });
        const pairBox = document.getElementById('coach-pairs');
        ['가요', '있어요', '괜찮아요'].forEach((phrase, i) => {
            const row = document.createElement('div');
            const meaning = document.createElement('p');
            meaning.className = 'text-xs text-slate-400 mb-1';
            meaning.textContent = t.pair[i];
            row.append(meaning, button(`${phrase}. ${t.statement}`, `${phrase}.`), document.createTextNode(' '), button(`${phrase}? ${t.question}`, `${phrase}?`));
            pairBox.append(row);
        });
        [['어', '오'], ['으', '우'], ['가', '까', '카']].forEach((items, i) => {
            const row = document.createElement('div');
            const hint = document.createElement('p');
            hint.className = 'text-xs text-slate-400 mb-1';
            hint.textContent = t.contrast[i];
            row.append(hint);
            items.forEach(phrase => row.append(button(phrase, phrase), document.createTextNode(' ')));
            document.getElementById('coach-sounds').append(row);
        });
        [['한국어 → [한구거]', '한국어'], ['먹어요 → [머거요]', '먹어요'], ['같이 → [가치]', '같이']].forEach(([label, phrase]) => document.getElementById('coach-linking').append(button(label, phrase)));
        ['천천히 말해 주세요.', '다시 한 번 말해 주세요.', '이게 무슨 뜻이에요?'].forEach((phrase, i) => {
            const row = document.createElement('div');
            const meaning = document.createElement('p');
            meaning.className = 'text-xs text-slate-400 mt-1';
            meaning.textContent = t.meanings[i];
            row.append(button(phrase, phrase), meaning);
            document.getElementById('coach-rescue').append(row);
        });
        const voiceSelect = document.getElementById('coach-voice');
        voiceSelect.onchange = () => { stop(); selectedVoice = voiceSelect.value; localStorage.setItem('kTalkVoice', selectedVoice); };
        const rateSelect = document.getElementById('coach-rate');
        rateSelect.value = String(rate);
        rateSelect.onchange = () => { stop(); rate = Number(rateSelect.value); localStorage.setItem('kTalkSpeechRate', rate); };
        document.getElementById('coach-repeat').onclick = repeat;
        document.getElementById('coach-stop').onclick = stop;
        const roman = document.getElementById('coach-roman');
        roman.checked = !hideRoman;
        roman.onchange = () => { hideRoman = !roman.checked; localStorage.setItem('kTalkHideRoman', String(hideRoman)); document.body.classList.toggle('hide-romanization', hideRoman); };
        document.body.classList.toggle('hide-romanization', hideRoman);
        busy(Boolean(activeUtterance || timer));
        status(statusKey, progress);
        refreshVoices();
    }
    function init() {
        render();
        synth?.addEventListener('voiceschanged', refreshVoices);
        document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
        window.addEventListener('pagehide', stop);
    }
    window.KTalkCoach = { init, render, speak, stop, bestVoice, normalize, recognitionNote: () => text().recognition };
})();
