export const site = {
  url: "https://rogelio-alcaraz.vercel.app",
  name: "Rogelio Alcaraz",
  email: "ralcaraz.canals@gmail.com",
  github: "https://github.com/ralcaraz6",
  linkedin: "https://www.linkedin.com/in/rogelioalcaraz/",
  algoryme: "https://algoryme.com",
};

export const ui = {
  en: {
    skip: "Skip to content",
    nav: { index: "Index", builds: "Projects", notes: "Notes" },
    languages: { en: "English", es: "Spanish" },
    homeTitle: "Rogelio Alcaraz · Data & AI engineer",
    description:
      "I build AI systems connected to company data. Projects and notes on the systems I work on.",
    folio: "Data & AI engineering / AI systems",
    intro:
      "I build AI systems connected to company data: LLM and RAG applications, agentic workflows and the predictive models underneath them. I run Algoryme, my studio in Barcelona.",
    about: "About",
    background:
      "I studied business at the University of Barcelona and have spent 10+ years in analytics and growth, part of them in Sydney.",
    workHistory: "Work history",
    backToHistory: "← Work history",
    projects: "Projects",
    details: "Details",
    website: "Website ↗",
    visit: "Visit the website ↗",
    allProjects: "← All projects",
    myWork: "My work",
    earlierHeading: "Earlier data and growth work",
    earlierIntro: [
      "Before Algoryme I worked in-house, in Sydney and in Barcelona.",
      "These are the models and systems I built there.",
    ],
    seeHistory: "Work details →",
    technicalHeading: "How the daily briefing works",
    notes: "Notes",
    noteFolio: (min) => `Note · ${min} min read`,
    min: (min) => `${min} min`,
    relatedProject: "Related project",
    previous: "Previous",
    next: "Next",
    backToNotes: "← Return to Notes",
    footerCta: "Have a data or AI problem to solve?",
    getInTouch: "Get in touch",
    notFound: "This page does not exist.",
    backHome: "← Back to the index",
  },
  es: {
    skip: "Saltar al contenido",
    nav: { index: "Índice", builds: "Proyectos", notes: "Notas" },
    languages: { en: "Inglés", es: "Español" },
    homeTitle: "Rogelio Alcaraz · Ingeniero de datos e IA",
    description:
      "Construyo sistemas de IA conectados a los datos de cada empresa. Proyectos y notas sobre los sistemas en los que trabajo.",
    folio: "Ingeniería de datos e IA / Sistemas de IA",
    intro:
      "Construyo sistemas de IA conectados a los datos de cada empresa: aplicaciones LLM y RAG, flujos agénticos y los modelos predictivos que hay debajo. Dirijo Algoryme, mi estudio en Barcelona.",
    about: "Sobre mí",
    background:
      "Estudié Empresariales en la Universidad de Barcelona y llevo más de 10 años en analítica y growth, parte de ellos en Sídney.",
    workHistory: "Trayectoria",
    backToHistory: "← Trayectoria",
    projects: "Proyectos",
    details: "Detalles",
    website: "Web ↗",
    visit: "Visitar la web ↗",
    allProjects: "← Todos los proyectos",
    myWork: "Mi trabajo",
    earlierHeading: "Trabajo anterior en datos y growth",
    earlierIntro: [
      "Antes de Algoryme trabajé dentro de empresa, en Sídney y en Barcelona.",
      "Estos son los modelos y sistemas que construí allí.",
    ],
    seeHistory: "Detalles →",
    technicalHeading: "Cómo funciona el briefing diario",
    notes: "Notas",
    noteFolio: (min) => `Nota · ${min} min de lectura`,
    min: (min) => `${min} min`,
    relatedProject: "Proyecto relacionado",
    previous: "Anterior",
    next: "Siguiente",
    backToNotes: "← Volver a Notas",
    footerCta: "¿Tienes un problema de datos o IA que resolver?",
    getInTouch: "Escríbeme",
    notFound: "Esta página no existe.",
    backHome: "← Volver al índice",
  },
};

