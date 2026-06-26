// ── Basics ────────────────────────────────────────────────────────────────────

export const basics = {
  name: 'Konrad Trestka',
  positioning: 'Quantitative developer — trading systems, derivatives research, and the infrastructure beneath both',
  location: 'Minneapolis, MN',
  school: 'University of Minnesota Twin Cities',
  degree: 'B.S. Computer Science + B.S. Data Science',
  graduation: 'May 2027',
  gpa: '~3.75',
  github: 'https://github.com/KonradT22',
  linkedin: 'https://www.linkedin.com/in/konrad-trestka-dev/',
  email: 'ktrestka05@gmail.com',
  languages: ['English', 'Polish'],
};

// ── Proof points (quant / homepage default) ───────────────────────────────────

export interface ProofPointSegment {
  text: string;
  bold?: boolean;
}

export interface ProofPoint {
  n: string;
  segments: ProofPointSegment[];
}

export const proofPoints: ProofPoint[] = [
  {
    n: '01',
    segments: [
      { text: '1st place', bold: true },
      { text: ' — FMA Quantitative Trading Competition · Apr 2026 — judged by DRW & Cargill. Built and deployed the automated, event-driven trading engine (Python, Alpaca, DigitalOcean); ATR stops + circuit breakers → ' },
      { text: '0.00%', bold: true },
      { text: ' max drawdown in live forward-testing.' },
    ],
  },
  {
    n: '02',
    segments: [
      { text: 'Undergraduate derivatives research: neural surrogates for path-dependent volatility, with no-arbitrage guardrails.' },
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────

export type Lane = 'quant' | 'ML' | 'data eng' | 'systems/infra' | 'hardware' | 'full-stack';

export interface Project {
  fig: string;
  title: string;
  stack: string;
  description: string;
  lanes: Lane[];
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    fig: 'fig.02',
    title: 'Quantitative Trading Engine',
    stack: 'Python · Alpaca API · DigitalOcean',
    description:
      'Two-sleeve PEAD strategy — intraday VWAP, 20-day SMA, momentum scoring. Risk controls: ATR-adjusted stops, 50% gross exposure cap, circuit breakers. Async REST polling for 1-min data; Linux cron fail-safes. 1st place, FMA competition, judged by DRW & Cargill. 0.00% max drawdown in live forward-testing.',
    lanes: ['quant', 'systems/infra', 'data eng'],
    github: 'https://github.com/KonradT22',
    featured: true,
  },
  {
    fig: 'fig.03',
    title: 'Neural Surrogates for Path-Dependent Volatility',
    stack: 'Python · PyTorch · SLURM/HPC',
    description:
      'Fast ANN surrogate pricer that shadows a 4-factor Markovian path-dependent volatility model, with no-arbitrage (SVI/SSVI) guardrails that fail back to the slow model under stress. S&P 500 options; runs on the university supercomputer.',
    lanes: ['quant', 'ML'],
    github: 'https://github.com/KonradT22/VolatilityIsMostlyPathDependent',
    featured: true,
  },
  {
    fig: 'fig.04',
    title: 'Algorithmic Trading Backtester',
    stack: 'Python · pandas · yfinance · Matplotlib',
    description:
      'OOP backtesting engine with an SMA-crossover strategy, P&L and equity-curve visualization, and an optional news-sentiment sleeve.',
    lanes: ['quant', 'data eng'],
    github: 'https://github.com/KonradT22/algorithmic-trading-backtester',
    featured: false,
  },
  {
    fig: 'fig.05',
    title: 'AJAP — Job-Search Command Center',
    stack: 'Python · Flask · APScheduler · SQLite · Gemini API',
    description:
      'Ingests from multiple ATS sources, classifies roles, surfaces them in a dashboard, and fires alerts. Self-hosted always-on daemon.',
    lanes: ['data eng', 'systems/infra'],
    github: 'https://github.com/KonradT22',
    featured: false,
  },
  {
    fig: 'fig.06',
    title: 'DIY Electronic Handbrake',
    stack: 'Arduino · C++ · Pro Micro · TIG-welded lever',
    description:
      'HID-compliant sim-racing handbrake built around a slide potentiometer and Arduino Pro Micro, with a TIG-welded steel lever. Plug-and-play with any sim title.',
    lanes: ['hardware'],
    github: 'https://github.com/KonradT22/handbrake-arduino',
    featured: false,
  },
  {
    fig: 'fig.07',
    title: 'Gopher Major Planner',
    stack: 'React · Node · Vite · Tailwind · CourseDog API',
    description:
      'Degree-planning tool for University of Minnesota students, built with the Social Coding club. Pulls live curriculum data via the CourseDog API.',
    lanes: ['full-stack'],
    github: 'https://github.com/KonradT22',
    featured: false,
  },
];

// ── Experience ────────────────────────────────────────────────────────────────

export interface Experience {
  role: string;
  org: string;
  period: string;
  location: string;
  award?: boolean;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: 'Undergraduate Researcher',
    org: 'University of Minnesota',
    period: 'Jun 2026–present',
    location: 'Minneapolis',
    bullets: [
      'Quantitative research in derivatives (advisor: John Dodson). Building a fast neural-network surrogate pricer that shadows a 4-factor Markovian path-dependent volatility model.',
      'No-arbitrage (SVI/SSVI) guardrails that fail back to the slow model under stress. S&P 500 options; runs on the university supercomputer (SLURM).',
    ],
  },
  {
    role: '1st place',
    org: 'FMA Quantitative Trading Competition',
    period: 'Apr 2026',
    location: 'Minneapolis',
    award: true,
    bullets: [
      'Judged by professionals from DRW and Cargill.',
      'Built and deployed the automated, event-driven trading engine (Python, Alpaca, DigitalOcean); two-sleeve PEAD strategy with ATR-adjusted stops, 50% gross exposure cap, circuit breakers → 0.00% max drawdown in live forward-testing.',
    ],
  },
  {
    role: 'Data Engineer Intern → systems & infrastructure',
    org: 'PURIS',
    period: 'Sep 2025–present',
    location: 'Minneapolis',
    bullets: [
      'Built ETL pipelines (Azure Data Factory → Azure SQL) with idempotent upserts; developed a Ruby on Rails incident-logging app on top.',
      'Led network discovery and a firewall cutover across multiple sites, simplifying VLAN/subnet design.',
      'Built identity infrastructure in Microsoft Entra — dynamic, attribute-based access groups driven by HR data.',
      'Managed endpoints with Microsoft Intune + Android Enterprise (kiosk fleet) and Windows Autopilot enrollment.',
      'Migrated production Docker workloads to new in-house Ubuntu servers with verified backups and a staged, zero-loss cutover.',
      'Hardened DNS and email security (SPF/DKIM/DMARC).',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Fine Global Assets',
    period: 'May 2024–Dec 2024',
    location: 'Chicago',
    bullets: [
      'Designed and built the company website (Figma, React, Node.js): +25% engagement, +15% retention; worked directly with the CEO.',
      'Kicked off a Shopify-API e-commerce build for an affiliate.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    org: 'Upwork',
    period: 'Aug 2023–May 2024',
    location: 'Remote',
    bullets: [
      'Delivered full-stack web projects (Flask, Python, HTML/CSS); 5/5 client rating.',
    ],
  },
];

// ── Skills ────────────────────────────────────────────────────────────────────

export const skills = {
  quant: [
    'derivatives',
    'volatility modeling',
    'backtesting',
    'risk controls',
    'Monte Carlo',
    'strategy design (PEAD)',
  ],
  ml: [
    'neural networks / surrogates',
    'applied ML',
    'regression',
    'optimization',
  ],
  dataEng: [
    'Azure SQL',
    'Azure Data Factory',
    'ETL / pipeline design',
    'SQL',
    'pandas / SQLite',
    'data modeling',
  ],
  systems: [
    'Linux',
    'Docker / systemd',
    'Microsoft Entra (IAM)',
    'Intune / MDM',
    'networking (VLAN/firewall)',
    'DNS/email security',
    'self-hosting',
    'monitoring / observability',
  ],
};

// ── Lane-lens system ──────────────────────────────────────────────────────────

export interface LaneFeaturedItem {
  fig: string;
  context?: string;
  title: string;
  stack: string;
  description: string;
  displayLanes: Lane[];
  github?: string;
}

export interface LaneConfig {
  id: string;
  label: string;
  eyebrow: string;
  sub: string;
  proofPoints: ProofPoint[];
  featuredItems: LaneFeaturedItem[];
  emphasizedSkillKeys: Array<keyof typeof skills>;
  resume: string;
}

export const laneConfigs: Record<string, LaneConfig> = {
  quant: {
    id: 'quant',
    label: 'quant',
    eyebrow: 'Quantitative developer · Minneapolis',
    sub: 'I build trading systems, derivatives research, and the infrastructure beneath both — and I care about what they do when the market doesn\'t cooperate.',
    proofPoints,
    featuredItems: [
      {
        fig: 'fig.02',
        context: 'personal project',
        title: 'Quantitative Trading Engine',
        stack: 'Python · Alpaca API · DigitalOcean',
        description: 'Two-sleeve PEAD strategy — intraday VWAP, 20-day SMA, momentum scoring. ATR-adjusted stops, 50% gross exposure cap, circuit breakers. 1st place, FMA competition, judged by DRW & Cargill. 0.00% max drawdown in live forward-testing.',
        displayLanes: ['quant', 'systems/infra', 'data eng'],
        github: 'https://github.com/KonradT22',
      },
      {
        fig: 'fig.03',
        context: 'UROP — University of Minnesota',
        title: 'Neural Surrogates for Path-Dependent Volatility',
        stack: 'Python · PyTorch · SLURM/HPC',
        description: 'Fast ANN surrogate pricer shadowing a 4-factor Markovian PDV model, with SVI/SSVI no-arbitrage guardrails that fail back to the slow model under stress. S&P 500 options; runs on the university supercomputer.',
        displayLanes: ['quant', 'ML'],
        github: 'https://github.com/KonradT22/VolatilityIsMostlyPathDependent',
      },
      {
        fig: 'fig.04',
        context: 'personal project',
        title: 'Algorithmic Trading Backtester',
        stack: 'Python · pandas · yfinance · Matplotlib',
        description: 'OOP backtesting engine with SMA-crossover strategy, P&L and equity-curve visualization, and an optional news-sentiment sleeve.',
        displayLanes: ['quant', 'data eng'],
        github: 'https://github.com/KonradT22/algorithmic-trading-backtester',
      },
    ],
    emphasizedSkillKeys: ['quant', 'ml'],
    resume: '/resumes/konrad-trestka-quant.pdf',
  },

  research: {
    id: 'research',
    label: 'research',
    eyebrow: 'Derivatives research · Minneapolis',
    sub: 'I do quantitative research in derivatives pricing and volatility — building models that are both theoretically grounded and fast enough to use.',
    proofPoints: [
      {
        n: '01',
        segments: [
          { text: 'Neural-network surrogate pricer for a 4-factor Markovian path-dependent volatility model — no-arbitrage (SVI/SSVI) guardrails, fail-back to the slow model under stress. S&P 500 options; runs on the UMN supercomputer.' },
        ],
      },
      {
        n: '02',
        segments: [
          { text: '1st place', bold: true },
          { text: ' — FMA Quantitative Trading Competition · Apr 2026. Live-tested, event-driven engine; ' },
          { text: '0.00%', bold: true },
          { text: ' max drawdown.' },
        ],
      },
    ],
    featuredItems: [
      {
        fig: 'fig.03',
        context: 'UROP — University of Minnesota',
        title: 'Neural Surrogates for Path-Dependent Volatility',
        stack: 'Python · PyTorch · SLURM/HPC',
        description: 'Fast ANN surrogate pricer shadowing a 4-factor Markovian PDV model, with SVI/SSVI no-arbitrage guardrails that fail back to the slow model under stress. S&P 500 options; runs on the university supercomputer.',
        displayLanes: ['quant', 'ML'],
        github: 'https://github.com/KonradT22/VolatilityIsMostlyPathDependent',
      },
      {
        fig: 'fig.04',
        context: 'personal project',
        title: 'Algorithmic Trading Backtester',
        stack: 'Python · pandas · yfinance · Matplotlib',
        description: 'OOP backtesting engine with SMA-crossover strategy, P&L and equity-curve visualization, and an optional news-sentiment sleeve.',
        displayLanes: ['quant', 'data eng'],
        github: 'https://github.com/KonradT22/algorithmic-trading-backtester',
      },
      {
        fig: 'fig.02',
        context: 'FMA competition',
        title: 'Quantitative Trading Engine',
        stack: 'Python · Alpaca API · DigitalOcean',
        description: 'Two-sleeve PEAD strategy with ATR-adjusted stops, 50% gross exposure cap, circuit breakers. The applied side of the research: live forward-testing, 0.00% max drawdown.',
        displayLanes: ['quant', 'systems/infra'],
        github: 'https://github.com/KonradT22',
      },
    ],
    emphasizedSkillKeys: ['quant', 'ml'],
    resume: '/resumes/konrad-trestka-quant.pdf',
  },

  data: {
    id: 'data',
    label: 'data',
    eyebrow: 'Data engineering · Minneapolis',
    sub: 'I build reliable data pipelines, cloud ETL, and the operational infrastructure that keeps data flowing — with enough systems depth to own the stack end to end.',
    proofPoints: [
      {
        n: '01',
        segments: [
          { text: 'Built ETL pipelines (Azure Data Factory → Azure SQL) with idempotent upserts; developed a Ruby on Rails incident-logging application on top of the consolidated data.' },
        ],
      },
      {
        n: '02',
        segments: [
          { text: 'Built and self-hosted AJAP — a job-search data aggregator ingesting from multiple ATS APIs, classifying roles via Gemini, and surfacing them on a dashboard with alert triggers.' },
        ],
      },
    ],
    featuredItems: [
      {
        fig: 'exp.01',
        context: 'PURIS — Sep 2025–present',
        title: 'Data Engineering & ETL',
        stack: 'Azure Data Factory · Azure SQL · Ruby on Rails · Python',
        description: 'Built ETL pipelines (Azure Data Factory → Azure SQL) with idempotent upserts across multiple source systems. Developed a Ruby on Rails incident-logging application on top of the consolidated data. Hardened DNS and email security (SPF/DKIM/DMARC).',
        displayLanes: ['data eng'],
      },
      {
        fig: 'fig.05',
        context: 'personal project',
        title: 'AJAP — Job-Search Command Center',
        stack: 'Python · Flask · APScheduler · SQLite · Gemini API',
        description: 'Ingests from multiple ATS sources, classifies roles via ML, surfaces them in a dashboard, and fires alerts. Self-hosted always-on daemon.',
        displayLanes: ['data eng', 'systems/infra'],
        github: 'https://github.com/KonradT22',
      },
      {
        fig: 'fig.04',
        context: 'personal project',
        title: 'Algorithmic Trading Backtester',
        stack: 'Python · pandas · yfinance · Matplotlib',
        description: 'OOP backtesting engine processing historical price data: SMA-crossover strategy, P&L and equity-curve visualization, optional news-sentiment sleeve.',
        displayLanes: ['quant', 'data eng'],
        github: 'https://github.com/KonradT22/algorithmic-trading-backtester',
      },
    ],
    emphasizedSkillKeys: ['dataEng', 'systems'],
    resume: '/resumes/konrad-trestka-data.pdf',
  },

  systems: {
    id: 'systems',
    label: 'systems',
    eyebrow: 'Systems & infrastructure · Minneapolis',
    sub: 'I build and operate infrastructure — networks, identity, endpoints, and self-hosted services — with a focus on things that stay reliable under operational load.',
    proofPoints: [
      {
        n: '01',
        segments: [
          { text: 'Led network discovery and a firewall cutover across multiple sites, simplified VLAN/subnet design, built Microsoft Entra identity infrastructure with dynamic HR-driven access groups, and migrated production Docker workloads with zero data loss.' },
        ],
      },
      {
        n: '02',
        segments: [
          { text: 'Built and self-hosted AJAP — a persistent daemon with multi-source ingestion, ML classification, and a web dashboard; always-on, self-monitored.' },
        ],
      },
    ],
    featuredItems: [
      {
        fig: 'exp.02',
        context: 'PURIS — Sep 2025–present',
        title: 'Infrastructure, Networking & Identity',
        stack: 'Linux · Docker · Microsoft Entra · Intune/MDM · Meraki',
        description: 'Led network discovery and a firewall cutover across multiple sites, simplifying VLAN/subnet design. Built identity infrastructure in Microsoft Entra — dynamic, attribute-based access groups driven by HR data. Managed endpoints with Intune + Android Enterprise kiosk fleet. Migrated production Docker workloads to new Ubuntu servers with staged, zero-loss cutover.',
        displayLanes: ['systems/infra'],
      },
      {
        fig: 'fig.05',
        context: 'personal project',
        title: 'AJAP — Job-Search Command Center',
        stack: 'Python · Flask · APScheduler · SQLite · Gemini API',
        description: 'Self-hosted always-on daemon: ingests from multiple ATS APIs, classifies roles via ML, surfaces results in a web dashboard, fires alerts. Includes monitoring and process supervision.',
        displayLanes: ['data eng', 'systems/infra'],
        github: 'https://github.com/KonradT22',
      },
    ],
    emphasizedSkillKeys: ['systems', 'dataEng'],
    resume: '/resumes/konrad-trestka-cloud-infra.pdf',
  },
};
