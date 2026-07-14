const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".mobile-nav a");
const langButtons = document.querySelectorAll(".lang-button");

const translations = {
  en: {
    nav_company: "Company",
    nav_platform: "Platform",
    nav_solutions: "Solutions",
    nav_use_cases: "Use Cases",
    nav_contact: "Contact",
    hero_eyebrow: "Indoor Positioning + AI + Sensing Fusion",
    hero_title: "TheHeem operates intelligent location platforms for real spaces.",
    hero_text:
      "We combine indoor positioning, multi-sensor data, and AI analytics to help facilities understand movement, assets, safety, and operations in real time.",
    hero_primary: "Explore platform",
    hero_secondary: "Contact TheHeem",
    hero_metric_01: "Real-time indoor location",
    hero_metric_02: "Multi-sensor context model",
    hero_metric_03: "Event-driven operation insight",
    strip_ai: "Indoor positioning",
    strip_ict: "Operational intelligence",
    strip_korea: "Sensing data platform",
    company_eyebrow: "Company",
    company_title: "A platform operator for indoor location intelligence.",
    company_text:
      "TheHeem builds and operates indoor positioning and sensing fusion platforms for complex buildings and field environments. We connect signal data, sensor streams, maps, and AI models so operators can see where people, assets, and events are, then act faster with better context.",
    fact_01_label: "Focus",
    fact_01_value: "Indoor positioning, AI, and sensing fusion",
    fact_02_label: "Base",
    fact_02_value: "Seoul, South Korea",
    fact_03_label: "Role",
    fact_03_value: "Platform operator and solution provider",
    platform_eyebrow: "Platform",
    platform_title: "A full-stack location intelligence platform.",
    platform_text:
      "TheHeem brings together positioning infrastructure, sensing devices, map data, AI models, and service dashboards into one operating layer for indoor spaces. The platform is designed for live monitoring, historical analysis, and continuous improvement after deployment.",
    flow_01: "Signals",
    flow_02: "Fusion",
    flow_03: "AI Insight",
    flow_04: "Operations",
    platform_card_01_title: "Positioning Layer",
    platform_card_01_text: "Collects and calibrates indoor location signals for people, assets, and zones.",
    platform_card_02_title: "Fusion Layer",
    platform_card_02_text: "Combines location, sensors, maps, and device status into a reliable context model.",
    platform_card_03_title: "AI Layer",
    platform_card_03_text: "Detects patterns, anomalies, congestion, dwell time, and operational events.",
    platform_card_04_title: "Service Layer",
    platform_card_04_text: "Delivers dashboards, alerts, APIs, reports, and workflow integration.",
    suite_eyebrow: "Product Suite",
    suite_title: "Modular products for positioning, fusion, and operations.",
    suite_01_title: "Indoor location service",
    suite_01_text: "Track people, assets, zones, routes, and events across floors and complex indoor spaces.",
    suite_02_title: "Sensing data fusion",
    suite_02_text:
      "Combine positioning, sensors, device telemetry, map layers, and business rules into a usable data model.",
    suite_03_title: "Operations cockpit",
    suite_03_text: "Monitor live sites, review events, receive alerts, and understand operational patterns from one console.",
    suite_04_title: "Integration layer",
    suite_04_text: "Connect location intelligence with facility systems, workflow tools, dashboards, and partner services.",
    solutions_eyebrow: "Solutions",
    solutions_title: "From location signals to operational decisions.",
    solution_01_title: "Indoor Positioning Platform",
    solution_01_text:
      "Real-time location services for people, assets, zones, routes, and events inside buildings where GPS is not enough.",
    solution_02_title: "Sensing Fusion Engine",
    solution_02_text:
      "Fusion of positioning signals, sensor data, map context, and device telemetry into one trusted operational layer.",
    solution_03_title: "AI Operations Solutions",
    solution_03_text:
      "Dashboards, alerts, analytics, and workflow tools for safety, asset tracking, facility operations, and service optimization.",
    tech_eyebrow: "Technology",
    tech_title: "A fusion stack for real indoor environments.",
    tech_panel_title: "Core capabilities",
    tech_01: "Indoor positioning with multi-signal support",
    tech_02: "Sensor, device, and map-data fusion",
    tech_03: "AI-based event detection and operational insight",
    tech_04: "Cloud-edge platform operation and monitoring",
    node_fusion: "Fusion",
    node_position: "Position",
    node_sensors: "Sensors",
    node_ai: "AI",
    node_maps: "Maps",
    console_eyebrow: "Operations Console",
    console_title: "Designed for live sites, not static reports.",
    console_feed_01: "Asset movement detected",
    console_feed_02: "Congestion trend rising",
    console_feed_03: "Sensor quality normal",
    console_point_01_label: "Observe",
    console_point_01_text: "See location, sensor, map, and event context together.",
    console_point_02_label: "Detect",
    console_point_02_text: "Identify movement patterns, dwell time, congestion, and abnormal events.",
    console_point_03_label: "Operate",
    console_point_03_text: "Turn insight into alerts, tasks, reports, APIs, and site optimization.",
    intel_eyebrow: "Intelligence Layer",
    intel_title: "Not just coordinates. Operational context.",
    intel_01_label: "01 / Accuracy",
    intel_01_title: "Environment-aware positioning",
    intel_01_text:
      "Indoor spaces change constantly. The platform supports calibration, zone logic, map context, and signal-quality monitoring so location data remains useful in operation.",
    intel_02_label: "02 / Fusion",
    intel_02_title: "Multi-source sensing model",
    intel_02_text:
      "Positioning signals become more valuable when fused with sensors, device state, movement history, and business rules.",
    intel_03_label: "03 / AI",
    intel_03_title: "Event and pattern intelligence",
    intel_03_text:
      "AI helps identify congestion, abnormal movement, dwell patterns, asset utilization, and situations that require operator attention.",
    intel_04_label: "04 / Integration",
    intel_04_title: "APIs for service expansion",
    intel_04_text:
      "The platform can support dashboards, alerts, reports, external systems, and future service modules through structured data interfaces.",
    use_eyebrow: "Use Cases",
    use_title: "Built for high-density, high-complexity indoor operations.",
    use_01_label: "Facilities",
    use_01_title: "Smart building operations",
    use_01_text: "Understand movement, occupancy, restricted zones, and service response across large indoor spaces.",
    use_02_label: "Assets",
    use_02_title: "Asset and equipment tracking",
    use_02_text: "Locate high-value equipment, reduce search time, and monitor utilization across floors or zones.",
    use_03_label: "Safety",
    use_03_title: "Safety and incident response",
    use_03_text: "Support alerts, abnormal movement detection, evacuation context, and worker safety monitoring.",
    use_04_label: "Service",
    use_04_title: "Customer and staff flow analytics",
    use_04_text: "Analyze dwell time, traffic flow, bottlenecks, and service patterns for better site operation.",
    industry_eyebrow: "Industries",
    industry_title: "Adaptable across spaces where location and sensing matter.",
    industry_01: "Hospitals and care facilities",
    industry_02: "Smart buildings and campuses",
    industry_03: "Factories and industrial sites",
    industry_04: "Warehouses and logistics hubs",
    industry_05: "Retail, malls, and public venues",
    industry_06: "Underground and GPS-denied spaces",
    deploy_eyebrow: "Deployment",
    deploy_title: "From site survey to continuous platform operation.",
    deploy_01_title: "Site assessment",
    deploy_01_text: "Analyze space structure, signal environment, operating goals, and integration needs.",
    deploy_02_title: "System design",
    deploy_02_text: "Define positioning architecture, sensor mix, data model, dashboard, and API requirements.",
    deploy_03_title: "Deployment and calibration",
    deploy_03_text: "Install, connect, tune, validate accuracy, and prepare the platform for live operation.",
    deploy_04_title: "Operation and optimization",
    deploy_04_text: "Monitor performance, improve models, support operators, and expand use cases over time.",
    contact_eyebrow: "Contact",
    contact_title: "Bring indoor location intelligence into your operation.",
    contact_text:
      "For platform partnerships, site deployments, and solution projects, contact TheHeem by email.",
    footer_text: "Indoor Positioning & AI Sensing Fusion, Seoul",
  },
  ko: {
    nav_company: "회사",
    nav_platform: "플랫폼",
    nav_solutions: "솔루션",
    nav_use_cases: "적용 분야",
    nav_contact: "문의",
    hero_eyebrow: "실내 측위 + AI + 센싱 퓨전",
    hero_title: "TheHeem은 실제 공간을 위한 지능형 위치 플랫폼을 운영합니다.",
    hero_text:
      "실내 측위, 다중 센서 데이터, AI 분석을 결합하여 시설의 이동, 자산, 안전, 운영 상황을 실시간으로 이해하도록 돕습니다.",
    hero_primary: "플랫폼 보기",
    hero_secondary: "문의하기",
    hero_metric_01: "실시간 실내 위치",
    hero_metric_02: "다중 센서 맥락 모델",
    hero_metric_03: "이벤트 기반 운영 인사이트",
    strip_ai: "실내 측위",
    strip_ict: "운영 지능화",
    strip_korea: "센싱 데이터 플랫폼",
    company_eyebrow: "Company",
    company_title: "실내 위치 지능화를 위한 플랫폼 운영사입니다.",
    company_text:
      "TheHeem은 복잡한 건물과 현장 환경을 위한 실내 측위 및 센싱 퓨전 플랫폼을 구축하고 운영합니다. 신호 데이터, 센서 스트림, 지도, AI 모델을 연결하여 사람, 자산, 이벤트의 위치와 맥락을 더 빠르게 파악하고 대응할 수 있게 합니다.",
    fact_01_label: "Focus",
    fact_01_value: "실내 측위, AI, 센싱 퓨전",
    fact_02_label: "Base",
    fact_02_value: "대한민국 서울",
    fact_03_label: "Role",
    fact_03_value: "플랫폼 운영사 및 솔루션 제공사",
    platform_eyebrow: "Platform",
    platform_title: "실내 위치 지능화를 위한 풀스택 플랫폼.",
    platform_text:
      "TheHeem은 측위 인프라, 센싱 디바이스, 지도 데이터, AI 모델, 서비스 대시보드를 하나의 실내 공간 운영 레이어로 통합합니다. 플랫폼은 실시간 모니터링, 이력 분석, 구축 이후의 지속적인 개선을 고려해 설계됩니다.",
    flow_01: "신호",
    flow_02: "퓨전",
    flow_03: "AI 인사이트",
    flow_04: "운영",
    platform_card_01_title: "측위 레이어",
    platform_card_01_text: "사람, 자산, 구역의 실내 위치 신호를 수집하고 보정합니다.",
    platform_card_02_title: "퓨전 레이어",
    platform_card_02_text: "위치, 센서, 지도, 디바이스 상태를 신뢰 가능한 맥락 모델로 결합합니다.",
    platform_card_03_title: "AI 레이어",
    platform_card_03_text: "패턴, 이상 상황, 혼잡도, 체류 시간, 운영 이벤트를 감지합니다.",
    platform_card_04_title: "서비스 레이어",
    platform_card_04_text: "대시보드, 알림, API, 리포트, 업무 시스템 연동을 제공합니다.",
    suite_eyebrow: "Product Suite",
    suite_title: "측위, 퓨전, 운영을 위한 모듈형 제품군.",
    suite_01_title: "실내 위치 서비스",
    suite_01_text: "층과 복잡한 실내 공간 전반에서 사람, 자산, 구역, 동선, 이벤트를 추적합니다.",
    suite_02_title: "센싱 데이터 퓨전",
    suite_02_text: "측위, 센서, 디바이스 상태, 지도 레이어, 업무 규칙을 활용 가능한 데이터 모델로 결합합니다.",
    suite_03_title: "운영 콘솔",
    suite_03_text: "실시간 현장을 모니터링하고 이벤트를 검토하며 알림을 받고 운영 패턴을 하나의 콘솔에서 이해합니다.",
    suite_04_title: "연동 레이어",
    suite_04_text: "위치 지능 데이터를 시설 시스템, 업무 도구, 대시보드, 파트너 서비스와 연결합니다.",
    solutions_eyebrow: "Solutions",
    solutions_title: "위치 신호를 운영 의사결정으로 연결합니다.",
    solution_01_title: "실내 측위 플랫폼",
    solution_01_text: "GPS가 충분하지 않은 실내에서 사람, 자산, 구역, 동선, 이벤트의 실시간 위치 서비스를 제공합니다.",
    solution_02_title: "센싱 퓨전 엔진",
    solution_02_text: "측위 신호, 센서 데이터, 지도 맥락, 디바이스 상태를 하나의 신뢰 가능한 운영 레이어로 융합합니다.",
    solution_03_title: "AI 운영 솔루션",
    solution_03_text: "안전, 자산 추적, 시설 운영, 서비스 최적화를 위한 대시보드, 알림, 분석, 업무 도구를 제공합니다.",
    tech_eyebrow: "Technology",
    tech_title: "실제 실내 환경을 위한 퓨전 스택.",
    tech_panel_title: "핵심 역량",
    tech_01: "다중 신호 기반 실내 측위",
    tech_02: "센서, 디바이스, 지도 데이터 융합",
    tech_03: "AI 기반 이벤트 감지와 운영 인사이트",
    tech_04: "클라우드-엣지 플랫폼 운영 및 모니터링",
    node_fusion: "퓨전",
    node_position: "위치",
    node_sensors: "센서",
    node_ai: "AI",
    node_maps: "지도",
    console_eyebrow: "Operations Console",
    console_title: "정적인 리포트가 아니라 실제 운영 현장을 위해 설계되었습니다.",
    console_feed_01: "자산 이동 감지",
    console_feed_02: "혼잡도 상승 추세",
    console_feed_03: "센서 품질 정상",
    console_point_01_label: "관찰",
    console_point_01_text: "위치, 센서, 지도, 이벤트 맥락을 함께 확인합니다.",
    console_point_02_label: "감지",
    console_point_02_text: "이동 패턴, 체류 시간, 혼잡, 이상 이벤트를 식별합니다.",
    console_point_03_label: "운영",
    console_point_03_text: "인사이트를 알림, 업무, 리포트, API, 현장 최적화로 연결합니다.",
    intel_eyebrow: "Intelligence Layer",
    intel_title: "단순 좌표가 아니라 운영 맥락을 제공합니다.",
    intel_01_label: "01 / 정확도",
    intel_01_title: "환경 인지형 측위",
    intel_01_text:
      "실내 공간은 계속 변화합니다. 플랫폼은 보정, 구역 로직, 지도 맥락, 신호 품질 모니터링을 지원하여 위치 데이터가 운영 현장에서 계속 유용하게 쓰이도록 합니다.",
    intel_02_label: "02 / 퓨전",
    intel_02_title: "다중 소스 센싱 모델",
    intel_02_text: "측위 신호는 센서, 디바이스 상태, 이동 이력, 업무 규칙과 결합될 때 더 큰 가치를 만듭니다.",
    intel_03_label: "03 / AI",
    intel_03_title: "이벤트 및 패턴 지능",
    intel_03_text: "AI는 혼잡, 이상 이동, 체류 패턴, 자산 활용도, 운영자가 주목해야 할 상황을 식별하는 데 도움을 줍니다.",
    intel_04_label: "04 / 연동",
    intel_04_title: "서비스 확장을 위한 API",
    intel_04_text: "플랫폼은 구조화된 데이터 인터페이스를 통해 대시보드, 알림, 리포트, 외부 시스템, 향후 서비스 모듈을 지원할 수 있습니다.",
    use_eyebrow: "Use Cases",
    use_title: "밀도 높고 복잡한 실내 운영 환경을 위해 설계되었습니다.",
    use_01_label: "시설",
    use_01_title: "스마트 빌딩 운영",
    use_01_text: "대형 실내 공간의 이동, 점유, 제한 구역, 서비스 대응 상황을 파악합니다.",
    use_02_label: "자산",
    use_02_title: "자산 및 장비 추적",
    use_02_text: "고가 장비의 위치를 찾고 탐색 시간을 줄이며 층과 구역별 활용도를 모니터링합니다.",
    use_03_label: "안전",
    use_03_title: "안전 및 사고 대응",
    use_03_text: "알림, 이상 이동 감지, 대피 맥락, 작업자 안전 모니터링을 지원합니다.",
    use_04_label: "서비스",
    use_04_title: "고객 및 인력 흐름 분석",
    use_04_text: "체류 시간, 동선, 병목, 서비스 패턴을 분석하여 현장 운영을 개선합니다.",
    industry_eyebrow: "Industries",
    industry_title: "위치와 센싱이 중요한 다양한 공간에 적용할 수 있습니다.",
    industry_01: "병원 및 케어 시설",
    industry_02: "스마트 빌딩 및 캠퍼스",
    industry_03: "공장 및 산업 현장",
    industry_04: "창고 및 물류 허브",
    industry_05: "리테일, 쇼핑몰, 공공 시설",
    industry_06: "지하 및 GPS 음영 공간",
    deploy_eyebrow: "Deployment",
    deploy_title: "현장 조사부터 지속적인 플랫폼 운영까지.",
    deploy_01_title: "현장 진단",
    deploy_01_text: "공간 구조, 신호 환경, 운영 목표, 연동 요구사항을 분석합니다.",
    deploy_02_title: "시스템 설계",
    deploy_02_text: "측위 구조, 센서 구성, 데이터 모델, 대시보드, API 요구사항을 정의합니다.",
    deploy_03_title: "구축 및 보정",
    deploy_03_text: "설치, 연결, 튜닝, 정확도 검증을 거쳐 플랫폼을 실제 운영 상태로 준비합니다.",
    deploy_04_title: "운영 및 최적화",
    deploy_04_text: "성능을 모니터링하고 모델을 개선하며 운영자를 지원하고 적용 범위를 확장합니다.",
    contact_eyebrow: "Contact",
    contact_title: "운영 현장에 실내 위치 지능을 도입하세요.",
    contact_text: "플랫폼 파트너십, 현장 구축, 솔루션 프로젝트는 이메일로 문의해 주세요.",
    footer_text: "실내 측위 & AI 센싱 퓨전, 서울",
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

document.querySelectorAll(".solution-card, .suite-grid article, .intel-layout article, .use-grid article").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--y", `${event.clientY - rect.top}px`);
  });
});

const savedLanguage = localStorage.getItem("theheem_language");
setLanguage(savedLanguage === "ko" ? "ko" : "en");