export const history = [
  {
    slug: "restia",
    period: { en: "2017–2019", es: "2017–2019" },
    title: { en: "Restia · Co-founder & CEO", es: "Restia · Cofundador y CEO" },
    summary: {
      en: "B2B SaaS for restaurant operations. I led a team of six engineers.",
      es: "SaaS B2B para la operativa de restaurantes. Dirigí un equipo de seis ingenieros.",
    },
    body: {
      en: [
        "From November 2017 to January 2019 I co-founded and ran Restia, B2B SaaS software for restaurant operations in Barcelona.",
        "I led a team of six engineers, owned the budget and the KPIs, and shipped the product.",
        "Before Restia I was a product expert at Samsung and a junior marketing analyst at La Caixa.",
      ],
      es: [
        "De noviembre de 2017 a enero de 2019 cofundé y dirigí Restia, software SaaS B2B para la operativa de restaurantes en Barcelona.",
        "Dirigí un equipo de seis ingenieros, llevé el presupuesto y los KPI, y sacamos el producto.",
        "Antes de Restia fui product expert en Samsung y analista de marketing junior en La Caixa.",
      ],
    },
  },
  {
    slug: "growth",
    period: { en: "2019–2022", es: "2019–2022" },
    title: { en: "Growth · Abitari and Vitable", es: "Growth · Abitari y Vitable" },
    summary: {
      en: "Segmentation, marketing automation and partner programmes.",
      es: "Segmentación, automatización de marketing y programas de partners.",
    },
    body: {
      en: [
        "At Abitari, in Barcelona, I led customer segmentation, competitive research and a website redesign that increased leads by 225%. I also built the HubSpot and marketing automations.",
        "In 2020 I moved to Sydney to join Vitable, a health-tech startup. As growth marketer and affiliates manager I built an ambassador programme with 1,000+ partners that drove 25% of sales, and launched a referral programme that contributed 12%.",
      ],
      es: [
        "En Abitari, en Barcelona, llevé la segmentación de clientes, el análisis de competencia y un rediseño de la web que subió los leads un 225%. También monté las automatizaciones de HubSpot y de marketing.",
        "En 2020 me fui a Sídney para entrar en Vitable, una startup de health-tech. Como growth marketer y responsable de afiliados monté un programa de embajadores con más de 1.000 partners que generaba el 25% de las ventas, y lancé un programa de referidos que aportaba el 12%.",
      ],
    },
  },
  {
    slug: "sydney",
    period: { en: "2022–2024", es: "2022–2024" },
    title: { en: "Sydney · Vitable and Mable", es: "Sídney · Vitable y Mable" },
    summary: {
      en: "Senior data analyst and data scientist: predictive models, BI and C-level reporting.",
      es: "Senior data analyst y data scientist: modelos predictivos, BI y reporting a dirección.",
    },
    body: {
      en: [
        "As senior data analyst at Vitable (25+ employees, $15m+ annual revenue) I built a probabilistic courier-selection model using price, historical delivery time and error rate. Operations adopted it and it cut shipping time and cost by 5%.",
        "I also built predictive models in SQL and Python, including detection of incorrect home addresses, and Tableau dashboards for the core KPIs that saved 25+ hours a week of manual reporting.",
        "At Mable, an online platform that connects clients with care support providers, I led B2B analytics for the CGO and the Head of Partnerships: lead scoring, churn, attribution and conversion-likelihood models.",
        "I built an LLM-based model to identify support workers in stressful client interactions so the team could offer them tailored counselling. I delivered the monthly C-level reporting and mentored the analysts.",
      ],
      es: [
        "Como senior data analyst en Vitable (más de 25 empleados y más de 15 M$ de facturación anual) construí un modelo probabilístico de selección de transportista a partir del precio, el tiempo de entrega histórico y la tasa de error. Operaciones lo adoptó y redujo un 5% el tiempo y el coste de envío.",
        "También construí modelos predictivos en SQL y Python, entre ellos uno que detecta direcciones de envío incorrectas, y dashboards de Tableau con los KPI principales que ahorraban más de 25 horas semanales de reporting manual.",
        "En Mable, una plataforma que conecta a clientes con profesionales de cuidados, dirigí la analítica B2B para el CGO y el Head of Partnerships: modelos de lead scoring, churn, atribución y probabilidad de conversión.",
        "Construí un modelo basado en LLM que identifica a los cuidadores en interacciones estresantes con clientes para que el equipo pudiera ofrecerles apoyo a medida. Llevaba el reporting mensual a dirección y hacía de mentor de los analistas.",
      ],
    },
  },
  {
    slug: "algoryme",
    period: { en: "Own studio · Now", es: "Estudio propio · Ahora" },
    title: { en: "Algoryme", es: "Algoryme" },
    summary: {
      en: "Freelance data and AI engineering. LLM, RAG and agentic systems connected to client data.",
      es: "Ingeniería de datos e IA en freelance. Sistemas LLM, RAG y agénticos conectados a los datos del cliente.",
    },
    body: {
      en: [
        "Since January 2025 I run Algoryme, my studio in Barcelona. I own every engagement end to end: discovery, solution design, implementation in Python and SQL, deployment, communication with stakeholders and handover.",
        "I build LLM, RAG and agentic systems connected to client databases and APIs, together with the data pipelines and predictive models underneath them. Clients so far include an investment fund and a second-hand marketplace.",
      ],
      es: [
        "Desde enero de 2025 dirijo Algoryme, mi estudio en Barcelona. Llevo cada proyecto de principio a fin: descubrimiento, diseño de la solución, implementación en Python y SQL, despliegue, comunicación con los stakeholders y traspaso.",
        "Construyo sistemas LLM, RAG y agénticos conectados a las bases de datos y APIs del cliente, junto con los pipelines de datos y los modelos predictivos que hay debajo. Entre los clientes, un fondo de inversión y un marketplace de segunda mano.",
      ],
    },
    link: "https://algoryme.com",
  },
];

