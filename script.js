// 메뉴 데이터베이스: 한식, 중식, 일식, 양식·배달 각각 15개씩 총 60개
const MENU_DATA = [
  // =================== [1] 한식 (Korean) - 15개 ===================
  {
    name: "돼지김치찌개",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🍲",
    tagline: "얼큰하고 진한 국물에 두부와 돼지고기! 밥 한 공기 뚝딱 비우는 한국인의 소울푸드."
  },
  {
    name: "차돌 된장찌개",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🥘",
    tagline: "고소한 차돌박이와 구수한 된장 국물에 밥 슥슥 비벼 먹으면 속이 편안해져요."
  },
  {
    name: "매콤 제육볶음",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🥩",
    tagline: "매콤달콤한 특제 양념에 불맛 가득! 실패 없는 직장인 점심 부동의 1순위."
  },
  {
    name: "생삼겹살 구이",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🥓",
    tagline: "지글지글 노릇하게 구운 삼겹살에 구운 김치, 마늘 올려 상추쌈 한 입 가득!"
  },
  {
    name: "해물 순두부찌개",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🌶️",
    tagline: "몽글몽글 부드러운 순두부에 칼칼한 해물 국물과 계란 노른자 탁!"
  },
  {
    name: "궁중 소갈비찜",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🍖",
    tagline: "달콤 짭조름한 양념이 부드럽고 쫄깃한 갈비살에 쏙 배어든 특급 별미!"
  },
  {
    name: "매콤 닭볶음탕",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🍗",
    tagline: "매콤칼칼한 붉은 양념 국물에 포슬포슬한 감자와 쫄깃한 닭고기의 환상 조화!"
  },
  {
    name: "전주 돌솥비빔밥",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🥗",
    tagline: "지글지글 소리까지 맛있는 돌솥에 다채로운 나물과 고추장, 참기름 듬뿍!"
  },
  {
    name: "뚝배기 소불고기",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🥩",
    tagline: "달착지근한 육수에 부드러운 소고기와 팽이버섯, 당면 호로록 건져먹는 재미!"
  },
  {
    name: "순대국밥 / 돼지국밥",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🍲",
    tagline: "뜨끈하고 뽀얀 사골 육수에 쫄깃한 고기 가득! 다대기와 새우젓 풀어서 완뚝!"
  },
  {
    name: "원조 보쌈 & 수육",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🥬",
    tagline: "야들야들 촉촉하게 삶아낸 돼지 수육에 아삭하고 매콤한 보쌈김치 얹어 한 입!"
  },
  {
    name: "얼큰 뼈해장국",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🥘",
    tagline: "살코기 듬뿍 붙은 큼직한 등뼈를 발라 겨자소스에 찍어 먹고 시원한 국물로 해장 완료!"
  },
  {
    name: "구수한 청국장",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🍲",
    tagline: "꼬릿하면서도 깊은 감칠맛의 정점! 무생채와 콩나물 넣고 밥 비벼 먹으면 꿀맛."
  },
  {
    name: "철판 춘천닭갈비",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🌶️",
    tagline: "매콤 양념 닭갈비에 양배추, 고구마, 쫄깃한 떡! 마지막 치즈 볶음밥은 필수 코스!"
  },
  {
    name: "전통 대파 육개장",
    category: "korean",
    categoryName: "한식 🍚",
    emoji: "🌶️",
    tagline: "결대로 푹 찢은 소고기와 달큼한 대파, 토란대가 어우러진 깊고 칼칼한 국물 맛!"
  },

  // =================== [2] 중식 (Chinese) - 15개 ===================
  {
    name: "간짜장",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🍜",
    tagline: "센 불에 바로 볶아낸 아삭한 양파와 진한 춘장의 감칠맛! 계란후라이 얹어 비벼요."
  },
  {
    name: "불맛 삼선짬뽕",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🦐",
    tagline: "오징어, 새우, 홍합 등 신선한 해물이 듬뿍! 얼큰한 불맛 국물로 속을 뻥 뚫어줘요."
  },
  {
    name: "바삭 찹쌀탕수육",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🥢",
    tagline: "겉은 바삭바삭 속은 쫀득 촉촉! 새콤달콤 과일 소스와의 완벽한 하모니."
  },
  {
    name: "마라탕",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🥘",
    tagline: "알싸하고 얼얼한 중독성의 끝판왕! 옥수수면과 분모자, 소고기 듬뿍 넣어 후루룩."
  },
  {
    name: "매콤 깐풍기",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🍗",
    tagline: "바삭하게 튀긴 닭고기에 매콤새콤 짭조름한 마늘 고추 소스를 센 불에 휘리릭!"
  },
  {
    name: "멘보샤",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🍤",
    tagline: "바삭한 식빵 사이에 탱글탱글한 통새우살을 듬뿍 채워 튀겨낸 고급 중식 요리!"
  },
  {
    name: "양꼬치 & 꿔바로우",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🍢",
    tagline: "빙글빙글 숯불에 구워 쯔란 콕 찍는 육즙 양꼬치와 바삭 쫄깃한 꿔바로우의 조합!"
  },
  {
    name: "부드러운 동파육",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🥩",
    tagline: "두툼한 통삼겹살을 특제 간장에 장시간 졸여 입안에서 사르르 녹아내리는 부드러움."
  },
  {
    name: "중화 계란볶음밥",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🍳",
    tagline: "고온의 웍에서 고슬고슬 볶아낸 고소함 끝판왕! 진한 짜장 소스 곁들여 먹기."
  },
  {
    name: "사천 마파두부",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🌶️",
    tagline: "부드러운 연두부에 매콤하고 알싸한 사천 두반장 양념! 밥 위에 얹어 덮밥으로 최고."
  },
  {
    name: "상큼 유린기",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🥗",
    tagline: "바삭한 닭튀김에 아삭한 양상추와 청양고추, 새콤달콤 짭조름한 특제 간장 드레싱!"
  },
  {
    name: "칠리 중새우",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🍤",
    tagline: "입안 가득 탱글하게 터지는 통새우 튀김에 매콤달콤 감칠맛 넘치는 칠리소스 코팅!"
  },
  {
    name: "딤섬 & 샤오롱바오",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🥟",
    tagline: "피를 살짝 찢어 뜨거운 육즙 먼저 호로록 마시고 생강채 올려 한 입에 쏙!"
  },
  {
    name: "고추잡채 & 꽃빵",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🫓",
    tagline: "아삭한 피망과 돼지고기를 불맛 나게 볶아 따끈따끈 부드러운 꽃빵에 싸서 냠냠!"
  },
  {
    name: "얼얼한 마라샹궈",
    category: "chinese",
    categoryName: "중식 🥟",
    emoji: "🥘",
    tagline: "좋아하는 고기와 해산물, 야채를 알싸한 마라 소스에 센 불로 볶아낸 최고의 밥도둑!"
  },

  // =================== [3] 일식 (Japanese) - 15개 ===================
  {
    name: "프리미엄 돈카츠",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🥩",
    tagline: "두툼한 등심과 부드러운 안심! 바삭한 튀김옷 속 핑크빛 육즙이 살아있어요."
  },
  {
    name: "모둠 특선초밥",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍣",
    tagline: "신선한 광어, 참치, 연어, 간장새우까지! 정갈하고 깔끔한 바다의 풍미를 한 점씩."
  },
  {
    name: "돈코츠 라멘",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍜",
    tagline: "돼지 뼈를 진하게 우려낸 뽀얗고 깊은 육수에 차슈와 반숙란 올려 호로록 면치기!"
  },
  {
    name: "생연어 사케동",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🐟",
    tagline: "윤기 좌르르 흐르는 두툼한 생연어를 따뜻한 밥 위에 듬뿍 얹고 생와사비 톡!"
  },
  {
    name: "소고기 규동",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍲",
    tagline: "특제 타래소스에 부드럽게 졸인 소고기와 양파, 신선한 계란 노른자 터트려 비벼요."
  },
  {
    name: "냉모밀 (자루소바)",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🥢",
    tagline: "살얼음 동동 띄운 쯔유에 간 무와 파, 와사비 풀고 탱글탱글 메밀면을 퐁당 찍어서!"
  },
  {
    name: "촉촉한 가츠동",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍳",
    tagline: "바삭한 돈까스에 달콤 짭조름한 간장 소스와 부드러운 달걀물을 촉촉하게 입힌 덮밥."
  },
  {
    name: "모둠 야키토리 (닭꼬치)",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍢",
    tagline: "숯불 향이 그윽하게 배어든 닭다리파, 염통, 닭날개 꼬치구이! 가벼운 한 끼로 제격."
  },
  {
    name: "해물 오코노미야키",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🥞",
    tagline: "양배추와 오징어, 새우가 듬뿍! 마요네즈와 데리야키 소스 위 춤추는 가쓰오부시."
  },
  {
    name: "오사카식 타코야키",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🐙",
    tagline: "동글동글 노릇한 반죽 속에 큼직하고 쫄깃한 문어가 콕콕! 뜨거울 때 호호 불어 한 입!"
  },
  {
    name: "새우튀김 우동",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍤",
    tagline: "바삭한 왕새우튀김과 쫄깃하고 통통한 면발, 가쓰오부시 베이스의 깊고 따끈한 국물!"
  },
  {
    name: "철판 야키소바",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍜",
    tagline: "특제 소스에 아삭한 양배추와 돼지고기를 넣고 뜨거운 철판에서 센 불로 볶아낸 면요리!"
  },
  {
    name: "특 카이센동 (해물덮밥)",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍚",
    tagline: "참치 대뱃살, 연어, 단새우, 성게알(우니) 등 신선한 최고급 해산물이 한 그릇 가득!"
  },
  {
    name: "민물장어덮밥 (우나기동)",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍱",
    tagline: "비법 간장 양념을 덧발라 숯불에 노릇하게 구워낸 기력 회복 최고봉 명품 장어덮밥!"
  },
  {
    name: "소고기 스키야키",
    category: "japanese",
    categoryName: "일식 🍣",
    emoji: "🍲",
    tagline: "얇게 썬 소고기와 버섯, 야채를 자작한 간장 육수에 익혀 신선한 날달걀에 푹 찍어서!"
  },

  // =================== [4] 양식·배달 (Western & Delivery) - 15개 ===================
  {
    name: "크리스피 반반치킨 (후라이드+양념)",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍗",
    tagline: "바삭바삭 소리까지 맛있는 황금빛 튀김옷과 매콤달콤 양념! 배달 부동의 1티어."
  },
  {
    name: "페퍼로니 치즈 피자",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍕",
    tagline: "짭조름한 페퍼로니 꽃이 피었습니다! 쭉 늘어나는 100% 모짜렐라 치즈의 향연."
  },
  {
    name: "수제 비프버거 & 감자튀김",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍔",
    tagline: "두툼한 소고기 패티의 터지는 육즙, 멜팅 치즈와 갓 튀긴 바삭한 감자튀김 세트!"
  },
  {
    name: "진한 크림 까르보나라",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍝",
    tagline: "고소한 베이컨과 계란 노른자, 파마산 치즈의 꾸덕하고 녹진한 풍미가 가득!"
  },
  {
    name: "토마토 미트 볼로네제 파스타",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍝",
    tagline: "다진 쇠고기와 토마토를 뭉근하게 끓여내 깊은 감칠맛이 살아있는 클래식 스파게티."
  },
  {
    name: "스모키 바비큐 폭립",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍖",
    tagline: "달콤 짭조름한 바비큐 소스를 발라 훈연한 등갈비! 뼈에서 쏙 분리되는 부드러운 육질."
  },
  {
    name: "두툼한 안심 스테이크",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🥩",
    tagline: "완벽한 시어링에 육즙이 촉촉하게 갇힌 미디엄 굽기! 오늘 나를 위한 근사한 만찬."
  },
  {
    name: "치즈 오븐 스파게티",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🧀",
    tagline: "토마토 파스타 위에 치즈 이불을 두껍게 덮어 오븐에 노릇노릇 구운 마성의 배달 별미!"
  },
  {
    name: "트러플 버섯 크림 리조또",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍄",
    tagline: "향긋한 트러플 오일의 고급스러운 향과 알덴테로 익힌 쌀알, 진한 크림소스의 조화."
  },
  {
    name: "치즈폭탄 시카고 딥디쉬 피자",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍕",
    tagline: "흘러넘치는 치즈 폭포! 도톰한 도우 속에 치즈와 토핑이 가득 차 있는 든든한 한 조각."
  },
  {
    name: "매콤 버팔로윙 & 봉",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍗",
    tagline: "매콤새콤 특제 핫소스에 버무려 노릇하게 구워낸 윙과 봉! 탄산음료와 찰떡궁합."
  },
  {
    name: "더블 치즈버거 세트",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍔",
    tagline: "패티 2장, 치즈 2장! 미국 정통 클래식의 진한 고기맛과 풍부한 치즈 풍미의 결정체."
  },
  {
    name: "감바스 알 아히요",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🍤",
    tagline: "마늘 향 가득 배어든 따뜻한 엑스트라 버진 올리브유에 탱글한 통새우와 바게트 빵!"
  },
  {
    name: "멕시칸 비프 타코 & 퀘사디아",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🌮",
    tagline: "또띠아 속에 고기, 신선한 살사, 사워크림, 치즈를 가득 넣어 즐기는 이국적인 맛의 향연!"
  },
  {
    name: "클럽 샌드위치 & 그릴 파니니",
    category: "western",
    categoryName: "양식·배달 🍕",
    emoji: "🥪",
    tagline: "신선한 토마토, 양상추, 닭가슴살, 베이컨과 멜팅 치즈를 듬뿍 넣어 구워낸 프리미엄 브런치."
  }
];

