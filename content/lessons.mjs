// Original beginner lessons. HTML is generated at development time, never required to read a lesson.
export const lessons = [
{
slug:'hangul-syllable-blocks', title:'How to Read Hangul Syllable Blocks', level:'Start here', tab:'hangul',
description:'Learn how Korean letters fit into syllable blocks, read simple words, and practise building Hangul with examples and a short quiz.',
intro:'Korean writing is an alphabet arranged in blocks. Instead of reading every shape as a separate word, read one block as one syllable. Once you can see the initial consonant, vowel and optional final consonant, a word such as 한국 becomes much less intimidating.',
sections:[
['Find the consonant and vowel','Every written syllable needs an initial consonant position and a vowel. In 가, ㄱ comes first and ㅏ is the vowel. In 나, ㄴ combines with the same vowel. The letters keep their identities even though their positions change. Start with the sound of the whole syllable, then identify the parts.'],
['Look right or down for the vowel','A vertical vowel such as ㅏ sits to the right: ㄱ + ㅏ → 가. A horizontal vowel such as ㅗ sits below: ㄱ + ㅗ → 고. More complex vowels can occupy both areas. These are layout rules, not instructions to pause between letters. Say 가 as one beat rather than a consonant followed by a separate English vowel.'],
['Notice silent initial ㅇ','A syllable that begins with a vowel still needs the initial position filled. Initial ㅇ does this without adding a consonant sound: 아 starts with the vowel 아. Compare 아 with 나. At the bottom of a block, however, ㅇ represents an ng sound. Its position matters; it is not always silent.'],
['Add a final consonant','In 한, ㅎ and ㅏ form the top portion and ㄴ sits below. Read 한 as one syllable. Then read 국 as another syllable: 한국 has two blocks and two syllables. The final consonant is called 받침. Do not add an extra vowel after it. You can practise without a final consonant first, then add one in the Hangul builder.'],
['A five-minute practice routine','Read 가, 나 and 아 aloud. Change ㅏ to ㅗ to make 고, 노 and 오. Next compare 가 with 간: only the final ㄴ changes. Finally copy 한 and 국 while saying each whole block. Romanization can help you get started, but return your eyes to the Korean letters so that you learn to read rather than decode English spelling.']
],
phrases:[['가','ga','A simple consonant + vowel block.'],['고','go','The vowel sits below the consonant.'],['아','a','Initial ㅇ is silent.'],['한','han','The final ㄴ is underneath.'],['한국','hanguk','Korea; two written syllable blocks.']],
mistake:'Do not read 한국 as three or four English-style syllables. Keep the final consonants attached to their blocks. Actual pronunciation can change when syllables meet; learning block structure is the first step, not the entire pronunciation system.',
task:'Open the Hangul lab. Build 가, then 고, then 간. Listen after each change and explain to yourself which letter moved or was added.',
quiz:[['How many syllable blocks are in 한국?',['One','Two','Four'],1,'한 and 국 are two blocks, each representing one syllable.'],['What does initial ㅇ do in 아?',['Adds an ng sound','Fills the initial position silently','Makes a final consonant'],1,'Initial ㅇ is silent. Final ㅇ has a different job.'],['Where is ㄴ in 한?',['At the bottom as 받침','Above ㅎ','Outside the syllable'],0,'ㄴ is the final consonant underneath ㅎ and ㅏ.']]
},
{
slug:'korean-vowels-eo-o-eu-u', title:'Korean Vowels: ㅓ vs ㅗ and ㅡ vs ㅜ',level:'Pronunciation',tab:'hangul',
description:'Compare four easily confused Korean vowels with mouth-position tips, Hangul examples, listening practice and a beginner quiz.',
intro:'English spelling cannot represent every Korean vowel accurately. Two useful contrasts are ㅓ versus ㅗ and ㅡ versus ㅜ. Work with your lips and tongue while listening to a Korean voice, rather than treating both pairs as the same English sound.',
sections:[
['Keep a vowel steady','Korean vowels are useful to practise as steady sounds. Avoid automatically turning 오 into the English glide in “go.” Say the vowel comfortably, keep the mouth position stable, and stop. A recording or a good Korean speech voice is a better reference than a romanized word alone.'],
['ㅓ and ㅗ: check your lips','For ㅓ, represented by 어 on its own, keep the lips relatively unrounded and the mouth open. For ㅗ, represented by 오, round the lips. Tongue position also differs. The spelling eo represents one Korean vowel, not an e sound followed by an o sound. Alternate 어–오 slowly before adding consonants.'],
['ㅡ and ㅜ: round or unround','For ㅡ, represented by 으, keep the lips unrounded. For ㅜ, represented by 우, round the lips. Both involve the tongue toward the back compared with 이, but do not force the mouth into an uncomfortable position. Compare 으–우 in a mirror, then try 그–구.'],
['Move from isolated sounds to words','Compare 거 and 고, then 그 and 구. When a contrast becomes easier, listen to a short word and repeat it without exaggeration. Do not use pitch alone to distinguish the vowels: Korean does not use Mandarin-style lexical tones in standard Seoul speech. Mouth position and vowel quality are the important cues here.'],
['Use a short feedback loop','Play one sound, pause, repeat it, and play it again. Practise two contrasting sounds in alternating order so that you do not simply memorize a sequence. If your device offers several Korean voices, compare them. Browser speech and speech recognition are practice aids; recognized words are not a reliable score for every detail of pronunciation.']
],
phrases:[['어','eo','One unrounded vowel, not two sounds.'],['오','o','Round the lips; keep the vowel steady.'],['으','eu','Keep the lips unrounded.'],['우','u','Round the lips.'],['그, 구','geu, gu','Compare the same consonant with two vowels.']],
mistake:'Do not pronounce eo as “ee-oh” or eu as “you.” Romanization is a reading aid, not a precise pronunciation guide. A vowel contrast may take repeated listening over several days.',
task:'In the Hangul lab, keep ㄱ selected and change between ㅓ, ㅗ, ㅡ and ㅜ. Listen at normal speed and then at the slower setting.',
quiz:[['Which vowel normally uses rounded lips?',['ㅗ','ㅓ','ㅡ'],0,'ㅗ is rounded; ㅓ and ㅡ are unrounded.'],['How many vowels does eo represent in 어?',['Two','Three','One'],2,'eo is a romanization for one Korean vowel.'],['Which pair is a useful lip-rounding contrast?',['ㅡ / ㅜ','ㄱ / ㄴ','가 / 간'],0,'ㅡ and ㅜ differ in lip rounding and vowel quality.']]
},
{
slug:'batchim-final-consonants',title:'Batchim: Korean Final Consonants for Beginners',level:'Pronunciation',tab:'hangul',
description:'Understand Korean batchim, the seven basic final sound categories and linking before vowels, with practical examples and a short quiz.',
intro:'받침, often written batchim in English, is a consonant at the bottom of a Korean syllable block. It affects both the shape of the block and the way the word sounds. A final consonant is not always pronounced like the same letter at the beginning of a syllable.',
sections:[
['Locate the final consonant','Compare 가 and 간. The second block has ㄴ underneath the vowel: that is its 받침. In 밥, the final ㅂ closes the syllable. Some blocks have two written final consonants, such as 읽. Reading those clusters requires further rules, so begin with simple final consonants before trying to memorize every cluster.'],
['Learn seven basic ending sounds','At a pause or before many consonants, Korean final sounds fall into seven basic categories: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ and ㅇ. Different written letters can share an ending sound. For example, 옷 ends with a ㄷ-type sound when said alone, even though the written final letter is ㅅ. These categories are a starting point; surrounding sounds can cause additional changes.'],
['Close the sound without adding a vowel','Final ㄱ, ㄷ and ㅂ are normally unreleased in isolation. Close the relevant part of the mouth without adding a strong puff or another syllable. 국 should not gain an extra “ku,” and 밥 should not end in an extra “bu.” Final ㄴ and ㅁ can be held more easily, which makes them useful first practice sounds.'],
['Link into a following vowel','When a suitable final consonant is followed by a vowel-initial ending, it can link into the next syllable. 밥 + 이 is written 밥이 and is pronounced roughly [바비]. 옷 + 이 becomes 옷이, pronounced [오시]. Here brackets show pronunciation, not replacement spelling. Keep the original spelling when writing.'],
['Practise words in context','Listen first to 밥 on its own, then 밥이 있어요. Compare 옷 with 옷이. A full sentence lets you hear why reading every block in isolation is not enough. Rules such as nasalization, tensification and changes involving ㅎ come later. Learn a few frequent phrases accurately and add rules as you encounter them.']
],
phrases:[['밥','bap','Rice or a meal; close the final lips without another vowel.'],['밥이','babi','The final ㅂ links before 이.'],['옷','ot','Clothes; a ㄷ-type final sound in isolation.'],['옷이','osi','The written ㅅ links before 이.'],['한국어','hangugeo','Korean language; listen to the connected syllables.']],
mistake:'Do not replace the written word with a pronunciation spelling. 옷이 is still written 옷이 even though it sounds like [오시]. Also avoid applying the seven ending sounds mechanically before every vowel.',
task:'Build a syllable with and without 받침. Then use the listening coach to compare 한국어 and the linking examples without inserting pauses between blocks.',
quiz:[['What is 받침?',['A vowel on the right','A consonant at the bottom of a block','A sentence-ending mark'],1,'받침 is the written final consonant position.'],['How is 밥이 commonly pronounced?',['[바비]','[밥으이]','[바피]'],0,'ㅂ links into the vowel-initial particle 이.'],['Should you add an extra vowel after final ㄱ?',['Always','Only in questions','No'],2,'Keep the final consonant attached without an extra syllable.']]
},
{
slug:'korean-greetings-politeness',title:'Korean Greetings and Politeness: 안녕하세요',level:'Everyday Korean',tab:'realkorean',
description:'Learn Korean greetings, thank-you phrases and the difference between polite and casual speech, with realistic examples and practice.',
intro:'A useful greeting does more than translate “hello.” It helps you choose a comfortable level of politeness with the person in front of you. For a beginner talking to an unfamiliar adult, polite Korean is a practical starting point.',
sections:[
['Begin with 안녕하세요','안녕하세요 works for many everyday greetings, including meeting a shop worker, a neighbour or someone you have just been introduced to. A small nod can accompany it. It does not have to be a long or dramatic performance. Say the whole phrase smoothly, rather than separating every written syllable.'],
['Choose polite language first','해요체, the polite style commonly ending in 요, is used widely in everyday conversation. 합니다-style speech is more formal and appears in announcements, presentations and formal situations. Casual speech, or 반말, fits certain close relationships. Being younger than someone is not a reason to begin casually with them. Wait until the relationship clearly supports it.'],
['Thank and apologize naturally','감사합니다 is a widely useful polite thank-you. 고마워요 is another polite choice. 죄송해요 or 죄송합니다 can express an apology. 실례합니다 is useful for politely interrupting or passing through a space. These expressions overlap in some situations but are not interchangeable in every context. Think about what you are doing, not only the English word.'],
['Say goodbye according to who leaves','안녕히 가세요 is said to someone who is leaving. 안녕히 계세요 is said to someone who is staying when you leave. If both people are leaving, 안녕히 가세요 is a common choice. A shop worker may use a different friendly closing, so do not expect every real conversation to follow one fixed script.'],
['Try a small exchange','You enter a small shop: 안녕하세요. You receive your purchase: 감사합니다. You leave while the owner stays: 안녕히 계세요. Practise the sequence with a pause for the other person’s reply. In the app, compare the casual, everyday polite and formal versions to notice how endings change while the main intention remains similar.']
],
phrases:[['안녕하세요.','annyeonghaseyo','Hello; a broadly useful polite greeting.'],['감사합니다.','gamsahamnida','Thank you.'],['실례합니다.','sillyehamnida','Excuse me.'],['안녕히 가세요.','annyeonghi gaseyo','Goodbye to someone leaving.'],['안녕히 계세요.','annyeonghi gyeseyo','Goodbye to someone staying.']],
mistake:'Do not use 안녕 with every stranger just because it is shorter. It is casual. Also distinguish the two goodbye phrases by who stays and who leaves, rather than memorizing both as an identical “bye.”',
task:'Open Real K and compare the three speech levels for an everyday situation. Choose the polite version you could use with an unfamiliar adult.',
quiz:[['A useful first greeting to an unfamiliar adult is…',['안녕.','안녕하세요.','잘 자.'],1,'안녕하세요 is a practical polite greeting.'],['You leave and the other person stays. Say…',['안녕히 계세요.','안녕히 가세요.','어서 오세요.'],0,'계세요 addresses the person who is staying.'],['Should you start casual speech with every younger stranger?',['Yes','Only if they smile','No'],2,'Age alone does not establish a relationship for casual speech.']]
},
{
slug:'ordering-korean-cafe',title:'How to Order Coffee in Korean',level:'Travel Korean',tab:'realkorean',
description:'Order at a Korean café using 주세요, 잔 and 포장, understand common staff questions, and practise a short café conversation.',
intro:'A café order is a small conversation with several choices: drink, quantity, temperature and whether you will stay. You can begin with one clear sentence and add details as needed. You do not need a complicated grammar pattern to make a polite request.',
sections:[
['Use a drink name plus 주세요','아메리카노 한 잔 주세요 means “One Americano, please.” 주세요 is a useful polite request pattern. The counter 잔 is used for cups or glasses of drinks. One becomes 한 before this counter, so use 한 잔 rather than 하나 잔. On a noisy day, pointing at the menu while saying the order is perfectly practical.'],
['Choose hot or iced','아이스 아메리카노 is a common iced Americano order. 따뜻한 아메리카노 asks for a hot one. Staff may ask 아이스로 드릴까요? to confirm an iced drink. Reply 네, 아이스로 주세요 if that is what you want. You may hear loanwords pronounced in Korean rhythm; do not expect the stress pattern of English “Americano.”'],
['Stay or take away','포장해 주세요 asks for takeaway. 매장에서 마실게요 says that you will drink in the café. Staff may ask 드시고 가세요? to check whether you will stay. Listening for 포장 and 매장 helps you recognize the choice even before you understand every part of the question.'],
['Make changes without overcomplicating','시럽 빼 주세요 means “Please leave out the syrup.” This is a request, not a guarantee that every item can be changed. If an ingredient matters for an allergy, explain it explicitly and confirm with the staff. For ordinary preferences, a short request is often easier to understand than a long memorized sentence.'],
['Rehearse the whole exchange','Customer: 아이스 아메리카노 한 잔 주세요. Staff: 드시고 가세요? Customer: 아니요, 포장해 주세요. Finish with 감사합니다 after receiving the drink. Practise each turn separately, then say the customer turns from memory. Change only the drink or quantity at first so that you keep the useful sentence frame stable.']
],
phrases:[['아이스 아메리카노 한 잔 주세요.','aiseu amerikano han jan juseyo','One iced Americano, please.'],['따뜻한 걸로 주세요.','ttatteuthan geollo juseyo','The hot one, please.'],['포장해 주세요.','pojanghae juseyo','To take away, please.'],['매장에서 마실게요.','maejangeseo masilgeyo','I will drink it here.'],['시럽 빼 주세요.','sireop ppae juseyo','Please leave out the syrup.']],
mistake:'Do not use 하나 잔 for one cup. Use 한 잔. Listen for the choice in a staff question instead of automatically answering 네 to every sentence you hear.',
task:'In Real K, practise a service conversation in polite speech. Say your drink order before playing the example, then compare your wording.',
quiz:[['Which means one cup?',['하나 잔','일 개','한 잔'],2,'하나 changes to 한 before the counter 잔.'],['What asks for takeaway?',['포장해 주세요.','안녕히 계세요.','다시 말해 주세요.'],0,'포장 asks to have the item packed to take away.'],['Which word helps you recognize an iced drink?',['아이스','시럽','매장'],0,'아이스 is the Korean loanword used for iced drinks.']]
},
{
slug:'ordering-korean-restaurant',title:'Korean Restaurant Phrases: Ordering and Paying',level:'Travel Korean',tab:'realkorean',
description:'Ask for a table, order food and water, check spiciness and request the bill in Korean using polite restaurant phrases.',
intro:'At a Korean restaurant, a few clear phrases can carry you from finding a table to paying. Start with polite requests and listen for the staff’s reply. Restaurant routines vary, so use the language to clarify rather than assuming every place works the same way.',
sections:[
['Tell the staff how many people','두 명이에요 means “There are two of us.” 명 counts people in ordinary situations. For one person, say 한 명이에요. Staff may guide you to a table or indicate a self-service area. If you are not sure where to sit, 여기 앉아도 돼요? politely asks whether you may sit here.'],
['Point, name and request','이거 하나 주세요 means “One of this, please.” It works while pointing at a menu item. If you know the name, 비빔밥 하나 주세요 is more specific. Some menus have minimum portions or items for sharing; the phrase itself does not override those conditions. Watch and listen for a clarification about servings.'],
['Ask about food you may not know','이거 매워요? asks whether a dish is spicy. 덜 맵게 해 주세요 asks for a less spicy version, when that is possible. If you have an allergy, do not rely on a generic preference such as “not spicy.” Name the ingredient, explain the allergy and confirm how the dish is prepared with staff.'],
['Handle small requests politely','물 좀 주세요 asks for water. 여기요 can politely attract a server’s attention, but use a normal voice and wait. Water, side dishes or utensils may be self-service in some places. If you do not understand a reply, ask 다시 한 번 말해 주세요 rather than pretending you understood.'],
['Pay and close the exchange','계산해 주세요 asks to pay. 카드 돼요? asks whether a card can be used. In many restaurants you pay at a counter near the exit, though the process varies. After a meal, 잘 먹었습니다 is a courteous way to say you enjoyed or appreciated the meal. Practise these phrases as a sequence with pauses for answers.']
],
phrases:[['두 명이에요.','du myeongieyo','There are two of us.'],['이거 하나 주세요.','igeo hana juseyo','One of this, please.'],['이거 매워요?','igeo maewoyo','Is this spicy?'],['물 좀 주세요.','mul jom juseyo','Some water, please.'],['계산해 주세요.','gyesanhae juseyo','I would like to pay, please.']],
mistake:'Do not treat 덜 맵게 as an allergy warning. It only asks for less spiciness. For ordinary requests, remember 주세요 instead of using an abrupt item name on its own.',
task:'Use Real K to rehearse a food request, then say an order using a different food name. Finish with the phrase you would use to pay.',
quiz:[['Which tells a restaurant there are two people?',['두 명이에요.','두 잔이에요.','이천 원이에요.'],0,'명 is a common counter for people.'],['Which asks whether a dish is spicy?',['물 좀 주세요.','이거 매워요?','계산해 주세요.'],1,'매워요? asks about spiciness.'],['When you want to pay, say…',['잘 자요.','계산해 주세요.','천천히 말해 주세요.'],1,'계산해 주세요 is a useful request to pay.']]
},
{
slug:'korean-numbers-prices',title:'Korean Numbers for Prices, People and Drinks',level:'Everyday Korean',tab:'quiz',
description:'Learn when to use Sino-Korean and native Korean numbers for prices, people and drinks, with practical examples and a beginner quiz.',
intro:'Korean uses two common number systems. You do not need to master every number at once. Start by separating the numbers you hear in prices from the numbers used with everyday counters such as people and cups.',
sections:[
['Use Sino-Korean numbers for prices','일, 이, 삼, 사, 오, 육, 칠, 팔, 구 and 십 are the basic Sino-Korean numbers from one to ten. Price amounts normally use this system with 원. 천 원 is 1,000 won, 이천 원 is 2,000 won and 오천 원 is 5,000 won. In 일천, the initial 일 is normally omitted in everyday prices: say 천 원.'],
['Build the amount in chunks','십 is ten, 백 is one hundred and 천 is one thousand. 삼천오백 원 means 3,500 won: three thousand plus five hundred. Korean groups larger values around 만, ten thousand. Do not force a large price into English “thousand” groupings while listening. For a beginner, practising amounts below 만 first is a useful step.'],
['Use native numbers with common counters','Native Korean numbers begin 하나, 둘, 셋 and 넷. Before many counters, these become 한, 두, 세 and 네. 한 명 is one person, 두 명 is two people and 세 잔 is three cups. The counter tells you what is being counted, so learn a number and its counter as a small phrase.'],
['Remember that context chooses the system','Prices usually use Sino-Korean numbers, while people and cups commonly use native numbers. Time combines the systems: native numbers for hours and Sino-Korean numbers for minutes. Phone numbers and dates have their own common patterns too. Rather than guessing from the English number, identify the kind of information first.'],
['Practise a real purchase','Ask 얼마예요? and listen for an amount ending in 원. Then order 두 잔 주세요 for two drinks. You have used two systems in one transaction. Write 2,000 and 2 cups on a note and say each aloud: 이천 원, 두 잔. This contrast makes the rule easier to remember than reciting both full number lists.']
],
phrases:[['얼마예요?','eolmayeyo','How much is it?'],['이천 원이에요.','icheon wonieyo','It is 2,000 won.'],['삼천오백 원이에요.','samcheonobaek wonieyo','It is 3,500 won.'],['두 명이에요.','du myeongieyo','There are two people.'],['세 잔 주세요.','se jan juseyo','Three cups, please.']],
mistake:'Do not say 둘 명 or 셋 잔 in ordinary counting phrases. Use 두 명 and 세 잔. Also avoid treating 만 as one thousand: it means ten thousand.',
task:'Open the vocabulary quiz and practise recalling Korean without looking at romanization. Separately say three prices and three quantities aloud to choose the number system deliberately.',
quiz:[['Which means 2,000 won?',['두 원','이천 원','이백 원'],1,'이천 is two thousand.'],['Which is the usual phrase for two people?',['이 명','둘 명','두 명'],2,'둘 changes to 두 before 명.'],['What value is 만?',['1,000','100','10,000'],2,'만 is ten thousand.']]
},
{
slug:'asking-directions-korean',title:'Ask for Directions in Korean: 어디예요?',level:'Travel Korean',tab:'realkorean',
description:'Ask where a station or restroom is, recognize basic directions, and request clarification in Korean with useful travel phrases.',
intro:'Asking for directions is only half the task: you also need a way to understand or clarify the answer. Learn one location question, a few direction words and a polite request to repeat. Keep your destination visible on your phone if its name is unfamiliar.',
sections:[
['Ask where a place is','화장실이 어디예요? means “Where is the restroom?” 어디 asks where. After a noun ending in a consonant, 이 can mark the subject; after a vowel, 가 is used. 서울역이 어디예요? follows the same pattern. In everyday speech a particle may be omitted, but learning the complete pattern gives you a useful base.'],
['Listen for right, left and straight','오른쪽 means right, 왼쪽 means left and 쭉 means straight or continuously along. 오른쪽으로 가세요 asks you to go to the right. 쭉 가세요 tells you to continue straight. A speaker may point as well. Repeat the key direction back to confirm rather than trying to memorize a long reply in one hearing.'],
['Check distance and landmarks','여기서 멀어요? asks whether it is far from here. 가까워요 means it is close. 출구 is an exit, 입구 is an entrance and 길 is a road or way. In a station, a numbered exit may be more useful than a street address. If staff show you a sign, match the Korean place name carefully to the one you need.'],
['Ask for help when you lose the thread','천천히 말해 주세요 means “Please speak slowly.” 다시 한 번 말해 주세요 asks for one more repetition. 지도에서 보여 주세요 asks someone to show you on the map. These are normal communication tools, not signs of failure. A short clarification can prevent a much longer detour.'],
['Build a small dialogue','You: 화장실이 어디예요? Other person: 쭉 가서 오른쪽으로 가세요. You: 오른쪽이요? 감사합니다. The second line means to go straight and then turn right. In practice, directions depend on the building and street. Learn the language pattern rather than memorizing the sample as navigation advice for a real location.']
],
phrases:[['화장실이 어디예요?','hwajangsiri eodiyeyo','Where is the restroom?'],['서울역이 어디예요?','seoullyeogi eodiyeyo','Where is Seoul Station?'],['오른쪽으로 가세요.','oreunjjogeuro gaseyo','Go to the right.'],['여기서 멀어요?','yeogiseo meoreoyo','Is it far from here?'],['지도에서 보여 주세요.','jidoeseo boyeo juseyo','Please show me on the map.']],
mistake:'Do not confuse 오른쪽 and 왼쪽 just because you recognize the sentence ending. Confirm the direction word. These examples teach language; check a current map for your actual route.',
task:'In Real K, practise a travel situation. Ask a location question aloud and then use a clarification phrase before listening again.',
quiz:[['Which word means where?',['얼마','어디','언제'],1,'어디 asks where; 얼마 asks how much and 언제 asks when.'],['What does 왼쪽 mean?',['Left','Right','Straight'],0,'왼쪽 is left.'],['Which asks for a map explanation?',['계산해 주세요.','지도에서 보여 주세요.','포장해 주세요.'],1,'지도에서 보여 주세요 asks to be shown on a map.']]
},
{
slug:'korean-questions-intonation',title:'Korean Questions and Statement Intonation',level:'Listening skills',tab:'realkorean',
description:'Compare 가요. and 가요?, understand why not every Korean question rises, and practise question words and natural sentence endings.',
intro:'Korean can use the same everyday polite ending in a statement and a question. 가요. can say that someone goes, while 가요? can ask whether they go. Meaning comes from context and intonation as well as the words. Punctuation is a helpful reading cue, but real conversation is more flexible.',
sections:[
['Compare a statement and a yes/no question','A statement such as 괜찮아요. usually settles toward its end. A neutral yes/no question such as 괜찮아요? often rises gently. Keep the beginning similar and let the end carry the contrast. Do not jump to a very high pitch or separate the last syllable from the rest of the word.'],
['Do not make every question rise','Questions containing 뭐, 누구 or 어디 can have falling or other contours depending on context, emphasis and the speaker. 어디 가요? is still a question even when it does not sound like an exaggerated English yes/no question. Korean dialects and individual voices also differ. Listen to a whole exchange rather than applying one rule to every question mark.'],
['Learn question words in a frame','뭐예요? means “What is it?” 어디예요? asks where something is. 언제 가요? asks when someone is going. Replace only the question word at first and notice how it changes the information being requested. Korean often leaves out the subject when the conversation already makes it clear.'],
['Read punctuation but keep the phrase connected','Written periods and question marks help a speech system interpret a sentence. Browser-generated speech still depends on the installed Korean voice. A slower speed can make the words easier to hear, but it does not guarantee a perfect conversational contour. Compare available voices and use the app’s complete-phrase playback instead of spelling out syllables.'],
['Practise with a partner or a recording','Say 있어요. as a statement, pause, then 있어요? as a question. Answer the question with 네, 있어요 or 아니요, 없어요. Repeat with 괜찮아요. and 괜찮아요? while imagining the situation. Recording yourself can help you hear the difference; automatic speech recognition checks recognized words and does not reliably grade the intonation itself.']
],
phrases:[['가요.','gayo','A statement: someone goes or is going.'],['가요?','gayo','A yes/no question in context.'],['괜찮아요?','gwaenchanayo','Are you okay? / Is it okay?'],['어디 가요?','eodi gayo','Where are you going?'],['이게 뭐예요?','ige mwoyeyo','What is this?']],
mistake:'A question mark does not mean “always raise the pitch sharply.” Avoid chopping off and resynthesizing the final syllable. Practise natural connected speech and keep the situation in mind.',
task:'Open the listening coach in the app. Compare the statement/question pairs at normal speed, then repeat each complete sentence with its intended meaning.',
quiz:[['A neutral yes/no question often…',['Rises gently at the end','Has no intonation','Requires shouting'],0,'A gentle rise is common, but context and voice matter.'],['Must every Korean question rise?',['Yes','No','Only if written in Hangul'],1,'Question-word questions can fall depending on context.'],['Does speech recognition reliably grade intonation?',['Yes, perfectly','Only on phones','No'],2,'Recognized words do not provide a reliable intonation score.']]
},
{
slug:'korean-when-you-dont-understand',title:'What to Say When You Do Not Understand Korean',level:'Conversation essentials',tab:'realkorean',
description:'Keep a Korean conversation going with polite requests to repeat, speak slowly, explain a word or write it down, plus practice questions.',
intro:'You do not need to understand every word to keep a conversation going. A small set of repair phrases lets you ask for a slower pace, another explanation or a written word. Learn these early so that you can use real conversations as practice.',
sections:[
['Say what you need clearly','잘 모르겠어요 means that you are not sure or do not really understand. Pair it with a specific request: 천천히 말해 주세요 asks the speaker to slow down. This gives the other person something helpful to do. Simply smiling and saying 네 may hide a misunderstanding until it becomes harder to fix.'],
['Ask for one more repetition','다시 한 번 말해 주세요 means “Please say that once more.” Listen for the part you missed rather than trying to translate everything at once. If a particular word is the problem, repeat that word with a questioning tone or point to it. A shorter clarification is often easier for both speakers.'],
['Ask about meaning or writing','이게 무슨 뜻이에요? means “What does this mean?” 여기 써 주세요 asks someone to write it here. Written Korean can help with names, menu items or addresses. Do not show personal information to strangers unnecessarily; a blank note on your phone is enough for a language example.'],
['Mention your current level','한국어를 배우고 있어요 means “I am learning Korean.” It explains why you may need a little more time. 영어 할 수 있어요? asks whether someone can speak English, but do not assume the answer will be yes. You can combine a Korean repair phrase, a gesture and a written word to communicate even without a shared fluent language.'],
['Turn a repair into learning','After you understand, repeat the useful word and thank the speaker. Later, save a short phrase in your own notes and practise it again. For example: 잘 모르겠어요. 다시 한 번 말해 주세요. Then: 아, 알겠어요. 감사합니다. The goal is not a flawless performance; it is checking meaning and continuing respectfully.']
],
phrases:[['천천히 말해 주세요.','cheoncheonhi malhae juseyo','Please speak slowly.'],['다시 한 번 말해 주세요.','dasi han beon malhae juseyo','Please say that once more.'],['이게 무슨 뜻이에요?','ige museun tteusieyo','What does this mean?'],['여기 써 주세요.','yeogi sseo juseyo','Please write it here.'],['한국어를 배우고 있어요.','hangugeoreul baeugo isseoyo','I am learning Korean.']],
mistake:'Do not automatically answer 네 when you have not understood an important detail. Ask a specific question, especially about a price, destination or arrangement. Repeating a memorized sentence is most useful when it solves a real communication problem.',
task:'Use the coach’s rescue phrases in the app. Practise one repair phrase from memory, listen to it, and then use it in an imagined two-turn conversation.',
quiz:[['Which asks someone to speak slowly?',['천천히 말해 주세요.','계산해 주세요.','안녕히 가세요.'],0,'천천히 means slowly.'],['What does 다시 한 번 request?',['A written address','One more time','A lower price'],1,'다시 한 번 means once again.'],['What asks about a word’s meaning?',['이게 무슨 뜻이에요?','얼마예요?','몇 명이에요?'],0,'무슨 뜻 asks about meaning.']]
}
];