export const builds = [
  {
    slug: "daily-briefing",
    title: { en: "Daily portfolio briefing", es: "Briefing diario de cartera" },
    status: { en: "Production", es: "En producción" },
    role: { en: "Investment fund · Client", es: "Fondo de inversión · Cliente" },
    lead: {
      en: "An unattended pipeline that analyses a fund’s portfolio with the fund’s own rules and emails the partners a full update every morning at 7:00.",
      es: "Un pipeline desatendido que analiza la cartera de un fondo con sus propias reglas y envía a los socios una actualización completa cada mañana a las 7:00.",
    },
    work: {
      en: [
        "Nobody prepares it by hand. A scheduled job pulls positions and market data, applies the fund’s rules and composes the email: earnings in the next seven days, the biggest movers in the watchlist, the ranked positions and their weighted statistics.",
        "An opportunity scanner checks about 1,200 US stocks for fixed signals, and language models explain what moved and why. It has been in production with no daily maintenance.",
      ],
      es: [
        "Nadie lo prepara a mano. Un proceso programado trae las posiciones y los datos de mercado, aplica las reglas del fondo y compone el correo: resultados de los próximos siete días, los mayores movimientos de la watchlist, las posiciones ordenadas y sus estadísticas ponderadas.",
        "Un escáner de oportunidades revisa unas 1.200 acciones de EE. UU. con señales fijas, y los modelos de lenguaje explican qué se ha movido y por qué. Está en producción sin mantenimiento diario.",
      ],
    },
    status_note: {
      en: "In production. The client and the code are private.",
      es: "En producción. El cliente y el código son privados.",
    },
    technical: true,
  },
  {
    slug: "movers-agent",
    title: { en: "Market-movers news agent", es: "Agente de noticias de movimientos" },
    status: { en: "Production", es: "En producción" },
    role: { en: "Investment fund · Client", es: "Fondo de inversión · Cliente" },
    lead: {
      en: "An LLM agent with web search that explains every morning why each holding or watchlist stock moved 5% or more.",
      es: "Un agente LLM con búsqueda web que explica cada mañana por qué cada posición o acción de la watchlist se ha movido un 5% o más.",
    },
    work: {
      en: [
        "It feeds the morning briefing and Telegram alerts. Each mover gets one short reason: the company, its sector, the macro picture or the chart.",
        "Searches are capped at three per stock: an A/B test on real movers showed good explanations converge in two or three. An invalid answer gets one retry; if it fails again, the stock goes out with no explanation rather than a filler line.",
      ],
      es: [
        "Alimenta el briefing de la mañana y las alertas de Telegram. Cada movimiento lleva un motivo breve: la empresa, su sector, el contexto macro o el gráfico.",
        "Las búsquedas tienen un tope de tres por acción: un test A/B con movimientos reales mostró que las buenas explicaciones convergen en dos o tres. Una respuesta no válida tiene un reintento; si vuelve a fallar, la acción sale sin explicación en vez de con una línea de relleno.",
      ],
    },
    status_note: {
      en: "In production. The client and the code are private.",
      es: "En producción. El cliente y el código son privados.",
    },
  },
  {
    slug: "equity-platform",
    title: { en: "Equity analysis platform", es: "Plataforma de análisis de renta variable" },
    status: { en: "Production", es: "En producción" },
    role: { en: "Investment fund · Client", es: "Fondo de inversión · Cliente" },
    lead: {
      en: "Ingestion and normalisation of 60,000+ listed companies and their financial statements, with fundamental screening, fast valuation and an AI chatbot to analyse any company in natural language.",
      es: "Ingesta y normalización de más de 60.000 empresas cotizadas y sus estados financieros, con screening fundamental, valoración rápida y un chatbot de IA para analizar cualquier empresa en lenguaje natural.",
    },
    work: {
      en: [
        "It feeds the fund’s selection funnel: from 60,000 companies down to a 30-stock portfolio.",
        "With the data already normalised, screening combines fundamental criteria and valuing a company takes minutes instead of an afternoon. New analyses build on the same base without redoing the ingestion.",
      ],
      es: [
        "Alimenta el embudo de selección del fondo: de 60.000 empresas a una cartera de 30 acciones.",
        "Con los datos ya normalizados, el screening combina criterios fundamentales y valorar una empresa lleva minutos en vez de una tarde. Los análisis nuevos se construyen sobre la misma base sin rehacer la ingesta.",
      ],
    },
    status_note: {
      en: "In production. The client and the code are private.",
      es: "En producción. El cliente y el código son privados.",
    },
  },
  {
    slug: "ltv-model",
    title: { en: "Customer lifetime value model", es: "Modelo de valor de cliente (LTV)" },
    status: { en: "In use", es: "En uso" },
    role: { en: "Second-hand marketplace · Client", es: "Marketplace de segunda mano · Cliente" },
    lead: {
      en: "A predictive model that estimates the 12-month value of every newly registered user from 80+ signals.",
      es: "Un modelo predictivo que estima el valor a 12 meses de cada usuario nuevo a partir de más de 80 señales.",
    },
    work: {
      en: [
        "Before it, acquisition and retention ran blind: nobody could say what a new user would be worth. Now spend is steered by expected value.",
        "Alongside the model I do ongoing data engineering and analysis, and present the results to C-level to support growth decisions.",
      ],
      es: [
        "Antes, captación y retención iban a ciegas: nadie sabía cuánto valdría un usuario nuevo. Ahora el gasto se dirige por valor esperado.",
        "Junto al modelo hago ingeniería de datos y análisis de forma continua, y presento los resultados a dirección para apoyar las decisiones de crecimiento.",
      ],
    },
    status_note: {
      en: "In use. The client and the code are private.",
      es: "En uso. El cliente y el código son privados.",
    },
  },
  {
    slug: "sales-assistant",
    title: { en: "Agentic sales assistant", es: "Asistente comercial agéntico" },
    status: { en: "In use", es: "En uso" },
    role: { en: "Own product", es: "Producto propio" },
    lead: {
      en: "An agentic workflow that researches prospects, checks each one’s real problem before pitching, drafts personalised outreach and logs every opportunity in a sales pipeline.",
      es: "Un flujo agéntico que investiga a cada prospecto, comprueba su problema real antes de escribirle, redacta el contacto personalizado y registra cada oportunidad en un pipeline de ventas.",
    },
    work: {
      en: [
        "It drafts 55 emails a day. Before writing, it verifies that the problem the email talks about actually exists in that business.",
        "The first message offers a free diagnosis with three to five concrete improvements. Every opportunity and follow-up lands in the pipeline with its next step.",
      ],
      es: [
        "Redacta 55 correos al día. Antes de escribir, comprueba que el problema del que habla el correo existe de verdad en ese negocio.",
        "El primer mensaje ofrece un diagnóstico gratuito con tres a cinco mejoras concretas. Cada oportunidad y cada seguimiento quedan en el pipeline con su siguiente paso.",
      ],
    },
    status_note: {
      en: "In use for Algoryme’s own sales. The code is private.",
      es: "En uso para las ventas de Algoryme. El código es privado.",
    },
  },
];

