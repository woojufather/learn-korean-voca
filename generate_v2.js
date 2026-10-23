const fs = require('fs');
const path = require('path');

// 5 Featured Situational Learning Cards (Sample Situations 1-5)
const FEATURED_SAMPLES = [
  {
    id: 1,
    tag: "CAFE",
    category: "☕ Cafe (카페)",
    category_en: "Cafe Ordering",
    scene_title_en: "Ordering Takeout Coffee at a Cafe",
    scene_title_ko: "카페에서 아이스 아메리카노 테이크아웃 주문",
    situation_en: "You are standing at the counter in a busy cafe in Seoul. You want to order an Iced Americano to take away.",
    situation_ko: "서울 번화가 카페 카운터에서 바리스타에게 아이스 아메리카노 한 잔을 테이크아웃으로 주문하는 상황",
    target: "아이스 아메리카노 한 잔 테이크아웃해 주세요.",
    target_pron: "A-i-seu A-me-ri-ka-no han jan te-i-keu-a-ut-hae ju-se-yo",
    target_en: "One Iced Americano to go, please.",
    image: {
      type: "svg",
      attribution: "Original Vector Scene by K-Talk Coach",
      license: "CC0 / 100% Royalty-Free Public Domain",
      svg: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto rounded-2xl shadow-md">
  <defs>
    <linearGradient id="cafeBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f1610"/>
      <stop offset="50%" stop-color="#382216"/>
      <stop offset="100%" stop-color="#150f0b"/>
    </linearGradient>
    <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="sleeveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="400" height="210" fill="url(#cafeBg)"/>
  <!-- Ambient Cafe Wall Shelf -->
  <rect x="30" y="30" width="340" height="8" rx="4" fill="#523322" opacity="0.6"/>
  <rect x="50" y="16" width="16" height="14" rx="2" fill="#d97706" opacity="0.5"/>
  <rect x="72" y="18" width="12" height="12" rx="2" fill="#fbbf24" opacity="0.5"/>
  <rect x="290" y="14" width="22" height="16" rx="2" fill="#78350f" opacity="0.7"/>
  <!-- Counter Bar -->
  <rect x="0" y="150" width="400" height="60" fill="#2d1b11"/>
  <rect x="0" y="146" width="400" height="6" fill="#854d0e" opacity="0.8"/>
  <!-- Espresso Machine Silhouette -->
  <rect x="40" y="65" width="110" height="82" rx="8" fill="#334155" stroke="#475569" stroke-width="2"/>
  <rect x="52" y="75" width="86" height="20" rx="4" fill="#0f172a"/>
  <circle cx="65" cy="85" r="4" fill="#22c55e"/>
  <circle cx="80" cy="85" r="4" fill="#f59e0b"/>
  <circle cx="95" cy="85" r="4" fill="#ef4444"/>
  <rect x="68" y="105" width="20" height="24" rx="2" fill="#64748b"/>
  <rect x="100" y="105" width="20" height="24" rx="2" fill="#64748b"/>
  <!-- Steam Path -->
  <path d="M78 98 Q72 88 80 80 T76 68" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4" stroke-linecap="round"/>
  <!-- Takeout Cup -->
  <polygon points="215,75 275,75 265,146 225,146" fill="url(#cupGrad)"/>
  <!-- Cup Sleeve -->
  <polygon points="219,95 271,95 267,125 223,125" fill="url(#sleeveGrad)"/>
  <text x="245" y="113" font-size="10" font-family="sans-serif" font-weight="900" fill="#ffffff" text-anchor="middle">☕ K-TALK</text>
  <!-- Cup Lid & Straw -->
  <rect x="210" y="67" width="70" height="10" rx="4" fill="#f8fafc"/>
  <rect x="235" y="62" width="20" height="6" rx="2" fill="#e2e8f0"/>
  <line x1="248" y1="42" x2="258" y2="70" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
  <!-- Croissant on Plate -->
  <ellipse cx="325" cy="142" rx="35" ry="8" fill="#1e293b"/>
  <path d="M305 140 C310 128, 340 128, 345 140 C335 135, 315 135, 305 140 Z" fill="#f59e0b"/>
  <!-- Header Badge -->
  <rect x="16" y="16" width="170" height="26" rx="13" fill="#000000" opacity="0.75"/>
  <text x="28" y="33" font-size="11" font-family="sans-serif" font-weight="bold" fill="#fde68a">☕ CAFE · 주문 & 테이크아웃</text>
  <!-- License pill -->
  <rect x="295" y="185" width="95" height="18" rx="4" fill="#000000" opacity="0.6"/>
  <text x="342" y="197" font-size="9" font-family="sans-serif" fill="#cbd5e1" text-anchor="middle">© CC0 Public Domain</text>
</svg>`
    },
    quiz: {
      question: "What is the most natural Korean expression to say to the barista?",
      question_ko: "카페 바리스타에게 건넬 가장 자연스러운 주문 표현은?",
      options: [
        {
          text: "아이스 아메리카노 한 잔 테이크아웃해 주세요.",
          pron: "[ A-i-seu A-me-ri-ka-no han jan te-i-keu-a-ut-hae ju-se-yo ]",
          en: "One Iced Americano to go, please.",
          isCorrect: true,
          feedback: "🎉 정답입니다! (Spot on!) '...해 주세요' is the standard polite everyday phrase (해요체) used by native speakers at cafes and bakeries."
        },
        {
          text: "아이스 아메리카노 하나 줘.",
          pron: "[ A-i-seu A-me-ri-ka-no ha-na jwo ]",
          en: "Give me one iced americano. (Casual)",
          isCorrect: false,
          feedback: "❌ 부자연스러워요! 반말(Banmal)은 처음 만난 직원이나 점원에게 절대 쓰지 않습니다. 무례하게 느껴집니다."
        },
        {
          text: "아이스 아메리카노 한 잔을 신속히 제조해 주십시오.",
          pron: "[ A-i-seu A-me-ri-ka-no han jan-eul sin-sok-hi je-jo-hae ju-sip-si-o ]",
          en: "Manufacture one iced americano expeditiously. (Robotic)",
          isCorrect: false,
          feedback: "❌ 지나치게 어색해요! 군대나 공문서 같은 과도한 명령형 격식체는 실제 카페에서 아무도 쓰지 않습니다."
        }
      ]
    },
    politeness: {
      banmal: {
        text: "아이스 아메리카노 한 잔 포장해 줘.",
        status: "⚠️ Only with close friends or younger siblings (Never to staff)",
        isRecommended: false
      },
      haeyoche: {
        text: "아이스 아메리카노 한 잔 테이크아웃해 주세요.",
        status: "✨ [강력 추천] 카페, 식당, 매장에서 가장 자연스러운 표준 존댓말",
        isRecommended: true
      },
      hasipsioche: {
        text: "아이스 아메리카노 한 잔 포장 부탁드립니다.",
        status: "격식 있는 표현 (호텔 라운지나 정중한 자리에서 사용 가능)",
        isRecommended: false
      }
    },
    usage_nuance: "In Korea, asking for '포장' (pojang) or '테이크아웃' (takeout) is essential because environmental regulations prohibit single-use plastic cups for in-store drinking. If you want to drink inside, say '먹고 갈게요' (I'll have it here).",
    speaking: {
      target: "아이스 아메리카노 한 잔 테이크아웃해 주세요",
      keywords: ["아이스", "아메리카노", "한 잔", "테이크아웃", "주세요"]
    }
  },
  {
    id: 2,
    tag: "RESTAURANT",
    category: "🍽️ Restaurant (식당)",
    category_en: "Restaurant Dining",
    scene_title_en: "Asking for More Water at a Restaurant",
    scene_title_ko: "식당에서 물과 반찬 추가 요청하기",
    situation_en: "You are having dinner at a restaurant in Seoul and your water bottle is empty. You want to politely call the server for more drinking water.",
    situation_ko: "서울의 한 식당에서 식사 중 물병이 비어 직원에게 물을 더 달라고 정중하게 요청하는 상황",
    target: "저기요, 물 좀 더 주세요!",
    target_pron: "Jeo-gi-yo, mul jom deo ju-se-yo!",
    target_en: "Excuse me, could we please have some more water?",
    image: {
      type: "svg",
      attribution: "Original Vector Scene by K-Talk Coach",
      license: "CC0 / 100% Royalty-Free Public Domain",
      svg: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto rounded-2xl shadow-md">
  <defs>
    <linearGradient id="restBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181314"/>
      <stop offset="50%" stop-color="#3b151a"/>
      <stop offset="100%" stop-color="#120c0e"/>
    </linearGradient>
    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="400" height="210" fill="url(#restBg)"/>
  <!-- Table Surface -->
  <rect x="0" y="130" width="400" height="80" fill="#291a13"/>
  <rect x="0" y="126" width="400" height="5" fill="#523322"/>
  <!-- Korean BBQ Grill Center -->
  <ellipse cx="140" cy="155" rx="75" ry="30" fill="#0f172a" stroke="#475569" stroke-width="3"/>
  <ellipse cx="140" cy="155" rx="60" ry="22" fill="#1e293b"/>
  <!-- Grill Mesh Lines -->
  <path d="M90 155 Q140 170 190 155 M100 145 Q140 160 180 145 M100 165 Q140 180 180 165" stroke="#94a3b8" stroke-width="1.5" fill="none"/>
  <!-- Kimchi Bowl -->
  <ellipse cx="245" cy="148" rx="22" ry="10" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
  <ellipse cx="245" cy="146" rx="16" ry="6" fill="#dc2626"/>
  <!-- Water Bottle (Clear Carafe) -->
  <rect x="300" y="70" width="42" height="75" rx="10" fill="#38bdf8" opacity="0.35" stroke="#7dd3fc" stroke-width="2"/>
  <rect x="308" y="55" width="26" height="16" rx="4" fill="#0284c7"/>
  <ellipse cx="321" cy="120" rx="12" ry="16" fill="#0ea5e9" opacity="0.4"/>
  <!-- Droplet on bottle -->
  <path d="M321 88 C318 94, 324 94, 321 88 Z" fill="#ffffff" opacity="0.8"/>
  <!-- Metal Cups -->
  <polygon points="355,125 375,125 371,155 359,155" fill="url(#metalGrad)"/>
  <!-- Header Badge -->
  <rect x="16" y="16" width="180" height="26" rx="13" fill="#000000" opacity="0.75"/>
  <text x="28" y="33" font-size="11" font-family="sans-serif" font-weight="bold" fill="#fca5a5">🍽️ RESTAURANT · 추가 요청</text>
  <!-- License pill -->
  <rect x="295" y="185" width="95" height="18" rx="4" fill="#000000" opacity="0.6"/>
  <text x="342" y="197" font-size="9" font-family="sans-serif" fill="#cbd5e1" text-anchor="middle">© CC0 Public Domain</text>
</svg>`
    },
    quiz: {
      question: "How do you call the staff and ask for water naturally?",
      question_ko: "식당 직원을 불러 물을 더 달라고 할 때 가장 알맞은 표현은?",
      options: [
        {
          text: "저기요, 물 좀 더 주세요!",
          pron: "[ Jeo-gi-yo, mul jom deo ju-se-yo! ]",
          en: "Excuse me, could we please have some more water?",
          isCorrect: true,
          feedback: "🎉 완벽합니다! (Spot on!) '저기요' (Excuse me) + '물 좀 더 주세요' (Please give me some more water) is the golden formula for all restaurants in Korea."
        },
        {
          text: "어이! 물 가져와!",
          pron: "[ Eo-i! mul ga-jyeo-wa! ]",
          en: "Hey you! Bring water! (Rude command)",
          isCorrect: false,
          feedback: "❌ 대단히 무례합니다! 한국에서는 식당 직원에게 절대 '어이'라고 부르거나 반말 명령을 하지 않습니다."
        },
        {
          text: "식당 관리자님, 저에게 H2O 생수를 공급해 주십시오.",
          pron: "[ Sik-dang gwan-li-ja-nim, jeo-e-ge H2O saeng-su-reul gong-geup-hae ju-sip-si-o ]",
          en: "Restaurant manager, please supply me with H2O spring water.",
          isCorrect: false,
          feedback: "❌ 기계 번역된 로봇 같은 표현입니다. 아무도 일상 대화에서 이렇게 말하지 않습니다."
        }
      ]
    },
    politeness: {
      banmal: {
        text: "물 좀 더 줘.",
        status: "⚠️ 집에서 가족이나 정말 친한 친구끼리만 사용 (식당 직원에게는 결례)",
        isRecommended: false
      },
      haeyoche: {
        text: "저기요, 물 좀 더 주세요.",
        status: "✨ [강력 추천] 한국의 모든 식당에서 통하는 가장 정중하고 다정한 표준 표현",
        isRecommended: true
      },
      hasipsioche: {
        text: "실례지만 물 좀 더 부탁드립니다.",
        status: "격식 있는 고급 레스토랑 또는 어른을 모신 자리에서 적합",
        isRecommended: false
      }
    },
    usage_nuance: "'저기요' (Excuse me) is the universal, polite way to call staff in Korea without shouting. Notice the word '좀' (jom) — while it literally means 'a little', it acts like a magical softener for 'please'!",
    speaking: {
      target: "저기요 물 좀 더 주세요",
      keywords: ["저기요", "물", "좀", "더", "주세요"]
    }
  },
  {
    id: 3,
    tag: "SUBWAY",
    category: "🚇 Subway (지하철)",
    category_en: "Subway & Transit",
    scene_title_en: "Asking Train Direction on the Subway Platform",
    scene_title_ko: "지하철 승강장에서 열차 방향 문의하기",
    situation_en: "You are standing on the subway platform at City Hall station. You want to ask a nearby commuter if this incoming train goes toward Hongdae (Hongik University).",
    situation_ko: "지하철 승강장에서 들어오는 열차가 홍대입구역 방면으로 가는지 주변 시민에게 정중히 물어보는 상황",
    target: "저기 혹시, 이 열차 홍대 가나요?",
    target_pron: "Jeo-gi hok-si, i yeol-cha hong-dae ga-na-yo?",
    target_en: "Excuse me, by any chance, does this train go to Hongdae?",
    image: {
      type: "svg",
      attribution: "Original Vector Scene by K-Talk Coach",
      license: "CC0 / 100% Royalty-Free Public Domain",
      svg: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto rounded-2xl shadow-md">
  <defs>
    <linearGradient id="subwayBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="60%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
    <linearGradient id="trainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="400" height="210" fill="url(#subwayBg)"/>
  <!-- Station Sign Banner (Line 2 Green) -->
  <rect x="0" y="45" width="400" height="28" fill="#00a84d"/>
  <circle cx="50" cy="59" r="10" fill="#ffffff"/>
  <text x="50" y="63" font-size="11" font-family="sans-serif" font-weight="900" fill="#00a84d" text-anchor="middle">2</text>
  <text x="75" y="64" font-size="13" font-family="sans-serif" font-weight="bold" fill="#ffffff">홍대입구 Hongik Univ.  ➔  신촌 Sinchon</text>
  <!-- Platform Screen Door Tracks -->
  <rect x="0" y="150" width="400" height="60" fill="#1e293b"/>
  <!-- Yellow Safety Warning Line -->
  <rect x="0" y="146" width="400" height="6" fill="#eab308"/>
  <!-- Train Front View -->
  <rect x="180" y="80" width="180" height="70" rx="14" fill="url(#trainGrad)" stroke="#475569" stroke-width="2"/>
  <rect x="195" y="92" width="60" height="30" rx="6" fill="#0f172a"/>
  <rect x="275" y="92" width="60" height="30" rx="6" fill="#0f172a"/>
  <!-- Headlights -->
  <circle cx="210" cy="136" r="6" fill="#fef08a"/>
  <circle cx="320" cy="136" r="6" fill="#fef08a"/>
  <!-- Green Line 2 Stripe on Train -->
  <rect x="180" y="125" width="180" height="5" fill="#00a84d"/>
  <!-- Passenger Silhouette -->
  <circle cx="65" cy="115" r="10" fill="#cbd5e1"/>
  <path d="M52 146 C52 130, 78 130, 78 146 Z" fill="#94a3b8"/>
  <!-- Header Badge -->
  <rect x="16" y="12" width="180" height="26" rx="13" fill="#000000" opacity="0.75"/>
  <text x="28" y="29" font-size="11" font-family="sans-serif" font-weight="bold" fill="#86efac">🚇 SUBWAY · 열차 방향 문의</text>
  <!-- License pill -->
  <rect x="295" y="185" width="95" height="18" rx="4" fill="#000000" opacity="0.6"/>
  <text x="342" y="197" font-size="9" font-family="sans-serif" fill="#cbd5e1" text-anchor="middle">© CC0 Public Domain</text>
</svg>`
    },
    quiz: {
      question: "What is the most natural and courteous way to ask a commuter?",
      question_ko: "승강장에서 지나가는 시민에게 방향을 물어볼 때 가장 자연스러운 표현은?",
      options: [
        {
          text: "저기 혹시, 이 열차 홍대 가나요?",
          pron: "[ Jeo-gi hok-si, i yeol-cha hong-dae ga-na-yo? ]",
          en: "Excuse me, by any chance, does this train go to Hongdae?",
          isCorrect: true,
          feedback: "🎉 정확합니다! (Spot on!) Starting with '저기 혹시' (Excuse me, by any chance...) is the politest and most natural way to approach a stranger in Korea."
        },
        {
          text: "야, 이거 홍대 가냐?",
          pron: "[ Ya, i-geo hong-dae ga-nya? ]",
          en: "Hey, does this go to Hongdae? (Impolite)",
          isCorrect: false,
          feedback: "❌ 절대 쓰면 안 됩니다! 모르는 시민에게 '야'나 반말을 쓰면 시비가 붙을 수 있습니다."
        },
        {
          text: "이 전철의 종착지와 경유역이 홍익대학교입니까?",
          pron: "[ I jeon-cheol-ui jong-chak-ji-wa gyeong-yu-yeo-gi hong-ik-dae-hak-gyo-im-ni-kka? ]",
          en: "Is the final destination and stop of this train Hongik University?",
          isCorrect: false,
          feedback: "❌ 지나치게 경직된 안내방송 말투입니다. 구어체로는 '이 열차 홍대 가나요?'가 훨씬 자연스럽습니다."
        }
      ]
    },
    politeness: {
      banmal: {
        text: "이거 홍대 가?",
        status: "⚠️ 함께 여행 중인 동갑/친한 친구에게만 쓰는 표현",
        isRecommended: false
      },
      haeyoche: {
        text: "저기 혹시, 이 열차 홍대 가나요?",
        status: "✨ [강력 추천] 낯선 사람에게 길을 물을 때 가장 친절하고 안전한 표준 존댓말",
        isRecommended: true
      },
      hasipsioche: {
        text: "실례지만, 이 열차가 홍대입구 방면이 맞습니까?",
        status: "어르신께 아주 깍듯하게 여쭐 때 자연스러운 공식 격식체",
        isRecommended: false
      }
    },
    usage_nuance: "Starting with '저기 혹시...' (Excuse me, by any chance...) instantly softens your presence so people won't be surprised when you speak to them on the subway.",
    speaking: {
      target: "저기 혹시 이 열차 홍대 가나요",
      keywords: ["저기", "혹시", "열차", "홍대", "가나요"]
    }
  },
  {
    id: 4,
    tag: "STORE",
    category: "🏪 Convenience Store (편의점)",
    category_en: "Convenience Store",
    scene_title_en: "Declining a Plastic Bag at Checkout",
    scene_title_ko: "편의점 계산대에서 비닐봉투 사양하기",
    situation_en: "At a convenience store checkout in Seoul, the cashier asks: '봉투 필요하세요?' (Do you need a bag?). You want to decline politely because you can easily carry items by hand.",
    situation_ko: "편의점에서 물건을 결제할 때 직원이 '봉투 필요하세요?'라고 묻자, 정중하게 사양하고 들고 가겠다고 말하는 상황",
    target: "아니요, 괜찮아요. 그냥 들고 갈게요.",
    target_pron: "A-ni-yo, gwaen-chan-a-yo. Geu-nyang deul-go gal-ge-yo.",
    target_en: "No, thank you. It's okay, I'll just carry it.",
    image: {
      type: "svg",
      attribution: "Original Vector Scene by K-Talk Coach",
      license: "CC0 / 100% Royalty-Free Public Domain",
      svg: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto rounded-2xl shadow-md">
  <defs>
    <linearGradient id="storeBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1c24"/>
      <stop offset="60%" stop-color="#113847"/>
      <stop offset="100%" stop-color="#061318"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="400" height="210" fill="url(#storeBg)"/>
  <!-- Convenience Store Shelves -->
  <rect x="30" y="40" width="130" height="90" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <!-- Shelf Items (Drinks & Snacks) -->
  <rect x="40" y="52" width="14" height="22" rx="2" fill="#38bdf8"/>
  <rect x="58" y="52" width="14" height="22" rx="2" fill="#fbbf24"/>
  <rect x="76" y="52" width="14" height="22" rx="2" fill="#34d399"/>
  <rect x="94" y="52" width="14" height="22" rx="2" fill="#f43f5e"/>
  <!-- Triangular Kimbap on Shelf 2 -->
  <polygon points="50,115 62,95 74,115" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <polygon points="85,115 97,95 109,115" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
  <!-- Checkout Counter -->
  <rect x="180" y="110" width="220" height="100" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <rect x="180" y="106" width="220" height="6" fill="#38bdf8"/>
  <!-- Barcode Scanner -->
  <rect x="230" y="85" width="20" height="25" rx="3" fill="#475569"/>
  <path d="M225 85 L255 85" stroke="#ef4444" stroke-width="2"/>
  <!-- Plastic Bag Icon with 'NO' or eco badge -->
  <rect x="290" y="65" width="55" height="65" rx="8" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
  <path d="M305 65 C305 50, 330 50, 330 65" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
  <circle cx="317" cy="98" r="14" fill="#059669"/>
  <path d="M312 98 L316 102 L324 93" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
  <!-- Header Badge -->
  <rect x="16" y="12" width="180" height="26" rx="13" fill="#000000" opacity="0.75"/>
  <text x="28" y="29" font-size="11" font-family="sans-serif" font-weight="bold" fill="#7dd3fc">🏪 CONVENIENCE · 봉투 및 결제</text>
  <!-- License pill -->
  <rect x="295" y="185" width="95" height="18" rx="4" fill="#000000" opacity="0.6"/>
  <text x="342" y="197" font-size="9" font-family="sans-serif" fill="#cbd5e1" text-anchor="middle">© CC0 Public Domain</text>
</svg>`
    },
    quiz: {
      question: "What is the most natural response to the cashier?",
      question_ko: "'봉투 필요하세요?'라는 질문에 가장 자연스러운 대답은?",
      options: [
        {
          text: "아니요, 괜찮아요. 그냥 들고 갈게요.",
          pron: "[ A-ni-yo, gwaen-chan-a-yo. Geu-nyang deul-go gal-ge-yo. ]",
          en: "No, thank you. It's okay, I'll just carry it.",
          isCorrect: true,
          feedback: "🎉 정답입니다! (Spot on!) '아니요, 괜찮아요' (No thanks, it's fine) + '그냥 들고 갈게요' (I will just carry it) is the most polite and natural everyday response."
        },
        {
          text: "싫어, 안 사.",
          pron: "[ Sir-eo, an sa. ]",
          en: "Hate it, won't buy it. (Aggressive & blunt)",
          isCorrect: false,
          feedback: "❌ 매우 무례합니다! 점원에게 화를 내는 것처럼 들리며 중대한 결례가 됩니다."
        },
        {
          text: "비닐봉지의 수령을 정중히 사양하겠습니다.",
          pron: "[ Bi-nil-bong-ji-ui su-ryeong-eul jeong-jung-hi sa-yang-ha-get-seum-ni-da. ]",
          en: "I politely decline the receipt of a vinyl bag. (Ceremonial)",
          isCorrect: false,
          feedback: "❌ 지나치게 문어체적이고 격식적인 선언문 표현입니다. 일상 대화로는 아주 어색합니다."
        }
      ]
    },
    politeness: {
      banmal: {
        text: "아니, 됐어. 그냥 들고 갈게.",
        status: "⚠️ 친구가 봉투를 챙겨줄 때만 쓰는 반말 표현",
        isRecommended: false
      },
      haeyoche: {
        text: "아니요, 괜찮아요. 그냥 들고 갈게요.",
        status: "✨ [강력 추천] 편의점, 마트, 상점에서 봉투를 사양할 때 가장 완벽한 존댓말",
        isRecommended: true
      },
      hasipsioche: {
        text: "봉투는 필요하지 않습니다. 감사합니다.",
        status: "격식 있는 표현 (격식체로도 자연스러우나 조금 딱딱함)",
        isRecommended: false
      }
    },
    usage_nuance: "In South Korea, single-use plastic bags cost 20~100 KRW by national eco-law, so cashiers must ask every customer. Memorizing '그냥 들고 갈게요' (I'll just carry it) will serve you every single day!",
    speaking: {
      target: "아니요 괜찮아요 그냥 들고 갈게요",
      keywords: ["아니요", "괜찮아요", "그냥", "들고", "갈게요"]
    }
  },
  {
    id: 5,
    tag: "CLINIC",
    category: "🏥 Hospital (병원·약국)",
    category_en: "Clinic & Pharmacy",
    scene_title_en: "Describing Symptoms to a Doctor or Pharmacist",
    scene_title_ko: "병원이나 약국에서 아픈 증상 설명하기",
    situation_en: "You feel ill and visit a local clinic in Seoul. The doctor asks: '어디가 불편하세요?' (Where does it hurt / What are your symptoms?). You want to explain that you have had a fever and a severe sore throat since yesterday.",
    situation_ko: "몸이 안 좋아 병원이나 약국에 갔을 때, 어제부터 열이 나고 목이 몹시 아프다고 의사에게 증상을 설명하는 상황",
    target: "어제부터 열이 나고 목이 너무 아파요.",
    target_pron: "Eo-je-bu-teo yeo-ri na-go mo-gi neo-mu a-pa-yo.",
    target_en: "I have had a fever and my throat hurts so much since yesterday.",
    image: {
      type: "svg",
      attribution: "Original Vector Scene by K-Talk Coach",
      license: "CC0 / 100% Royalty-Free Public Domain",
      svg: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto rounded-2xl shadow-md">
  <defs>
    <linearGradient id="hospBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081d24"/>
      <stop offset="50%" stop-color="#0f3b47"/>
      <stop offset="100%" stop-color="#05151a"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="400" height="210" fill="url(#hospBg)"/>
  <!-- Medical Desk -->
  <rect x="0" y="140" width="400" height="70" fill="#0f172a"/>
  <rect x="0" y="136" width="400" height="5" fill="#0d9488"/>
  <!-- Hospital Cross Emblem on Wall -->
  <circle cx="80" cy="80" r="35" fill="#134e4a" opacity="0.5"/>
  <rect x="74" y="60" width="12" height="40" rx="3" fill="#2dd4bf"/>
  <rect x="60" y="74" width="40" height="12" rx="3" fill="#2dd4bf"/>
  <!-- Stethoscope on Desk -->
  <path d="M180 155 Q210 170 240 155 Q260 140 250 120" stroke="#94a3b8" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="250" cy="118" r="8" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
  <!-- Medicine Bottle & Pill -->
  <rect x="290" y="100" width="30" height="45" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="295" y="90" width="20" height="12" rx="2" fill="#0d9488"/>
  <ellipse cx="345" cy="140" rx="8" ry="4" fill="#f43f5e"/>
  <ellipse cx="355" cy="140" rx="8" ry="4" fill="#38bdf8"/>
  <!-- Digital Thermometer displaying 38.5C -->
  <rect x="150" y="90" width="110" height="28" rx="8" fill="#1e293b" stroke="#0d9488" stroke-width="2"/>
  <text x="165" y="108" font-size="12" font-family="monospace" font-weight="900" fill="#ef4444">🌡️ 38.5°C</text>
  <!-- Header Badge -->
  <rect x="16" y="12" width="180" height="26" rx="13" fill="#000000" opacity="0.75"/>
  <text x="28" y="29" font-size="11" font-family="sans-serif" font-weight="bold" fill="#5eead4">🏥 CLINIC · 증상 설명</text>
  <!-- License pill -->
  <rect x="295" y="185" width="95" height="18" rx="4" fill="#000000" opacity="0.6"/>
  <text x="342" y="197" font-size="9" font-family="sans-serif" fill="#cbd5e1" text-anchor="middle">© CC0 Public Domain</text>
</svg>`
    },
    quiz: {
      question: "How do you clearly and politely describe your symptoms to the doctor?",
      question_ko: "의사에게 아픈 증상을 명확하고 공손하게 설명하는 표현은?",
      options: [
        {
          text: "어제부터 열이 나고 목이 너무 아파요.",
          pron: "[ Eo-je-bu-teo yeo-ri na-go mo-gi neo-mu a-pa-yo. ]",
          en: "I have had a fever and my throat hurts so much since yesterday.",
          isCorrect: true,
          feedback: "🎉 정확합니다! (Spot on!) '열이 나다' (to have a fever) and '목이 아프다' (throat hurts) are essential clinic expressions with respectful 해요체."
        },
        {
          text: "어제부터 열나고 목 아파.",
          pron: "[ Eo-je-bu-teo yeol-na-go mok a-pa. ]",
          en: "Fever and throat hurts since yesterday. (Banmal)",
          isCorrect: false,
          feedback: "❌ 부적절합니다! 아무리 아프더라도 전문 의료진(의사, 약사)에게 반말을 쓰는 것은 결례입니다."
        },
        {
          text: "본 환자는 전일부로 인후통 및 발열 증세가 지속되고 있음을 진술합니다.",
          pron: "[ Bon hwan-ja-neun jeon-il-bu-ro in-hu-tong mit bal-yeol jeung-se-ga ji-sok-doe-go it-seum-eul jin-sul-ham-ni-da. ]",
          en: "This patient states persistent pharyngitis and fever symptoms as of the prior day.",
          isCorrect: false,
          feedback: "❌ 진료 차트에나 적힐 법한 지나치게 딱딱한 의학 용어입니다. 의사와의 구어 대화로는 어색합니다."
        }
      ]
    },
    politeness: {
      banmal: {
        text: "어제부터 열나고 목이 너무 아파.",
        status: "⚠️ 집에서 가족이나 친구에게 아프다고 말할 때만 사용",
        isRecommended: false
      },
      haeyoche: {
        text: "어제부터 열이 나고 목이 너무 아파요.",
        status: "✨ [강력 추천] 의사, 약사, 간호사에게 증상을 설명할 때 가장 완벽한 표준 존댓말",
        isRecommended: true
      },
      hasipsioche: {
        text: "어제부터 발열 증상이 있고 목 통증이 심합니다.",
        status: "종합병원 정밀 문진표 작성 시 적합한 공식 격식체",
        isRecommended: false
      }
    },
    usage_nuance: "'열이 나요' (I have a fever) and '목이 아파요' (My throat/neck hurts) are must-know symptom phrases. Note that in Korean, '목' refers to both the throat (inside) and the neck (outside)!",
    speaking: {
      target: "어제부터 열이 나고 목이 너무 아파요",
      keywords: ["어제부터", "열이", "나고", "목이", "너무", "아파요"]
    }
  }
];

// Load existing 60 data if available
let all60 = [];
try {
  const existing = require('./real-korean-data.js');
  if (Array.isArray(existing)) {
    all60 = existing;
  }
} catch (e) {
  console.log("Existing data read notice:", e.message);
}

// Generate the updated combined file
const outputCode = `// Real Korean Situational Cards & 60 Practical Expressions
// Curated for natural Korean nuances across Banmal, Haeyoche, and Hasipsioche
// Native Speaker Final Review: Subject to final review (원어민 최종 검수 대상)

// 1. Featured 5 Completed Sample Situations
const REAL_KOREAN_SAMPLES = ${JSON.stringify(FEATURED_SAMPLES, null, 2)};

// 2. Full 60 Real Korean Expressions
const REAL_KOREAN_DATA = ${JSON.stringify(all60.length > 0 ? all60 : FEATURED_SAMPLES, null, 2)};

if (typeof window !== 'undefined') {
  window.REAL_KOREAN_SAMPLES = REAL_KOREAN_SAMPLES;
  window.REAL_KOREAN_DATA = REAL_KOREAN_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    REAL_KOREAN_SAMPLES,
    REAL_KOREAN_DATA
  };
}
`;

fs.writeFileSync(path.join(__dirname, 'real-korean-data.js'), outputCode, 'utf8');
console.log('Successfully generated real-korean-data.js with FEATURED_SAMPLES (5) and REAL_KOREAN_DATA (' + all60.length + ')');