// 상태 변수
let currentCategory = "all";
let isSpinning = false;
let soundEnabled = true;
const historyList = [];

// DOM 요소 캐싱
const catButtons = document.querySelectorAll(".cat-btn");
const recommendBtn = document.getElementById("recommendBtn");
const rouletteCard = document.getElementById("rouletteCard");
const displayEmoji = document.getElementById("displayEmoji");
const categoryLabel = document.getElementById("categoryLabel");
const foodName = document.getElementById("foodName");
const foodTagline = document.getElementById("foodTagline");
const resultActions = document.getElementById("resultActions");
const mapSearchBtn = document.getElementById("mapSearchBtn");
const historyContainer = document.getElementById("historyList");
const soundToggleBtn = document.getElementById("soundToggleBtn");
const soundIcon = document.getElementById("soundIcon");

// 전체 메뉴 리스트 모달 관련 DOM
const openListModalBtn = document.getElementById("openListModalBtn");
const menuModal = document.getElementById("menuModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalConfirmCloseBtn = document.getElementById("modalConfirmCloseBtn");
const menuSearchInput = document.getElementById("menuSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const modalMenuBody = document.getElementById("modalMenuBody");

// Web Audio API 사운드 생성기
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  // 셔플 시 틱 소리
  playTick() {
    if (!soundEnabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(450 + Math.random() * 200, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      // 오디오 미지원 환경 무시
    }
  }

  // 결과 확정 시 축하 사운드
  playWin() {
    if (!soundEnabled) return;
    try {
      this.init();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.35);
      });
    } catch (e) {}
  }
}