export const earlier = [
  {
    title: { en: "Mable · Support-worker risk detection", es: "Mable · Detección de riesgo en cuidadores" },
    text: {
      en: "An LLM-based model that identifies support workers in stressful client interactions, so the team could offer them tailored counselling.",
      es: "Un modelo basado en LLM que identifica a los cuidadores en interacciones estresantes con clientes, para que el equipo pudiera ofrecerles apoyo a medida.",
    },
    history: "sydney",
  },
  {
    title: { en: "Mable · B2B growth models", es: "Mable · Modelos de crecimiento B2B" },
    text: {
      en: "Lead scoring, churn, attribution and conversion-likelihood models for the CGO and the Head of Partnerships.",
      es: "Modelos de lead scoring, churn, atribución y probabilidad de conversión para el CGO y el Head of Partnerships.",
    },
    history: "sydney",
  },
  {
    title: { en: "Vitable · Courier selection", es: "Vitable · Selección de transportista" },
    text: {
      en: "A probabilistic model using price, historical delivery time and error rate. Operations adopted it and it cut shipping time and cost by 5%.",
      es: "Un modelo probabilístico con precio, tiempo de entrega histórico y tasa de error. Operaciones lo adoptó y redujo un 5% el tiempo y el coste de envío.",
    },
    history: "sydney",
  },
  {
    title: { en: "Vitable · Reporting", es: "Vitable · Reporting" },
    text: {
      en: "Tableau dashboards for the core KPIs that saved 25+ hours a week of manual reporting across departments.",
      es: "Dashboards de Tableau con los KPI principales que ahorraban más de 25 horas semanales de reporting manual entre departamentos.",
    },
    history: "sydney",
  },
  {
    title: { en: "Abitari · Website redesign", es: "Abitari · Rediseño de la web" },
    text: {
      en: "Customer segmentation and competitive research behind a redesign that increased leads by 225%.",
      es: "Segmentación de clientes y análisis de competencia detrás de un rediseño que subió los leads un 225%.",
    },
    history: "growth",
  },
];

