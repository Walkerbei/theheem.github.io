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
  zh: {
    hero_eyebrow: "来自韩国的 AI 与 ICT 创新",
    hero_title: "TheHeem 为互联产业建设智能系统。",
    hero_text:
      "我们开发实用型 AI 软件、连接设备平台和 ICT 基础设施，帮助组织更精准地感知、判断和运营。",
    hero_primary: "查看解决方案",
    hero_secondary: "联系 TheHeem",
    strip_ai: "应用智能",
    strip_ict: "互联基础设施",
    strip_korea: "首尔团队",
    company_eyebrow: "Company",
    company_title: "专注于真实场景智能化的科技公司。",
    company_text:
      "TheHeem 覆盖人工智能、信息通信技术、边缘设备和数字服务基础设施。我们的目标是把复杂数据与连接硬件转化为可靠、实用、可落地运行的系统。",
    fact_01_label: "Focus",
    fact_01_value: "AI 软件与 ICT 平台",
    fact_02_label: "Base",
    fact_02_value: "韩国首尔",
    fact_03_label: "Mission",
    fact_03_value: "创造实际价值的智能技术",
    solutions_eyebrow: "Solutions",
    solutions_title: "连接数据、设备与决策的系统。",
    solution_01_title: "AI 软件",
    solution_01_text: "面向运营场景的智能分析、预测、自动化与工作流支持。",
    solution_02_title: "连接设备",
    solution_02_text: "采集并传递可信现场数据的边缘硬件、传感器、摄像头和设备服务。",
    solution_03_title: "ICT 基础设施",
    solution_03_text: "面向互联运营的网络、云边架构、仪表盘和服务平台。",
    tech_eyebrow: "Technology",
    tech_title: "为部署、维护和增长而设计。",
    tech_panel_title: "核心能力",
    tech_01: "计算机视觉与数据智能",
    tech_02: "云端与边缘服务架构",
    tech_03: "设备集成与监控",
    tech_04: "运营仪表盘与分析",
    contact_eyebrow: "Contact",
    contact_title: "与 TheHeem 一起建设下一代智能系统。",
    contact_text: "合作、项目和技术沟通，请通过邮件联系 TheHeem。",
  },
};

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;

  document.documentElement.lang = lang === "ko" ? "ko" : lang === "zh" ? "zh-CN" : "en";
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

setLanguage(localStorage.getItem("theheem_language") || "en");
