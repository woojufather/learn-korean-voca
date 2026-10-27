/* Shared localization for legacy static and dynamically rendered UI.
 * Korean learning text and romanization remain Korean/romanization.
 * Original text is retained so changing language never translates a translation.
 */
(() => {
    'use strict';
    const locales = ['en', 'ja', 'zh', 'es', 'th'];
    const messages = new Map();
    const normalize = s => String(s ?? '').replace(/\s+/g, ' ').trim();
    const add = (source, ...values) => {
        if (values.length !== 5 || values.some(v => !v)) throw Error(`Incomplete translation: ${source}`);
        messages.set(normalize(source), values);
    };
    const rows = [
        ['Hangul Lab', 'Hangul Lab', 'ハングル研究所', '韩文字母学习室', 'Laboratorio de hangul', 'ห้องเรียนฮันกึล'],
        ['실시간 자모 결합 (Real-time Composition)', 'Build a syllable', '文字を組み合わせる', '实时组合音节', 'Combina letras en sílabas', 'ผสมตัวอักษรเป็นพยางค์'],
        ['원어민 발음 듣기 (Listen Audio 🔊)', 'Listen to Korean pronunciation 🔊', '韓国語の発音を聞く 🔊', '听韩语发音 🔊', 'Escuchar la pronunciación 🔊', 'ฟังการออกเสียงภาษาเกาหลี 🔊'],
        ['원터치 단어 조합 프리셋 (Tap to Build Words)', 'Tap to build a word', 'タップして単語を作る', '点击组合单词', 'Toca para formar palabras', 'แตะเพื่อสร้างคำ'],
        ['초성 (Initial Consonant)', 'Initial consonant', '初声（最初の子音）', '初声（开头的辅音）', 'Consonante inicial', 'พยัญชนะต้น'],
        ['중성 (Vowel)', 'Vowel', '中声（母音）', '中声（元音）', 'Vocal', 'สระ'],
        ['종성 / 받침 (Final Consonant · Optional)', 'Final consonant (optional)', '終声・パッチム（省略可）', '终声／收音（可选）', 'Consonante final (opcional)', 'ตัวสะกด (ไม่จำเป็นต้องมี)'],
        ['Selected: 없음 (None)', 'No final consonant', 'パッチムなし', '无收音', 'Sin consonante final', 'ไม่มีตัวสะกด'],
        ['없음 (None)', 'None', 'なし', '无', 'Ninguna', 'ไม่มี'],
        ['총 19개 자음 (14 기본 + 5 쌍자음)', '19 consonants: 14 basic + 5 tense', '子音19個：基本14＋濃音5', '19个辅音：14个基本音＋5个紧音', '19 consonantes: 14 básicas + 5 tensas', 'พยัญชนะ 19 ตัว: พื้นฐาน 14 + เสียงเกร็ง 5'],
        ['카드를 누르면 발음 재생 🔊', 'Tap a card to listen 🔊', 'カードをタップして聞く 🔊', '点击卡片听发音 🔊', 'Toca una tarjeta para escuchar 🔊', 'แตะการ์ดเพื่อฟังเสียง 🔊'],
        ['외국인 필수 구별 1: ㅓ [eo] vs ㅗ [o]', 'Sound contrast: ㅓ [eo] / ㅗ [o]', '音の違い：ㅓ [eo]／ㅗ [o]', '辨音：ㅓ [eo]／ㅗ [o]', 'Distingue ㅓ [eo] / ㅗ [o]', 'แยกเสียง ㅓ [eo] / ㅗ [o]'],
        [': 입을 세로로 크게 벌리고 입술에 힘을 뺍니다 (cup의 u).', ': Open your mouth and keep your lips relaxed and unrounded.', '：口を開き、唇を丸めずに力を抜きます。', '：张开嘴，嘴唇放松，不要圆唇。', ': Abre la boca y relaja los labios, sin redondearlos.', ': อ้าปาก ผ่อนคลายริมฝีปากและไม่ห่อปาก'],
        [": 입술을 앞으로 둥글게 모아 '오' 소리를 냅니다.", ': Round your lips forward.', '：唇を前に丸く突き出します。', '：嘴唇向前拢圆。', ': Redondea los labios hacia delante.', ': ห่อริมฝีปากไปข้างหน้า'],
        ['외국인 필수 구별 2: ㅡ [eu] vs ㅜ [u]', 'Sound contrast: ㅡ [eu] / ㅜ [u]', '音の違い：ㅡ [eu]／ㅜ [u]', '辨音：ㅡ [eu]／ㅜ [u]', 'Distingue ㅡ [eu] / ㅜ [u]', 'แยกเสียง ㅡ [eu] / ㅜ [u]'],
        [': 미소 짓듯이 입꼬리를 옆으로 당기며 소리냅니다.', ': Keep your lips unrounded and your tongue high toward the back.', '：唇を丸めず、舌を口の奥の高い位置に置きます。', '：嘴唇不拢圆，舌位靠后、抬高。', ': No redondees los labios; eleva la lengua hacia atrás.', ': ไม่ห่อปาก ยกลิ้นสูงไปทางด้านหลัง'],
        [': 입술을 촛불 끄듯 앞으로 뾰족하게 내밉니다.', ': Round your lips as if blowing out a candle.', '：ろうそくを吹き消すように唇を丸めます。', '：像吹蜡烛一样将嘴唇拢圆。', ': Redondea los labios como para soplar una vela.', ': ห่อปากเหมือนกำลังเป่าเทียน'],
        ['한국어 받침의 7대 대표음 법칙', 'The seven final-consonant sounds', 'パッチムの7つの代表音', '收音的七个代表音', 'Los siete sonidos finales', 'เสียงตัวสะกดหลัก 7 เสียง'],
        ['한글의 모든 복잡한 받침(27개)은 음절 끝에서', 'At a syllable boundary, final consonants are realized as', '音節末のパッチムは、基本的に', '在音节末尾，收音主要归为', 'Al final de una sílaba, las consonantes se realizan como', 'เมื่ออยู่ท้ายพยางค์ ตัวสะกดจะออกเสียงหลักเป็น'],
        ['단 7가지 소리 [ ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ ]', 'seven sounds [ ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ ]', '7つの音 [ ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ ]', '七种声音 [ ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ ]', 'siete sonidos [ ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ ]', '7 เสียง [ ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ ]'],
        ['로만 발음됩니다!', '. The following sound can change the pronunciation.', 'にまとまります。後ろの音によって発音が変わる場合もあります。', '。实际发音也会受到后续音的影响。', '. El sonido siguiente puede modificar la pronunciación.', ' โดยเสียงที่ตามมาอาจทำให้การออกเสียงเปลี่ยนไป'],
        ['끝소리 법칙', 'Final sound', '終声の発音', '收音规则', 'Sonido final', 'กฎเสียงตัวสะกด'],
        ['START', 'START', 'はじめる', '开始', 'EMPEZAR', 'เริ่ม'],
        ['Start', 'Start', '始める', '开始', 'Empezar', 'เริ่ม'],
        ['NEW', 'NEW', '新着', '新增', 'NUEVO', 'ใหม่'],
        ['✨ Real Korean 60 상황 카드', '✨ 60 real-life Korean cards', '✨ 実生活の韓国語60場面', '✨ 60张生活韩语情景卡', '✨ 60 situaciones reales en coreano', '✨ การ์ดภาษาเกาหลีในชีวิตจริง 60 สถานการณ์'],
        ['오늘의 표현 & 3단계 말투 비교 1장씩 넘겨보기', 'Learn one card at a time and compare three speech styles', '1枚ずつ学び、3つの話し方を比較', '逐卡学习，对比三种语体', 'Aprende tarjeta a tarjeta y compara tres registros', 'เรียนทีละการ์ดและเปรียบเทียบภาษาสามระดับ'],
        ['학습하기', 'Start learning', '学習する', '开始学习', 'Aprender', 'เริ่มเรียน'],
        ['K-Survival', 'Survival Korean', '生活韓国語', '生存韩语', 'Coreano de supervivencia', 'ภาษาเกาหลีเพื่อเอาตัวรอด'],
        ['SayVoca Speaking Coach', 'Speaking coach', '会話コーチ', '口语教练', 'Práctica de conversación', 'ฝึกพูด'],
        ['Audio', 'Audio', '音声', '音频', 'Audio', 'เสียง'],
        ['All', 'All', 'すべて', '全部', 'Todo', 'ทั้งหมด'],
        ['Travel', 'Travel', '旅行', '旅行', 'Viajes', 'ท่องเที่ยว'],
        ['Slang', 'Slang', 'スラング', '俚语', 'Jerga', 'คำสแลง'],
        ['K-Drama', 'K-Drama', '韓国ドラマ', '韩剧', 'Dramas coreanos', 'ซีรีส์เกาหลี'],
        ['Survival', 'Survival', '生活必須', '生存用语', 'Supervivencia', 'เอาตัวรอด'],
        ['Food', 'Food', '食べ物', '食物', 'Comida', 'อาหาร'],
        ['Greetings', 'Greetings', 'あいさつ', '问候', 'Saludos', 'คำทักทาย'],
        ['Emotion', 'Emotion', '感情', '情感', 'Emociones', 'อารมณ์'],
        ['Emotions', 'Emotions', '感情', '情感', 'Emociones', 'อารมณ์'],
        ['Daily', 'Daily life', '日常', '日常', 'Vida diaria', 'ชีวิตประจำวัน'],
        ['Daily Life', 'Daily life', '日常生活', '日常生活', 'Vida diaria', 'ชีวิตประจำวัน'],
        ['Business', 'Business', 'ビジネス', '商务', 'Negocios', 'ธุรกิจ'],
        ['Current League', 'Current league', '現在のリーグ', '当前段位', 'Liga actual', 'ลีกปัจจุบัน'],
        ['Real Korean Situations', 'Real-life Korean', '実生活の韓国語', '生活韩语情景', 'Coreano en situaciones reales', 'ภาษาเกาหลีในสถานการณ์จริง'],
        ['Learn Natural Korean in Real-Life Everyday Contexts', 'Learn natural Korean for everyday situations', '日常場面で自然な韓国語を学ぶ', '在日常情景中学习自然韩语', 'Aprende coreano natural para el día a día', 'เรียนภาษาเกาหลีที่เป็นธรรมชาติในชีวิตประจำวัน'],
        ['5 Featured Samples', '5 featured situations', 'おすすめ5場面', '5个精选情景', '5 situaciones destacadas', '5 สถานการณ์แนะนำ'],
        ['🃏 1장씩 카드 학습 (Card Deck)', '🃏 Practice one card at a time', '🃏 1枚ずつ練習', '🃏 逐卡练习', '🃏 Practicar tarjeta a tarjeta', '🃏 ฝึกทีละการ์ด'],
        ['📋 전체 60개 리스트', '📋 All 60 expressions', '📋 全60表現の一覧', '📋 全部60个表达', '📋 Lista de 60 expresiones', '📋 รายการทั้งหมด 60 สำนวน'],
        ['이전', 'Previous', '前へ', '上一个', 'Anterior', 'ก่อนหน้า'],
        ['다음', 'Next', '次へ', '下一个', 'Siguiente', 'ถัดไป'],
        ['어제 이어서 학습 중', 'Continuing your progress', '前回の続きから学習中', '继续上次的进度', 'Continuando tu progreso', 'เรียนต่อจากครั้งก่อน'],
        ['첫 번째 카드부터 학습 중', 'Starting with the first card', '最初のカードから学習中', '从第一张卡片开始', 'Empezando por la primera tarjeta', 'เริ่มเรียนจากการ์ดแรก'],
        ["✨ Today's Expression · 오늘의 핵심 표현", "✨ Today's expression", '✨ 今日の表現', '✨ 今日表达', '✨ Expresión de hoy', '✨ สำนวนประจำวัน'],
        ['원어민 음성 듣기 (Listen Audio)', 'Listen to Korean', '韓国語の音声を聞く', '听韩语发音', 'Escuchar coreano', 'ฟังเสียงภาษาเกาหลี'],
        ['상황별 말투 3단계 비교 (Politeness Levels)', 'Compare three speech styles', '3つの話し方を比較', '对比三种语体', 'Compara tres registros', 'เปรียบเทียบภาษาสามระดับ'],
        ['터치 시 발음 재생 🔊', 'Tap to listen 🔊', 'タップして聞く 🔊', '点击听发音 🔊', 'Toca para escuchar 🔊', 'แตะเพื่อฟังเสียง 🔊'],
        ["TODAY'S MISSION · 상황 미션", "Today's situation", '今日の場面', '今日情景', 'Situación de hoy', 'สถานการณ์ประจำวัน'],
        ['Real Korean Nuance Tip:', 'Usage tip:', '使い方のヒント：', '用法提示：', 'Consejo de uso:', 'เคล็ดลับการใช้:'],
        ['💡 Real Nuance Tip:', '💡 Usage tip:', '💡 使い方のヒント：', '💡 用法提示：', '💡 Consejo de uso:', '💡 เคล็ดลับการใช้:'],
        ['🎙️ Practice Speaking (따라 말하기)', '🎙️ Practice speaking', '🎙️ 声に出して練習', '🎙️ 跟读练习', '🎙️ Practicar hablando', '🎙️ ฝึกพูดตาม'],
        ['Next Card (다음 카드로 ➔)', 'Next card ➔', '次のカードへ ➔', '下一张卡片 ➔', 'Siguiente tarjeta ➔', 'การ์ดถัดไป ➔'],
        ['Situation Context', 'Situation', '場面', '情景', 'Situación', 'สถานการณ์'],
        ['반말 (Casual):', 'Casual:', 'タメ口：', '非敬语：', 'Informal:', 'กันเอง:'],
        ['해요체 (Everyday):', 'Everyday polite:', '日常の丁寧語：', '日常敬语：', 'Cortés cotidiano:', 'สุภาพทั่วไป:'],
        ['격식체 (Formal):', 'Formal:', '改まった敬語：', '正式敬语：', 'Formal:', 'ทางการ:'],
        ['Casual · 반말', 'Casual · 반말', 'タメ口・반말', '非敬语・반말', 'Informal · 반말', 'กันเอง · 반말'],
        ['Polite · 해요체', 'Polite · 해요체', '丁寧語・해요체', '日常敬语・해요체', 'Cortés · 해요체', 'สุภาพ · 해요체'],
        ['Formal · 격식체', 'Formal · 격식체', '改まった敬語・격식체', '正式敬语・격식체', 'Formal · 격식체', 'ทางการ · 격식체'],
        ['Best ✨', 'Recommended ✨', 'おすすめ ✨', '推荐 ✨', 'Recomendado ✨', 'แนะนำ ✨'],
        ['친구·동생 (Casual)', 'Close friends / younger people', '親しい友人・年下', '亲友／晚辈', 'Amigos cercanos / menores', 'เพื่อนสนิท / ผู้อายุน้อยกว่า'],
        ['가장 자연스러움 ✨', 'Natural everyday choice ✨', '自然な日常表現 ✨', '自然的日常表达 ✨', 'Opción natural y cotidiana ✨', 'เป็นธรรมชาติในชีวิตประจำวัน ✨'],
        ['격식·비즈니스 (Formal)', 'Formal / business', '公式な場面・ビジネス', '正式场合／商务', 'Formal / negocios', 'ทางการ / ธุรกิจ'],
        ['🃏 이 카드로 1장씩 학습하기 (Practice This Card)', '🃏 Practice this card', '🃏 このカードを練習', '🃏 练习此卡片', '🃏 Practicar esta tarjeta', '🃏 ฝึกการ์ดนี้'],
        ['No expressions found', 'No expressions found', '表現が見つかりません', '未找到表达', 'No se encontraron expresiones', 'ไม่พบสำนวน'],
        ['Try another keyword or select another category above.', 'Try another keyword or category.', '別のキーワードやカテゴリーをお試しください。', '请尝试其他关键词或分类。', 'Prueba otra palabra o categoría.', 'ลองคำค้นหรือหมวดหมู่อื่น'],
        ['No words to review!', 'No words to review!', '復習する単語はありません！', '暂无需要复习的单词！', '¡No hay palabras para repasar!', 'ยังไม่มีคำที่ต้องทบทวน'],
        ['Mistakes in the quiz will automatically appear here.', 'Quiz mistakes appear here automatically.', 'クイズで間違えた単語が自動で表示されます。', '答错的单词会自动显示在这里。', 'Los errores del cuestionario aparecerán aquí.', 'คำที่ตอบผิดในแบบทดสอบจะแสดงที่นี่อัตโนมัติ'],
        ['Solved', 'Solved', '回答数', '已答题数', 'Resueltas', 'ข้อที่ทำแล้ว'],
        ['Accuracy', 'Accuracy', '正答率', '正确率', 'Aciertos', 'ความแม่นยำ'],
        ['Last:', 'Last:', '前回：', '最近：', 'Última:', 'ล่าสุด:'],
        ['Attended 🌺', 'Completed 🌺', '学習済み 🌺', '已打卡 🌺', 'Completado 🌺', 'เรียนแล้ว 🌺'],
        ['No activity', 'No activity', '学習記録なし', '暂无学习记录', 'Sin actividad', 'ยังไม่มีกิจกรรม'],
        ['Solve at least 1 Korean question to collect your daily hibiscus flower.', 'Answer at least one question to earn your daily flower.', '1問以上答えて、今日の花スタンプを集めましょう。', '至少答一道题，领取今日花朵印章。', 'Responde al menos una pregunta para ganar tu flor diaria.', 'ตอบอย่างน้อยหนึ่งข้อเพื่อรับดอกไม้ประจำวัน'],
        ['Listen', 'Listen', '聞く', '听音', 'Escuchar', 'ฟัง'],
        ['Listen Audio', 'Listen', '音声を聞く', '听发音', 'Escuchar audio', 'ฟังเสียง'],
        ['발음 듣기', 'Listen to pronunciation', '発音を聞く', '听发音', 'Escuchar pronunciación', 'ฟังการออกเสียง'],
        ['초성 소리 듣기', 'Listen to the initial consonant', '初声を聞く', '听初声', 'Escuchar consonante inicial', 'ฟังพยัญชนะต้น'],
        ['모음 소리 듣기', 'Listen to the vowel', '母音を聞く', '听元音', 'Escuchar vocal', 'ฟังสระ'],
        ['받침 소리 듣기', 'Listen to the final consonant', 'パッチムを聞く', '听收音', 'Escuchar consonante final', 'ฟังตัวสะกด'],
        ['Notification', 'Notification', 'お知らせ', '通知', 'Aviso', 'การแจ้งเตือน'],
        ['확인', 'OK', '確認', '确认', 'Aceptar', 'ตกลง'],
        ['취소', 'Cancel', 'キャンセル', '取消', 'Cancelar', 'ยกเลิก'],
        ['닫기', 'Close', '閉じる', '关闭', 'Cerrar', 'ปิด'],
        ['스마트폰 앱 설치 안내', 'Install on your phone', 'スマートフォンに追加', '安装到手机', 'Instalar en tu teléfono', 'ติดตั้งบนโทรศัพท์'],
        ['🎉 Correct! (+15 EXP)', '🎉 Correct! (+15 EXP)', '🎉 正解！ (+15 EXP)', '🎉 答对了！ (+15 EXP)', '🎉 ¡Correcto! (+15 EXP)', '🎉 ถูกต้อง! (+15 EXP)'],
        ['❌ Not quite! Review the natural nuance below.', '❌ Not quite. Check the usage tip below.', '❌ 惜しい！下の使い方を確認しましょう。', '❌ 再想一想，看看下面的用法提示。', '❌ Revisa el consejo de uso de abajo.', '❌ ลองอีกครั้ง อ่านเคล็ดลับด้านล่าง'],
        ['🎙️ Listening... Speak Korean now!', '🎙️ Listening... Speak Korean now!', '🎙️ 聞き取り中…韓国語で話してください！', '🎙️ 正在聆听，请说韩语！', '🎙️ Escuchando… ¡Habla en coreano!', '🎙️ กำลังฟัง… พูดภาษาเกาหลีได้เลย'],
        ['No favorites yet. Tap the star to bookmark words!', 'Tap a star to save your first word.', '星をタップして単語を保存しましょう。', '点击星标收藏第一个单词吧。', 'Toca una estrella para guardar una palabra.', 'แตะดาวเพื่อบันทึกคำแรก'],
        ['Microphone access denied. Please allow mic in browser settings.', 'Allow microphone access in your browser settings.', 'ブラウザー設定でマイクの使用を許可してください。', '请在浏览器设置中允许使用麦克风。', 'Permite el micrófono en los ajustes del navegador.', 'อนุญาตไมโครโฟนในการตั้งค่าเบราว์เซอร์'],
        ['Could not catch voice. Please try speaking closer to mic!', 'No speech detected. Try speaking closer to the microphone.', '音声を認識できませんでした。マイクの近くでお試しください。', '未识别到语音，请靠近麦克风重试。', 'No se detectó voz. Acércate al micrófono.', 'ไม่ได้ยินเสียง ลองพูดใกล้ไมโครโฟนขึ้น'],
        ['Could not start microphone. Listen to the audio and repeat aloud!', 'Microphone unavailable. Listen and repeat aloud.', 'マイクを開始できません。音声を聞いてまねしましょう。', '无法启动麦克风，请听音频并跟读。', 'Micrófono no disponible. Escucha y repite.', 'เปิดไมโครโฟนไม่ได้ ลองฟังแล้วพูดตาม'],
        ['Voice recognition not supported in this browser. Use Chrome or Safari.', 'Speech recognition is unavailable in this browser.', 'このブラウザーでは音声認識を利用できません。', '此浏览器不支持语音识别。', 'Este navegador no admite reconocimiento de voz.', 'เบราว์เซอร์นี้ไม่รองรับการรู้จำเสียง'],
        ['🎙️ Speech recognition not supported in this browser. Listen to audio and repeat aloud!', '🎙️ Speech recognition unavailable. Listen and repeat aloud.', '🎙️ 音声認識を利用できません。聞いてまねしましょう。', '🎙️ 无法使用语音识别，请听音频并跟读。', '🎙️ Sin reconocimiento de voz. Escucha y repite.', '🎙️ ไม่รองรับการรู้จำเสียง ลองฟังแล้วพูดตาม'],
        ['🎙️ Speak aloud in Korean!', '🎙️ Speak aloud in Korean!', '🎙️ 韓国語で話してください！', '🎙️ 请大声说韩语！', '🎙️ ¡Habla en coreano!', '🎙️ พูดภาษาเกาหลีออกเสียงได้เลย'],
        ['🎉 Excellent speaking practice! +10 EXP', '🎉 Speaking practice complete! +10 EXP', '🎉 発話練習ができました！ +10 EXP', '🎉 跟读练习完成！ +10 EXP', '🎉 ¡Práctica completada! +10 EXP', '🎉 ฝึกพูดเสร็จแล้ว! +10 EXP'],
        ['🎉 축하합니다! 모든 카드를 완료하셨습니다!', '🎉 You completed all the cards!', '🎉 すべてのカードを学習しました！', '🎉 已完成所有卡片！', '🎉 ¡Completaste todas las tarjetas!', '🎉 เรียนครบทุกการ์ดแล้ว!'],
        ['🃏 전체 60개 카드', '🃏 All 60 cards', '🃏 全60カード', '🃏 全部60张卡片', '🃏 Las 60 tarjetas', '🃏 การ์ดทั้งหมด 60 ใบ'],
        ['⭐ 대표 상황 5선', '⭐ 5 featured situations', '⭐ おすすめ5場面', '⭐ 5个精选情景', '⭐ 5 situaciones destacadas', '⭐ 5 สถานการณ์แนะนำ'],
        ['🤝 인사·안부 (10)', '🤝 Greetings (10)', '🤝 あいさつ・近況 (10)', '🤝 问候・近况 (10)', '🤝 Saludos (10)', '🤝 ทักทาย (10)'],
        ['☕ 식사·카페 (10)', '☕ Meals & cafés (10)', '☕ 食事・カフェ (10)', '☕ 用餐・咖啡馆 (10)', '☕ Comidas y cafés (10)', '☕ อาหาร・คาเฟ่ (10)'],
        ['💖 감사·사과 (10)', '💖 Thanks & apologies (10)', '💖 感謝・謝罪 (10)', '💖 感谢・道歉 (10)', '💖 Agradecer y disculparse (10)', '💖 ขอบคุณ・ขอโทษ (10)'],
        ['✨ 공감·리액션 (10)', '✨ Reactions & empathy (10)', '✨ 共感・リアクション (10)', '✨ 共鸣・回应 (10)', '✨ Reacciones y empatía (10)', '✨ เห็นใจ・ตอบรับ (10)'],
        ['💬 부탁·제안 (10)', '💬 Requests & suggestions (10)', '💬 お願い・提案 (10)', '💬 请求・提议 (10)', '💬 Peticiones y propuestas (10)', '💬 ขอร้อง・เสนอแนะ (10)'],
        ['🏢 직장·사회 (10)', '🏢 Work & social life (10)', '🏢 職場・社会 (10)', '🏢 职场・社交 (10)', '🏢 Trabajo y vida social (10)', '🏢 ที่ทำงาน・สังคม (10)'],
        ['인사와 안부', 'Greetings & check-ins', 'あいさつ・近況', '问候与近况', 'Saludos y novedades', 'ทักทายและถามสารทุกข์'],
        ['식사와 일상', 'Meals & daily life', '食事・日常', '用餐与日常', 'Comidas y vida diaria', 'อาหารและชีวิตประจำวัน'],
        ['감사와 사과', 'Thanks & apologies', '感謝・謝罪', '感谢与道歉', 'Agradecimientos y disculpas', 'ขอบคุณและขอโทษ'],
        ['공감과 리액션', 'Empathy & reactions', '共感・リアクション', '共鸣与回应', 'Empatía y reacciones', 'ความเห็นใจและการตอบรับ'],
        ['부탁과 제안', 'Requests & suggestions', 'お願い・提案', '请求与提议', 'Peticiones y propuestas', 'คำขอและข้อเสนอ'],
        ['직장과 학교', 'Work & school', '職場・学校', '职场与学校', 'Trabajo y estudios', 'ที่ทำงานและโรงเรียน'],
        ['검색 (예: 밥, 안부, 부탁...)', 'Search expressions…', '表現を検索…', '搜索表达…', 'Buscar expresiones…', 'ค้นหาสำนวน…'],
        ['Search situations, Korean, or English...', 'Search situations or expressions…', '場面や表現を検索…', '搜索情景或表达…', 'Buscar situaciones o expresiones…', 'ค้นหาสถานการณ์หรือสำนวน…']
    ];
    rows.push(
        ['silent', 'silent', '無音', '不发音', 'muda', 'ไม่ออกเสียง'],
        ['소리', 'sound', 'の音', '发音', 'sonido', 'เสียง'],
        ['없음', 'None', 'なし', '无', 'Ninguna', 'ไม่มี'],
        ['단어:', 'Syllable:', '音節：', '音节：', 'Sílaba:', 'พยางค์:'],
        ['이 상황에서 가장 자연스러운 표현을 골라보세요:', 'Choose the most natural expression for this situation:', 'この場面に最も自然な表現を選んでください：', '请选择最符合此情景的自然表达：', 'Elige la expresión más natural en esta situación:', 'เลือกสำนวนที่เป็นธรรมชาติที่สุดในสถานการณ์นี้:'],
        ['☕ Cafe (카페)', '☕ Café', '☕ カフェ', '☕ 咖啡馆', '☕ Cafetería', '☕ คาเฟ่'],
        ['🍽️ Restaurant (식당)', '🍽️ Restaurant', '🍽️ 食堂', '🍽️ 餐厅', '🍽️ Restaurante', '🍽️ ร้านอาหาร'],
        ['🚇 Subway (지하철)', '🚇 Subway', '🚇 地下鉄', '🚇 地铁', '🚇 Metro', '🚇 รถไฟใต้ดิน'],
        ['🏪 Convenience Store (편의점)', '🏪 Convenience store', '🏪 コンビニ', '🏪 便利店', '🏪 Tienda de conveniencia', '🏪 ร้านสะดวกซื้อ'],
        ['🏥 Clinic/Pharmacy (병원·약국)', '🏥 Clinic / pharmacy', '🏥 病院・薬局', '🏥 诊所／药店', '🏥 Clínica / farmacia', '🏥 คลินิก / ร้านขายยา'],
        ['K-Talk Original Art', 'Original K-Talk illustration', 'K-Talkのオリジナルイラスト', 'K-Talk原创插图', 'Ilustración original de K-Talk', 'ภาพต้นฉบับจาก K-Talk'],
        ['K-Talk Original Scene Vector', 'Original K-Talk illustration', 'K-Talkのオリジナルイラスト', 'K-Talk原创插图', 'Ilustración original de K-Talk', 'ภาพต้นฉบับจาก K-Talk'],
        ['Original Vector Scene by K-Talk Coach', 'Original illustration by K-Talk Coach', 'K-Talk Coachのオリジナルイラスト', 'K-Talk Coach原创插图', 'Ilustración original de K-Talk Coach', 'ภาพต้นฉบับจาก K-Talk Coach'],
        ['CC0 Public Domain', 'CC0 public domain', 'CC0・パブリックドメイン', 'CC0公有领域', 'Dominio público CC0', 'สาธารณสมบัติ CC0'],
        ['K-Talk Real Situation · CC0 Public Domain', 'K-Talk · CC0', 'K-Talk・CC0', 'K-Talk・CC0', 'K-Talk · CC0', 'K-Talk · CC0'],
        ['🌟 Words matched (+10 EXP)', '🌟 Words matched (+10 EXP)', '🌟 単語が一致しました (+10 EXP)', '🌟 词语匹配成功 (+10 EXP)', '🌟 Palabras reconocidas (+10 EXP)', '🌟 คำที่พูดตรงกัน (+10 EXP)'],
        ['Practice standard expression:', 'Practice the standard expression:', '標準的な表現も練習しましょう：', '练习一下标准表达：', 'Practica la expresión estándar:', 'ฝึกสำนวนมาตรฐาน:'],
        ['No review words! Solve some quizzes first.', 'No review words yet. Try a quiz first.', '復習する単語がありません。まずクイズに挑戦しましょう。', '暂无复习单词，先做几道题吧。', 'Aún no hay palabras. Prueba un cuestionario.', 'ยังไม่มีคำทบทวน ลองทำแบบทดสอบก่อน'],
        ['🔥 Starting Smart Review Mode!', '🔥 Starting review!', '🔥 復習を始めます！', '🔥 开始复习！', '🔥 ¡Empieza el repaso!', '🔥 เริ่มทบทวน!'],
        ['Clear all review items?', 'Clear all review items?', '復習リストをすべて消しますか？', '要清空所有复习项目吗？', '¿Borrar todos los elementos de repaso?', 'ล้างรายการทบทวนทั้งหมดหรือไม่'],
        ['Review note cleared.', 'Review list cleared.', '復習リストを消しました。', '复习列表已清空。', 'Lista de repaso borrada.', 'ล้างรายการทบทวนแล้ว'],
        ['🎉 3 Streak! Mastered and graduated from review!', '🎉 Three correct answers in a row! Word mastered.', '🎉 3回連続正解！復習を卒業しました。', '🎉 连续答对3次，已掌握此词！', '🎉 ¡Tres aciertos seguidos! Palabra dominada.', '🎉 ถูกติดกันสามครั้ง เรียนรู้คำนี้แล้ว!'],
        ['🏆 You completed all levels! Reviewing from #1.', '🏆 All levels completed! Starting review.', '🏆 全レベル完了！最初から復習します。', '🏆 已完成所有等级，开始复习！', '🏆 ¡Todos los niveles completados! A repasar.', '🏆 ครบทุกระดับแล้ว เริ่มทบทวน!'],
        ['Passed! Set to Lv.2 K-Drama level.', 'Passed! Starting level 2.', '合格！レベル2から始めます。', '通过！从第2级开始。', '¡Aprobado! Empiezas en el nivel 2.', 'ผ่านแล้ว เริ่มที่ระดับ 2'],
        ['Starting from solid foundation: Lv.1 Survival.', 'Starting with level 1 foundations.', 'レベル1の基礎から始めます。', '从第1级基础开始。', 'Empiezas por las bases del nivel 1.', 'เริ่มพื้นฐานที่ระดับ 1'],
        ['🎉 K-Talk installed on your device!', '🎉 K-Talk installed!', '🎉 K-Talkを追加しました！', '🎉 K-Talk已安装！', '🎉 ¡K-Talk instalado!', '🎉 ติดตั้ง K-Talk แล้ว!'],
        ['Card {0} / {1}', 'Card {0} / {1}', 'カード {0} / {1}', '卡片 {0} / {1}', 'Tarjeta {0} / {1}', 'การ์ด {0} / {1}'],
        ['어제 이어서 {0}번째 카드 학습 중', 'Continuing with card {0}', '前回の続き：カード{0}', '继续学习第{0}张卡片', 'Continuando con la tarjeta {0}', 'เรียนต่อที่การ์ด {0}'],
        ['{0} Wrong', '{0} incorrect', '誤答 {0}回', '答错{0}次', '{0} errores', 'ผิด {0} ครั้ง'],
        ['{0} Day 🔥', '{0} days 🔥', '{0}日 🔥', '{0}天 🔥', '{0} días 🔥', '{0} วัน 🔥'],
        ['{0} Days 🔥', '{0} days 🔥', '{0}日 🔥', '{0}天 🔥', '{0} días 🔥', '{0} วัน 🔥'],
        ['{0} COMBO! 🔥', '{0} in a row! 🔥', '{0}連続正解！ 🔥', '连续答对{0}次！ 🔥', '¡{0} seguidas! 🔥', 'ถูกติดกัน {0} ครั้ง! 🔥'],
        ['COMBO!', 'IN A ROW!', '連続正解！', '连续答对！', '¡SEGUIDAS!', 'ถูกติดกัน!'],
        ['Removed from favorites: {0}', 'Removed from favorites: {0}', 'お気に入りから削除：{0}', '已取消收藏：{0}', 'Quitado de favoritos: {0}', 'นำออกจากรายการโปรด: {0}'],
        ['Saved to favorites: {0}', 'Saved to favorites: {0}', 'お気に入りに保存：{0}', '已收藏：{0}', 'Guardado en favoritos: {0}', 'บันทึกในรายการโปรด: {0}'],
        ["💡 1st Syllable: '{0}'", '💡 First syllable: {0}', '💡 最初の音節：{0}', '💡 第一个音节：{0}', '💡 Primera sílaba: {0}', '💡 พยางค์แรก: {0}'],
        ["💡 2nd Syllable: '{0}'", '💡 Second syllable: {0}', '💡 2番目の音節：{0}', '💡 第二个音节：{0}', '💡 Segunda sílaba: {0}', '💡 พยางค์ที่สอง: {0}'],
        ['💡 Tip: {0}', '💡 Tip: {0}', '💡 ヒント：{0}', '💡 提示：{0}', '💡 Consejo: {0}', '💡 เคล็ดลับ: {0}'],
        ['Level set to [{0}]', 'Level set to [{0}]', 'レベルを設定：[{0}]', '已设置等级：[{0}]', 'Nivel seleccionado: [{0}]', 'เลือกระดับแล้ว: [{0}]'],
        ['🎉 Level Up! {0} unlocked!', '🎉 Level up! {0} unlocked!', '🎉 レベルアップ！{0}を解放！', '🎉 升级了！已解锁{0}！', '🎉 ¡Subes de nivel! {0} desbloqueado.', '🎉 เลื่อนระดับ! ปลดล็อก {0} แล้ว'],
        ['🔄 Starting {0} from #1.', '🔄 Starting {0} from the first question.', '🔄 {0}の最初の問題から開始します。', '🔄 从{0}的第一题开始。', '🔄 Empiezas {0} por la primera pregunta.', '🔄 เริ่ม {0} จากข้อแรก'],
        ["🌺 Today's attendance complete! (+20 EXP, {0} Day Streak 🔥)", '🌺 Daily practice complete! (+20 EXP, {0}-day streak 🔥)', '🌺 今日の学習完了！ (+20 EXP・{0}日連続 🔥)', '🌺 今日打卡完成！ (+20 EXP，连续{0}天 🔥)', '🌺 ¡Práctica diaria completada! (+20 EXP, {0} días seguidos 🔥)', '🌺 เรียนประจำวันเสร็จแล้ว! (+20 EXP ต่อเนื่อง {0} วัน 🔥)'],
        ['👍 Good effort! ({0}% match). Tap to try once more!', '👍 {0}% word match. Try speaking again.', '👍 単語の一致率{0}%。もう一度話してみましょう。', '👍 词语匹配率{0}%，再试一次吧。', '👍 {0}% de palabras coincidentes. Inténtalo otra vez.', '👍 คำตรงกัน {0}% ลองพูดอีกครั้ง'],
        ['SUN', 'SUN', '日', '日', 'DOM', 'อา.'], ['MON', 'MON', '月', '一', 'LUN', 'จ.'],
        ['TUE', 'TUE', '火', '二', 'MAR', 'อ.'], ['WED', 'WED', '水', '三', 'MIÉ', 'พ.'],
        ['THU', 'THU', '木', '四', 'JUE', 'พฤ.'], ['FRI', 'FRI', '金', '五', 'VIE', 'ศ.'], ['SAT', 'SAT', '土', '六', 'SÁB', 'ส.'],
        ['Search situation, Korean expression, or English...', 'Search situations or expressions…', '場面や表現を検索…', '搜索情景或表达…', 'Buscar situaciones o expresiones…', 'ค้นหาสถานการณ์หรือสำนวน…'],
        ['K-Talk Coach 🇰🇷 | Speak Korean with K-Drama & K-Pop', 'K-Talk Coach 🇰🇷 | Learn practical Korean', 'K-Talk Coach 🇰🇷 | 実用韓国語を学ぼう', 'K-Talk Coach 🇰🇷 | 学习实用韩语', 'K-Talk Coach 🇰🇷 | Aprende coreano práctico', 'K-Talk Coach 🇰🇷 | เรียนภาษาเกาหลีใช้จริง']
    );
    rows.push(
        ['🏥 Hospital (병원·약국)', '🏥 Clinic / pharmacy', '🏥 病院・薬局', '🏥 诊所／药店', '🏥 Clínica / farmacia', '🏥 คลินิก / ร้านขายยา'],
        ['☕ CAFE · 주문 & 테이크아웃', '☕ Café · ordering to go', '☕ カフェ・持ち帰り注文', '☕ 咖啡馆・外带点单', '☕ Café · para llevar', '☕ คาเฟ่ · สั่งกลับบ้าน'],
        ['🍽️ RESTAURANT · 추가 요청', '🍽️ Restaurant · requests', '🍽️ 食堂・追加のお願い', '🍽️ 餐厅・追加请求', '🍽️ Restaurante · peticiones', '🍽️ ร้านอาหาร · ขอเพิ่ม'],
        ['🚇 SUBWAY · 열차 방향 문의', '🚇 Subway · directions', '🚇 地下鉄・行き先の確認', '🚇 地铁・询问方向', '🚇 Metro · direcciones', '🚇 รถไฟใต้ดิน · ถามเส้นทาง'],
        ['🏪 CONVENIENCE · 봉투 및 결제', '🏪 Store · bags and payment', '🏪 コンビニ・袋と会計', '🏪 便利店・袋子与付款', '🏪 Tienda · bolsas y pago', '🏪 ร้านสะดวกซื้อ · ถุงและจ่ายเงิน'],
        ['🏥 CLINIC · 증상 설명', '🏥 Clinic · symptoms', '🏥 病院・症状の説明', '🏥 诊所・说明症状', '🏥 Clínica · síntomas', '🏥 คลินิก · อธิบายอาการ'],
        ['© CC0 Public Domain', 'CC0 public domain', 'CC0・パブリックドメイン', 'CC0公有领域', 'Dominio público CC0', 'สาธารณสมบัติ CC0'],
        ['홍대입구 Hongik Univ. ➔ 신촌 Sinchon', 'Hongik Univ. ➔ Sinchon', '弘大入口 ➔ 新村', '弘大入口 ➔ 新村', 'Universidad Hongik ➔ Sinchon', 'มหาวิทยาลัยฮงอิก ➔ ชินชน']
    );
    rows.push(
        ['발음 듣기: {0}', 'Listen: {0}', '発音を聞く：{0}', '听发音：{0}', 'Escuchar: {0}', 'ฟังเสียง: {0}'],
        ['관리자 인증 (Owner Access)', 'Owner sign-in', '管理者ログイン', '管理员登录', 'Acceso del propietario', 'เข้าสู่ระบบเจ้าของ'],
        ['사이트 소유자 전용 통계 대시보드입니다.', 'This dashboard is for the site owner.', 'サイト所有者専用のダッシュボードです。', '此面板仅供网站所有者使用。', 'Panel exclusivo del propietario.', 'แดชบอร์ดสำหรับเจ้าของเว็บไซต์'],
        ['지정된 관리자 비밀번호를 입력하세요.', 'Enter the owner password.', '管理者パスワードを入力してください。', '请输入管理员密码。', 'Introduce la contraseña del propietario.', 'กรอกรหัสผ่านเจ้าของ'],
        ['비밀번호가 올바르지 않습니다.', 'Incorrect password.', 'パスワードが違います。', '密码不正确。', 'Contraseña incorrecta.', 'รหัสผ่านไม่ถูกต้อง'],
        ['비밀번호 6자리 입력', '6-digit password', '6桁のパスワード', '6位密码', 'Contraseña de 6 dígitos', 'รหัสผ่าน 6 หลัก'],
        ['인증하기', 'Sign in', 'ログイン', '登录', 'Entrar', 'เข้าสู่ระบบ'],
        ['K-Talk Coach 관리자 대시보드', 'K-Talk Coach owner dashboard', 'K-Talk Coach 管理画面', 'K-Talk Coach管理面板', 'Panel de K-Talk Coach', 'แดชบอร์ดเจ้าของ K-Talk Coach'],
        ['로그아웃', 'Sign out', 'ログアウト', '退出登录', 'Salir', 'ออกจากระบบ'],
        ['로그아웃 (Lock)', 'Sign out and lock', 'ログアウトしてロック', '退出并锁定', 'Salir y bloquear', 'ออกจากระบบและล็อก'],
        ['오늘 순 방문자 (UV)', 'Unique visitors today', '今日の訪問者数', '今日独立访客', 'Visitantes únicos de hoy', 'ผู้เข้าชมไม่ซ้ำวันนี้'],
        ['글로벌 총 조회수', 'Total global views', '世界の累計閲覧数', '全球总浏览量', 'Visitas totales', 'ยอดเข้าชมรวมทั่วโลก'],
        ['전 세계 누적 카운트', 'Cumulative worldwide count', '世界の累計数', '全球累计次数', 'Recuento mundial acumulado', 'ยอดสะสมทั่วโลก'],
        ['오늘 푼 퀴즈 수', 'Questions answered today', '今日の回答数', '今日答题数', 'Preguntas respondidas hoy', 'ข้อที่ตอบวันนี้'],
        ['학습 활동 완료량', 'Completed learning activities', '完了した学習活動', '已完成学习活动', 'Actividades completadas', 'กิจกรรมที่ทำเสร็จ'],
        ['발음 연습 횟수', 'Speaking practice count', '発話練習回数', '口语练习次数', 'Prácticas de conversación', 'จำนวนครั้งที่ฝึกพูด'],
        ['마이크 음성 인식', 'Microphone speech recognition', 'マイクでの音声認識', '麦克风语音识别', 'Reconocimiento por micrófono', 'การรู้จำเสียงจากไมโครโฟน'],
        ['공식 서버리스 카운터 실시간 뱃지', 'Live visitor counter', 'リアルタイム訪問カウンター', '实时访客计数', 'Contador de visitas en directo', 'ตัวนับผู้เข้าชมแบบสด'],
        ['ktalkcoach.online 방문자 집계', 'ktalkcoach.online visitors', 'ktalkcoach.onlineの訪問数', 'ktalkcoach.online访客', 'Visitas de ktalkcoach.online', 'ผู้เข้าชม ktalkcoach.online'],
        ['접속 학습자 모국어 분포 (5개 국어)', 'Learner languages (5 languages)', '学習者の言語分布（5言語）', '学习者母语分布（5种语言）', 'Idiomas de los estudiantes (5)', 'ภาษาของผู้เรียน (5 ภาษา)'],
        ['최근 7일간 방문 이력', 'Visits in the last 7 days', '過去7日間の訪問記録', '最近7天访问记录', 'Visitas de los últimos 7 días', 'การเข้าชมใน 7 วันที่ผ่านมา'],
        ['날짜', 'Date', '日付', '日期', 'Fecha', 'วันที่'],
        ['방문자(UV)', 'Visitors', '訪問者', '访客', 'Visitantes', 'ผู้เข้าชม'],
        ['퀴즈 완료', 'Quizzes completed', 'クイズ完了', '已完成测验', 'Cuestionarios completados', 'แบบทดสอบที่เสร็จ'],
        ['데이터 초기화', 'Reset data', 'データを初期化', '重置数据', 'Restablecer datos', 'รีเซ็ตข้อมูล'],
        ['방문자 테스트 기록을 초기화하시겠습니까?', 'Reset the visitor test records?', '訪問テストの記録を初期化しますか？', '要重置访客测试记录吗？', '¿Restablecer las visitas de prueba?', 'รีเซ็ตบันทึกผู้เข้าชมทดสอบหรือไม่'],
        ['초기화 완료되었습니다.', 'Reset complete.', '初期化しました。', '重置完成。', 'Restablecimiento completado.', 'รีเซ็ตเสร็จแล้ว'],
        ['🔓 관리자 인증 성공!', '🔓 Owner signed in.', '🔓 管理者としてログインしました。', '🔓 管理员登录成功。', '🔓 Acceso correcto.', '🔓 เข้าสู่ระบบเจ้าของแล้ว'],
        ['🔒 관리자 계정에서 로그아웃되었습니다.', '🔒 Owner signed out.', '🔒 ログアウトしました。', '🔒 已退出管理员账号。', '🔒 Sesión cerrada.', '🔒 ออกจากระบบเจ้าของแล้ว'],
        ['🔄 통계 데이터가 새로고침되었습니다.', '🔄 Statistics refreshed.', '🔄 統計を更新しました。', '🔄 统计已刷新。', '🔄 Estadísticas actualizadas.', '🔄 อัปเดตสถิติแล้ว']
    );
    rows.forEach(r => add(...r));
    // Glosses are shared by presets, example chips and final-consonant cards.
    const glosses = [
        ['Meat','肉','肉','Carne','เนื้อ'], ['Cat','猫','猫','Gato','แมว'], ['Hello','こんにちは','你好','Hola','สวัสดี'],
        ['Love','愛','爱','Amor','ความรัก'], ['Thanks','感謝','感谢','Gracias','ขอบคุณ'], ['Awesome','すごい','太棒了','Genial','สุดยอด'],
        ['Meal/Rice','ご飯','米饭／餐食','Comida/arroz','อาหาร/ข้าว'], ['Rice / Meal','ご飯','米饭／餐食','Arroz/comida','ข้าว/อาหาร'], ['Rice/Meal','ご飯','米饭／餐食','Arroz/comida','ข้าว/อาหาร'],
        ['Water','水','水','Agua','น้ำ'], ['Friend','友達','朋友','Amigo','เพื่อน'], ['Korea','韓国','韩国','Corea','เกาหลี'],
        ['Bag','かばん','包','Bolso','กระเป๋า'], ['To go','行く','去','Ir','ไป'], ['Butterfly','蝶','蝴蝶','Mariposa','ผีเสื้อ'], ['Me','私','我','Yo','ฉัน'],
        ['Bridge/Leg','橋／脚','桥／腿','Puente/pierna','สะพาน/ขา'], ['Again','もう一度','再次','Otra vez','อีกครั้ง'], ['Radio','ラジオ','收音机','Radio','วิทยุ'], ['Ramen','ラーメン','方便面','Ramen','รามยอน'],
        ['Heart/Mind','心','心','Corazón/mente','ใจ'], ['Drink','飲む','喝','Beber','ดื่ม'], ['Sea/Ocean','海','海','Mar','ทะเล'], ['Banana','バナナ','香蕉','Plátano','กล้วย'],
        ['Apple','りんご','苹果','Manzana','แอปเปิล'], ['Person','人','人','Persona','คน'], ['Baby','赤ちゃん','宝宝','Bebé','ทารก'], ['Morning','朝','早晨','Mañana','ตอนเช้า'],
        ['Car','車','汽车','Coche','รถยนต์'], ['Often','よく','经常','A menudo','บ่อย'], ['Tea/Car','お茶／車','茶／汽车','Té/coche','ชา/รถยนต์'], ['Cold','冷たい','冷','Frío','เย็น'],
        ['Camera','カメラ','相机','Cámara','กล้อง'], ['Cafe','カフェ','咖啡馆','Cafetería','คาเฟ่'], ['Ride','乗る','乘坐','Subir a','ขึ้นรถ'], ['Ostrich','ダチョウ','鸵鸟','Avestruz','นกกระจอกเทศ'],
        ['Wave','波','波浪','Ola','คลื่น'], ['Blue','青','蓝色','Azul','สีฟ้า'], ['Sky','空','天空','Cielo','ท้องฟ้า'], ['One day','一日','一天','Un día','หนึ่งวัน'],
        ['Han River','漢江','汉江','Río Han','แม่น้ำฮัน'], ['Soup','スープ','汤','Sopa','ซุป'], ['Nation','国家','国家','Nación','ประเทศ'], ['Safety','安全','安全','Seguridad','ความปลอดภัย'],
        ['Peace/Greeting','安寧／あいさつ','平安／问候','Paz/saludo','ความสงบ/คำทักทาย'], ['Tiger','虎','老虎','Tigre','เสือ'], ["Let's eat",'食べよう','吃饭吧','Vamos a comer','กินข้าวกัน'],
        ['Fish','魚','鱼','Pez','ปลา'], ['Flower','花','花','Flor','ดอกไม้'], ['Bouquet','花束','花束','Ramo','ช่อดอกไม้'], ['Dream','夢','梦','Sueño','ความฝัน'], ['To dream','夢を見る','做梦','Soñar','ฝัน'],
        ['Moon','月','月亮','Luna','ดวงจันทร์'], ['Moonlight','月明かり','月光','Luz de luna','แสงจันทร์'], ['Star','星','星星','Estrella','ดาว'], ['Starlight','星明かり','星光','Luz estelar','แสงดาว'],
        ['Hand','手','手','Mano','มือ'], ['Finger','指','手指','Dedo','นิ้ว'], ['Snow/Eye','雪／目','雪／眼睛','Nieve/ojo','หิมะ/ตา'], ['Snow / Eye','雪／目','雪／眼睛','Nieve/ojo','หิมะ/ตา'],
        ['Tears','涙','眼泪','Lágrimas','น้ำตา'], ['Spring season','春','春季','Primavera','ฤดูใบไม้ผลิ'], ['Spring','春','春天','Primavera','ฤดูใบไม้ผลิ'],
        ['Night','夜','夜晚','Noche','กลางคืน'], ['Night sky','夜空','夜空','Cielo nocturno','ท้องฟ้ายามค่ำคืน'], ['Sun','太陽','太阳','Sol','ดวงอาทิตย์'], ['Sunlight','日光','阳光','Luz solar','แสงแดด'],
        ['Rain','雨','雨','Lluvia','ฝน'], ['To rain','雨が降る','下雨','Llover','ฝนตก'], ['Mountain','山','山','Montaña','ภูเขา'], ['Book','本','书','Libro','หนังสือ'],
        ['Kitchen','台所','厨房','Cocina','ห้องครัว'], ['Outside','外','外面','Fuera','ข้างนอก'], ['Door','ドア','门','Puerta','ประตู'], ['Clothes','服','衣服','Ropa','เสื้อผ้า'],
        ['End','終わり','结束','Final','จุดจบ'], ['Horse / Words','馬／言葉','马／话语','Caballo/palabras','ม้า/คำพูด'], ['Mom','お母さん','妈妈','Mamá','แม่'],
        ['Mouth','口','嘴','Boca','ปาก'], ['Front','前','前面','Delante','ด้านหน้า'], ['River','川','河','Río','แม่น้ำ'], ['Room','部屋','房间','Habitación','ห้อง']
    ];
    glosses.forEach(row => add(row[0], ...row));
    const langIndex = () => Math.max(0, locales.indexOf(typeof currentLang === 'string' ? currentLang : 'en'));
    const patterns = [];
    function compilePatterns() {
        patterns.length = 0;
        for (const [source, values] of messages) {
            if (!source.includes('{0}')) continue;
            const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\\{\d+\\\}/g, '(.*?)');
            patterns.push({ regex: new RegExp(`^${escaped}$`), values });
        }
    }
    function translate(value) {
        const source = normalize(value);
        const index = langIndex();
        if (messages.has(source)) return messages.get(source)[index];
        for (const pattern of patterns) {
            const match = source.match(pattern.regex);
            if (match) return pattern.values[index].replace(/\{(\d+)\}/g, (_, n) => match[Number(n) + 1]);
        }
        // Parenthetical word meanings are data, not romanization: only known glosses match.
        let result = source.replace(/\(([^()]+)\)/g, (whole, gloss) => messages.has(gloss) ? `(${messages.get(gloss)[index]})` : whole);
        if (/^· /.test(result) && messages.has(result.slice(2))) result = `· ${messages.get(result.slice(2))[index]}`;
        return result;
    }
    const originals = new WeakMap();
    const attributes = new WeakMap();
    const skip = el => !el || !!el.closest('script, style, textarea, #learning-coach, #lang-options-container, [data-no-localize]');
    function localize(root = document.body) {
        if (!root || (root.nodeType === 1 && skip(root))) return;
        if (root === document.body) document.title = translate('K-Talk Coach 🇰🇷 | Speak Korean with K-Drama & K-Pop');
        const translateNode = node => {
            if (skip(node.parentElement) || !node.textContent.trim()) return;
            const previous = originals.get(node);
            const source = previous && node.textContent === previous.output ? previous.source : node.textContent;
            const translated = translate(source);
            const output = translated === normalize(source) ? source : source.replace(source.trim(), translated);
            originals.set(node, { source, output });
            if (node.textContent !== output) node.textContent = output;
        };
        if (root.nodeType === 3) translateNode(root);
        else {
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) translateNode(walker.currentNode);
            const elements = [root, ...root.querySelectorAll('[title], [placeholder], [aria-label]')];
            elements.forEach(el => {
                if (skip(el)) return;
                const record = attributes.get(el) || {};
                ['title', 'placeholder', 'aria-label'].forEach(name => {
                    if (!el.hasAttribute(name)) return;
                    const value = el.getAttribute(name);
                    const previous = record[name];
                    const source = previous && value === previous.output ? previous.source : value;
                    const output = translate(source);
                    record[name] = { source, output };
                    if (value !== output) el.setAttribute(name, output);
                });
                attributes.set(el, record);
            });
        }
    }
    function init() {
        compilePatterns();
        localize();
        document.title = translate('K-Talk Coach 🇰🇷 | Speak Korean with K-Drama & K-Pop');
        const observer = new MutationObserver(records => {
            const roots = new Set();
            records.forEach(r => {
                if (r.type === 'childList') r.addedNodes.forEach(n => { if (n.nodeType === 1 || n.nodeType === 3) roots.add(n); });
                else roots.add(r.target);
            });
            roots.forEach(root => { if (root.isConnected) localize(root); });
        });
        observer.observe(document.body, { subtree: true, childList: true, characterData: true });
    }
    const install = {
        en: {
            title: 'Install K-Talk', open: 'Open in your browser',
            kakao: ['Open this page in Chrome, Edge or Safari using the browser menu.', 'Then follow the installation instructions for your device.'],
            android: ['Open the browser menu (⋮).', 'Choose “Install app” or “Add to Home screen”.', 'Confirm to add the K-Talk icon.'],
            ios: ['Open this page in Safari.', 'Tap Share and choose “Add to Home Screen”.', 'Tap “Add” to confirm.'],
            desktop: ['Open this page in Chrome or Edge.', 'Use the install icon in the address bar, or the browser’s app menu.', 'Choose “Install” if available. The options depend on your browser.']
        },
        ja: {
            title: 'K-Talkを追加', open: '外部ブラウザーで開く',
            kakao: ['ブラウザーメニューからChrome・Edge・Safariでこのページを開きます。', 'その後、端末に合った追加手順に従ってください。'],
            android: ['ブラウザーのメニュー（⋮）を開きます。', '「アプリをインストール」または「ホーム画面に追加」を選びます。', '確認するとK-Talkのアイコンが追加されます。'],
            ios: ['このページをSafariで開きます。', '共有ボタンから「ホーム画面に追加」を選びます。', '「追加」をタップして完了します。'],
            desktop: ['このページをChromeまたはEdgeで開きます。', 'アドレスバーのインストールアイコンか、ブラウザーのアプリメニューを開きます。', '利用可能な場合は「インストール」を選びます。表示はブラウザーによって異なります。']
        },
        zh: {
            title: '安装K-Talk', open: '在外部浏览器打开',
            kakao: ['通过浏览器菜单，在Chrome、Edge或Safari中打开此页。', '然后按设备对应的步骤安装。'],
            android: ['打开浏览器菜单（⋮）。', '选择“安装应用”或“添加到主屏幕”。', '确认后即可添加K-Talk图标。'],
            ios: ['在Safari中打开此页。', '点击分享，选择“添加到主屏幕”。', '点击“添加”确认。'],
            desktop: ['使用Chrome或Edge打开此页。', '点击地址栏的安装图标，或打开浏览器的应用菜单。', '若有“安装”选项，请选择它。具体选项因浏览器而异。']
        },
        es: {
            title: 'Instalar K-Talk', open: 'Abrir en el navegador',
            kakao: ['Abre esta página en Chrome, Edge o Safari desde el menú del navegador.', 'Después sigue las instrucciones de tu dispositivo.'],
            android: ['Abre el menú del navegador (⋮).', 'Elige «Instalar aplicación» o «Añadir a pantalla de inicio».', 'Confirma para añadir el icono de K-Talk.'],
            ios: ['Abre esta página en Safari.', 'Toca Compartir y elige «Añadir a pantalla de inicio».', 'Toca «Añadir» para confirmar.'],
            desktop: ['Abre esta página en Chrome o Edge.', 'Usa el icono de instalación de la barra de direcciones o el menú de aplicaciones.', 'Elige «Instalar» si aparece. Las opciones dependen del navegador.']
        },
        th: {
            title: 'ติดตั้ง K-Talk', open: 'เปิดในเบราว์เซอร์ภายนอก',
            kakao: ['เปิดหน้านี้ใน Chrome, Edge หรือ Safari ผ่านเมนูเบราว์เซอร์', 'จากนั้นทำตามขั้นตอนติดตั้งสำหรับอุปกรณ์ของคุณ'],
            android: ['เปิดเมนูเบราว์เซอร์ (⋮)', 'เลือก “ติดตั้งแอป” หรือ “เพิ่มไปยังหน้าจอหลัก”', 'ยืนยันเพื่อเพิ่มไอคอน K-Talk'],
            ios: ['เปิดหน้านี้ใน Safari', 'แตะปุ่มแชร์แล้วเลือก “เพิ่มไปยังหน้าจอหลัก”', 'แตะ “เพิ่ม” เพื่อยืนยัน'],
            desktop: ['เปิดหน้านี้ใน Chrome หรือ Edge', 'ใช้ไอคอนติดตั้งในแถบที่อยู่ หรือเมนูแอปของเบราว์เซอร์', 'เลือก “ติดตั้ง” หากมี ตัวเลือกขึ้นอยู่กับเบราว์เซอร์']
        }
    };
    function showInstallGuide() {
        const ua = navigator.userAgent || '';
        const isKakao = /KAKAOTALK/i.test(ua);
        const isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        const kind = isKakao ? 'kakao' : isIOS ? 'ios' : /android/i.test(ua) ? 'android' : 'desktop';
        const t = install[locales[langIndex()]];
        document.getElementById('pwa-guide-title').textContent = t.title;
        const content = document.getElementById('pwa-guide-content');
        content.replaceChildren();
        t[kind].forEach((step, i) => {
            const p = document.createElement('p');
            p.className = 'text-left text-sm leading-relaxed mb-3';
            p.textContent = `${i + 1}. ${step}`;
            content.append(p);
        });
        const buttons = document.getElementById('pwa-guide-btn-container');
        buttons.replaceChildren();
        if (isKakao) {
            const open = document.createElement('button');
            open.className = 'w-full bg-rose-600 rounded-xl p-3 mb-2';
            open.textContent = t.open;
            open.onclick = openInExternalBrowser;
            buttons.append(open);
        }
        const close = document.createElement('button');
        close.className = 'w-full bg-slate-700 rounded-xl p-3';
        close.textContent = translate('닫기');
        close.onclick = () => document.getElementById('pwa-guide-modal').classList.add('hidden');
        buttons.append(close);
        document.getElementById('pwa-guide-modal').classList.remove('hidden');
    }
    window.KTalkLocale = { init, localize, translate, showInstallGuide, add, locales, messages };
})();