export const briefingTechnical = [
  {
    term: { en: "Scheduling and delivery", es: "Programación y envío" },
    paras: {
      en: [
        "The jobs run on a schedule with no manual step. Two schedules cover summer and winter time and a guard in the code discards the run at the wrong hour, so each email and alert goes out once and on time.",
      ],
      es: [
        "Los procesos se ejecutan programados, sin ningún paso manual. Dos horarios cubren el horario de verano y el de invierno, y una comprobación en el código descarta la ejecución a la hora equivocada, así que cada correo y cada alerta salen una vez y a su hora.",
      ],
    },
  },
  {
    term: { en: "Rules before models", es: "Reglas antes que modelos" },
    paras: {
      en: [
        "Positions are ranked with the fund’s own valuation rules: expected return, margin of safety, moat and discount rate, weighted across the portfolio.",
        "The opportunity scanner uses fixed signals: close to 52-week lows, extreme oversold (RSI under 32 and a monthly fall of over 8%) and a rebound after a sharp fall. The 200-day moving average sits next to every row to tell a quality pullback from a falling knife.",
      ],
      es: [
        "Las posiciones se ordenan con las reglas de valoración del propio fondo: rentabilidad esperada, margen de seguridad, moat y tasa de descuento, ponderadas en toda la cartera.",
        "El escáner de oportunidades usa señales fijas: cerca de mínimos de 52 semanas, sobreventa extrema (RSI por debajo de 32 y una caída mensual de más del 8%) y rebote tras una caída fuerte. La media móvil de 200 días aparece junto a cada fila para distinguir una corrección de calidad de un cuchillo que cae.",
      ],
    },
  },
  {
    term: { en: "Language models and cost", es: "Modelos de lenguaje y coste" },
    paras: {
      en: [
        "Language models write the explanations, with a cap of three web searches per stock and one retry. Every run tags its API calls and records tokens, searches and estimated cost, so the cost of each email can be compared run to run.",
      ],
      es: [
        "Los modelos de lenguaje escriben las explicaciones, con un tope de tres búsquedas web por acción y un reintento. Cada ejecución etiqueta sus llamadas a la API y registra tokens, búsquedas y coste estimado, así que el coste de cada correo se puede comparar ejecución a ejecución.",
      ],
    },
  },
];

