document.documentElement.classList.replace('no-js', 'js');

// 1. Header scroll state
const header = document.querySelector('.site-header');
if (header) {
  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

// 2. Reveal observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// 3. Work filters
const filterButtons = document.querySelectorAll('.filters button[data-filter]');
const projects = document.querySelectorAll('.project');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projects.forEach((project) => {
      project.classList.toggle('hidden', filter !== 'all' && project.dataset.status !== filter);
    });
  });
});

// 4. Bilingual Translation Dictionary (ENG / УКР)
const i18n = {
  en: {
    // Document metadata
    'doc.title': 'Denys Yefimenko — AI Product Engineer',
    'doc.desc': 'AI Product Engineer building practical automation, AI workflows, Telegram bots, booking systems, and product prototypes.',

    // Header & Navigation
    'brand.aria': 'Denys Yefimenko, home',
    'nav.aria': 'Main navigation',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.cta': "Let's talk",
    'lang.group_aria': 'Language selector',

    // Hero
    'hero.eyebrow': 'AVAILABLE FOR SELECT PROJECTS',
    'hero.note': 'I turn messy business processes into products people can actually use — from first sketch to a working release.',
    'hero.core_idea': 'IDEA',
    'hero.core_product': 'PRODUCT',
    'hero.meta_location': 'Chernivtsi, Ukraine',
    'hero.meta_remote': 'Remote worldwide',
    'hero.meta_explore': 'Explore work ↓',

    // Approach
    'approach.index': '01 / APPROACH',
    'approach.statement': 'Not “AI for the sake of AI.” I find the manual bottleneck, shape the flow, and build the smallest product that solves it.',
    'approach.cap_1': 'AI AUTOMATION',
    'approach.cap_2': 'PRODUCT PROTOTYPING',
    'approach.cap_3': 'PYTHON BACKENDS',
    'approach.cap_4': 'WEB EXPERIENCES',
    'approach.cap_5': 'TELEGRAM BOTS',

    // Selected Work Head & Filters
    'work.index': '02 / SELECTED WORK',
    'work.title_main': 'Built to work.',
    'work.title_accent': 'Not just to impress.',
    'filter.group_aria': 'Filter projects',
    'filter.all': 'ALL',
    'filter.launched': 'LAUNCHED',
    'filter.demo': 'PRODUCT DEMOS',
    'filter.development': 'IN DEVELOPMENT',

    // Statuses
    'status.development': 'IN ACTIVE DEVELOPMENT',
    'status.demo_full': 'INTERACTIVE PRODUCT DEMO',
    'status.demo_short': 'PRODUCT DEMO',
    'status.launched': 'LAUNCHED',

    // Case Evidence Labels
    'case.scope': 'SCOPE',
    'case.impact': 'IMPACT',
    'case.problem': 'PROBLEM',
    'case.flow': 'AUTOMATED FLOW',
    'case.result': 'RESULT',

    // Project 01: HoReCaFam
    'spec.tag': 'ARCHITECTURE SPECIFICATION',
    'spec.sections': 'SECTIONS',
    'spec.categories': 'CATEGORIES',
    'spec.items': 'ACTIVE ITEMS',
    'spec.pass': 'PASS THRESHOLD',
    'spec.unlock': 'PRACTICE UNLOCK: >40%',
    'spec.exam': 'FINAL ASSESSMENT: 20 Q',
    'p1.desc': 'Staff training platform for restaurants and coffee shops. Invite-based learning, structured practice, exams, progress tracking, and content import.',
    'p1.scope_text': 'Training platform currently in development. This preview shows the verified catalog scope and designed system workflow; the complete user journey is not deployed yet.',
    'p1.impact_value': '308 training items structured · 6 sections · 32 categories',
    'p1.problem_text': 'Staff onboarding and knowledge checks are difficult to standardize across roles and locations.',
    'p1.flow_1': 'Admin invite',
    'p1.flow_2': 'role and location',
    'p1.flow_3': 'training',
    'p1.flow_4': 'practice threshold',
    'p1.flow_5': '20-question final exam',
    'p1.flow_6': 'progress result',
    'p1.result_text': 'One structured training pipeline designed to replace scattered documents and repeated manager explanations.',
    'p1.meta': 'System in development — impact reflects the structured catalog and designed workflow.',

    // Project 02: STRATA / Bearka
    'p2.aria_link': 'STRATA / Bearka — view interactive prototype (opens in a new tab)',
    'p2.alt': 'STRATA / Bearka e-commerce catalog interface showing live product grid, filters, search, and footwear variants',
    'p2.desc': 'A premium e-commerce experience for a multi-store footwear business. Designed around a supplier catalogue of approximately 5,477 products.',
    'p2.scope_text': 'Interactive storefront prototype built to validate the catalog experience and client requirements. Live inventory, backend, checkout, payments and CRM integrations are not connected yet.',
    'p2.cta': 'View prototype',

    // Project 03: DZHERO
    'p3.aria_link': 'DZHERO — view interactive prototype (opens in a new tab)',
    'p3.alt': 'DZHERO AI-production pipeline interface showing viral signal analysis, brand tone adaptation, and scheduled content generation',
    'p3.desc': 'AI-powered short-form content system that studies brand sources, finds video signals, generates scripts, and builds weekly content plans.',
    'p3.scope_text': 'Interactive frontend prototype demonstrating the planned product workflow. The AI content-processing pipeline is not connected in this public demo.',
    'p3.cta': 'View prototype',

    // Project 04: Booking Automation
    'p4.aria_link': 'Booking Automation — view interactive demo (opens in a new tab)',
    'p4.alt': 'Booking Automation availability calendar and real-time reservation calculation interface',
    'p4.desc': 'Direct-booking site and lightweight CRM for vacation-rental owners, with property-aware flows and a clean guest experience.',
    'p4.scope_text': 'Interactive product demo with simulated booking and payment flows using local demo data. No live property, payment provider or production CRM is connected.',
    'p4.cta': 'Open interactive demo',

    // Project 05: Mama Prybrala
    'p5.alt_start': 'Mama Prybrala Telegram cleaning order flow',
    'p5.alt_summary': 'Sanitized structured booking summary generated by the cleaning bot',
    'p5.desc': 'Telegram ordering automation for a cleaning service: pricing, lead collection, booking validation, admin notifications, and CRM sync.',
    'p5.scope_text': 'Launched Telegram automation used for a real cleaning-service workflow.',
    'p5.impact_value': '5 connected workflow stages · launched',
    'p5.problem_text': 'Every new request required the manager to clarify details, calculate a price, and transfer the information manually.',
    'p5.flow_1': 'Customer request',
    'p5.flow_2': 'service details',
    'p5.flow_3': 'price calculation',
    'p5.flow_4': 'booking validation',
    'p5.flow_5': 'structured manager handoff',
    'p5.result_text': 'The customer receives an estimate inside Telegram, while the manager receives a structured lead ready for processing.',
    'p5.meta': 'Telegram · Google Sheets · admin notifications · CRM handoff',

    // Project 06: AccessFlow
    'p6.alt_checkout': 'AccessFlow subscription checkout with payment plans',
    'p6.alt_menu': 'AccessFlow launched Telegram bot menu',
    'p6.desc': 'Payment verification and timed access management for private Telegram communities, with secure invite links and automatic removal when the purchased period ends.',
    'p6.scope_text': 'Launched Telegram automation with payment verification, timed access and automatic removal after subscription expiry.',
    'p6.impact_value': 'Payment, access and expiry enforcement automated · launched',
    'p6.problem_text': 'Paid community access required manual payment checks, invite delivery, and removal of expired members.',
    'p6.flow_1': 'Selected plan',
    'p6.flow_2': 'payment verified',
    'p6.flow_3': 'secure invite',
    'p6.flow_4': 'timed access',
    'p6.flow_5': 'automatic removal at expiry',
    'p6.result_text': 'The user receives access for the purchased period, while the bot automatically removes expired members without manual checks.',
    'p6.meta': 'Checkout · payment verification · Telegram access · expiry enforcement',

    // About
    'about.index': '03 / ABOUT',
    'about.title_main': 'I build at the intersection of',
    'about.title_accent': 'product thinking',
    'about.title_end': 'and engineering.',
    'about.p1': 'Before writing code, I spent more than three years inside an EdTech business — working with LMS, CRM integrations, feedback systems, and operational automations. That experience shaped how I build today: start with the real process, then choose the technology.',
    'about.p2': 'I use AI coding tools as part of the workflow, while keeping architecture, product decisions, verification, and the final result under deliberate control.',

    // Contact
    'contact.index': '04 / CONTACT',
    'contact.title_main': 'Have a process that',
    'contact.title_sub': 'should work',
    'contact.title_accent': 'better?'
  },
  uk: {
    // Document metadata
    'doc.title': 'Денис Єфіменко — AI Product Engineer',
    'doc.desc': 'AI Product Engineer: практична автоматизація, AI-процеси, Telegram-боти, системи бронювання та прототипи цифрових продуктів.',

    // Header & Navigation
    'brand.aria': 'Денис Єфіменко, на початок',
    'nav.aria': 'Головна навігація',
    'nav.work': 'Роботи',
    'nav.about': 'Про мене',
    'nav.cta': "Зв'язатися",
    'lang.group_aria': 'Вибір мови',

    // Hero
    'hero.eyebrow': 'ВІДКРИТИЙ ДО ОБРАНИХ ПРОЄКТІВ',
    'hero.note': 'Перетворюю хаотичні бізнес-процеси на продукти, якими дійсно зручно користуватися — від першого скетчу до робочого релізу.',
    'hero.core_idea': 'ІДЕЯ',
    'hero.core_product': 'ПРОДУКТ',
    'hero.meta_location': 'Чернівці, Україна',
    'hero.meta_remote': 'Віддалено по всьому світу',
    'hero.meta_explore': 'Дивитися роботи ↓',

    // Approach
    'approach.index': '01 / ПІДХІД',
    'approach.statement': 'Не “AI заради AI”. Я знаходжу вузьке місце в ручних операціях, продумую процес і створюю найменший продукт, який розв’язує цю проблему.',
    'approach.cap_1': 'AI-АВТОМАТИЗАЦІЯ',
    'approach.cap_2': 'ПРОТОТИПУВАННЯ',
    'approach.cap_3': 'PYTHON-БЕКЕНДИ',
    'approach.cap_4': 'ВЕБ-ІНТЕРФЕЙСИ',
    'approach.cap_5': 'TELEGRAM-БОТИ',

    // Selected Work Head & Filters
    'work.index': '02 / ОБРАНІ РОБОТИ',
    'work.title_main': 'Створено для роботи.',
    'work.title_accent': 'А не лише для враження.',
    'filter.group_aria': 'Фільтр проєктів',
    'filter.all': 'ВСІ',
    'filter.launched': 'ЗАПУЩЕНІ',
    'filter.demo': 'ПРОДУКТОВІ ДЕМО',
    'filter.development': 'В РОЗРОБЦІ',

    // Statuses
    'status.development': 'В АКТИВНІЙ РОЗРОБЦІ',
    'status.demo_full': 'ІНТЕРАКТИВНЕ ПРОДУКТОВЕ ДЕМО',
    'status.demo_short': 'ПРОДУКТОВЕ ДЕМО',
    'status.launched': 'ЗАПУЩЕНО',

    // Case Evidence Labels
    'case.scope': 'МЕЖІ РОБІТ',
    'case.impact': 'РЕЗУЛЬТАТ',
    'case.problem': 'ПРОБЛЕМА',
    'case.flow': 'АВТОМАТИЗОВАНИЙ ПРОЦЕС',
    'case.result': 'ПІДСУМОК',

    // Project 01: HoReCaFam
    'spec.tag': 'СПЕЦИФІКАЦІЯ АРХІТЕКТУРИ',
    'spec.sections': 'СЕКЦІЇ',
    'spec.categories': 'КАТЕГОРІЇ',
    'spec.items': 'АКТИВНІ ЕЛЕМЕНТИ',
    'spec.pass': 'ПРОХІДНИЙ БАЛ',
    'spec.unlock': 'ДОСТУП ДО ПРАКТИКИ: >40%',
    'spec.exam': 'ФІНАЛЬНИЙ ТЕСТ: 20 ПИТАНЬ',
    'p1.desc': "Платформа навчання персоналу для ресторанів і кав'ярень. Онбординг за запрошеннями, структурована практика, іспити, трекінг прогресу та імпорт контенту.",
    'p1.scope_text': "Платформа навчання на стадії активної розробки. Прев'ю відображає верифіковану структуру каталогу та спроєктований процес; повний флоу користувача ще не розгорнуто.",
    'p1.impact_value': '308 навчальних позицій структуровано · 6 секцій · 32 категорії',
    'p1.problem_text': 'Онбординг працівників та перевірку знань важко стандартизувати між різними ролями та закладами.',
    'p1.flow_1': 'Запрошення від адміністратора',
    'p1.flow_2': 'роль і локація',
    'p1.flow_3': 'навчання',
    'p1.flow_4': 'поріг практики',
    'p1.flow_5': 'фінальний тест на 20 питань',
    'p1.flow_6': 'результат прогресу',
    'p1.result_text': 'Єдиний структурований пайплайн навчання, спроєктований замінити розрізнені документи та повторні пояснення менеджерів.',
    'p1.meta': 'Система в розробці — результат відображає структурований каталог та спроєктований робочий процес.',

    // Project 02: STRATA / Bearka
    'p2.aria_link': 'STRATA / Bearka — переглянути інтерактивний прототип (відкривається у новій вкладці)',
    'p2.alt': 'Інтерфейс e-commerce каталогу STRATA / Bearka з сіткою товарів, фільтрами, пошуком та варіаціями взуття',
    'p2.desc': 'Преміальний e-commerce інтерфейс для мережі взуттєвих магазинів. Спроєктовано під каталог постачальника на ~5 477 товарів.',
    'p2.scope_text': 'Інтерактивний прототип вітрини для валідації каталогу та вимог клієнта. Реальні залишки, бекенд, оформлення замовлення, платежі та CRM-інтеграції ще не підключені.',
    'p2.cta': 'Переглянути прототип',

    // Project 03: DZHERO
    'p3.aria_link': 'DZHERO — переглянути інтерактивний прототип (відкривається у новій вкладці)',
    'p3.alt': 'Інтерфейс пайплайну DZHERO з аналізом віральних сигналів, адаптацією тону бренду та генерацією контенту',
    'p3.desc': 'AI-система підготовки контенту для коротких відео, яка аналізує джерела бренду, знаходить відеосигнали, генерує сценарії та формує щотижневі контент-плани.',
    'p3.scope_text': 'Інтерактивний фронтенд-прототип запланованого робочого процесу. AI-пайплайн обробки контенту не підключений у цьому публічному демо.',
    'p3.cta': 'Переглянути прототип',

    // Project 04: Booking Automation
    'p4.aria_link': 'Booking Automation — відкрити інтерактивне демо (відкривається у новій вкладці)',
    'p4.alt': 'Інтерфейс календаря зайнятості та розрахунку вартості бронювання Booking Automation',
    'p4.desc': 'Сайт для прямих бронювань і легка CRM для власників житла, яке здають у короткострокову оренду, з урахуванням конкретного об’єкта та зручним шляхом гостя.',
    'p4.scope_text': "Інтерактивне демо продукту із симуляцією бронювання та оплати на демо-даних. Реальні об'єкти, платіжні провайдери та CRM не підключені.",
    'p4.cta': 'Відкрити інтерактивне демо',

    // Project 05: Mama Prybrala
    'p5.alt_start': 'Telegram-бот оформлення замовлення Mama Prybrala',
    'p5.alt_summary': 'Автоматизований розрахунок замовлення Mama Prybrala',
    'p5.desc': 'Telegram-автоматизація замовлень для клінінгового сервісу: розрахунок вартості, збір лідів, валідація броней, сповіщення для адмінів та CRM-синхронізація.',
    'p5.scope_text': 'Запущена Telegram-автоматизація для робочого процесу клінінгової служби.',
    'p5.impact_value': "5 пов'язаних етапів процесу · запущено",
    'p5.problem_text': 'Кожен новий запит вимагав від менеджера вручну уточнювати деталі, розраховувати вартість і переносити дані.',
    'p5.flow_1': 'Запит клієнта',
    'p5.flow_2': 'деталі послуги',
    'p5.flow_3': 'розрахунок вартості',
    'p5.flow_4': 'валідація заявки',
    'p5.flow_5': 'структурована передача менеджеру',
    'p5.result_text': 'Клієнт отримує розрахунок безпосередньо в Telegram, а менеджер — готову структуровану заявку для обробки.',
    'p5.meta': 'Telegram · Google Sheets · адмін-сповіщення · передача в CRM',

    // Project 06: AccessFlow
    'p6.alt_checkout': 'Інтерфейс вибору тарифу та оплати AccessFlow',
    'p6.alt_menu': 'Меню Telegram-бота AccessFlow',
    'p6.desc': 'Автоматизована верифікація оплат і керування доступом до закритих Telegram-спільнот: одноразові інвайт-посилання та автоматичне видалення після завершення підписки.',
    'p6.scope_text': 'Запущена Telegram-автоматизація з перевіркою оплати, строковим доступом та автоматичним видаленням учасників після закінчення підписки.',
    'p6.impact_value': 'Перевірку оплати, надання доступу та контроль терміну дії автоматизовано · запущено',
    'p6.problem_text': 'Платний доступ до спільноти потребував ручної звірки оплат, видачі посилань та контролю закінчення терміну підписки.',
    'p6.flow_1': 'Вибір тарифу',
    'p6.flow_2': 'підтвердження оплати',
    'p6.flow_3': 'безпечне посилання',
    'p6.flow_4': 'доступ на термін',
    'p6.flow_5': 'автоматичне видалення після завершення',
    'p6.result_text': 'Користувач отримує доступ на оплачений період, а бот автоматично видаляє учасників після завершення цього періоду — без ручних перевірок.',
    'p6.meta': 'Оформлення підписки · верифікація оплат · Telegram-доступ · контроль закінчення терміну',

    // About
    'about.index': '03 / ПРО МЕНЕ',
    'about.title_main': 'Створюю на перетині',
    'about.title_accent': 'продуктового мислення',
    'about.title_end': 'та інженерії.',
    'about.p1': "До розробки я понад три роки працював усередині EdTech-компанії — з LMS, інтеграціями CRM, системами зворотного зв'язку та операційними автоматизаціями. Цей досвід сформував мій підхід: спочатку розібратися в реальному процесі, а потім обирати технологічний стек.",
    'about.p2': 'Я використовую інструменти AI-розробки як частину процесу, зберігаючи архітектуру, продуктові рішення, верифікацію та фінальний результат під власним повним контролем.',

    // Contact
    'contact.index': '04 / КОНТАКТИ',
    'contact.title_main': 'Є процес, який має',
    'contact.title_sub': 'працювати',
    'contact.title_accent': 'краще?'
  }
};

