// ── Translations ─────────────────────────────────────────────────────────────
window.TRANSLATIONS = {
  en: {
    nav: {
      brand: "Leo's Lakeside",
      vision: "Vision", film: "The Film", progress: "Progress",
      investment: "Investment", contact: "Contact", cta: "Request Deck",
      lang: "ES"
    },
    hero: {
      eyebrow: "Investor Brief · Spring 2026",
      title1: "A quieter", title2: "kind of luxury,", title3: "on Lake Titicaca.",
      project: "Project", phase: "Phase", open: "Open",
      projectVal: "Leo's Lakeside Glamping", phaseVal: "I / III — Build out", openVal: "Late 2026",
      scroll: "Scroll"
    },
    vision: {
      eyebrow: "01 — The vision",
      title: "Built around the water, not around the road.",
      lede: "Leo's Lakeside is a premium glamping project on the shores of Lake Titicaca, Copacabana. Five domes — two for couples, three for families — each with a private lake view, hot tub, outdoor pergola, and off-grid solar power. No motorboats on this stretch. No televisions. Just the highest navigable lake in the world, at 3,800 metres above sea level.",
      quoteWho: "Ariel R. Torrez\nFounder",
      quoteWhat: "\u201cWe are not building a resort. We are creating the first premium glamping experience on Lake Titicaca — and inviting a small group of investors to be part of it from day one.\u201d"
    },
    metrics: {
      eyebrow: "02 — By the numbers",
      title: "A small project, sized for return.",
      lede: "Targets reviewed quarterly with an independent hospitality analyst. Full underwriting available on request.",
      foot: "Figures indicative — complete financial model & sensitivities provided under NDA.",
      suites: { label: "Domes", note: "5 domes in Phase 1 (2 couple + 3 family). Capacity 2–6 guests each. Off-grid solar system, hot tubs, and outdoor pergola included." },
      site: { label: "Site", note: "1 hectare with direct beach access on Lake Titicaca. $85K land already acquired and titled." },
      capital: { label: "Phase 1 raise", note: "Immediate capital required for 5 domes + off-grid infrastructure. $97K already invested (land + earthworks)." },
      irr: { label: "Target IRR", note: "Base scenario. Conservative: ~25% | Optimistic: ~50%. Payback estimated 2.5–3.5 years." }
    },
    film: {
      eyebrow: "03 — The film",
      title: "Two minutes on the water.",
      lede: "Aerial and on-the-ground footage filmed in April 2026 — the site as it stands today, with concept overlays for the completed phase II structures. Sound on.",
      directedBy: "Directed by", score: "Score", premiered: "Premiered",
      directedVal: "Mara Ostrove · Field Studio", scoreVal: "Original, recorded on site",
      premieredVal: "Investor preview · 02 May 2026"
    },
    timeline: {
      eyebrow: "04 — Where we are",
      title: "On the ground, on schedule.",
      lede: "Three of five phases complete. We are eleven weeks into construction and tracking 3% under our original capital plan. Quarterly progress reports are sent to all committed investors.",
      done: "✓ Complete", active: "● In progress", upcoming: "○ Upcoming",
      phases: [
        { date: "Q3 2024", title: "Land", desc: "1-hectare parcel with direct beach access acquired and titled. $85K invested. Earthworks and access road completed ($12K)." },
        { date: "Q1 2025", title: "Design", desc: "Master plan, environmental study and dome typology finalized. Off-grid solar system, biodigester and water filtration systems specified." },
        { date: "Q2 2025", title: "Permits", desc: "All municipal and environmental permits in hand. LLC incorporated in the USA for USD collections and investor distributions." },
        { date: "Q2 2026 → Q4 2026", title: "Build", desc: "Phase 1 underway: 5 domes (2 couple + 3 family), pergolas, hot tubs, solar system, biodigester and landscaping. On schedule." },
        { date: "2027", title: "Phase 2 & 3", desc: "Events area (chapel, event domes, panoramic pool). Then overwater domes + planetarium restaurant on the lake." }
      ]
    },
    gallery: {
      eyebrow: "05 — The work",
      title: "Renderings, site, and the small details.",
      captions: ["Suite 04 — east-facing rendering", "Shoreline, looking north", "Interior — cedar & oiled brass", "Site progress — April 2026", "Aerial study, masterplan", "Outdoor bath, suite typology B"]
    },
    location: {
      eyebrow: "06 — The place",
      title: "Far enough to forget. Close enough to fill.",
      lede: "Lake Titicaca, Copacabana, Bolivia — the highest navigable lake in the world at 3,800m. Over 2 million visitors per year, with well-defined high and low seasons. No premium glamping exists on the lake yet.",
      stats: [
        { k: "Altitude", v: "3,800 m" },
        { k: "Visitors / year", v: "2M+" },
        { k: "From La Paz", v: "~3.5h drive" },
        { k: "From Puno, Peru", v: "~1h drive" },
        { k: "Season", v: "Apr → Nov" }
      ]
    },
    investment: {
      eyebrow: "07 — The opportunity",
      title: "Phase 1 — open now.",
      lede: "We are raising $135,960 for Phase 1 (5 domes + off-grid infrastructure). Capital is deployed against construction milestones. Phase 1 investors have right of first refusal on Phases 2 and 3.",
      cta1: "Request the deck →", cta2: "Book a site visit",
      lines: [
        { k: "Phase 1 raise", v: "$135,960" },
        { k: "Already invested", v: "$97,000 (land + earthworks)" },
        { k: "Investor equity", v: "60%" },
        { k: "Founder equity", v: "40%" },
        { k: "Minimum ticket", v: "$15,000" },
        { k: "Instrument", v: "LLC equity (USD)" },
        { k: "Target IRR", v: "~35–40% (base)" },
        { k: "Payback", v: "2.5–3.5 years" }
      ]
    },
    team: {
      eyebrow: "08 — The people",
      title: "A small team. Long careers.",
      members: [
        { name: "Ariel R. Torrez", role: "Product Architect & Director General", bio: "Leads the vision, design, and strategic direction of Leo's Lakeside Glamping." },
        { name: "Yuri Guzman", role: "CFO · Finance & Management Control", bio: "Oversees financial planning, investment structure, and management control." }
      ]
    },
    contact: {
      eyebrow: "09 — Get in touch",
      title: "Receive the full investor pack.",
      lede: "The deck, financial model, architectural drawings and current construction report — sent under NDA within one business day. Site visits arranged on request.",
      address: "Copacabana, Bolivia · By appointment only",
      nameLbl: "Name", emailLbl: "Email", orgLbl: "Organisation", ticketLbl: "Indicative ticket",
      namePh: "Your name", emailPh: "you@example.com", orgPh: "Firm / family office (optional)",
      ticketPh: "Select…",
      tickets: ["$50K — $100K", "$100K — $250K", "$250K — $500K", "$500K +", "Exploring"],
      notesLbl: "Anything we should know", notesPh: "Optional — questions, timeline, preferred channel",
      legal: "By submitting you agree to receive investor materials under customary confidentiality terms.",
      send: "Send →",
      successTitle: "Thank you.",
      successSub: "We'll be in touch within one business day."
    },
    footer: {
      brand: "Leo's Lakeside Glamping",
      copy: "© 2026 · Leo's Lakeside Glamping LLC",
      ir: "Investor relations · invest@leoslakeside.com"
    }
  },
  es: {
    nav: {
      brand: "Leo's Lakeside",
      vision: "Visión", film: "El Film", progress: "Avance",
      investment: "Inversión", contact: "Contacto", cta: "Solicitar Deck",
      lang: "EN"
    },
    hero: {
      eyebrow: "Brief para Inversores · Primavera 2026",
      title1: "Un lujo más", title2: "silencioso,", title3: "en el Lago Titicaca.",
      project: "Proyecto", phase: "Fase", open: "Apertura",
      projectVal: "Leo's Lakeside Glamping", phaseVal: "I / III — Construcción", openVal: "Fines de 2026",
      scroll: "Bajar"
    },
    vision: {
      eyebrow: "01 — La visión",
      title: "Construido alrededor del agua, no de la carretera.",
      lede: "Leo's Lakeside es un proyecto de glamping premium a orillas del Lago Titicaca, en Copacabana. Cinco domos — dos de pareja y tres familiares — cada uno con vista privada al lago, tina caliente, pérgola exterior y energía solar off-grid. Sin lanchas a motor en este tramo. Sin televisores. Solo el lago navegable más alto del mundo, a 3.800 metros sobre el nivel del mar.",
      quoteWho: "Ariel R. Torrez\nFundador",
      quoteWhat: "\u201cNo estamos construyendo un resort. Estamos creando la primera experiencia de glamping premium en el Lago Titicaca — e invitando a un pequeño grupo de inversores a ser parte de esto desde el primer día.\u201d"
    },
    metrics: {
      eyebrow: "02 — Los números",
      title: "Un proyecto pequeño, pensado para rendir.",
      lede: "Metas revisadas trimestralmente con un analista hotelero independiente. Suscripción completa disponible bajo solicitud.",
      foot: "Cifras indicativas — modelo financiero completo y sensibilidades disponibles bajo NDA.",
      suites: { label: "Domos", note: "5 domos en Fase 1 (2 de pareja + 3 familiares). Capacidad de 2 a 6 personas. Sistema solar off-grid, tinas calientes y pérgola exterior incluidos." },
      site: { label: "Terreno", note: "1 hectárea con acceso directo a playa en el Lago Titicaca. $85.000 ya invertidos en terreno escriturado." },
      capital: { label: "Recaudación Fase 1", note: "Capital inmediato para 5 domos + infraestructura off-grid. $97.000 ya ejecutados (terreno + movimiento de tierra)." },
      irr: { label: "TIR objetivo", note: "Escenario base. Conservador: ~25% | Optimista: ~50%. Payback estimado 2,5–3,5 años." }
    },
    film: {
      eyebrow: "03 — El film",
      title: "Dos minutos sobre el agua.",
      lede: "Imágenes aéreas y en terreno filmadas en abril 2026 — el sitio tal como está hoy, con superposiciones conceptuales de las estructuras de la fase II terminada. Con sonido.",
      directedBy: "Dirección", score: "Música", premiered: "Estreno",
      directedVal: "Mara Ostrove · Field Studio", scoreVal: "Original, grabada en el sitio",
      premieredVal: "Vista previa para inversores · 02 mayo 2026"
    },
    timeline: {
      eyebrow: "04 — Dónde estamos",
      title: "En terreno, en calendario.",
      lede: "Tres de cinco fases completadas. Llevamos once semanas de construcción y vamos un 3% por debajo de nuestro plan de capital original. Se envían informes trimestrales a todos los inversores comprometidos.",
      done: "✓ Completado", active: "● En progreso", upcoming: "○ Próximo",
      phases: [
        { date: "Q3 2024", title: "Terreno", desc: "Parcela de 1 hectárea con acceso directo a playa adquirida y escriturada. $85.000 invertidos. Movimiento de tierra y accesos completados ($12.000)." },
        { date: "Q1 2025", title: "Diseño", desc: "Plan maestro, estudio ambiental y tipología de domos finalizados. Sistema solar off-grid, biodigestor y filtración de agua especificados." },
        { date: "Q2 2025", title: "Permisos", desc: "Todos los permisos municipales y ambientales en mano. LLC constituida en EEUU para cobros en USD y distribuciones a inversores." },
        { date: "Q2 2026 → Q4 2026", title: "Construcción", desc: "Fase 1 en marcha: 5 domos (2 de pareja + 3 familiares), pérgolas, tinas calientes, sistema solar, biodigestor y paisajismo. En calendario." },
        { date: "2027", title: "Fases 2 y 3", desc: "Área de eventos (capilla, domos de eventos, piscina panorámica). Luego domos sobre el agua + restaurante planetario en el lago." }
      ]
    },
    gallery: {
      eyebrow: "05 — El trabajo",
      title: "Renders, terreno y los pequeños detalles.",
      captions: ["Suite 04 — render orientado al este", "Orilla, mirando al norte", "Interior — cedro y latón", "Avance del sitio — abril 2026", "Estudio aéreo, masterplan", "Baño exterior, tipología B"]
    },
    location: {
      eyebrow: "06 — El lugar",
      title: "Suficientemente lejos para desconectarse. Suficientemente cerca para llenarse.",
      lede: "Lago Titicaca, Copacabana, Bolivia — el lago navegable más alto del mundo a 3.800 m. Más de 2 millones de visitantes por año, con temporadas alta y baja bien definidas. Aún no existe glamping premium en el lago.",
      stats: [
        { k: "Altitud", v: "3.800 m" },
        { k: "Visitantes / año", v: "+2 millones" },
        { k: "Desde La Paz", v: "~3,5h en auto" },
        { k: "Desde Puno, Perú", v: "~1h en auto" },
        { k: "Temporada", v: "Abr → Nov" }
      ]
    },
    investment: {
      eyebrow: "07 — La oportunidad",
      title: "Fase 1 — abierta ahora.",
      lede: "Estamos levantando $135.960 para la Fase 1 (5 domos + infraestructura off-grid). El capital se despliega contra hitos de construcción. Los inversores de Fase 1 tienen derecho de preferencia en Fases 2 y 3.",
      cta1: "Solicitar el deck →", cta2: "Reservar visita al sitio",
      lines: [
        { k: "Recaudación Fase 1", v: "$135.960" },
        { k: "Ya invertido", v: "$97.000 (terreno + tierra)" },
        { k: "Equity inversores", v: "60%" },
        { k: "Equity fundadores", v: "40%" },
        { k: "Ticket mínimo", v: "$15.000" },
        { k: "Instrumento", v: "Equity LLC (USD)" },
        { k: "TIR objetivo", v: "~35–40% (base)" },
        { k: "Payback", v: "2,5–3,5 años" }
      ]
    },
    team: {
      eyebrow: "08 — Las personas",
      title: "Un equipo pequeño. Carreras largas.",
      members: [
        { name: "Ariel R. Torrez", role: "Product Architect & Director General", bio: "Lidera la visión, el diseño y la dirección estratégica de Leo's Lakeside Glamping." },
        { name: "Yuri Guzman", role: "Director de Finanzas y Control de Gestión (CFO)", bio: "Responsable de la planificación financiera, la estructura de inversión y el control de gestión." }
      ]
    },
    contact: {
      eyebrow: "09 — Ponerse en contacto",
      title: "Recibe el pack completo para inversores.",
      lede: "El deck, modelo financiero, planos arquitectónicos e informe de construcción actual — enviados bajo NDA en un día hábil. Visitas al sitio coordinadas bajo solicitud.",
      address: "Copacabana, Bolivia · Solo con cita previa",
      nameLbl: "Nombre", emailLbl: "Correo", orgLbl: "Organización", ticketLbl: "Ticket indicativo",
      namePh: "Tu nombre", emailPh: "tu@ejemplo.com", orgPh: "Empresa / family office (opcional)",
      ticketPh: "Seleccionar…",
      tickets: ["$50K — $100K", "$100K — $250K", "$250K — $500K", "$500K +", "Explorando"],
      notesLbl: "Algo que debamos saber", notesPh: "Opcional — preguntas, tiempos, canal preferido",
      legal: "Al enviar aceptas recibir materiales para inversores bajo los términos habituales de confidencialidad.",
      send: "Enviar →",
      successTitle: "Gracias.",
      successSub: "Nos pondremos en contacto en un día hábil."
    },
    footer: {
      brand: "Leo's Lakeside Glamping",
      copy: "© 2026 · Leo's Lakeside Glamping LLC",
      ir: "Relaciones con inversores · invest@leoslakeside.com"
    }
  }
};
