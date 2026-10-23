// Real Korean 60 Practical Expressions & Situational Quizzes
// Curated for natural Korean nuances across Banmal, Haeyoche, and Hasipsioche
// Native Speaker Final Review: Subject to final review (원어민 최종 검수 대상)

const REAL_KOREAN_DATA = [
  {
    "id": 1,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "점심시간 즈음 복도나 길에서 지인을 만났을 때 가볍게 안부를 묻는 상황",
    "situation_en": "Greeting an acquaintance around lunchtime to check in casually",
    "banmal": "밥 먹었어?",
    "haeyoche": "식사하셨어요? / 밥 먹었어요?",
    "hasipsioche": "식사는 하셨습니까?",
    "english": "Have you eaten? / Did you have lunch?",
    "usage_nuance": "한국에서는 끼니를 챙겼는지 묻는 것이 가장 대표적인 따뜻한 안부 인사입니다. 윗사람에게는 반드시 '식사하셨어요?' 또는 격식 있는 '식사는 하셨습니까?'를 씁니다.",
    "quiz": {
      "question": "점심시간 엘리베이터에서 부서장(부장님)을 마주쳤을 때 건넬 가장 자연스러운 말은?",
      "question_en": "What is the most natural greeting when running into your department manager in the elevator at lunchtime?",
      "options": [
        {
          "text": "부장님, 밥 먹었어?",
          "isCorrect": false,
          "feedback": "직장 상사에게 반말을 쓰는 것은 중대한 결례입니다."
        },
        {
          "text": "부장님, 식사하셨어요?",
          "isCorrect": true,
          "feedback": "정답! 직장 상사에게 자연스럽고 깍듯하며 부담 없는 가장 좋은 존댓말(해요체)입니다."
        },
        {
          "text": "부장님, 진지 잡수셨습니까?",
          "isCorrect": false,
          "feedback": "'진지'는 80세 이상 연로하신 어르신께나 쓰는 극존칭으로 직장 상사에게는 지나치게 어색합니다."
        }
      ]
    }
  },
  {
    "id": 2,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "몇 주 또는 몇 달 만에 오랜만에 만난 사람에게 근황을 묻는 상황",
    "situation_en": "Asking how someone has been after not seeing them for weeks or months",
    "banmal": "잘 지냈어?",
    "haeyoche": "잘 지내셨어요?",
    "hasipsioche": "그동안 평안하셨습니까?",
    "english": "How have you been? / Have you been well?",
    "usage_nuance": "친구 사이에는 '잘 지냈어?', 선배나 어른에게는 '잘 지내셨어요?'가 표준입니다. '그동안 평안하셨습니까?'는 편지나 명절 등 아주 공식적인 자리에서 씁니다.",
    "quiz": {
      "question": "대학교 때 친하게 지냈던 동갑내기 친구를 1년 만에 카페에서 만났을 때 알맞은 인사는?",
      "question_en": "Greeting a close college friend of the same age at a cafe after 1 year:",
      "options": [
        {
          "text": "야! 그동안 잘 지냈어?",
          "isCorrect": true,
          "feedback": "정답! 동갑 친구에게는 반가움을 담은 친근한 반말이 가장 자연스럽습니다."
        },
        {
          "text": "그동안 평안하셨습니까?",
          "isCorrect": false,
          "feedback": "동갑 친구에게 이런 극존칭을 쓰면 장난치거나 놀리는 느낌을 줍니다."
        },
        {
          "text": "건강에 이상은 없으셨습니까?",
          "isCorrect": false,
          "feedback": "너무 의학적이고 경직된 표현이라 일상 인사로 어색합니다."
        }
      ]
    }
  },
  {
    "id": 3,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "길이나 건물에서 마주쳐 어딘가로 이동 중인 상대에게 가볍게 목적지를 묻는 상황",
    "situation_en": "Casually asking where someone is headed when crossing paths",
    "banmal": "어디 가?",
    "haeyoche": "어디 가세요?",
    "hasipsioche": "어디로 향하십니까?",
    "english": "Where are you headed? / Where are you going?",
    "usage_nuance": "취조하는 질문이 아니라 '오고 가며 던지는 인사말'입니다. 격식체 '어디로 향하십니까?'는 실제 구어에서는 거의 쓰지 않으며 부자연스럽습니다.",
    "quiz": {
      "question": "회사 복도에서 서류를 들고 바쁘게 걸어가는 옆 부서 과장님께 가볍게 건넬 말은?",
      "question_en": "Greeting a section manager from another team carrying documents in the hallway:",
      "options": [
        {
          "text": "과장님, 어디 가세요?",
          "isCorrect": true,
          "feedback": "정답! 일상적인 존댓말(해요체)로 친절하면서도 예의 바른 질문입니다."
        },
        {
          "text": "과장님, 어디로 향하십니까?",
          "isCorrect": false,
          "feedback": "사극이나 영화 대사 같아서 현대 직장 대화에서는 매우 부자연스럽습니다."
        },
        {
          "text": "과장님, 어디 가?",
          "isCorrect": false,
          "feedback": "직급이 높은 상대에게 반말을 쓰면 예의에 어긋납니다."
        }
      ]
    }
  },
  {
    "id": 4,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "저녁 약속이나 술자리를 마치고 귀가하는 상대방을 배웅할 때",
    "situation_en": "Saying goodbye to someone heading home after a dinner or hangout",
    "banmal": "조심히 들어가!",
    "haeyoche": "조심히 들어가세요!",
    "hasipsioche": "안녕히 들어가십시오.",
    "english": "Get home safely! / Take care on your way back.",
    "usage_nuance": "한국에서는 밤에 헤어질 때 '안녕'보다 '조심히 들어가'를 훨씬 애정 어린 배려의 표현으로 자주 사용합니다.",
    "quiz": {
      "question": "저녁 회식을 마치고 지하철역 앞에서 헤어질 때 부장님께 드릴 배웅 인사는?",
      "question_en": "Parting words to your department head in front of the subway station after a company dinner:",
      "options": [
        {
          "text": "부장님, 내일 봐!",
          "isCorrect": false,
          "feedback": "상사에게 건네는 반말 작별 인사는 무례합니다."
        },
        {
          "text": "부장님, 오늘 수고하셨습니다. 조심히 들어가세요!",
          "isCorrect": true,
          "feedback": "정답! 수고에 감사하며 안전한 귀가를 기원하는 가장 완벽한 작별 인사입니다."
        },
        {
          "text": "부장님, 부디 무사히 생환하십시오.",
          "isCorrect": false,
          "feedback": "전쟁터에서 쓰는 말처럼 과장되어 있어 일상 대화에 전혀 맞지 않습니다."
        }
      ]
    }
  },
  {
    "id": 5,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "단체 모임이나 회식 중에 개인 사정으로 먼저 자리를 떠야 할 때",
    "situation_en": "Excusing oneself early from a dinner or gathering due to personal reasons",
    "banmal": "나 먼저 갈게!",
    "haeyoche": "저 먼저 가볼게요 / 먼저 들어가 보겠습니다.",
    "hasipsioche": "먼저 일어나 보도록 하겠습니다 / 먼저 실례하겠습니다.",
    "english": "I'll get going first. / Please excuse me for leaving early.",
    "usage_nuance": "윗사람이 있는 회식 자리에서는 '가다' 대신 '일어나다'나 '실례하다'를 써서 공손함을 표합니다.",
    "quiz": {
      "question": "팀 회식 도중 아이를 돌보러 먼저 귀가해야 할 때 팀원들과 상사에게 할 말은?",
      "question_en": "Leaving a team dinner early to care for your child:",
      "options": [
        {
          "text": "나 먼저 갈게, 알아서들 마셔!",
          "isCorrect": false,
          "feedback": "회사 공적 회식 자리에서 쓰기엔 무례한 반말입니다."
        },
        {
          "text": "죄송하지만 집안 사정으로 먼저 일어나 보겠습니다.",
          "isCorrect": true,
          "feedback": "정답! 정중한 양해와 예의를 모두 갖춘 격식 있는 표현입니다."
        },
        {
          "text": "이만 퇴장하겠으니 계속하시오.",
          "isCorrect": false,
          "feedback": "고대 왕이 신하에게 쓰는 듯한 어색한 어투입니다."
        }
      ]
    }
  },
  {
    "id": 6,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "금요일 퇴근 시간 무렵 서로 주말을 잘 보내라고 덕담을 건넬 때",
    "situation_en": "Wishing coworkers or friends a good weekend around Friday knock-off time",
    "banmal": "주말 잘 보내!",
    "haeyoche": "주말 잘 보내세요!",
    "hasipsioche": "즐겁고 평안한 주말 보내십시오.",
    "english": "Have a great weekend!",
    "usage_nuance": "퇴근길 인사로 '수고하셨습니다'와 함께 덧붙이기 가장 좋은 대표적인 긍정 인사입니다.",
    "quiz": {
      "question": "금요일 오후 6시 정규 퇴근하며 사무실 동료들에게 건넬 인사로 가장 자연스러운 것은?",
      "question_en": "Friday 6 PM clock-out greeting to office colleagues:",
      "options": [
        {
          "text": "한 주 동안 고생 많으셨습니다. 주말 잘 보내세요!",
          "isCorrect": true,
          "feedback": "정답! 한 주간 노고를 격려하며 주말 인사를 전하는 직장 표준 매너입니다."
        },
        {
          "text": "주말 잘 보내, 월요일에 보지 말자!",
          "isCorrect": false,
          "feedback": "회사 공용 인사로는 장난이 과하고 예의가 부족합니다."
        },
        {
          "text": "주말 휴식을 강력히 명령합니다.",
          "isCorrect": false,
          "feedback": "일상 회화에서 명령형은 부적절합니다."
        }
      ]
    }
  },
  {
    "id": 7,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "오랜만에 만난 거래처 담당자나 선배를 만났을 때",
    "situation_en": "Greeting a senior or business client after a long time",
    "banmal": "야 진짜 오랜만이다!",
    "haeyoche": "정말 오랜만이에요!",
    "hasipsioche": "오랜만에 뵙겠습니다 / 오랜만에 인사 올립니다.",
    "english": "Long time no see! / It has been a long time.",
    "usage_nuance": "상대와의 친분 정도에 따라 '오랜만이에요'와 '오랜만에 뵙겠습니다'를 구별해서 씁니다.",
    "quiz": {
      "question": "오랜만에 회사 미팅에서 만난 중요한 외부 거래처 파트너에게 건넬 인사는?",
      "question_en": "Greeting an important business partner at a meeting after a long time:",
      "options": [
        {
          "text": "오랜만이야, 잘 살았냐?",
          "isCorrect": false,
          "feedback": "거래처 파트너에게 반말과 거친 표현은 비즈니스 관계를 망칩니다."
        },
        {
          "text": "팀장님, 오랜만에 뵙겠습니다. 잘 지내셨습니까?",
          "isCorrect": true,
          "feedback": "정답! 비즈니스 매너에 맞는 정중한 하십시오체와 해요체의 모범입니다."
        },
        {
          "text": "몇 년 만인지 계산이 안 되네요.",
          "isCorrect": false,
          "feedback": "약간 퉁명스럽게 들릴 수 있어 첫인사로 어색합니다."
        }
      ]
    }
  },
  {
    "id": 8,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "헤어질 때 다음 연락을 약속하며 기약하는 인사",
    "situation_en": "Parting words promising to reach out or keep in touch",
    "banmal": "내가 이따 연락할게!",
    "haeyoche": "제가 나중에 연락드릴게요!",
    "hasipsioche": "조만간 다시 연락 올리도록 하겠습니다.",
    "english": "I will contact you later. / I'll get in touch with you.",
    "usage_nuance": "'연락 올리겠습니다'는 고객이나 매우 높은 어르신께 쓰고, 일반적인 존댓말로는 '연락드릴게요'가 자연스럽습니다.",
    "quiz": {
      "question": "취업 면접이나 중요한 미팅을 마치고 고객사 이사님께 작별 인사를 드릴 때:",
      "question_en": "Parting greeting to a client director after an important meeting:",
      "options": [
        {
          "text": "이사님, 오늘 감사했습니다. 검토 후 다음 주에 연락드리겠습니다.",
          "isCorrect": true,
          "feedback": "정답! 신뢰감 있고 깍듯한 비즈니스 약속 표현입니다."
        },
        {
          "text": "이사님, 내가 카톡 할게!",
          "isCorrect": false,
          "feedback": "고객사 임원에게 반말과 카톡 약속은 결례입니다."
        },
        {
          "text": "연락 안 주시면 섭섭합니다.",
          "isCorrect": false,
          "feedback": "갑작스러운 투정은 비즈니스 자리에 어울리지 않습니다."
        }
      ]
    }
  },
  {
    "id": 9,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "다음 날 다시 만날 약속이 있는 동료나 친구에게 헤어질 때",
    "situation_en": "Saying goodbye to someone you will see again tomorrow",
    "banmal": "내일 봐!",
    "haeyoche": "내일 봬요! (내일 봐요)",
    "hasipsioche": "내일 뵙겠습니다.",
    "english": "See you tomorrow!",
    "usage_nuance": "존댓말에서는 '보다' 대신 높임 동사 '뵙다'를 써서 '내일 봬요' 또는 격식체 '내일 뵙겠습니다'로 씁니다.",
    "quiz": {
      "question": "오늘 업무를 마치고 내일 다시 출근해서 볼 팀 선배에게 할 인사는?",
      "question_en": "Parting words to a senior teammate whom you will see at work tomorrow:",
      "options": [
        {
          "text": "선배님, 고생하셨습니다. 내일 봬요!",
          "isCorrect": true,
          "feedback": "정답! 높임말 '봬요'를 사용하여 친근하면서도 깍듯하게 존중합니다."
        },
        {
          "text": "선배, 내일 꼭 봐!",
          "isCorrect": false,
          "feedback": "직장 선배에게 반말은 위계질서상 금물입니다."
        },
        {
          "text": "내일 접견하도록 허락하십시오.",
          "isCorrect": false,
          "feedback": "조선시대 어투처럼 과장되어 일상 대화에 맞지 않습니다."
        }
      ]
    }
  },
  {
    "id": 10,
    "category": "인사와 안부",
    "category_en": "Greetings & Check-ins",
    "situation": "밤에 잠자리에 들기 전 상대방에게 편안한 밤을 기원하는 인사",
    "situation_en": "Wishing someone a good night before sleeping",
    "banmal": "잘 자, 좋은 꿈 꿔!",
    "haeyoche": "안녕히 주무세요! / 편한 밤 되세요.",
    "hasipsioche": "안녕히 주무십시오. 평안한 밤 되십시오.",
    "english": "Good night! / Sleep well.",
    "usage_nuance": "'자다'의 존댓말은 특수 존칭 동사 '주무시다'를 씁니다. '잘 자요'는 또래나 연하의 존댓말 상대에게 쓰고 어른께는 '안녕히 주무세요'를 씁니다.",
    "quiz": {
      "question": "홈스테이 집주인 어르신(할머니/할아버지)께 취침 전 드릴 인사로 가장 올바른 것은?",
      "question_en": "Greeting your elderly homestay host before going to sleep:",
      "options": [
        {
          "text": "할머니, 잘 자!",
          "isCorrect": false,
          "feedback": "어르신께 반말은 매우 불손합니다."
        },
        {
          "text": "할머니, 안녕히 주무세요. 편안한 밤 되세요!",
          "isCorrect": true,
          "feedback": "정답! 어르신께 주무시다를 활용한 가장 정중하고 사랑받는 인사입니다."
        },
        {
          "text": "할머니, 숙면을 취하시길 바랍니다.",
          "isCorrect": false,
          "feedback": "안내 방송 멘트 같아서 가족적인 분위기에 다소 차갑습니다."
        }
      ]
    }
  },
  {
    "id": 11,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "음식을 먹기 직전 대접해 준 사람에게 감사와 예의를 표하는 순간",
    "situation_en": "Polite phrase said right before eating a meal",
    "banmal": "잘 먹을게!",
    "haeyoche": "잘 먹겠습니다!",
    "hasipsioche": "감사히 맛있게 먹겠습니다.",
    "english": "Thank you for the food! / Bon appétit (to myself).",
    "usage_nuance": "일본의 '이타다키마스'처럼 한국에서도 밥을 먹기 전 예의로 '잘 먹겠습니다'를 하는 것이 좋은 인상을 줍니다.",
    "quiz": {
      "question": "동료가 커피와 빵을 사 와서 내 책상에 놓아주었을 때 먹기 전에 할 말은?",
      "question_en": "Coworker brings coffee and pastry to your desk as a treat:",
      "options": [
        {
          "text": "고마워요! 감사히 잘 먹겠습니다.",
          "isCorrect": true,
          "feedback": "정답! 상대의 호의에 감사하며 맛있게 먹겠다는 정중한 표현입니다."
        },
        {
          "text": "내가 다 먹어 치우겠다.",
          "isCorrect": false,
          "feedback": "장난스럽더라도 성의를 무시하는 것처럼 보일 수 있습니다."
        },
        {
          "text": "잘 먹을게, 다음엔 더 좋은 거 사와.",
          "isCorrect": false,
          "feedback": "상대방의 호의를 깎아내리는 실례되는 말입니다."
        }
      ]
    }
  },
  {
    "id": 12,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "식사를 모두 마치고 그릇을 내려놓으며 감사를 표할 때",
    "situation_en": "Polite phrase said immediately after finishing a meal",
    "banmal": "배부르다, 잘 먹었어!",
    "haeyoche": "정말 맛있게 잘 먹었습니다!",
    "hasipsioche": "대단히 맛있게 잘 먹었습니다.",
    "english": "Thank you for the wonderful meal! / I enjoyed the food.",
    "usage_nuance": "식당에서 계산하고 나갈 때 사장님께 '잘 먹었습니다~'라고 인사하면 아주 친절한 손님으로 기억됩니다.",
    "quiz": {
      "question": "단골 식당에서 맛있게 식사 후 카드를 내밀며 사장님께 건넬 인사로 가장 좋은 것은?",
      "question_en": "Paying at the counter of your favorite restaurant after a delicious meal:",
      "options": [
        {
          "text": "사장님, 오늘 음식 진짜 맛있었어요. 잘 먹었습니다!",
          "isCorrect": true,
          "feedback": "정답! 맛에 대한 칭찬과 인사가 함께 들어가 식당 주인을 행복하게 만듭니다."
        },
        {
          "text": "사장님, 잘 먹었어!",
          "isCorrect": false,
          "feedback": "나이 드신 사장님께 초면 또는 일방적인 반말은 결례입니다."
        },
        {
          "text": "음식물 처리를 완료했습니다.",
          "isCorrect": false,
          "feedback": "군대나 기계적인 보고 표현으로 일상 대화에 어울리지 않습니다."
        }
      ]
    }
  },
  {
    "id": 13,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "식당이나 테이블에서 물이 더 필요할 때 요청하는 상황",
    "situation_en": "Asking for water at a restaurant or dining table",
    "banmal": "물 좀 줘.",
    "haeyoche": "물 좀 더 주세요.",
    "hasipsioche": "물 부탁드리겠습니다.",
    "english": "Could I have some water, please?",
    "usage_nuance": "식당에서는 '저기요, 시원한 물 좀 더 주세요~'가 가장 자연스럽습니다. 격식체 '물 부탁드리겠습니다'는 호텔이나 고급 레스토랑에 어울립니다.",
    "quiz": {
      "question": "일반 식당에서 테이블에 물병이 비었을 때 종업원에게 요청하는 자연스러운 말은?",
      "question_en": "Asking the restaurant server for a water refill:",
      "options": [
        {
          "text": "야, 물 가져와.",
          "isCorrect": false,
          "feedback": "식당 직원에게 반말과 명령조는 매우 무례한 태도입니다."
        },
        {
          "text": "저기요, 여기 물 좀 더 주실 수 있나요?",
          "isCorrect": true,
          "feedback": "정답! 부드럽고 정중한 부탁형 해요체로 가장 듣기 좋습니다."
        },
        {
          "text": "식수를 하사하여 주십시오.",
          "isCorrect": false,
          "feedback": "과거 왕실 언어로 현대 한국어 회화에 전혀 맞지 않습니다."
        }
      ]
    }
  },
  {
    "id": 14,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "가게나 시장에서 물건의 가격을 물어볼 때",
    "situation_en": "Asking the price of an item at a shop or market",
    "banmal": "이거 얼마야?",
    "haeyoche": "이거 얼마예요?",
    "hasipsioche": "이 상품의 가격은 얼마입니까?",
    "english": "How much is this?",
    "usage_nuance": "시장이나 가게에서는 '이거 얼마예요?'가 가장 자연스럽습니다. '이 상품의 가격은 얼마입니까?'는 백화점이나 공식 견적 문의 시에나 씁니다.",
    "quiz": {
      "question": "명동 길거리 가게에서 마음에 드는 기념품 가격을 상인에게 물어볼 때:",
      "question_en": "Asking the vendor for the price of a souvenir in Myeongdong:",
      "options": [
        {
          "text": "이거 얼마야?",
          "isCorrect": false,
          "feedback": "처음 보는 상인에게 반말을 쓰면 불친절하게 보입니다."
        },
        {
          "text": "사장님, 이거 하나에 얼마예요?",
          "isCorrect": true,
          "feedback": "정답! '사장님' 호칭과 부드러운 존댓말이 결합하여 가장 자연스럽습니다."
        },
        {
          "text": "본 제품의 정찰 가격 산출 근거를 묻습니다.",
          "isCorrect": false,
          "feedback": "일상 쇼핑에서 전혀 쓰지 않는 관료적 어투입니다."
        }
      ]
    }
  },
  {
    "id": 15,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "식당에서 식사를 마치고 카운터에서 결제하겠다고 의사를 밝힐 때",
    "situation_en": "Indicating you are ready to pay the bill at the counter",
    "banmal": "나 계산할게.",
    "haeyoche": "계산해 주세요 / 결제할게요.",
    "hasipsioche": "계산 부탁드리겠습니다.",
    "english": "I'd like to pay the bill, please.",
    "usage_nuance": "카운터로 가며 카드를 꺼내며 '계산해 주세요~' 또는 '결제 도와주시겠어요?'라고 말하면 깔끔합니다.",
    "quiz": {
      "question": "카페에서 커피를 테이크아웃하며 카드를 건넬 때 직원에게 건넬 말은?",
      "question_en": "Paying with a card at a cafe counter:",
      "options": [
        {
          "text": "이 카드로 결제해 주세요.",
          "isCorrect": true,
          "feedback": "정답! 명확하고 친절한 표준 존댓말입니다."
        },
        {
          "text": "돈 가져가라.",
          "isCorrect": false,
          "feedback": "상대를 하대하는 무례한 표현입니다."
        },
        {
          "text": "금융 거래를 체결합시다.",
          "isCorrect": false,
          "feedback": "금융 계약서 어투로 일상 결제에 쓰지 않습니다."
        }
      ]
    }
  },
  {
    "id": 16,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "함께 식사하는 사람에게 음식을 더 권하거나 챙겨줄 때",
    "situation_en": "Encouraging a dining partner to eat more food",
    "banmal": "부족하면 더 먹어!",
    "haeyoche": "부족하시면 더 드세요~",
    "hasipsioche": "편히 더 드십시오.",
    "english": "Please have some more! / Help yourself to more.",
    "usage_nuance": "'먹다'의 존댓말은 특수 어휘 '드시다'를 씁니다. 손님이나 윗사람에게 권할 때는 '많이 드세요' 또는 '더 드세요'를 씁니다.",
    "quiz": {
      "question": "집에 초대한 친구의 부모님(어르신)께 식사를 권할 때 가장 알맞은 말은?",
      "question_en": "Offering more food to a friend's parents visiting your home:",
      "options": [
        {
          "text": "어르신, 많이 먹어!",
          "isCorrect": false,
          "feedback": "어르신께 반말은 용납되지 않습니다."
        },
        {
          "text": "입에 맞으시면 더 많이 드세요, 편하게 드십시오.",
          "isCorrect": true,
          "feedback": "정답! '드시다'를 쓴 따뜻하고 정중한 대접 표현입니다."
        },
        {
          "text": "영양 섭취를 계속 이어가시길 바랍니다.",
          "isCorrect": false,
          "feedback": "병원 환자 식단 지도 같아서 정이 느껴지지 않습니다."
        }
      ]
    }
  },
  {
    "id": 17,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "내가 만든 요리나 추천한 식당 음식이 상대방 취향에 맞는지 물어볼 때",
    "situation_en": "Asking if someone likes the taste of food you prepared or recommended",
    "banmal": "입에 맞아? 어때?",
    "haeyoche": "음식이 입에 맞으세요?",
    "hasipsioche": "입맛에 맞으십니까?",
    "english": "Do you like the food? / Does it suit your taste?",
    "usage_nuance": "한국에서는 '맛있어?' 대신 '입에 맞아?'(Does it suit your mouth/taste?)라는 관용구를 정성스럽게 씁니다.",
    "quiz": {
      "question": "직접 한국 요리를 대접한 외국인 친구 또는 홈스테이 어르신께 맛을 여쭐 때:",
      "question_en": "Asking your guest if they like the Korean dish you cooked:",
      "options": [
        {
          "text": "어르신, 입에 좀 맞으세요? 간은 괜찮으신가요?",
          "isCorrect": true,
          "feedback": "정답! '입에 맞으세요?'는 한국의 대표적인 정감 넘치는 맛 배려 표현입니다."
        },
        {
          "text": "맛있냐 맛없냐 솔직히 말해라.",
          "isCorrect": false,
          "feedback": "취조하듯 거친 어투입니다."
        },
        {
          "text": "미각 감각 수용체 반응을 평가해 주십시오.",
          "isCorrect": false,
          "feedback": "기계적인 뉘앙스로 전혀 부적절합니다."
        }
      ]
    }
  },
  {
    "id": 18,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "식사를 아주 넉넉하게 마친 후 포만감을 표현할 때",
    "situation_en": "Expressing that you are completely full after a big meal",
    "banmal": "아, 배불러 죽겠다!",
    "haeyoche": "너무 맛있어서 배가 진짜 불러요.",
    "hasipsioche": "대단히 맛있게 먹어 배가 찹니다 / 충분히 포식하였습니다.",
    "english": "I am so full! / I'm stuffed.",
    "usage_nuance": "'배불러 죽겠다'는 친한 사이의 감정 과장 표현입니다. 점잖은 자리나 어르신 앞에서는 '배가 너무 부릅니다' 또는 '정말 푸짐하게 잘 먹었습니다'로 순화합니다.",
    "quiz": {
      "question": "장인어른, 장모님께서 차려주신 푸짐한 저녁을 다 먹고 감사와 포만감을 표현할 때:",
      "question_en": "Expressing fullness and thanks to your parents-in-law after a hearty dinner:",
      "options": [
        {
          "text": "아 배불러 죽겠어, 배 터지겠네!",
          "isCorrect": false,
          "feedback": "'죽겠다/터지겠다'는 어른 앞에서 쓰기엔 가벼운 속어적 과장입니다."
        },
        {
          "text": "어머님, 음식이 너무 맛있어서 정말 배부르게 잘 먹었습니다!",
          "isCorrect": true,
          "feedback": "정답! 칭찬과 감사를 담은 깔끔하고 품격 있는 존댓말입니다."
        },
        {
          "text": "위장 용량이 한계에 도달했습니다.",
          "isCorrect": false,
          "feedback": "기계적이고 딱딱한 비유입니다."
        }
      ]
    }
  },
  {
    "id": 19,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "식사 후 또는 오후 나른한 시간에 동료에게 커피 타임을 제안할 때",
    "situation_en": "Inviting a colleague or friend for a quick coffee break",
    "banmal": "잠깐 나가서 커피 한잔할래?",
    "haeyoche": "시간 괜찮으시면 커피 한잔하실래요?",
    "hasipsioche": "커피 한잔하시겠습니까?",
    "english": "Would you like to grab a cup of coffee?",
    "usage_nuance": "직장에서 동료나 선배에게 대화를 청하거나 머리를 식힐 때 가장 애용되는 부드러운 제안입니다.",
    "quiz": {
      "question": "오후 3시쯤 피곤해 보이는 같은 팀 사수(선배)에게 커피를 제안할 때:",
      "question_en": "Suggesting a coffee break to your tired senior teammate at 3 PM:",
      "options": [
        {
          "text": "선배님, 머리도 식힐 겸 1층에 커피 한잔하러 가실래요?",
          "isCorrect": true,
          "feedback": "정답! 배려가 묻어나는 가장 이상적인 직장인 티타임 제안입니다."
        },
        {
          "text": "야, 나와서 커피나 마셔.",
          "isCorrect": false,
          "feedback": "선배에게 반말은 부적절합니다."
        },
        {
          "text": "카페인 보충 작업을 즉시 수행합시다.",
          "isCorrect": false,
          "feedback": "너무 기계적이고 로봇 같은 말투입니다."
        }
      ]
    }
  },
  {
    "id": 20,
    "category": "식사와 일상",
    "category_en": "Dining & Everyday Life",
    "situation": "처음 가본 식당에서 무엇을 시켜야 할지 몰라 인기 메뉴 추천을 부탁할 때",
    "situation_en": "Asking for menu recommendations at an unfamiliar restaurant",
    "banmal": "여기 뭐가 제일 맛있어?",
    "haeyoche": "여기 제일 잘나가는 메뉴로 추천해 주세요.",
    "hasipsioche": "이곳의 대표 메뉴를 추천 부탁드립니다.",
    "english": "What do you recommend here? / What's your best dish?",
    "usage_nuance": "'제일 잘나가는 게 뭐예요?'(What sells best?)라는 표현은 현지인들이 식당에서 가장 많이 쓰는 실전 표현입니다.",
    "quiz": {
      "question": "소문난 맛집에 처음 방문하여 직원에게 대표 음식을 물어볼 때:",
      "question_en": "Asking the server for the signature specialty at a famous restaurant:",
      "options": [
        {
          "text": "사장님, 여기가 처음인데 제일 잘나가는 걸로 추천해 주시겠어요?",
          "isCorrect": true,
          "feedback": "정답! 식당 직원들이 가장 좋아하며 자신 있게 대표 메뉴를 안내해 주는 멘트입니다."
        },
        {
          "text": "아무거나 제일 비싼 거 던져봐.",
          "isCorrect": false,
          "feedback": "무례하고 거친 어투입니다."
        },
        {
          "text": "주방장의 최고 기량을 증명할 접시를 대령하시오.",
          "isCorrect": false,
          "feedback": "사극 왕의 어투로 현대 식당에 맞지 않습니다."
        }
      ]
    }
  },
  {
    "id": 21,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "누군가 도움이나 친절을 베풀었을 때 진심으로 고마움을 전할 때",
    "situation_en": "Expressing genuine gratitude when receiving help or kindness",
    "banmal": "도와줘서 정말 고마워!",
    "haeyoche": "도와주셔서 정말 감사해요 / 고마워요.",
    "hasipsioche": "도움 주셔서 진심으로 감사드립니다.",
    "english": "Thank you so much for your help!",
    "usage_nuance": "'고마워요'는 일상적이고 친근하며, '감사합니다/감사드립니다'는 격식과 깊은 예의를 갖춘 표현입니다.",
    "quiz": {
      "question": "프레젠테이션 자료 작성을 늦게까지 도와준 팀원에게 퇴근하며 할 인사는?",
      "question_en": "Thanking a teammate who stayed late to help with your presentation slides:",
      "options": [
        {
          "text": "덕분에 잘 끝났어요. 오늘 도와주셔서 정말 감사해요!",
          "isCorrect": true,
          "feedback": "정답! 상대방의 노고를 인정하며 마음을 전하는 따뜻한 존댓말입니다."
        },
        {
          "text": "고마워, 내일은 네가 커피 사.",
          "isCorrect": false,
          "feedback": "도움을 받아놓고 뻔뻔하게 커피를 요구하는 결례입니다."
        },
        {
          "text": "귀하의 노무 공여에 경의를 표합니다.",
          "isCorrect": false,
          "feedback": "법률 서류 같은 딱딱한 문장입니다."
        }
      ]
    }
  },
  {
    "id": 22,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "실수를 하거나 상대방에게 불편을 끼쳐 사과할 때",
    "situation_en": "Apologizing when making a mistake or causing inconvenience",
    "banmal": "내가 미안해.",
    "haeyoche": "죄송해요 / 미안해요.",
    "hasipsioche": "대단히 죄송합니다 / 송구스럽습니다.",
    "english": "I am truly sorry. / My apologies.",
    "usage_nuance": "한국에서는 잘못의 크기가 크거나 상대가 윗사람일 때 '미안해요'보다 한자어인 '죄송합니다'를 써야 진정성이 전달됩니다.",
    "quiz": {
      "question": "직장에서 서류에 오타를 내어 상사에게 지적받았을 때 올바른 답변은?",
      "question_en": "Responding to a boss who pointed out a typo in your official document:",
      "options": [
        {
          "text": "미안, 다음엔 잘할게.",
          "isCorrect": false,
          "feedback": "상사에게 반말 사과는 징계 사유가 될 만큼 무례합니다."
        },
        {
          "text": "죄송합니다, 바로 꼼꼼히 확인해서 수정하겠습니다.",
          "isCorrect": true,
          "feedback": "정답! 잘못을 즉시 인정하고 해결책을 제시하는 가장 프로다운 사과입니다."
        },
        {
          "text": "죽을죄를 지었으니 사형에 처해 주십시오.",
          "isCorrect": false,
          "feedback": "상황에 맞지 않는 극단적 과장입니다."
        }
      ]
    }
  },
  {
    "id": 23,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "상대방이 세심하게 배려해 주거나 챙겨준 정성에 감사할 때",
    "situation_en": "Thanking someone for their thoughtful care and consideration",
    "banmal": "하나하나 신경 써줘서 고마워!",
    "haeyoche": "세심하게 신경 써주셔서 정말 감사해요.",
    "hasipsioche": "각별히 배려해 주셔서 깊이 감사드립니다.",
    "english": "Thank you so much for being so thoughtful and caring.",
    "usage_nuance": "단순히 '고맙습니다'보다 '신경 써주셔서'를 붙이면 상대의 정성을 알아차렸다는 감동을 줍니다.",
    "quiz": {
      "question": "감기 걸렸을 때 따뜻한 꿀물과 약을 책상에 챙겨준 룸메이트나 동료에게 전할 말은?",
      "question_en": "Thanking a colleague who thoughtfully brought honey tea and medicine when you were sick:",
      "options": [
        {
          "text": "이렇게까지 세심하게 챙겨주셔서 정말 감사해요, 감동이에요!",
          "isCorrect": true,
          "feedback": "정답! 상대방의 따뜻한 배려에 완벽하게 화답하는 감사의 말입니다."
        },
        {
          "text": "누가 사달랬어?",
          "isCorrect": false,
          "feedback": "호의를 적대시하는 매우 무례한 태도입니다."
        },
        {
          "text": "구호물자 수령을 완료하였습니다.",
          "isCorrect": false,
          "feedback": "재난 구호 멘트처럼 차갑고 엉뚱합니다."
        }
      ]
    }
  },
  {
    "id": 24,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "약속이나 일정을 깜빡 잊었을 때 솔직하게 실수를 인정할 때",
    "situation_en": "Admitting honestly that you completely forgot an appointment or task",
    "banmal": "아, 내가 깜빡했어! 미안해.",
    "haeyoche": "아이고, 제가 깜빡 잊고 있었어요. 죄송해요!",
    "hasipsioche": "미처 챙기지 못하고 실기하였습니다. 죄송합니다.",
    "english": "Oh, it completely slipped my mind! I'm so sorry.",
    "usage_nuance": "'깜빡하다'는 일상 구어체에서 가장 자연스러운 표현입니다. 격식체 자리에서는 '미처 챙기지 못했습니다'로 정제합니다.",
    "quiz": {
      "question": "친구가 빌려달라고 했던 책을 깜빡하고 집에 두고 약속 장소에 나왔을 때:",
      "question_en": "Realizing you forgot to bring the book your friend asked to borrow:",
      "options": [
        {
          "text": "미안! 아침에 정신이 없어서 깜빡했어. 내일 꼭 가져다줄게!",
          "isCorrect": true,
          "feedback": "정답! 솔직하게 실수를 인정하고 반말 친구 사이에 자연스럽게 대안을 제시합니다."
        },
        {
          "text": "네가 어제 연락 안 줘서 까먹은 거잖아.",
          "isCorrect": false,
          "feedback": "남 탓으로 돌리면 인간관계에 금이 갑니다."
        },
        {
          "text": "본인의 기억 장치 오류로 소실되었습니다.",
          "isCorrect": false,
          "feedback": "인간미 없는 로봇 말투입니다."
        }
      ]
    }
  },
  {
    "id": 25,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "교통 체증 등으로 약속 시간보다 늦게 도착했을 때",
    "situation_en": "Apologizing for arriving late due to traffic or unexpected delays",
    "banmal": "길이 너무 막혀서 늦었어, 미안해!",
    "haeyoche": "차가 밀려서 조금 늦었습니다. 정말 죄송해요!",
    "hasipsioche": "교통 체증으로 인하여 지각하였습니다. 너른 양해 부탁드립니다.",
    "english": "I'm so sorry for being late, the traffic was terrible!",
    "usage_nuance": "늦었을 때는 변명만 늘어놓기보다 도착하자마자 '늦어서 죄송합니다'를 먼저 말하는 것이 한국의 에티켓입니다.",
    "quiz": {
      "question": "면접 또는 중요한 약속에 지하철 고장으로 10분 늦게 도착했을 때 문을 열며 할 말은?",
      "question_en": "Arriving 10 minutes late to an interview or meeting due to subway delay:",
      "options": [
        {
          "text": "지하철이 고장 났는데 저보고 어쩌라고요?",
          "isCorrect": false,
          "feedback": "적반하장 태도로 신뢰를 완전히 잃습니다."
        },
        {
          "text": "늦어서 정말 죄송합니다. 지하철 지연으로 늦었습니다.",
          "isCorrect": true,
          "feedback": "정답! 사과를 우선하고 이유를 간결하게 설명하는 가장 성숙한 대처입니다."
        },
        {
          "text": "지각은 창의적 인재의 특징입니다.",
          "isCorrect": false,
          "feedback": "상황 파악을 못 하는 황당한 답변입니다."
        }
      ]
    }
  },
  {
    "id": 26,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "다른 사람의 집에서 묵었거나 장기간 큰 도움을 받았을 때",
    "situation_en": "Expressing deep gratitude after staying at someone's home or receiving long-term help",
    "banmal": "그동안 신세 많이 졌어, 고마워!",
    "haeyoche": "그동안 정말 신세 많이 졌습니다. 감사해요.",
    "hasipsioche": "베풀어주신 은혜와 후의에 머리 숙여 깊이 감사드립니다.",
    "english": "I am so indebted to you for everything. Thank you so much.",
    "usage_nuance": "'신세(身勢)를 지다'는 타인에게 폐나 돌봄을 입었을 때 쓰는 아주 한국적인 감사 관용구입니다.",
    "quiz": {
      "question": "한 달간 머물렀던 한국인 하숙집/홈스테이를 떠나며 주인 아주머니께 드릴 인사는?",
      "question_en": "Parting words to your host mother when leaving a homestay after a month:",
      "options": [
        {
          "text": "아주머니, 한 달 동안 친자식처럼 챙겨주셔서 신세 많이 졌습니다. 정말 감사했습니다!",
          "isCorrect": true,
          "feedback": "정답! 깊은 감동과 예의를 전하는 최고의 한국적 작별 인사입니다."
        },
        {
          "text": "아줌마, 나 간다. 밥값은 다 냈지?",
          "isCorrect": false,
          "feedback": "그동안의 정을 무시하는 무례한 말입니다."
        },
        {
          "text": "숙박 계약이 종료되었으니 퇴거를 승인하십시오.",
          "isCorrect": false,
          "feedback": "부동산 계약서 문구처럼 차갑습니다."
        }
      ]
    }
  },
  {
    "id": 27,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "상대방이 사과하거나 미안해할 때 너그럽게 안심시켜 줄 때",
    "situation_en": "Reassuring someone gracefully when they apologize for a small mistake",
    "banmal": "에이, 괜찮아! 신경 쓰지 마.",
    "haeyoche": "괜찮아요, 전혀 신경 쓰지 마세요.",
    "hasipsioche": "염려하지 않으셔도 괜찮습니다. 문제없습니다.",
    "english": "It's totally okay! Please don't worry about it.",
    "usage_nuance": "'에이'라는 감탄사를 가볍게 섞으면 상대의 미안한 마음을 가볍게 덜어주는 한국 특유의 온정이 전달됩니다.",
    "quiz": {
      "question": "후배가 실수로 내 책상에 물을 조금 쏟고 안절부절못하며 사과할 때 선배로서 할 말은?",
      "question_en": "Comforting a junior colleague who accidentally spilled water on your desk and panicked:",
      "options": [
        {
          "text": "괜찮아요, 서류는 안 젖었으니 신경 쓰지 마요! 닦으면 돼요.",
          "isCorrect": true,
          "feedback": "정답! 상대방의 실수를 부드럽게 감싸주는 훌륭한 선배의 태도입니다."
        },
        {
          "text": "야, 눈은 장식이냐?",
          "isCorrect": false,
          "feedback": "상대에게 상처를 주는 폭언입니다."
        },
        {
          "text": "손해배상 청구 소송을 검토하겠습니다.",
          "isCorrect": false,
          "feedback": "작은 실수에 비정상적인 반응입니다."
        }
      ]
    }
  },
  {
    "id": 28,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "상대가 실수해서 자책하고 있을 때 누구나 겪을 수 있는 일이라며 위로할 때",
    "situation_en": "Comforting someone who blames themselves for an understandable mistake",
    "banmal": "그럴 수도 있지, 너무 자책하지 마.",
    "haeyoche": "살다 보면 그럴 수도 있죠, 너무 마음에 두지 마세요.",
    "hasipsioche": "충분히 일어날 수 있는 일이오니 심려치 마십시오.",
    "english": "Things like that happen. Don't be too hard on yourself.",
    "usage_nuance": "'그럴 수도 있지'는 한국인들이 가장 듣고 싶어 하는 대표적인 힐링과 공감의 위로 문장입니다.",
    "quiz": {
      "question": "시험을 망쳐서 풀이 죽어 울고 있는 단짝 친구에게 건넬 따뜻한 위로는?",
      "question_en": "Comforting your best friend who is crying after messing up an exam:",
      "options": [
        {
          "text": "그럴 수도 있지! 다음에 더 잘 보면 돼. 기운 내!",
          "isCorrect": true,
          "feedback": "정답! 상대방의 부담을 덜어주고 힘을 북돋아 주는 따뜻한 반말 위로입니다."
        },
        {
          "text": "공부를 안 하니까 망치지, 쌤통이다.",
          "isCorrect": false,
          "feedback": "친구의 마음에 비수를 꽂는 나쁜 말입니다."
        },
        {
          "text": "평균 점수 하락 요인을 보고서로 제출해라.",
          "isCorrect": false,
          "feedback": "공감 능력이 결여된 차가운 반응입니다."
        }
      ]
    }
  },
  {
    "id": 29,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "상대방의 지원과 협조 덕분에 큰 프로젝트나 행사가 무사히 완료되었을 때",
    "situation_en": "Giving credit and thanks to someone after a project finishes successfully",
    "banmal": "네 덕분에 진짜 잘 끝났어!",
    "haeyoche": "도와주신 덕분에 무사히 잘 끝났어요.",
    "hasipsioche": "성원과 협조 덕분에 성공적으로 완수할 수 있었습니다.",
    "english": "Thanks to your support, everything wrapped up successfully!",
    "usage_nuance": "'덕분에'(Thanks to you)는 성과의 공을 상대방에게 돌리는 아주 겸손하고 아름다운 한국어 표현입니다.",
    "quiz": {
      "question": "성공적으로 끝난 프로젝트 미팅 후 함께 고생한 팀원들과 협력 부서에 보낼 감사 메일 첫 문장:",
      "question_en": "Opening sentence of a thank-you email to project collaborators after a successful launch:",
      "options": [
        {
          "text": "모두 함께 애써주신 덕분에 이번 프로젝트를 무사히 마칠 수 있었습니다. 진심으로 감사드립니다.",
          "isCorrect": true,
          "feedback": "정답! 겸손과 격식을 모두 갖춘 완벽한 비즈니스 감사문입니다."
        },
        {
          "text": "내가 다 하느라 고생했다, 다들 고마워해라.",
          "isCorrect": false,
          "feedback": "동료들의 사기를 꺾는 오만한 태도입니다."
        },
        {
          "text": "임무 완료. 이상 무.",
          "isCorrect": false,
          "feedback": "군대 암호 전문 같아서 감사의 마음이 전해지지 않습니다."
        }
      ]
    }
  },
  {
    "id": 30,
    "category": "감사와 사과",
    "category_en": "Gratitude & Apology",
    "situation": "자신의 부탁이나 질문 때문에 상대방의 시간을 빼앗아 미안할 때",
    "situation_en": "Apologizing for bothering someone or taking up their busy time",
    "banmal": "바쁜데 귀찮게 해서 미안해!",
    "haeyoche": "바쁘신데 번거롭게 해드려서 죄송해요.",
    "hasipsioche": "공무로 바쁘신 와중에 번거로움을 끼쳐 송구합니다.",
    "english": "I'm sorry to trouble you when you are so busy.",
    "usage_nuance": "존댓말 자리에서는 '귀찮게 하다' 대신 '번거롭게 해드리다' 또는 '폐를 끼치다'로 정중하게 어휘를 격상합니다.",
    "quiz": {
      "question": "바쁜 사수에게 모르는 업무 시스템 사용법을 여러 번 물어보고 나서 덧붙일 사과와 감사는?",
      "question_en": "Apologizing to a busy senior for asking multiple questions about the work system:",
      "options": [
        {
          "text": "선배님, 바쁘실 텐데 번거롭게 해드려서 죄송하고 친절히 알려주셔서 감사해요!",
          "isCorrect": true,
          "feedback": "정답! 상대의 노고를 배려하는 세련된 직장 매너의 정석입니다."
        },
        {
          "text": "선배, 귀찮았지? 어쩌겠어 네 일인데.",
          "isCorrect": false,
          "feedback": "상대방의 호의를 당연시하는 뻔뻔한 말투입니다."
        },
        {
          "text": "귀하의 시간 자원을 강탈하여 유감입니다.",
          "isCorrect": false,
          "feedback": "외계인이나 번역기 말투처럼 기괴합니다."
        }
      ]
    }
  },
  {
    "id": 31,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "상대방의 의견에 200% 격하게 동의하며 맞장구칠 때",
    "situation_en": "Strongly agreeing with someone's opinion ('You took the words right out of my mouth!')",
    "banmal": "내 말이 그 말이야! 완전 공감해.",
    "haeyoche": "제 말이 그 말이에요! 정말 그래요.",
    "hasipsioche": "(격식체 순화) 말씀하신 의견에 전적으로 동의합니다.",
    "english": "That's exactly what I'm saying! / I couldn't agree more.",
    "usage_nuance": "'내 말이 그 말이야'는 대화의 몰입도를 높여주는 마법의 리액션입니다. 공식 회의에서는 '전적으로 동의합니다'로 순화합니다.",
    "quiz": {
      "question": "동료가 '이 카페 라떼가 진짜 고소하고 맛있다'고 감탄할 때 적극적으로 맞장구치는 말은?",
      "question_en": "Agreeing enthusiastically when a coworker says the latte at this cafe is amazing:",
      "options": [
        {
          "text": "맞아요, 제 말이 그 말이에요! 여기 원두가 진짜 신선하더라고요.",
          "isCorrect": true,
          "feedback": "정답! 공감과 대화의 확장을 자연스럽게 이끄는 최고의 맞장구입니다."
        },
        {
          "text": "동의하오, 그대의 미각을 인정하오.",
          "isCorrect": false,
          "feedback": "사극 말투로 너무 어색합니다."
        },
        {
          "text": "난 별론데 네 입맛이 특이하네.",
          "isCorrect": false,
          "feedback": "상대방의 기분을 무안하게 만드는 퉁명스러운 반응입니다."
        }
      ]
    }
  },
  {
    "id": 32,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "도저히 믿기지 않는 충격적이거나 억울한 소식을 들었을 때",
    "situation_en": "Reacting to shocking or unbelievable news ('No way! / That makes no sense!')",
    "banmal": "말도 안 돼! 진짜야?",
    "haeyoche": "말도 안 돼요! 정말이에요?",
    "hasipsioche": "(격식체 순화) 참으로 믿기 어려운 일입니다.",
    "english": "No way! / That makes no sense! / Are you serious?",
    "usage_nuance": "억울하거나 깜짝 놀랄 만한 상황에서 한국인들이 반사적으로 내뱉는 감탄 표현입니다.",
    "quiz": {
      "question": "친구가 방금 사 온 스마트폰을 실수로 변기에 빠뜨렸다고 울상일 때 자연스러운 리액션은?",
      "question_en": "Reacting when a friend says they accidentally dropped their brand new phone in the toilet:",
      "options": [
        {
          "text": "헐, 말도 안 돼! 산 지 1시간도 안 됐잖아, 어떡해?!",
          "isCorrect": true,
          "feedback": "정답! '헐'과 '말도 안 돼'가 어우러져 진짜 친구의 충격을 온몸으로 공유합니다."
        },
        {
          "text": "방수 테스트 결과를 축하합니다.",
          "isCorrect": false,
          "feedback": "친구가 슬플 때 놀리는 무정한 반응입니다."
        },
        {
          "text": "상식을 벗어난 행위이므로 규탄합니다.",
          "isCorrect": false,
          "feedback": "뉴스 성명서 같은 어색한 표현입니다."
        }
      ]
    }
  },
  {
    "id": 33,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "상대방이 엄청난 성과를 거두었거나 멋진 일을 해냈을 때 칭찬할 때",
    "situation_en": "Cheering and praising someone for an amazing achievement ('Awesome! / Jackpot!')",
    "banmal": "대박! 너 진짜 대단하다!",
    "haeyoche": "와, 대박이에요! 정말 축하드려요.",
    "hasipsioche": "(격식체 순화) 대단히 훌륭한 성과이십니다. 진심으로 축하드립니다.",
    "english": "Awesome! / That's incredible! Congratulations!",
    "usage_nuance": "'대박'은 현대 한국어의 대표 감탄사이지만 속어적 성격이 있으므로 공식적인 표창식에서는 '대단히 훌륭합니다'로 순화합니다.",
    "quiz": {
      "question": "회사 동료가 몇 달간 준비한 자격증 시험에 전국 수석으로 합격했다고 했을 때:",
      "question_en": "Congratulating a colleague who passed a certification exam with top national honors:",
      "options": [
        {
          "text": "와 대박! 전국 수석이라니 진짜 대단해요, 축하해요!",
          "isCorrect": true,
          "feedback": "정답! 진심 어린 환호와 찬사를 담아 상대방을 기쁘게 만듭니다."
        },
        {
          "text": "운이 좋았네, 거저먹었네.",
          "isCorrect": false,
          "feedback": "노력을 폄하하는 비열한 반응입니다."
        },
        {
          "text": "대박이옵니다, 전하.",
          "isCorrect": false,
          "feedback": "격식체를 잘못 조합한 우스꽝스러운 말투입니다."
        }
      ]
    }
  },
  {
    "id": 34,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "힘든 야근이나 프로젝트, 운동을 마친 동료에게 노고를 위로할 때",
    "situation_en": "Acknowledging and appreciating someone's hard work after a tough task",
    "banmal": "오늘 고생 많았어, 푹 쉬어!",
    "haeyoche": "오늘 고생 많으셨어요! 푹 쉬세요.",
    "hasipsioche": "오늘 하루 대단히 수고 많으셨습니다.",
    "english": "You worked so hard today! Get some good rest.",
    "usage_nuance": "'고생하셨습니다'와 '수고하셨습니다'는 하루 일과를 끝내며 동료애를 나누는 가장 따뜻한 작별 덕담입니다.",
    "quiz": {
      "question": "밤 10시까지 함께 야근을 마치고 퇴근하는 후배에게 선배가 격려하며 할 말은?",
      "question_en": "Encouraging a junior colleague after finishing late-night overtime together at 10 PM:",
      "options": [
        {
          "text": "오늘 늦게까지 고생 진짜 많았어! 얼른 들어가서 푹 쉬어.",
          "isCorrect": true,
          "feedback": "정답! 후배의 고생을 인정하고 따뜻하게 휴식을 권하는 선배의 모범입니다."
        },
        {
          "text": "야근했다고 유세 떨지 마라.",
          "isCorrect": false,
          "feedback": "후배의 열정을 짓밟는 나쁜 말입니다."
        },
        {
          "text": "추가 노동 제공을 승인 완료하였습니다.",
          "isCorrect": false,
          "feedback": "차가운 인사과 결재 멘트 같습니다."
        }
      ]
    }
  },
  {
    "id": 35,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "힘든 일이나 슬럼프를 겪는 사람에게 용기와 기운을 북돋아 줄 때",
    "situation_en": "Cheering up someone who is feeling down or going through a tough time",
    "banmal": "힘내! 내가 항상 응원할게.",
    "haeyoche": "힘내세요! 좋은 결과가 있을 거예요.",
    "hasipsioche": "부디 기운 내십시오. 늘 응원하겠습니다.",
    "english": "Cheer up! / Stay strong, I'm always rooting for you.",
    "usage_nuance": "단순히 '힘내'만 하기보다 '내가 곁에 있다'는 공감을 덧붙여주는 것이 한국식 정(情)의 화법입니다.",
    "quiz": {
      "question": "취업 면접에서 떨어져 풀이 죽은 후배에게 밥을 사주며 건넬 따뜻한 응원은?",
      "question_en": "Cheering up a junior who failed a job interview while treating them to a meal:",
      "options": [
        {
          "text": "너무 낙담하지 마요. 분명 더 좋은 회사가 기다리고 있을 거예요, 힘내요!",
          "isCorrect": true,
          "feedback": "정답! 따뜻한 희망과 용기를 주는 가장 성숙한 선배의 응원입니다."
        },
        {
          "text": "거봐, 내 말대로 안 하니까 떨어지지.",
          "isCorrect": false,
          "feedback": "상대의 아픈 상처를 후벼 파는 잔인한 말입니다."
        },
        {
          "text": "탈락을 축하드립니다.",
          "isCorrect": false,
          "feedback": "악의적인 조롱으로 절대 쓰면 안 됩니다."
        }
      ]
    }
  },
  {
    "id": 36,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "놀라운 사실이나 소식을 듣고 진위 여부를 확인할 때",
    "situation_en": "Verifying whether unbelievable news is truly true ('Are you for real?')",
    "banmal": "진짜야? 거짓말 아니지?",
    "haeyoche": "정말이에요? 진짜예요?",
    "hasipsioche": "그 소식이 사실입니까?",
    "english": "Is that really true? / You're not joking, right?",
    "usage_nuance": "눈을 크게 뜨며 '진짜예요?!'라고 반응하는 것은 상대방의 이야기에 완전히 몰입했음을 보여주는 좋은 리액션입니다.",
    "quiz": {
      "question": "친구가 '방탄소년단(BTS)을 길거리 카페에서 바로 옆자리에서 봤다'고 자랑할 때 리액션은?",
      "question_en": "Reacting when your friend claims they saw BTS right next to them at a street cafe:",
      "options": [
        {
          "text": "대박, 진짜야?! 거짓말 아니고 진짜로?!",
          "isCorrect": true,
          "feedback": "정답! 깜짝 놀란 감정을 솔직하게 드러내며 대화의 흥을 돋웁니다."
        },
        {
          "text": "목격 증빙 사진과 지문 감식을 요청합니다.",
          "isCorrect": false,
          "feedback": "경찰 수사관 같은 황당한 어투입니다."
        },
        {
          "text": "관심 없으니까 조용히 해.",
          "isCorrect": false,
          "feedback": "대화를 단절시키는 차가운 반응입니다."
        }
      ]
    }
  },
  {
    "id": 37,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "갑작스러운 사고나 곤란한 난관에 부딪혀 어쩔 줄 모를 때",
    "situation_en": "Expressing worry when facing a sudden dilemma ('Oh no, what should we do?')",
    "banmal": "어떡해... 어쩌면 좋아?",
    "haeyoche": "어머, 어떡해요... 어쩌면 좋아요?",
    "hasipsioche": "(격식체 순화) 참으로 난감한 상황입니다. 어떻게 조치하면 좋겠습니까?",
    "english": "Oh no, what should we do? / This is so troubling.",
    "usage_nuance": "'어쩌면 좋아'는 상대의 곤란함을 내 일처럼 안타까워하며 가슴 졸이는 한국 고유의 온정적 감탄사입니다.",
    "quiz": {
      "question": "야외 결혼식 당일 아침 갑자기 폭우가 쏟아져 당황하는 친구 부부에게 건넬 안타까운 공감은?",
      "question_en": "Empathizing with a friend couple when heavy rain suddenly pours on their outdoor wedding morning:",
      "options": [
        {
          "text": "어머 어떡해... 비가 너무 많이 오네, 실내 홀로 바꿀 수 있는지 같이 알아볼까?",
          "isCorrect": true,
          "feedback": "정답! 진심으로 안타까워하며 함께 해결책을 모색해 주는 진정한 친구의 자세입니다."
        },
        {
          "text": "비 맞으면서 결혼식 하면 꿀잼이겠다 ㅋㅋㅋ",
          "isCorrect": false,
          "feedback": "인생의 중요한 날에 비웃는 결례입니다."
        },
        {
          "text": "강수량 통계를 분석해 드리겠습니다.",
          "isCorrect": false,
          "feedback": "기상청 같은 반응으로 감정 공감이 전혀 없습니다."
        }
      ]
    }
  },
  {
    "id": 38,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "어려운 시험, 소송, 병간호 등 힘든 시기를 버텨낸 사람의 심정을 헤아릴 때",
    "situation_en": "Deeply empathizing with someone who went through prolonged emotional hardship",
    "banmal": "그동안 마음고생 진짜 많았지?",
    "haeyoche": "그동안 마음고생 정말 많으셨죠?",
    "hasipsioche": "그간 심려가 대단히 크셨으리라 사료됩니다.",
    "english": "You must have had such a hard time emotionally. I feel for you.",
    "usage_nuance": "육체적 피로보다 마음의 고통을 알아주는 '마음고생 많았죠'는 상대방의 눈물을 왈칵 쏟게 만드는 가장 깊은 위로의 말입니다.",
    "quiz": {
      "question": "1년간 아픈 가족을 간병하느라 지쳐 있던 선배가 마침내 완쾌 소식을 전했을 때:",
      "question_en": "Comforting a senior colleague whose ill family member finally recovered after a tough year:",
      "options": [
        {
          "text": "선배님, 그동안 티도 못 내시고 마음고생 정말 많으셨죠? 완쾌되셔서 너무 다행이에요.",
          "isCorrect": true,
          "feedback": "정답! 상대방의 속 깊은 아픔까지 어루만지는 최고의 공감입니다."
        },
        {
          "text": "이제 병원비 안 나가서 돈 아끼겠네요.",
          "isCorrect": false,
          "feedback": "가족의 아픔을 돈으로 계산하는 천박한 반응입니다."
        },
        {
          "text": "투병 일지를 브리핑하십시오.",
          "isCorrect": false,
          "feedback": "전혀 맥락에 맞지 않는 사무적 말투입니다."
        }
      ]
    }
  },
  {
    "id": 39,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "친구의 좋은 소식(합격, 복권, 여행 등)에 귀엽게 질투하며 칭찬할 때",
    "situation_en": "Playfully expressing envy at someone's good fortune ('I'm so jealous!')",
    "banmal": "와, 부러워 죽겠다! 축하해!",
    "haeyoche": "와, 정말 부러워요! 축하드립니다.",
    "hasipsioche": "참으로 부럽고 축하할 만한 경사입니다.",
    "english": "I am so jealous! / Good for you, congratulations!",
    "usage_nuance": "한국에서는 진심 어린 축하와 함께 '부러워요~'를 애교 있게 섞으면 상대의 성취감을 한껏 높여줍니다.",
    "quiz": {
      "question": "동료가 하와이로 2주간 휴가를 떠난다고 자랑할 때 건넬 유쾌한 반응은?",
      "question_en": "Reacting playfully when a coworker boasts about taking a 2-week vacation to Hawaii:",
      "options": [
        {
          "text": "와 하와이라니 진짜 부러워요! 푹 쉬고 예쁜 사진 많이 찍어오세요!",
          "isCorrect": true,
          "feedback": "정답! 적당한 부러움과 축복을 전하는 가장 센스 넘치는 반응입니다."
        },
        {
          "text": "너 혼자 쉬면 우리는 일하라는 거냐?",
          "isCorrect": false,
          "feedback": "상대의 휴가를 방해하는 질투 섞인 투정입니다."
        },
        {
          "text": "태평양 횡단 비행의 탄소 배출량을 보고하시오.",
          "isCorrect": false,
          "feedback": "분위기를 싸늘하게 만드는 엉뚱한 말입니다."
        }
      ]
    }
  },
  {
    "id": 40,
    "category": "공감과 리액션",
    "category_en": "Empathy & Reactions",
    "situation": "상대방의 의견이나 행동에 조심스럽고 완곡하게 반대 의사를 나타낼 때",
    "situation_en": "Politely and gently expressing disagreement without being harsh",
    "banmal": "음... 그건 좀 아닌 것 같은데?",
    "haeyoche": "글쎄요... 그건 조금 아닌 것 같아요.",
    "hasipsioche": "그 방안은 다소 재고의 여지가 있다고 사료됩니다.",
    "english": "Well... I'm not so sure about that. / That might not be the best idea.",
    "usage_nuance": "'틀렸어!'라고 직설적으로 쏘아붙이기보다 '조금 아닌 것 같아요'처럼 완곡어법(쿠션어)을 쓰는 것이 한국어 소통의 핵심 지혜입니다.",
    "quiz": {
      "question": "팀 회의에서 동료가 무리한 일정을 고집할 때 부드럽게 반대 의견을 제시하는 방법은?",
      "question_en": "Gently dissenting when a coworker insists on an unrealistic deadline during a team meeting:",
      "options": [
        {
          "text": "그 아이디어도 좋지만, 현실적으로 일정이 너무 촉박해서 조금 무리인 것 같아요.",
          "isCorrect": true,
          "feedback": "정답! 상대를 먼저 긍정하고 완곡하게 현실적 문제를 짚는 훌륭한 반대 화법입니다."
        },
        {
          "text": "말도 안 되는 헛소리 그만해라.",
          "isCorrect": false,
          "feedback": "인격을 모독하는 공격적인 말투입니다."
        },
        {
          "text": "발언자의 뇌파 상태를 의심합니다.",
          "isCorrect": false,
          "feedback": "모욕죄에 해당할 수 있는 비상식적 발언입니다."
        }
      ]
    }
  },
  {
    "id": 41,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "상대방과 잠깐 이야기를 나누고 싶을 때 사전 양해를 구할 때",
    "situation_en": "Asking if someone has a moment to talk before starting a conversation",
    "banmal": "너 지금 잠깐 시간 있어?",
    "haeyoche": "혹시 지금 잠깐 시간 있으세요?",
    "hasipsioche": "잠시 말씀 나눌 시간 있으십니까?",
    "english": "Do you have a moment to talk right now?",
    "usage_nuance": "한국 직장에서는 불쑥 본론으로 들어가기 전에 '잠깐 시간 괜찮으세요?'라고 묻는 것이 기본 예절입니다.",
    "quiz": {
      "question": "보고서를 들고 상사 책상으로 다가가 면담을 요청할 때 시작하는 첫마디:",
      "question_en": "Approaching a supervisor's desk to request a brief discussion about a report:",
      "options": [
        {
          "text": "팀장님, 혹시 지금 5분 정도 잠깐 말씀 나눌 시간 있으실까요?",
          "isCorrect": true,
          "feedback": "정답! 상대방의 상황을 배려하는 완벽한 직장인 소통 매너입니다."
        },
        {
          "text": "야, 하던 거 멈추고 내 얘기 들어봐.",
          "isCorrect": false,
          "feedback": "상사에게 명령하는 행위는 절대 금물입니다."
        },
        {
          "text": "즉각 청문회를 개회합니다.",
          "isCorrect": false,
          "feedback": "국회 청문회 같은 어색한 어휘입니다."
        }
      ]
    }
  },
  {
    "id": 42,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "어려운 일이나 번거로운 일을 부탁하기 전에 미안한 마음으로 서두를 열 때",
    "situation_en": "Prefacing a request carefully when asking for a favor",
    "banmal": "저기... 부탁 하나만 해도 돼?",
    "haeyoche": "혹시 어려운 부탁 하나만 드려도 될까요?",
    "hasipsioche": "송구하오나 한 가지 부탁의 말씀을 올려도 되겠습니까?",
    "english": "Could I ask you for a favor? / Would you mind doing me a favor?",
    "usage_nuance": "'부탁 하나만 해도 돼?'라고 밑밥(사전 양해)을 깔면 상대방이 거절하거나 수락할 마음의 준비를 할 수 있습니다.",
    "quiz": {
      "question": "친한 선배에게 주말에 이사 짐 옮기는 걸 도와달라고 부탁하려 할 때:",
      "question_en": "Asking a close senior friend for a favor to help move some luggage over the weekend:",
      "options": [
        {
          "text": "선배님, 주말에 바쁘실 텐데 염치없지만 부탁 하나만 드려도 될까요?",
          "isCorrect": true,
          "feedback": "정답! 상대의 입장을 먼저 생각하는 진솔하고 예의 바른 부탁입니다."
        },
        {
          "text": "주말에 나와서 내 짐 날라라.",
          "isCorrect": false,
          "feedback": "노예 취급하는 무례한 반말입니다."
        },
        {
          "text": "강제 노역 명령서를 발송합니다.",
          "isCorrect": false,
          "feedback": "말장난으로 상대의 기분을 상하게 합니다."
        }
      ]
    }
  },
  {
    "id": 43,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "혼자 힘으로 해결하기 힘든 위급하거나 곤란한 처지에 놓였을 때",
    "situation_en": "Asking for urgent help or assistance when in trouble",
    "banmal": "나 이것 좀 도와줘!",
    "haeyoche": "저 이것 좀 도와주실 수 있나요?",
    "hasipsioche": "도움을 간곡히 부탁드립니다.",
    "english": "Could you please help me with this?",
    "usage_nuance": "'좀'(a little)이라는 완곡 부사를 섞어 '도와주실 수 있나요?'라고 의문문으로 물으면 상대방의 부담이 크게 줄어듭니다.",
    "quiz": {
      "question": "무거운 복사기 종이 박스를 들지 못해 지나가는 동료에게 도움을 요청할 때:",
      "question_en": "Asking a passing colleague to help lift a heavy box of paper:",
      "options": [
        {
          "text": "죄송하지만 이것 좀 같이 들어주실 수 있을까요?",
          "isCorrect": true,
          "feedback": "정답! 부드러운 청유형으로 누구나 흔쾌히 도와주고 싶게 만드는 말투입니다."
        },
        {
          "text": "거기 너, 힘 좀 써봐.",
          "isCorrect": false,
          "feedback": "싸움을 부르는 하대 표현입니다."
        },
        {
          "text": "중력 극복 작업을 지원하시오.",
          "isCorrect": false,
          "feedback": "물리학 용어를 남발한 기괴한 말투입니다."
        }
      ]
    }
  },
  {
    "id": 44,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "관광지나 명소에서 지나가는 행인에게 사진 촬영을 부탁할 때",
    "situation_en": "Asking a passerby to take a photo of you at a tourist spot",
    "banmal": "사진 한 장만 찍어줄래?",
    "haeyoche": "죄송한데 저희 사진 한 장만 찍어주실 수 있으세요?",
    "hasipsioche": "실례지만 사진 촬영을 부탁드려도 되겠습니까?",
    "english": "Excuse me, could you take a photo of us, please?",
    "usage_nuance": "한국인들은 사진을 정성껏 여러 장 잘 찍어주기로 유명합니다. '배경이랑 전신 나오게 찍어주세요~'라고 덧붙이면 완벽합니다.",
    "quiz": {
      "question": "경복궁에서 한복을 입고 지나가는 한국인에게 기념사진 촬영을 부탁할 때:",
      "question_en": "Asking a passerby to take a commemorative photo at Gyeongbokgung Palace:",
      "options": [
        {
          "text": "저기 실례지만 저희 사진 한 장만 찍어주실 수 있을까요?",
          "isCorrect": true,
          "feedback": "정답! 예의 바르고 상냥하여 흔쾌히 인생샷을 찍어줍니다."
        },
        {
          "text": "야, 폰 받아라. 찍어.",
          "isCorrect": false,
          "feedback": "처음 보는 행인에게 무례한 태도입니다."
        },
        {
          "text": "시각 정보를 광학 렌즈에 포착하시오.",
          "isCorrect": false,
          "feedback": "SF 영화 같은 비상식적 표현입니다."
        }
      ]
    }
  },
  {
    "id": 45,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "원어민이 말을 너무 빨리해서 알아듣기 힘들 때 천천히 말해달라고 요청할 때",
    "situation_en": "Asking someone to speak more slowly so you can understand",
    "banmal": "조금만 천천히 말해줄래?",
    "haeyoche": "제가 한국어가 서툴러서 그런데, 조금만 천천히 말씀해 주시겠어요?",
    "hasipsioche": "다소 서투르오니 천천히 말씀해 주시면 감사하겠습니다.",
    "english": "Could you speak a little more slowly, please?",
    "usage_nuance": "외국인 학습자에게 필수적인 생존 문장입니다. '한국어가 서툴러서'라는 양해를 덧붙이면 한국인들은 즉시 또박또박 천천히 친절하게 말해줍니다.",
    "quiz": {
      "question": "은행이나 공항 창구 직원이 설명하는 말이 너무 빨라 이해가 안 될 때:",
      "question_en": "When a bank or airport counter clerk speaks too fast for you to follow:",
      "options": [
        {
          "text": "죄송한데 제가 한국어가 아직 서툴러서요, 조금만 천천히 말씀해 주실 수 있나요?",
          "isCorrect": true,
          "feedback": "정답! 직원이 즉시 배려하여 쉬운 단어로 천천히 설명해 줍니다."
        },
        {
          "text": "너무 빠르니까 랩하지 마라.",
          "isCorrect": false,
          "feedback": "창구 직원에게 짜증을 내는 무례한 태도입니다."
        },
        {
          "text": "음성 재생 속도를 0.5배속으로 낮추십시오.",
          "isCorrect": false,
          "feedback": "유튜브 설정을 사람에게 말하듯 한 어색한 표현입니다."
        }
      ]
    }
  },
  {
    "id": 46,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "주변 소음이나 집중 부족으로 상대방의 말을 놓쳐 다시 들려달라고 부탁할 때",
    "situation_en": "Asking someone to repeat what they just said ('Pardon me?')",
    "banmal": "뭐라고? 다시 한번 말해줘.",
    "haeyoche": "죄송하지만 한 번만 다시 말씀해 주시겠어요?",
    "hasipsioche": "송구하오나 다시 한번 말씀해 주시기 바랍니다.",
    "english": "Pardon me? Could you say that one more time?",
    "usage_nuance": "한국에서는 그냥 '뭐?'라고 하면 싸우자는 뜻으로 오해받을 수 있습니다. 반드시 '죄송한데 다시 한번만...'을 써야 합니다.",
    "quiz": {
      "question": "소음 때문에 교수님이나 직장 상사의 지시를 명확히 못 들었을 때:",
      "question_en": "When you couldn't hear your professor or boss clearly due to surrounding noise:",
      "options": [
        {
          "text": "죄송합니다, 주변 소음 때문에 잘 못 들었는데 한 번만 다시 말씀해 주시겠습니까?",
          "isCorrect": true,
          "feedback": "정답! 이유를 명확히 밝히며 정중히 되묻는 완벽한 프로의 자세입니다."
        },
        {
          "text": "뭐라고요? 귀에 안 들어오는데요?",
          "isCorrect": false,
          "feedback": "상대방을 무시하는 듯한 불손한 말투입니다."
        },
        {
          "text": "재전송을 요청합니다 오버.",
          "isCorrect": false,
          "feedback": "군대 무전기 어투로 일상 대화에 쓰지 않습니다."
        }
      ]
    }
  },
  {
    "id": 47,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "잠시 헤어졌다가 몇 시간 뒤 같은 날 다시 만날 약속이 있을 때",
    "situation_en": "Saying goodbye temporarily to someone you'll meet again later today",
    "banmal": "이따 봐!",
    "haeyoche": "이따 봬요! / 조금 이따 봐요.",
    "hasipsioche": "잠시 후에 다시 뵙겠습니다.",
    "english": "See you later today! / Catch you in a bit.",
    "usage_nuance": "'내일 봐'와 달리 '이따 봐'는 오늘(당일) 중에 다시 만날 때 쓰는 시간적 표현입니다. 높임말로는 '이따 봬요'입니다.",
    "quiz": {
      "question": "오전 회의를 마치고 오후 3시 세미나에서 다시 만날 동료 선배에게 점심 먹으러 가며 할 인사는?",
      "question_en": "Parting before lunch with a senior colleague you will see again at a 3 PM seminar:",
      "options": [
        {
          "text": "선배님, 식사 맛있게 하시고 이따 오후 세미나 때 봬요!",
          "isCorrect": true,
          "feedback": "정답! 따뜻한 식사 덕담과 당일 재회를 기약하는 깔끔한 인사입니다."
        },
        {
          "text": "영원히 안녕.",
          "isCorrect": false,
          "feedback": "잠깐 헤어지는 상황에 지나치게 비장하고 어색합니다."
        },
        {
          "text": "이따 봐, 늦으면 알아서 해.",
          "isCorrect": false,
          "feedback": "선배에게 협박조 반말은 결례입니다."
        }
      ]
    }
  },
  {
    "id": 48,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "약속이나 회의를 잡기 위해 상대방의 일정을 물어볼 때",
    "situation_en": "Asking for someone's availability to schedule an appointment or meeting",
    "banmal": "너 언제 시간 돼?",
    "haeyoche": "언제 시간 괜찮으세요?",
    "hasipsioche": "일정이 언제가 가장 편안하십니까?",
    "english": "When are you free? / When would be a good time for you?",
    "usage_nuance": "'시간 있어?'보다 '언제 편하세요?' 또는 '언제 괜찮으세요?'처럼 상대방의 편의를 먼저 묻는 것이 품격 있는 배려 화법입니다.",
    "quiz": {
      "question": "거래처 대표님과 미팅 날짜를 조율하기 위해 일정을 여쭐 때:",
      "question_en": "Inquiring about a client CEO's availability to schedule a business meeting:",
      "options": [
        {
          "text": "대표님, 다음 주 중에 언제가 가장 편안하신지요? 대표님 일정에 맞추겠습니다.",
          "isCorrect": true,
          "feedback": "정답! 상대를 극진히 배려하는 성공적인 비즈니스 일정 조율입니다."
        },
        {
          "text": "너 화요일에 시간 비워놔라.",
          "isCorrect": false,
          "feedback": "거래처 대표에게 반말 명령은 거래 파기를 부릅니다."
        },
        {
          "text": "시간이라는 환상 속에서 언제 만날까요?",
          "isCorrect": false,
          "feedback": "철학적 궤변으로 비즈니스에 전혀 맞지 않습니다."
        }
      ]
    }
  },
  {
    "id": 49,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "준비나 확인 작업 때문에 상대방에게 잠시만 기다려 달라고 양해를 구할 때",
    "situation_en": "Asking someone to wait a moment while you prepare or check something",
    "banmal": "잠깐만 기다려줘!",
    "haeyoche": "잠시만 기다려 주세요.",
    "hasipsioche": "잠시만 대기해 주시면 감사하겠습니다.",
    "english": "Just a moment, please. / Please hold on for a second.",
    "usage_nuance": "전화 통화 중이거나 계산대, 안내 데스크에서 손님에게 가장 빈번하게 쓰는 정중한 표현입니다.",
    "quiz": {
      "question": "매장에서 손님이 찾는 물건을 창고에서 확인해 오기 위해 손님께 기다려 달라고 할 때:",
      "question_en": "Asking a customer in a store to wait while you check the warehouse for an item:",
      "options": [
        {
          "text": "손님, 창고 재고 확인해 올 테니 여기서 잠시만 기다려 주시겠어요?",
          "isCorrect": true,
          "feedback": "정답! 이유를 설명하고 양해를 구하는 가장 친절한 서비스 멘트입니다."
        },
        {
          "text": "야, 거기 서 있어 봐.",
          "isCorrect": false,
          "feedback": "손님에게 반말과 명령은 큰 불친절입니다."
        },
        {
          "text": "정지 상태를 유지하시오.",
          "isCorrect": false,
          "feedback": "로봇 명령어로 서비스 업종에 맞지 않습니다."
        }
      ]
    }
  },
  {
    "id": 50,
    "category": "부탁과 제안",
    "category_en": "Requests & Suggestions",
    "situation": "주말에 같이 놀거나 약속을 잡기 위해 상대의 주말 계획을 물어볼 때",
    "situation_en": "Asking about someone's weekend plans to hang out together",
    "banmal": "이번 주말에 뭐 해? 특별한 계획 있어?",
    "haeyoche": "이번 주말에 특별한 계획 있으세요?",
    "hasipsioche": "이번 주말에 별도의 일정이 예정되어 있으십니까?",
    "english": "Do you have any plans this weekend?",
    "usage_nuance": "친해지고 싶은 사람에게 사적인 약속을 제안하기 위한 가장 자연스러운 오프닝 질문입니다.",
    "quiz": {
      "question": "호감 있는 직장 동료나 친구에게 주말 데이트나 식사를 슬며시 제안하기 위한 첫 질문은?",
      "question_en": "Gently asking a crush or friend about their weekend to suggest getting food:",
      "options": [
        {
          "text": "혹시 이번 주말에 특별한 계획 있으세요? 괜찮으시면 맛있는 거 먹으러 가요!",
          "isCorrect": true,
          "feedback": "정답! 부담을 주지 않으면서도 다정하게 호감을 표현하는 최고의 제안입니다."
        },
        {
          "text": "주말에 나랑 놀아줄 거지? 안 놀아주면 삐진다.",
          "isCorrect": false,
          "feedback": "관계가 깊지 않은 상태에서 지나치게 부담스러운 압박입니다."
        },
        {
          "text": "토요일 48시간의 동선을 보고하십시오.",
          "isCorrect": false,
          "feedback": "스토커 같은 기괴한 조사 어투입니다."
        }
      ]
    }
  },
  {
    "id": 51,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "퇴근 시간에 지체 없이 바로 정시에 퇴근하겠다고 알릴 때",
    "situation_en": "Saying you will leave the office on the dot without overtime",
    "banmal": "나 오늘 칼퇴할 거야!",
    "haeyoche": "저 오늘 약속이 있어서 정시 퇴근해 볼게요.",
    "hasipsioche": "(격식체 순화) 금일 업무를 마감하고 정시에 퇴근하도록 하겠습니다.",
    "english": "I'm leaving right on time today (no overtime)!",
    "usage_nuance": "'칼퇴'는 '칼처럼 정시에 퇴근하다'는 유명한 은어입니다. 상사에게 보고할 때는 '칼퇴하겠습니다' 대신 '정시 퇴근하겠습니다'로 단어를 순화해야 격식에 맞습니다.",
    "quiz": {
      "question": "팀장님께 오늘 정시에 퇴근하겠다고 보고할 때 가장 바람직한 어휘는?",
      "question_en": "Informing your team leader that you will leave work on time today:",
      "options": [
        {
          "text": "팀장님, 저 오늘 칼퇴 때립니다!",
          "isCorrect": false,
          "feedback": "'칼퇴 때리다'는 친구끼리 쓰는 은어로 상사 보고에 부적합합니다."
        },
        {
          "text": "팀장님, 오늘 맡은 업무 다 마무리해서 정시에 퇴근해 보겠습니다.",
          "isCorrect": true,
          "feedback": "정답! 업무 완료를 명시하고 '정시 퇴근'이라는 정제된 어휘를 쓴 모범입니다."
        },
        {
          "text": "탈출을 감행하겠으니 막지 마십시오.",
          "isCorrect": false,
          "feedback": "탈옥수 같은 황당한 표현입니다."
        }
      ]
    }
  },
  {
    "id": 52,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "작성한 기안서나 보고서를 상사에게 제출하며 승인(사인)을 요청할 때",
    "situation_en": "Submitting a document to a supervisor and requesting their official approval/sign-off",
    "banmal": "(동료에게) 이거 사인 좀 해줘.",
    "haeyoche": "팀장님, 서류 확인하시고 결재 부탁드려요.",
    "hasipsioche": "팀장님, 품의서 검토 후 결재 부탁드리겠습니다.",
    "english": "Could you please review and approve this document?",
    "usage_nuance": "회사에서는 '사인'보다 '결재(決裁)'라는 비즈니스 한자어를 정확히 써야 프로다운 인상을 줍니다.",
    "quiz": {
      "question": "기안서 출력을 마치고 부장님 책상으로 가서 서명을 요청할 때:",
      "question_en": "Approaching the director's desk for their signature/approval on a proposal:",
      "options": [
        {
          "text": "부장님, 이번 프로젝트 기안서 검토 부탁드리겠습니다.",
          "isCorrect": true,
          "feedback": "정답! 비즈니스 공식 문서 승인을 요청하는 정석 표현입니다."
        },
        {
          "text": "부장, 여기다 이름 써봐.",
          "isCorrect": false,
          "feedback": "상사에게 명령하는 행위는 직장 내 예의범절 위반입니다."
        },
        {
          "text": "낙관을 찍지 않으면 큰일이 납니다.",
          "isCorrect": false,
          "feedback": "협박조의 기괴한 말투입니다."
        }
      ]
    }
  },
  {
    "id": 53,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "상대방의 요청이나 질문에 대해 내용을 파악한 후 다시 답해주겠다고 할 때",
    "situation_en": "Promising to look into a matter or request and get back with an answer",
    "banmal": "내가 알아보고 알려줄게!",
    "haeyoche": "제가 확인해 보고 바로 말씀드릴게요.",
    "hasipsioche": "확인 후 신속히 보고드리겠습니다 / 안내해 드리겠습니다.",
    "english": "I will check on that and get back to you right away.",
    "usage_nuance": "'알아볼게'는 친구 사이, 직장에서는 '확인해 보고 말씀드리겠습니다'가 가장 신뢰감을 주는 표현입니다.",
    "quiz": {
      "question": "고객이 제품 재고 유무를 물어보았을 때 직원이 답할 가장 신뢰감 있는 말은?",
      "question_en": "Responding to a customer asking if a product is in stock:",
      "options": [
        {
          "text": "손님, 전산 재고 확인 후 1분 내로 바로 안내해 드리겠습니다.",
          "isCorrect": true,
          "feedback": "정답! 신속하고 정확한 처리를 약속하는 프로페셔널한 서비스 응대입니다."
        },
        {
          "text": "글쎄요, 나도 모르는데 알아서 찾아보세요.",
          "isCorrect": false,
          "feedback": "직무유기 수준의 심각한 불친절입니다."
        },
        {
          "text": "미지의 세계를 탐색해 보겠습니다.",
          "isCorrect": false,
          "feedback": "진지한 질문에 장난치는 부적절한 태도입니다."
        }
      ]
    }
  },
  {
    "id": 54,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "필요한 업무 파일, 참고 링크, 문서를 상대방에게 이메일이나 메신저로 보낼 때",
    "situation_en": "Sending required work files or reference links via email or messenger",
    "banmal": "자료 카톡으로 보낼게!",
    "haeyoche": "요청하신 자료 메일로 전달해 드렸어요.",
    "hasipsioche": "요청하신 문서를 메일로 송부해 드렸사오니 확인 부탁드립니다.",
    "english": "I have forwarded/sent the requested documents to your email.",
    "usage_nuance": "직장 이메일에서는 '보내다' 대신 '전달하다' 또는 공적인 한자어 '송부(送付)하다'를 자주 사용합니다.",
    "quiz": {
      "question": "거래처에 요청받은 견적서 파일을 이메일로 첨부해 보낼 때 본문에 쓸 문장은?",
      "question_en": "Body text in an email attaching a requested price quotation to a client:",
      "options": [
        {
          "text": "요청하신 견적서 파일 첨부하여 송부해 드립니다. 검토 부탁드립니다.",
          "isCorrect": true,
          "feedback": "정답! 한국 비즈니스 이메일의 가장 모범적인 표준 문장입니다."
        },
        {
          "text": "견적서 던진다, 받아라.",
          "isCorrect": false,
          "feedback": "거래처와의 신뢰를 단번에 깨뜨리는 무례한 말입니다."
        },
        {
          "text": "전파를 타고 날아가는 문서를 영접하십시오.",
          "isCorrect": false,
          "feedback": "공식 업무 이메일에 전혀 맞지 않는 장난입니다."
        }
      ]
    }
  },
  {
    "id": 55,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "오늘 예정된 팀 미팅이나 회의 일정이 몇 시인지 확인할 때",
    "situation_en": "Inquiring about what time today's scheduled meeting takes place",
    "banmal": "오늘 회의 몇 시에 해?",
    "haeyoche": "오늘 회의가 몇 시에 시작하나요?",
    "hasipsioche": "금일 회의는 몇 시에 소집됩니까?",
    "english": "What time is today's meeting scheduled for?",
    "usage_nuance": "일상 직장 대화에서는 '회의 몇 시예요?' 또는 '회의 몇 시에 시작해요?'가 가장 널리 쓰입니다.",
    "quiz": {
      "question": "오전 회의 시간이 헷갈려 옆자리 선배에게 확인할 때:",
      "question_en": "Asking a senior teammate beside you to confirm the morning meeting time:",
      "options": [
        {
          "text": "선배님, 오늘 오전 팀 회의가 10시 시작 맞나요?",
          "isCorrect": true,
          "feedback": "정답! 정중하고 명확하게 일정을 재확인하는 훌륭한 질문입니다."
        },
        {
          "text": "회의 언제 하냐? 귀찮은데 꼭 가야 돼?",
          "isCorrect": false,
          "feedback": "선배에게 반말과 불평불만을 늘어놓는 나쁜 태도입니다."
        },
        {
          "text": "군무 회의 집결 시각을 하달하라.",
          "isCorrect": false,
          "feedback": "사극 장수 같은 말투입니다."
        }
      ]
    }
  },
  {
    "id": 56,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "처음 소개받는 선배나 업계 명사에게 평소 명성을 익히 알고 있었다고 인사할 때",
    "situation_en": "Greeting a senior or notable figure for the first time, acknowledging their good reputation",
    "banmal": "(동갑 친구에게) 네 얘기 진짜 많이 들었어!",
    "haeyoche": "선배님 말씀 정말 많이 들었습니다!",
    "hasipsioche": "익히 존함을 높이 전해 들었습니다. 뵙게 되어 영광입니다.",
    "english": "I've heard so much about you! / It's an honor to finally meet you.",
    "usage_nuance": "'말씀 많이 들었습니다'는 처음 만나는 상대의 기분을 단번에 좋게 해주는 한국 비즈니스의 최고 첫인사입니다.",
    "quiz": {
      "question": "신입사원이 회사 최고 실력자로 유명한 수석 개발자에게 처음 인사할 때:",
      "question_en": "A new hire greeting a famous senior principal engineer for the first time:",
      "options": [
        {
          "text": "수석님, 입사 전부터 소문과 말씀 정말 많이 들었습니다. 뵙게 되어 영광입니다!",
          "isCorrect": true,
          "feedback": "정답! 존경과 열정을 담아 선배를 감동시키는 최고의 첫인사입니다."
        },
        {
          "text": "네가 그렇게 코딩을 잘한다며? 어디 두고 보자.",
          "isCorrect": false,
          "feedback": "신입사원으로서 있을 수 없는 거만한 태도입니다."
        },
        {
          "text": "명성이 자자한 인간 생명체를 확인했습니다.",
          "isCorrect": false,
          "feedback": "공상과학 소설 같은 어색한 말입니다."
        }
      ]
    }
  },
  {
    "id": 57,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "연이은 과도한 업무나 시험공부로 심한 육체적 피로를 호소할 때",
    "situation_en": "Expressing heavy fatigue or exhaustion after continuous hard work or studying",
    "banmal": "나 진짜 피곤해 죽겠어.",
    "haeyoche": "요즘 일이 몰려서 피로가 많이 쌓였어요.",
    "hasipsioche": "(격식체 순화) 연일 과중한 일정으로 인해 피로가 다소 누적되었습니다.",
    "english": "I am completely exhausted. / Fatigue has really built up.",
    "usage_nuance": "사석에서는 '피곤해 죽겠다'고 하지만, 직장 상사 앞이나 회의에서는 '피로가 많이 누적되었습니다' 또는 '체력 관리가 필요할 것 같습니다'로 품격 있게 표현합니다.",
    "quiz": {
      "question": "면담 시 팀장님이 요즘 컨디션이 어떠냐고 물어보셨을 때 솔직하면서도 프로답게 답하는 방법은?",
      "question_en": "Answering professionally when your team lead asks how your physical condition is lately:",
      "options": [
        {
          "text": "팀장님, 요즘 프로젝트 마감으로 피로가 조금 쌓여서 주말에 푹 쉬며 컨디션 조절하려 합니다.",
          "isCorrect": true,
          "feedback": "정답! 상황을 객관적으로 전달하고 스스로 관리하겠다는 프로의 답변입니다."
        },
        {
          "text": "피곤해 뒤지겠으니까 일 좀 줄여요.",
          "isCorrect": false,
          "feedback": "욕설 섞인 표현과 항명으로 큰 문제가 됩니다."
        },
        {
          "text": "생체 에너지가 고갈되어 방전되었습니다.",
          "isCorrect": false,
          "feedback": "배터리 같은 비유로 진지한 면담에 어울리지 않습니다."
        }
      ]
    }
  },
  {
    "id": 58,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "내가 야근 중일 때 일을 마친 동료나 부하 직원에게 눈치 보지 말고 가라고 배려할 때",
    "situation_en": "Telling coworkers or juniors to leave work without waiting for you while you do overtime",
    "banmal": "난 남아서 더 할 테니까 너 먼저 가!",
    "haeyoche": "일 다 끝났으면 눈치 보지 말고 먼저 퇴근하세요~",
    "hasipsioche": "업무를 마감하셨다면 먼저 퇴근하십시오.",
    "english": "If your work is done, please go ahead and head home first!",
    "usage_nuance": "한국 직장 문화에서는 상사가 남아 있으면 눈치 보느라 못 가는 경우가 많으므로, 상사가 '먼저 들어가세요'라고 명확히 말해주는 것이 미덕입니다.",
    "quiz": {
      "question": "야근 중인 팀장이 자기 업무를 다 끝내고 머뭇거리는 신입사원에게 건넬 따뜻한 한마디:",
      "question_en": "A team leader speaking to a junior who finished their tasks but hesitates to leave:",
      "options": [
        {
          "text": "오늘 할 일 다 끝났으면 눈치 보지 말고 어서 퇴근해요! 내일 봅시다.",
          "isCorrect": true,
          "feedback": "정답! 신입사원의 긴장을 풀어주고 자율성을 주는 훌륭한 팀장의 배려입니다."
        },
        {
          "text": "내가 남아서 일하는데 넌 집에 가고 싶냐?",
          "isCorrect": false,
          "feedback": "직장 내 괴롭힘에 해당하는 꼰대적 발언입니다."
        },
        {
          "text": "귀가의 권한을 특별히 부여하노라.",
          "isCorrect": false,
          "feedback": "권위주의적이고 장난스러운 어색한 말투입니다."
        }
      ]
    }
  },
  {
    "id": 59,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "하루 업무나 큰 프로젝트를 모두 마치고 서로의 노고를 기릴 때",
    "situation_en": "Expressing mutual appreciation for everyone's hard work at the end of the day or project",
    "banmal": "오늘 다들 진짜 수고 많았어!",
    "haeyoche": "오늘 하루 다들 고생 많으셨습니다!",
    "hasipsioche": "오늘 하루 임직원 여러분 모두 노고 많으셨습니다.",
    "english": "Everyone worked so hard today! Great job, all.",
    "usage_nuance": "'수고'와 '고생'은 상대의 땀방울을 인정해 주는 단어로, 하루를 기분 좋게 매듭짓는 가장 강력한 긍정의 마침표입니다.",
    "quiz": {
      "question": "대규모 컨퍼런스 행사가 성공적으로 끝나고 철수하며 함께 뛴 스태프들에게 외칠 말은?",
      "question_en": "Shouting words of encouragement to the event staff after successfully finishing a big conference:",
      "options": [
        {
          "text": "여러분, 오늘 발 벗고 뛰어주신 덕분에 성공적으로 끝났습니다. 다들 정말 수고 많으셨습니다!",
          "isCorrect": true,
          "feedback": "정답! 팀워크를 빛내고 피로를 씻어주는 최고의 마무리 리더십 멘트입니다."
        },
        {
          "text": "끝났으니까 이제 해산해라.",
          "isCorrect": false,
          "feedback": "노고에 대한 감사 없는 차가운 군대식 명령입니다."
        },
        {
          "text": "모든 에너지 소모 활동이 종료되었습니다.",
          "isCorrect": false,
          "feedback": "기계음 안내 멘트처럼 영혼이 없습니다."
        }
      ]
    }
  },
  {
    "id": 60,
    "category": "직장과 학교",
    "category_en": "Workplace & Professional Life",
    "situation": "지시받았던 주요 보고서나 제안서 작성을 완료했음을 상사에게 공식 보고할 때",
    "situation_en": "Officially reporting to a manager that a required report or proposal has been completed",
    "banmal": "보고서 다 썼어, 한번 봐줘.",
    "haeyoche": "팀장님, 요청하신 보고서 다 작성해서 메일로 올려드렸어요.",
    "hasipsioche": "요청하신 월간 실적 보고서 작성 완료하여 정식으로 상신하였습니다.",
    "english": "I have completed the requested report and submitted it for your review.",
    "usage_nuance": "보고서 작성을 끝냈을 때는 단순히 '다 썼다'보다 '작성 완료하여 검토를 요청드린다'는 비즈니스 언어로 표현해야 프로답습니다.",
    "quiz": {
      "question": "신임 대표이사님께 제출할 주요 기획 보고서를 완성하여 팀장님께 최종 알릴 때:",
      "question_en": "Reporting to your manager that the strategic report for the CEO has been finished:",
      "options": [
        {
          "text": "팀장님, 대표님 보고용 기획안 작성 완료하여 검토 파일 송부해 드렸습니다. 확인 부탁드립니다.",
          "isCorrect": true,
          "feedback": "정답! 신뢰감과 책임감이 돋보이는 모범적인 직장 보고 화법입니다."
        },
        {
          "text": "보고서 다 썼으니까 네가 알아서 대표한테 전달해.",
          "isCorrect": false,
          "feedback": "상사에게 명령하고 책임을 떠넘기는 극히 무례한 행동입니다."
        },
        {
          "text": "문서 조작 작업이 마침내 성공을 거두었습니다.",
          "isCorrect": false,
          "feedback": "'문서 조작'은 범죄를 연상시키는 부적절한 단어 선택입니다."
        }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = REAL_KOREAN_DATA;
}