const sfx = new SoundEffects();

// 카테고리 탭 클릭 이벤트
catButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (isSpinning) return;
    catButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
  });
});

// 사운드 토글 버튼
soundToggleBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundToggleBtn.innerHTML = `<span>🔊</span> 효과음 <span>ON</span>`;
    soundToggleBtn.classList.remove("muted");
  } else {
    soundToggleBtn.innerHTML = `<span>🔇</span> 효과음 <span>OFF</span>`;
    soundToggleBtn.classList.add("muted");
  }
});

// 추천 로직
function getFilteredMenus() {
  if (currentCategory === "all") {
    return MENU_DATA;
  }
  return MENU_DATA.filter(item => item.category === currentCategory);
}

// 룰렛 추천 실행
function pickRandomMenu() {
  if (isSpinning) return;
  const filtered = getFilteredMenus();
  if (filtered.length === 0) return;

  isSpinning = true;
  recommendBtn.disabled = true;
  recommendBtn.querySelector(".btn-text").textContent = "메뉴 고르는 중...";

  // 이전 결과 강조 클래스 제거
  rouletteCard.classList.remove("pop-result");
  rouletteCard.classList.add("shuffling");
  resultActions.style.display = "none";

  // 셔플 애니메이션 타이머 (총 약 1.4초)
  let counter = 0;
  const totalIterations = 18;
  const baseInterval = 50;

  function shuffleStep() {
    counter++;
    const randomTemp = filtered[Math.floor(Math.random() * filtered.length)];
    displayEmoji.textContent = randomTemp.emoji;
    foodName.textContent = randomTemp.name;
    categoryLabel.textContent = randomTemp.categoryName;
    categoryLabel.className = `food-category-label ${randomTemp.category}`;
    foodTagline.textContent = "맛있는 메뉴를 고르고 있어요...";

    sfx.playTick();

    if (counter < totalIterations) {
      // 속도가 점점 느려지는 감속 효과
      const delay = baseInterval + Math.pow(counter / totalIterations, 2.2) * 120;
      setTimeout(shuffleStep, delay);
    } else {
      finishSelection(filtered);
    }
  }

  shuffleStep();
}

