const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".mobile-nav a");
const langButtons = document.querySelectorAll(".lang-button");

const translations = {
  en: {
    hero_eyebrow: "AI & ICT Innovation from Korea",
    hero_title: "TheHeem builds intelligent systems for connected industries.",
    hero_text:
      "We develop practical AI software, connected device platforms, and ICT infrastructure that help organizations sense, decide, and operate with greater precision.",
    hero_primary: "Explore solutions",
    hero_secondary: "Contact TheHeem",
    strip_ai: "Applied intelligence",
    strip_ict: "Connected infrastructure",
    strip_korea: "Seoul based team",
    company_eyebrow: "Company",
    company_title: "A technology company focused on real-world intelligence.",
    company_text:
      "TheHeem works across artificial intelligence, information and communication technology, edge devices, and digital service infrastructure. Our goal is to turn complex data and connected hardware into systems that are reliable, useful, and ready for field operation.",
    fact_01_label: "Focus",
    fact_01_value: "AI software and ICT platforms",
    fact_02_label: "Base",
    fact_02_value: "Seoul, South Korea",
    fact_03_label: "Mission",
    fact_03_value: "Intelligent technology with practical impact",
    solutions_eyebrow: "Solutions",
    solutions_title: "Systems that connect data, devices, and decisions.",
    solution_01_title: "AI Software",
    solution_01_text:
      "Intelligent analysis, prediction, automation, and workflow support for operational environments.",
    solution_02_title: "Connected Devices",
    solution_02_text:
      "Edge hardware, sensors, cameras, and device services that collect and deliver trusted field data.",
    solution_03_title: "ICT Infrastructure",
    solution_03_text:
      "Networking, cloud-edge architecture, dashboards, and service platforms for connected operations.",
    tech_eyebrow: "Technology",
    tech_title: "Designed for deployment, maintenance, and growth.",
    tech_panel_title: "Core capabilities",
    tech_01: "Computer vision and data intelligence",
    tech_02: "Cloud and edge service architecture",
    tech_03: "Device integration and monitoring",
    tech_04: "Operational dashboards and analytics",
    contact_eyebrow: "Contact",
    contact_title: "Build the next intelligent system with TheHeem.",
    contact_text:
      "For partnerships, projects, and technical conversations, contact TheHeem by email.",
  },
  ko: {
    hero_eyebrow: "한국의 AI & ICT 혁신",
    hero_title: "TheHeem은 연결된 산업을 위한 지능형 시스템을 만듭니다.",
    hero_text:
      "AI 소프트웨어, 연결 디바이스 플랫폼, ICT 인프라를 개발하여 조직이 더 정확하게 감지하고 판단하며 운영하도록 돕습니다.",
    hero_primary: "솔루션 보기",
    hero_secondary: "문의하기",
    strip_ai: "실용 인공지능",
    strip_ict: "연결 인프라",
    strip_korea: "서울 기반 팀",
    company_eyebrow: "Company",
    company_title: "현장에서 쓰이는 지능형 기술에 집중하는 기업입니다.",
    company_text:
      "TheHeem은 인공지능, 정보통신기술, 엣지 디바이스, 디지털 서비스 인프라를 다룹니다. 복잡한 데이터와 연결 하드웨어를 안정적이고 실용적인 운영 시스템으로 전환하는 것이 목표입니다.",
    fact_01_label: "Focus",
    fact_01_value: "AI 소프트웨어와 ICT 플랫폼",
    fact_02_label: "Base",
    fact_02_value: "대한민국 서울",
    fact_03_label: "Mission",
    fact_03_value: "실질적인 가치를 만드는 지능형 기술",
    solutions_eyebrow: "Solutions",
    solutions_title: "데이터, 디바이스, 의사결정을 연결하는 시스템.",
    solution_01_title: "AI 소프트웨어",
    solution_01_text: "운영 환경을 위한 분석, 예측, 자동화, 워크플로우 지원 기술.",
    solution_02_title: "연결 디바이스",
    solution_02_text: "현장 데이터를 수집하고 전달하는 엣지 장비, 센서, 카메라, 디바이스 서비스.",
    solution_03_title: "ICT 인프라",
    solution_03_text: "연결 운영을 위한 네트워크, 클라우드-엣지 구조, 대시보드, 서비스 플랫폼.",
    tech_eyebrow: "Technology",
    tech_title: "배포, 유지보수, 확장을 고려해 설계합니다.",
    tech_panel_title: "핵심 역량",
    tech_01: "컴퓨터 비전과 데이터 인텔리전스",
    tech_02: "클라우드 및 엣지 서비스 아키텍처",
    tech_03: "디바이스 통합과 모니터링",
    tech_04: "운영 대시보드와 분석",
    contact_eyebrow: "Contact",
    contact_title: "TheHeem과 다음 지능형 시스템을 구축하세요.",
    contact_text: "파트너십, 프로젝트, 기술 논의는 이메일로 문의해 주세요.",
  },
};

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;

  document.documentElement.lang = lang === "ko" ? "ko" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = dictionary[key];
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("theheem_language", lang);
}

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelectorAll(".solution-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--y", `${event.clientY - rect.top}px`);
  });
});

const savedLanguage = localStorage.getItem("theheem_language");
setLanguage(savedLanguage === "ko" ? "ko" : "en");