export const notes = [
  {
    slug: "a-missing-line-beats-a-filler-line",
    minutes: 2,
    date: "2026-10-08",
    related: "movers-agent",
    title: {
      en: "A missing line beats a filler line",
      es: "Mejor sin línea que con relleno",
    },
    thesis: {
      en: "When the movers agent cannot find a valid reason for a move, it shows nothing. A partner who reads “no clear catalyst” starts skipping the rest of the email.",
      es: "Cuando el agente de movimientos no encuentra un motivo válido, no muestra nada. Un socio que lee “sin catalizador claro” empieza a saltarse el resto del correo.",
    },
    sections: [
      {
        heading: { en: "What counts as a bad answer", es: "Qué cuenta como mala respuesta" },
        paras: {
          en: [
            "The agent explains why a stock moved 5% or more. Some answers are not explanations: comments about its own process, admitting it found nothing, asking for more context. I detect those patterns and treat them as failures.",
          ],
          es: [
            "El agente explica por qué una acción se ha movido un 5% o más. Algunas respuestas no son explicaciones: comentarios sobre su propio proceso, admitir que no ha encontrado nada o pedir más contexto. Detecto esos patrones y los trato como fallos.",
          ],
        },
      },
      {
        heading: { en: "Retry once, then stay silent", es: "Un reintento y, si no, silencio" },
        paras: {
          en: [
            "A failed answer gets one forced retry. If the second one also fails, the stock goes out without an explanation. The email is shorter, but every line in it says something about the company, the sector, the macro picture or the chart.",
            "Readers of a daily briefing learn quickly which lines to skip. If filler shows up often, they skip the good lines too.",
          ],
          es: [
            "Una respuesta fallida tiene un reintento forzado. Si la segunda también falla, la acción sale sin explicación. El correo es más corto, pero cada línea dice algo de la empresa, del sector, del contexto macro o del gráfico.",
            "Quien lee un briefing diario aprende rápido qué líneas saltarse. Si el relleno aparece a menudo, también se salta las buenas.",
          ],
        },
      },
    ],
  },
  {
    slug: "three-searches-are-enough",
    minutes: 2,
    date: "2026-10-08",
    related: "movers-agent",
    title: { en: "Three searches are enough", es: "Con tres búsquedas basta" },
    thesis: {
      en: "Search results were about 80% of the agent’s cost. An A/B test on real movers showed that good explanations converge in two or three searches.",
      es: "Los resultados de búsqueda eran cerca del 80% del coste del agente. Un test A/B con movimientos reales mostró que las buenas explicaciones convergen en dos o tres búsquedas.",
    },
    sections: [
      {
        heading: { en: "Where the money goes", es: "Dónde se va el dinero" },
        paras: {
          en: [
            "Each explanation uses a language model with web search. The pages it reads go into its context, and those tokens are most of the bill: around 80%.",
          ],
          es: [
            "Cada explicación usa un modelo de lenguaje con búsqueda web. Las páginas que lee entran en su contexto, y esos tokens son la mayor parte de la factura: cerca del 80%.",
          ],
        },
      },
      {
        heading: { en: "What the test showed", es: "Qué mostró el test" },
        paras: {
          en: [
            "With a cap of six, the agent made four or five searches that repeated what it already had. With three, quality held. The cap is a setting, so it can go up for a case that needs it.",
            "I only learned this because every run records its tokens, searches and estimated cost. Without that record, the cap would have been a guess.",
          ],
          es: [
            "Con un tope de seis, el agente hacía cuatro o cinco búsquedas que repetían lo que ya tenía. Con tres, la calidad se mantenía. El tope es un parámetro, así que se puede subir para un caso que lo necesite.",
            "Solo lo supe porque cada ejecución registra sus tokens, búsquedas y coste estimado. Sin ese registro, el tope habría sido una suposición.",
          ],
        },
      },
    ],
  },
  {
    slug: "rules-find-models-explain",
    minutes: 2,
    date: "2026-10-08",
    related: "daily-briefing",
    title: { en: "Rules find, the model explains", es: "Las reglas encuentran, el modelo explica" },
    thesis: {
      en: "The fund’s opportunity scanner uses fixed signals that anyone can audit. The language model comes in afterwards, to explain what moved.",
      es: "El escáner de oportunidades del fondo usa señales fijas que cualquiera puede auditar. El modelo de lenguaje entra después, para explicar qué se ha movido.",
    },
    sections: [
      {
        heading: { en: "Signals you can audit", es: "Señales que se pueden auditar" },
        paras: {
          en: [
            "Every day the scanner checks about 1,200 US stocks for three signals: close to 52-week lows, extreme oversold and a rebound after a sharp fall. Each one is a rule a partner can read and question.",
            "Next to every row it shows the 200-day moving average. That column separates a quality company in a pullback from a broken one that keeps falling.",
          ],
          es: [
            "Cada día el escáner revisa unas 1.200 acciones de EE. UU. buscando tres señales: cerca de mínimos de 52 semanas, sobreventa extrema y rebote tras una caída fuerte. Cada una es una regla que un socio puede leer y discutir.",
            "Junto a cada fila muestra la media móvil de 200 días. Esa columna separa una empresa de calidad en corrección de una rota que sigue cayendo.",
          ],
        },
      },
      {
        heading: { en: "Where the model adds value", es: "Dónde aporta el modelo" },
        paras: {
          en: [
            "Signals say what happened, not why. The model reads the news and writes the reason in one line. If the model chose the opportunities, nobody could say why a stock appeared one day and not the next.",
          ],
          es: [
            "Las señales dicen qué ha pasado, no por qué. El modelo lee las noticias y escribe el motivo en una línea. Si fuera el modelo quien eligiera las oportunidades, nadie podría explicar por qué una acción aparece un día y al siguiente no.",
          ],
        },
      },
    ],
  },
  {
    slug: "spending-by-expected-value",
    minutes: 1,
    date: "2026-10-08",
    related: "ltv-model",
    title: { en: "Spending by expected value", es: "Gastar según el valor esperado" },
    thesis: {
      en: "A marketplace could not tell what a new user would be worth. A 12-month value model changes which users get acquisition and retention budget.",
      es: "Un marketplace no sabía cuánto valdría un usuario nuevo. Un modelo de valor a 12 meses cambia qué usuarios reciben presupuesto de captación y retención.",
    },
    sections: [
      {
        heading: { en: "The question", es: "La pregunta" },
        paras: {
          en: [
            "When someone registers, the useful question is not whether they come back tomorrow but how much they will be worth over the next year. Without that number, every new user gets the same budget.",
          ],
          es: [
            "Cuando alguien se registra, la pregunta útil no es si vuelve mañana, sino cuánto valdrá durante el próximo año. Sin ese número, todos los usuarios nuevos reciben el mismo presupuesto.",
          ],
        },
      },
      {
        heading: { en: "The model", es: "El modelo" },
        paras: {
          en: [
            "The model estimates each new user’s 12-month value from 80+ signals. With that estimate, acquisition and retention spend follows expected value instead of running blind.",
          ],
          es: [
            "El modelo estima el valor a 12 meses de cada usuario nuevo a partir de más de 80 señales. Con esa estimación, el gasto en captación y retención sigue al valor esperado en vez de ir a ciegas.",
          ],
        },
      },
    ],
  },
  {
    slug: "check-the-problem-before-the-pitch",
    minutes: 1,
    date: "2026-10-08",
    related: "sales-assistant",
    title: {
      en: "Checking the problem before the pitch",
      es: "Comprobar el problema antes de escribir",
    },
    thesis: {
      en: "My sales assistant verifies that a business has the problem the email talks about before it writes a single line.",
      es: "Mi asistente comercial comprueba que un negocio tiene el problema del que habla el correo antes de escribir una sola línea.",
    },
    sections: [
      {
        heading: { en: "Why it checks first", es: "Por qué comprueba primero" },
        paras: {
          en: [
            "A personalised email that describes a problem the business does not have is worse than a generic one: it shows nobody looked. So the agent researches each prospect and confirms the problem first.",
          ],
          es: [
            "Un correo personalizado que describe un problema que el negocio no tiene es peor que uno genérico: demuestra que nadie miró. Por eso el agente investiga a cada prospecto y confirma el problema primero.",
          ],
        },
      },
      {
        heading: { en: "What it sends", es: "Qué envía" },
        paras: {
          en: [
            "The first message offers a free diagnosis with three to five concrete improvements, without prices. The agent drafts 55 of those a day and logs every opportunity and follow-up in the pipeline, so none of them depends on my memory.",
          ],
          es: [
            "El primer mensaje ofrece un diagnóstico gratuito con tres a cinco mejoras concretas, sin precios. El agente redacta 55 al día y registra cada oportunidad y seguimiento en el pipeline, así que ninguno depende de mi memoria.",
          ],
        },
      },
    ],
  },
];

export const t = (value, lang) => (value && typeof value === "object" && lang in value ? value[lang] : value);

export const prefix = (lang) => (lang === "es" ? "/es" : "");

export const href = (lang, path) => `${prefix(lang)}${path}`;

export const buildPaths = (lang) =>
  builds.map((build, index) => ({
    params: { slug: build.slug },
    props: { lang, build, next: builds[(index + 1) % builds.length] },
  }));

export const notePaths = (lang) =>
  notes.map((note, index) => ({
    params: { slug: note.slug },
    props: { lang, note, previous: notes[index - 1], next: notes[index + 1] },
  }));

export const historyPaths = (lang) =>
  history.map((item) => ({ params: { slug: item.slug }, props: { lang, item } }));

export const findBuild = (slug) => builds.find((build) => build.slug === slug);