// 최종 선택 완료
function finishSelection(menuList) {
  const selected = menuList[Math.floor(Math.random() * menuList.length)];

  // UI 업데이트
  rouletteCard.classList.remove("shuffling");
  rouletteCard.classList.add("pop-result");

  displayEmoji.textContent = selected.emoji;
  foodName.textContent = selected.name;
  categoryLabel.textContent = selected.categoryName;
  categoryLabel.className = `food-category-label ${selected.category}`;
  foodTagline.textContent = selected.tagline;

  // 네이버 지도 맛집 검색 링크 업데이트
  const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(selected.name + ' 맛집')}`;
  mapSearchBtn.href = searchUrl;
  resultActions.style.display = "block";

  // 효과음 & 폭죽 이펙트
  sfx.playWin();
  triggerConfetti();

  // 히스토리에 추가
  addToHistory(selected);

  // 버튼 복구
  recommendBtn.disabled = false;
  recommendBtn.querySelector(".btn-text").textContent = "다른 메뉴 추천받기";
  isSpinning = false;
}

// 화려한 컨페티 폭죽 효과
function triggerConfetti() {
  if (typeof confetti === "function") {
    // 중앙 팝
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff5722', '#ff9800', '#ffd54f', '#ff7043', '#4caf50']
    });

    // 좌우 발사
    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.7 }
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.7 }
      });
    }, 150);
  }
}

// 히스토리 관리
function addToHistory(item) {
  historyList.unshift(item);
  if (historyList.length > 5) {
    historyList.pop();
  }

  historyContainer.innerHTML = "";
  historyList.forEach(hist => {
    const itemEl = document.createElement("div");
    itemEl.className = "history-item";
    itemEl.innerHTML = `<span>${hist.emoji}</span> <span>${hist.name}</span>`;
    historyContainer.appendChild(itemEl);
  });
}

// 모달에서 특정 메뉴 직접 선택
function selectMenuDirectly(item) {
  closeMenuModal();

  // 상단 카테고리 탭도 해당 카테고리로 동기화
  const targetTab = document.querySelector(`.cat-btn[data-category="${item.category}"]`);
  if (targetTab) {
    catButtons.forEach(b => b.classList.remove("active"));
    targetTab.classList.add("active");
    currentCategory = item.category;
  }

  // 결과 반영
  rouletteCard.classList.remove("shuffling");
  rouletteCard.classList.add("pop-result");

  displayEmoji.textContent = item.emoji;
  foodName.textContent = item.name;
  categoryLabel.textContent = item.categoryName;
  categoryLabel.className = `food-category-label ${item.category}`;
  foodTagline.textContent = item.tagline;

  // 네이버 지도 링크 업데이트
  const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(item.name + ' 맛집')}`;
  mapSearchBtn.href = searchUrl;
  resultActions.style.display = "block";

  // 효과음 & 축하 폭죽
  sfx.init();
  sfx.playWin();
  triggerConfetti();

  // 히스토리에 추가
  addToHistory(item);

  recommendBtn.disabled = false;
  recommendBtn.querySelector(".btn-text").textContent = "다른 메뉴 추천받기";
}