// 5. Language Switching System
const STORAGE_KEY = 'portfolio_lang';

function getStoredLanguage() {
  try {
    const urlParam = new URLSearchParams(window.location.search).get('lang');
    if (urlParam === 'uk' || urlParam === 'en') return urlParam;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'uk' || saved === 'en') return saved;
  } catch (e) {
    // Fallback if localStorage is inaccessible
  }
  return 'en';
}

function applyLanguage(lang) {
  const selectedLang = lang === 'uk' ? 'uk' : 'en';
  document.documentElement.lang = selectedLang;

  // Update switcher buttons state
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === selectedLang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  const dict = i18n[selectedLang];
  if (!dict) return;

  // Update textContent for elements with data-i18n (Zero innerHTML)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update image alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (dict[key] !== undefined) {
      el.alt = dict[key];
    }
  });

  // Update aria-label attributes
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // Update document title and meta descriptions
  if (dict['doc.title']) {
    document.title = dict['doc.title'];
  }

  if (dict['doc.desc']) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['doc.desc']);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', dict['doc.desc']);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', dict['doc.desc']);
  }

  if (dict['doc.title']) {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict['doc.title']);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', dict['doc.title']);
  }

  try {
    localStorage.setItem(STORAGE_KEY, selectedLang);
  } catch (e) {
    // Storage write fallback
  }
}

// Attach event listeners to language switcher buttons
document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetLang = btn.dataset.lang;
    if (targetLang) {
      applyLanguage(targetLang);
      const url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.delete('lang');
        window.history.replaceState(window.history.state, '', url);
      }
    }
  });
});

// Initialize language from localStorage on load if non-default
const currentLang = getStoredLanguage();
if (currentLang !== 'en') {
  applyLanguage(currentLang);
}
