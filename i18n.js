// ── Translations ─────────────────────────────────────────────────────────────
window.TRANSLATIONS = {
  en: {
    nav: {
      brand: "Leo's Lakeside",
      vision: "Vision", film: "The Film", progress: "Progress",
      investment: "Investment", contact: "Contact", cta: "Request Deck",
      investors: "Investors",
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
      title: "The project, in motion.",
      lede: "A short look at the site, the lake, and the surroundings. Filmed on location in Copacabana.",
      directedBy: "Location", score: "Filmed", premiered: "Duration",
      directedVal: "Copacabana, Lake Titicaca · Bolivia", scoreVal: "On site · 2026",
      premieredVal: "0:32 min"
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
      captions: ["Glamping lounge bar", "Overwater planetarium restaurant on the lake", "Interior of one of the domes", "Event amenities — weddings & celebrations", "Clifftop bar & restaurant with beach view", "Hot tub in the dome pergola"]
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
      title: "Financed by note — not equity.",
      lede: "Leo's Lakeside Glamping is financed through a USD promissory note — not equity — backed by the same team already running a profitable hostel in Copacabana.",
      cta1: "See the full offer →", cta2: "Book a site visit",
      lines: [
        { k: "Instrument", v: "USD promissory note" },
        { k: "Structure", v: "2 tranches" },
        { k: "Ownership", v: "100% stays with the family" }
      ]
    },
    team: {
      eyebrow: "08 — The people",
      title: "A small team. Long careers.",
      members: [
        { name: "Ariel R. Torrez", role: "Product Architect & Director General", bio: "Mechatronics engineer with an MBA. Founder of Mia Copacabana Hostel & Coworking — hands-on experience building and running tourism projects on Lake Titicaca." },
        { name: "Yuri Guzman", role: "CFO · Finance & Management Control", bio: "Oversees financial planning, investment structure, and management control." }
      ]
    },
    contact: {
      eyebrow: "09 — Get in touch",
      title: "Let's talk about the project.",
      lede: "Drop us a message and we'll send you the deck, financials and site photos. We're happy to jump on a call or arrange a visit to Copacabana.",
      address: "Calle Murilo Esq. Ballivian, Copacabana, Bolivia",
      nameLbl: "Name", emailLbl: "Email", orgLbl: "Organisation", ticketLbl: "Indicative ticket",
      namePh: "Your name", emailPh: "you@example.com", orgPh: "Optional",
      ticketPh: "Select…",
      tickets: ["$15K — $30K", "$30K — $50K", "$50K — $100K", "$100K +", "Just exploring"],
      notesLbl: "Anything you'd like to know", notesPh: "Questions, availability, preferred way to connect…",
      legal: "We'll keep your info private and only use it to follow up on your inquiry.",
      send: "Send →",
      successTitle: "Thank you.",
      successSub: "We'll be in touch within one business day."
    },
    footer: {
      brand: "Leo's Lakeside Glamping",
      copy: "© 2026 · Leo's Lakeside Glamping LLC",
      ir: "Investor relations · invest@leoslakeside.com"
    },
    investorPage: {
      nav: { project: "Project", numbers: "Numbers", offer: "Offer", team: "Team", faq: "FAQ", backHome: "Main site" },
      hero: {
        eyebrow: "COPACABANA, LAKE TITICACA, BOLIVIA",
        title: "Five luxury domes. A business that already works.",
        subhead: "Leo's Lakeside Glamping is financed through a USD promissory note, backed by the same team already running a profitable hostel in Copacabana. No equity. No currency surprises.",
        cta1: "See the offer", cta2: "Download term sheet",
        mediaPending: "Hero photo or video — pending"
      },
      project: {
        eyebrow: "01 — The project",
        title: "Our own land, ready to build",
        body: "One hectare on the lakeshore, already paid for and titled — no land purchase, no zoning wait. Phase 1 is five geodesic domes (2 couple, 3 family) with lake views, a hot tub, pergola and outdoor bathroom, and fully off-grid infrastructure: solar, biodigesters, lake water pumping.",
        stats: ["5 domes", "3-month build", "$99,550 capex", "$97,000 already invested (land + earthmoving)"]
      },
      trackRecord: {
        eyebrow: "02 — Track record",
        title: "This isn't our first time operating in Copacabana",
        body: "The same team already runs Mia Copacabana Hostel & Coworking — Airbnb host of record, listed on Booking.com and Hostelworld, rated 4.87, 8.9, and 9.2 respectively. Revenue already settles through a U.S. LLC via Airbnb and Stripe, before ever touching Bolivia. That hostel's real, month-by-month occupancy — not a generic industry assumption — is what the glamping's financial projections are built on.",
        ratings: [{ k: "Airbnb", v: "4.87" }, { k: "Booking.com", v: "8.9" }, { k: "Hostelworld", v: "9.2" }]
      },
      numbers: {
        eyebrow: "03 — The numbers",
        title: "The numbers, unvarnished",
        lede: "Two scenarios, calculated with real occupancy, staffing, and housekeeping cost data from the operating hostel — not generic industry assumptions.",
        colConservative: "Conservative", colBase: "Base",
        rows: [
          { label: "Project IRR (10 years)", conservative: "26.4%", base: "50.5%" },
          { label: "EBITDA, year 5", conservative: "$70,801", base: "$128,527" },
          { label: "EBITDA / investor obligation coverage", conservative: "2.4x", base: "4.4x" },
          { label: "Project payback", conservative: "4.0 years", base: "2.6 years" }
        ],
        note: "Figures from the internal financial model (September 2026), available for full review on request."
      },
      offer: {
        eyebrow: "04 — The offer",
        title: "A promissory note, not an equity promise",
        bodyIntro: "Investors don't buy a dome or join the company — they lend against a promissory note with a specific-use covenant and a pledge over the domes and their equipment. The family's land is never part of the collateral, and ownership of the business stays 100% with the family.",
        fieldLabels: { raises: "Raises", finances: "Finances", yieldVal: "Yield", released: "Released" },
        tranche1: { label: "Tranche 1", raises: "USD 66,396", finances: "Shared infrastructure + domo pareja units", yieldVal: "17.3% nominal / 16.7% IRR", released: "At closing" },
        tranche2: { label: "Tranche 2", raises: "USD 53,064", finances: "Domo familiar units", yieldVal: "15.5% nominal / 14.7% IRR", released: "After ~2-3 months of real Tranche 1 data" },
        tickets: [{ k: "Local", v: "USD 15,000" }, { k: "Foreign", v: "USD 60,000 (same terms)" }, { k: "Reduced entry", v: "From USD 5,000-6,000" }],
        calloutBold: "You get your capital back before year 5.",
        calloutRest: "The rest of the term (through year 6) is pure yield on capital already returned."
      },
      currency: {
        eyebrow: "05 — Currency",
        title: "Dollars from start to finish",
        body: "You fund in USD, USDC, or USDT — and you're paid back in the same hard currency, whether you're a local or foreign investor. No payment ever converts through bolivianos. The same dollar return for everyone."
      },
      protections: {
        eyebrow: "06 — Protections",
        title: "Built so no one gets stuck without an exit",
        bullets: [
          "Registered pledge over the domes and their equipment",
          "Verifiable specific use: invoices and construction photos",
          "Quarterly operating report",
          "Concentration cap: no investor exceeds 25% of a tranche",
          "Liquidity reserve: 5% of monthly revenue set aside for early exits, handled in order of request"
        ]
      },
      comparison: {
        eyebrow: "07 — Benchmark",
        title: "How does this compare to leaving your money where it is?",
        colAlt: "Alternative", colNominal: "Nominal", colReal: "Real",
        rows: [
          { label: "Stablecoin lending (USDC/USDT)", nominal: "6.0%", real: "3.0%" },
          { label: "Private credit (U.S.)", nominal: "11.0%", real: "8.0%" },
          { label: "Real estate syndication (U.S.)", nominal: "7.5%", real: "4.5%" },
          { label: "This note — Tranche 1", nominal: "17.3% / IRR 16.7%", real: "≈13.7%", highlight: true }
        ]
      },
      team: {
        eyebrow: "08 — Team",
        title: "Who's behind it",
        members: [
          { name: "Ariel Torrez", role: "Director General", bio: "Mechatronics engineer with an MBA. Runs Mia Copacabana Hostel & Coworking and leads construction of Leo's Lakeside Glamping on the family's land." },
          { name: "Yuri Guzmán", role: "CFO", bio: "[space for a short 1-2 line bio]", pending: true }
        ]
      },
      faq: {
        eyebrow: "09 — FAQ",
        title: "FAQ",
        items: [
          { q: "Why a note instead of equity?", a: "Because we want the business to stay in the family. The note gives you a fixed dollar return, with real collateral, without giving up ownership." },
          { q: "What if I need to exit before year 6?", a: "There's a liquidity reserve (5% of monthly revenue) set aside specifically for early exits, handled in order of request." },
          { q: "What if Bolivia has a currency crisis?", a: "Your funding and your payments are in USD, USDC, or USDT from day one — they never convert through bolivianos. The business's own revenue is already dollarized, via Airbnb and Stripe." },
          { q: "What security do I have?", a: "A registered pledge over the financed domes and their equipment — not the land, which stays with the family." },
          { q: "Can I invest less than USD 15,000?", a: "Yes, there's a reduced-entry option starting at USD 5,000-6,000." }
        ]
      },
      cta: {
        eyebrow: "10 — Let's talk",
        title: "Let's talk",
        body: "This site is a summary. The full detail — payment schedule, collateral, and the financial model — is in the indicative term sheet.",
        downloadLocal: "Download term sheet (local tranche)",
        downloadForeign: "Download term sheet (foreign tranche)",
        contactPending: "[contact/email/WhatsApp]"
      }
    }
  },
  es: {
    nav: {
      brand: "Leo's Lakeside",
      vision: "Visión", film: "El Film", progress: "Avance",
      investment: "Inversión", contact: "Contacto", cta: "Solicitar Deck",
      investors: "Inversores",
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
      title: "El proyecto, en movimiento.",
      lede: "Un vistazo al sitio, el lago y los alrededores. Filmado en Copacabana.",
      directedBy: "Ubicación", score: "Filmado", premiered: "Duración",
      directedVal: "Copacabana, Lago Titicaca · Bolivia", scoreVal: "En el sitio · 2026",
      premieredVal: "0:32 min"
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
      captions: ["Sala bar del glamping", "Restaurante planetario sobre el lago", "Interior de uno de los domos", "Amenidades para eventos como bodas", "Bar restaurant en el acantilado con vista a la playa", "Tina caliente en la pérgola de los domos"]
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
      title: "Financiado con pagaré — no equity.",
      lede: "Leo's Lakeside Glamping se financia con un pagaré en dólares — no con acciones — respaldado por el mismo equipo que ya opera un hostal rentable en Copacabana.",
      cta1: "Ver la oferta completa →", cta2: "Reservar visita al sitio",
      lines: [
        { k: "Instrumento", v: "Pagaré en USD" },
        { k: "Estructura", v: "2 tramos" },
        { k: "Propiedad", v: "100% se queda en la familia" }
      ]
    },
    team: {
      eyebrow: "08 — Las personas",
      title: "Un equipo pequeño. Carreras largas.",
      members: [
        { name: "Ariel R. Torrez", role: "Product Architect & Director General", bio: "Ingeniero en mecatrónica con maestría en ingeniería de negocios. Fundador de Mia Copacabana Hostel & Coworking — experiencia directa construyendo y operando proyectos turísticos en el Lago Titicaca." },
        { name: "Yuri Guzman", role: "Director de Finanzas y Control de Gestión (CFO)", bio: "Responsable de la planificación financiera, la estructura de inversión y el control de gestión." }
      ]
    },
    contact: {
      eyebrow: "09 — Ponerse en contacto",
      title: "Hablemos del proyecto.",
      lede: "Escribinos y te enviamos el deck, los números y fotos del sitio. Con gusto coordinamos una llamada o una visita a Copacabana.",
      address: "Calle Murilo Esq. Ballivian, Copacabana, Bolivia",
      nameLbl: "Nombre", emailLbl: "Correo", orgLbl: "Organización", ticketLbl: "Ticket indicativo",
      namePh: "Tu nombre", emailPh: "tu@ejemplo.com", orgPh: "Opcional",
      ticketPh: "Seleccionar…",
      tickets: ["$15K — $30K", "$30K — $50K", "$50K — $100K", "$100K +", "Solo explorando"],
      notesLbl: "¿Qué te gustaría saber?", notesPh: "Preguntas, disponibilidad, cómo prefieres conectar…",
      legal: "Tu información es privada y solo la usamos para responder a tu consulta.",
      send: "Enviar →",
      successTitle: "Gracias.",
      successSub: "Nos pondremos en contacto en un día hábil."
    },
    footer: {
      brand: "Leo's Lakeside Glamping",
      copy: "© 2026 · Leo's Lakeside Glamping LLC",
      ir: "Relaciones con inversores · invest@leoslakeside.com"
    },
    investorPage: {
      nav: { project: "Proyecto", numbers: "Números", offer: "Oferta", team: "Equipo", faq: "FAQ", backHome: "Sitio principal" },
      hero: {
        eyebrow: "COPACABANA, LAGO TITICACA, BOLIVIA",
        title: "5 domos de lujo. Un negocio que ya funciona.",
        subhead: "Leo's Lakeside Glamping se financia con un pagaré en dólares, respaldado por el mismo equipo que ya opera un hostal rentable en Copacabana. Sin acciones. Sin sorpresas cambiarias.",
        cta1: "Ver la oferta", cta2: "Descargar term sheet",
        mediaPending: "Foto o video del hero — pendiente"
      },
      project: {
        eyebrow: "01 — El proyecto",
        title: "Un terreno propio, listo para construir",
        body: "1 hectárea frente al lago, ya pagada y escriturada — no hay que comprar tierra ni esperar permisos de uso de suelo. Fase 1 son 5 domos geodésicos (2 pareja, 3 familiares) con vista al lago, tina caliente, pérgola y baño exterior, e infraestructura 100% off-grid: solar, biodigestores, bombeo de agua del lago.",
        stats: ["5 domos", "3 meses de obra", "$99.550 capex", "$97.000 ya invertidos (terreno + movimiento de tierra)"]
      },
      trackRecord: {
        eyebrow: "02 — Track record",
        title: "No es la primera vez que operamos en Copacabana",
        body: "El mismo equipo ya dirige Mia Copacabana Hostel & Coworking — anfitrión de registro en Airbnb, presente en Booking.com y Hostelworld, con calificaciones de 4,87, 8,9 y 9,2 respectivamente. El cobro ya pasa por una LLC en EE.UU. vía Airbnb y Stripe, antes de tocar Bolivia. La ocupación de ese hostal — mes a mes, temporada por temporada — es la base real detrás de las proyecciones del glamping, no un supuesto genérico de la industria.",
        ratings: [{ k: "Airbnb", v: "4,87" }, { k: "Booking.com", v: "8,9" }, { k: "Hostelworld", v: "9,2" }]
      },
      numbers: {
        eyebrow: "03 — Los números",
        title: "Los números, sin maquillaje",
        lede: "Dos escenarios, calculados con datos reales de ocupación, personal y costos de limpieza del hostal en operación — no con supuestos genéricos.",
        colConservative: "Conservador", colBase: "Base",
        rows: [
          { label: "TIR del proyecto (10 años)", conservative: "26,4%", base: "50,5%" },
          { label: "EBITDA año 5", conservative: "$70.801", base: "$128.527" },
          { label: "Cobertura EBITDA / obligación con inversores", conservative: "2,4×", base: "4,4×" },
          { label: "Payback del proyecto", conservative: "4,0 años", base: "2,6 años" }
        ],
        note: "Cifras del modelo financiero interno (septiembre 2026), disponibles para revisión completa bajo solicitud."
      },
      offer: {
        eyebrow: "04 — La oferta",
        title: "Un pagaré, no una promesa de equity",
        bodyIntro: "El inversor no compra un domo ni entra a la sociedad — presta contra un pagaré con destino específico y garantía prendaria sobre los domos y su equipamiento. El terreno de la familia nunca es parte de la garantía, y la propiedad del negocio se queda 100% en la familia.",
        fieldLabels: { raises: "Levanta", finances: "Financia", yieldVal: "Rendimiento", released: "Se libera" },
        tranche1: { label: "Tramo 1", raises: "USD 66.396", finances: "Infraestructura compartida + domos pareja", yieldVal: "17,3% nominal / 16,7% TIR", released: "Al cierre" },
        tranche2: { label: "Tramo 2", raises: "USD 53.064", finances: "Domos familiares", yieldVal: "15,5% nominal / 14,7% TIR", released: "Con ~2-3 meses de datos reales del Tramo 1" },
        tickets: [{ k: "Local", v: "USD 15.000" }, { k: "Extranjero", v: "USD 60.000 (mismos términos)" }, { k: "Ticket reducido", v: "Desde USD 5.000-6.000" }],
        calloutBold: "Recuperas tu capital antes de los 5 años.",
        calloutRest: "El resto del plazo (hasta completar los 6 años) ya es renta pura sobre capital devuelto."
      },
      currency: {
        eyebrow: "05 — Moneda",
        title: "Dólares de punta a punta",
        body: "Aportas en USD, USDC o USDT — y recibes en la misma moneda dura, sin importar si eres inversor local o extranjero. Ningún pago pasa por bolivianos en ningún punto del ciclo. Mismo retorno en dólares para todos."
      },
      protections: {
        eyebrow: "06 — Protecciones",
        title: "Construido para que nadie se quede sin salida",
        bullets: [
          "Prenda inscrita sobre los domos y su equipamiento",
          "Destino específico verificable: facturas y fotos de avance de obra",
          "Reporte trimestral de operación",
          "Tope de concentración: ningún inversor supera el 25% de un tramo",
          "Fondo de liquidez: 5% del ingreso mensual reservado para salidas anticipadas, atendidas por orden de llegada"
        ]
      },
      comparison: {
        eyebrow: "07 — Comparativo",
        title: "¿Cómo se compara esto con dejar tu dinero donde está?",
        colAlt: "Alternativa", colNominal: "Nominal", colReal: "Real",
        rows: [
          { label: "DPF en bolivianos", nominal: "3,0%", real: "-14,0%" },
          { label: "Caja de ahorro en bolivianos", nominal: "2,0%", real: "-15,0%" },
          { label: "DPF en dólares, banca boliviana", nominal: "1,5%", real: "-1,5%" },
          { label: "Esta nota — Tramo 1", nominal: "17,3% / TIR 16,7%", real: "≈13,7%", highlight: true }
        ]
      },
      team: {
        eyebrow: "08 — Equipo",
        title: "Quién está detrás",
        members: [
          { name: "Ariel Torrez", role: "Director General", bio: "Ingeniero mecatrónico con MBA. Opera Mia Copacabana Hostel & Coworking y lidera la construcción de Leo's Lakeside Glamping sobre el terreno familiar." },
          { name: "Yuri Guzmán", role: "CFO / Director de Finanzas", bio: "[espacio para bio breve — 1-2 líneas de trayectoria]", pending: true }
        ]
      },
      faq: {
        eyebrow: "09 — FAQ",
        title: "Preguntas frecuentes",
        items: [
          { q: "¿Por qué un pagaré y no acciones?", a: "Porque queremos que el negocio se quede en la familia. El pagaré te da un retorno fijo en dólares, con garantía real, sin necesidad de repartir la propiedad." },
          { q: "¿Qué pasa si necesito salir antes de los 6 años?", a: "Hay un fondo de liquidez (5% del ingreso mensual) reservado específicamente para salidas anticipadas, atendidas por orden de llegada." },
          { q: "¿Qué pasa si Bolivia tiene una crisis cambiaria?", a: "Tu aporte y tus pagos son en USD, USDC o USDT desde el primer día — nunca pasan por bolivianos. El ingreso del negocio ya es en dólares, vía Airbnb y Stripe." },
          { q: "¿Qué garantía tengo?", a: "Prenda inscrita sobre los domos financiados y su equipamiento — no sobre el terreno, que permanece de la familia." },
          { q: "¿Puedo invertir menos de USD 15.000?", a: "Sí, hay una opción de ticket reducido desde USD 5.000-6.000." }
        ]
      },
      cta: {
        eyebrow: "10 — Hablemos",
        title: "¿Conversamos?",
        body: "Este sitio es un resumen. El detalle completo —cronograma de pagos, garantías y el modelo financiero— está en el term sheet indicativo.",
        downloadLocal: "Descargar term sheet (tramo local)",
        downloadForeign: "Descargar term sheet (tramo extranjero)",
        contactPending: "[contacto/email/WhatsApp]"
      }
    }
  }
};