// 모달 열기/닫기
function openMenuModal() {
  menuModal.classList.add("active");
  menuModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  menuSearchInput.value = "";
  clearSearchBtn.style.display = "none";
  renderModalMenuList("");
  setTimeout(() => {
    menuSearchInput.focus();
  }, 100);
}

function closeMenuModal() {
  menuModal.classList.remove("active");
  menuModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// 모달 내 메뉴 리스트 렌더링
function renderModalMenuList(filterKeyword = "") {
  modalMenuBody.innerHTML = "";
  const query = filterKeyword.trim().toLowerCase();

  // 검색어가 있을 경우
  if (query) {
    const matched = MENU_DATA.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.tagline.toLowerCase().includes(query) ||
      item.categoryName.toLowerCase().includes(query)
    );

    if (matched.length === 0) {
      modalMenuBody.innerHTML = `
        <div class="search-empty-state">
          <span class="empty-icon">🍽️</span>
          <p><strong>'${filterKeyword}'</strong>에 해당하는 메뉴를 찾을 수 없어요.</p>
          <p class="menu-card-sub" style="margin-top: 4px;">다른 단어로 검색해보세요!</p>
        </div>
      `;
      return;
    }

    const grid = document.createElement("div");
    grid.className = "modal-menu-grid";
    matched.forEach(item => {
      grid.appendChild(createMenuCardElement(item));
    });

    const wrapper = document.createElement("div");
    wrapper.className = "category-section-block";
    wrapper.innerHTML = `
      <div class="category-header-title">
        <span>🔍 검색 결과</span>
        <span class="category-items-count">${matched.length}개</span>
      </div>
    `;
    wrapper.appendChild(grid);
    modalMenuBody.appendChild(wrapper);
    return;
  }

  // 검색어가 없을 경우: 카테고리별 그룹화 렌더링
  const categories = [
    { key: "korean", title: "🍚 한식", count: 15 },
    { key: "chinese", title: "🥟 중식", count: 15 },
    { key: "japanese", title: "🍣 일식", count: 15 },
    { key: "western", title: "🍕 양식·배달", count: 15 }
  ];

  categories.forEach(cat => {
    const items = MENU_DATA.filter(m => m.category === cat.key);
    const section = document.createElement("div");
    section.className = "category-section-block";

    const header = document.createElement("div");
    header.className = "category-header-title";
    header.innerHTML = `
      <span>${cat.title}</span>
      <span class="category-items-count">${items.length}종</span>
    `;
    section.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "modal-menu-grid";
    items.forEach(item => {
      grid.appendChild(createMenuCardElement(item));
    });

    section.appendChild(grid);
    modalMenuBody.appendChild(section);
  });
}

// 개별 메뉴 카드 돔 생성
function createMenuCardElement(item) {
  const card = document.createElement("button");
  card.className = "menu-item-card";
  card.type = "button";
  card.title = `${item.name} - ${item.tagline}`;
  card.innerHTML = `
    <span class="menu-card-emoji">${item.emoji}</span>
    <div class="menu-card-text">
      <span class="menu-card-name">${item.name}</span>
      <span class="menu-card-sub">${item.categoryName}</span>
    </div>
  `;

  card.addEventListener("click", () => {
    selectMenuDirectly(item);
  });

  return card;
}

// 이벤트 바인딩
recommendBtn.addEventListener("click", () => {
  sfx.init(); // 사용자 제스처 시 AudioContext 활성화
  pickRandomMenu();
});

// 전체 목록 모달 이벤트
openListModalBtn.addEventListener("click", () => {
  sfx.init();
  openMenuModal();
});

closeModalBtn.addEventListener("click", closeMenuModal);
modalConfirmCloseBtn.addEventListener("click", closeMenuModal);

menuModal.addEventListener("click", (e) => {
  if (e.target === menuModal) {
    closeMenuModal();
  }
});

// 검색 입력 이벤트
menuSearchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  clearSearchBtn.style.display = value ? "flex" : "none";
  renderModalMenuList(value);
});

clearSearchBtn.addEventListener("click", () => {
  menuSearchInput.value = "";
  clearSearchBtn.style.display = "none";
  renderModalMenuList("");
  menuSearchInput.focus();
});

// 키보드 이벤트 (스페이스바 추천, ESC 모달 닫기)
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuModal.classList.contains("active")) {
    closeMenuModal();
    return;
  }

  if (e.code === "Space" && e.target === document.body && !isSpinning && !menuModal.classList.contains("active")) {
    e.preventDefault();
    pickRandomMenu();
  }
});
