/* eslint-disable */
// Leo's Lakeside Glamping — section components.
// Globals expected: React, useState, useEffect, useRef.

const { useState, useEffect, useRef, useCallback } = React;

// ── Reveal: fade up on scroll into view ─────────────────────────────────────
function Reveal({ children, delay, as = "div", className = "", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${className}`} data-delay={delay || undefined} {...rest}>
      {children}
    </Tag>
  );
}

// ── CountUp: animates a number to target when in view ───────────────────────
function CountUp({ to, duration = 1600, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const formatted = decimals
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString();
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

// ── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="nav" data-scrolled={scrolled}>
      <a href="#top" className="nav-brand">
        <span className="mark">L</span>
        <span>Leo&rsquo;s Lakeside</span>
      </a>
      <div className="nav-links">
        <a href="#vision">Vision</a>
        <a href="#film">The Film</a>
        <a href="#progress">Progress</a>
        <a href="#invest">Investment</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="nav-cta">Request Deck</a>
    </nav>
  );
}

// ── Scroll progress bar ─────────────────────────────────────────────────────
function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress"><span ref={ref}></span></div>;
}

// ── Hero ────────────────────────────────────────────────────────────────────
function VideoSlot({ id, placeholder, poster }) {
  const storageKey = `vs-${id}`;
  const [src, setSrc] = useState(null);
  const [over, setOver] = useState(false);
  const [err, setErr] = useState("");
  const inputRef = useRef(null);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const v = localStorage.getItem(storageKey);
      if (v) setSrc(v);
    } catch (e) {}
  }, [storageKey]);

  const ingest = (f) => {
    if (!f) return;
    if (!f.type || !f.type.startsWith("video/")) {
      setErr("That doesn’t look like a video file.");
      return;
    }
    setErr("");
    // Try to persist small videos as data URL; larger ones use object URL (session-only).
    if (f.size <= 8 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        const url = String(reader.result || "");
        try { localStorage.setItem(storageKey, url); } catch (e) {}
        setSrc(url);
      };
      reader.readAsDataURL(f);
    } else {
      const url = URL.createObjectURL(f);
      setSrc(url);
      setErr("Large file — will not persist across reloads. Re-drop after refresh.");
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setOver(false);
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    ingest(f);
  };

  const clear = (e) => {
    e.stopPropagation();
    try { localStorage.removeItem(storageKey); } catch (e2) {}
    setSrc(null);
  };

  return (
    <div
      className={`video-slot ${over ? "is-over" : ""} ${src ? "is-filled" : ""}`}
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={onDrop}
      onClick={() => !src && inputRef.current && inputRef.current.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        style={{ display: "none" }}
        onChange={(e) => ingest(e.target.files[0])}
      />
      {src ? (
        <React.Fragment>
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
          ></video>
          <button className="vs-clear" onClick={clear} title="Clear video">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </React.Fragment>
      ) : (
        <div className="vs-empty">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="6" width="14" height="12" rx="1" />
            <path d="M17 10l4-2v8l-4-2z" />
          </svg>
          <div className="vs-cap">{placeholder || "Drop a video"}</div>
          <div className="vs-sub">or click to browse · mp4 / webm</div>
          {err && <div className="vs-err">{err}</div>}
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-media">
        <video
          src="uploads/hero-lake.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></video>
      </div>
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="dot"></span>
          <span>Investor Brief · Spring 2026</span>
        </div>
        <h1 className="hero-title">
          A quieter<br/><em>kind of luxury,</em><br/>by the lake.
        </h1>
        <div className="hero-row">
          <div className="hero-meta">
            <div><b>Project</b> · Leo&rsquo;s Lakeside Glamping</div>
            <div><b>Phase</b> · II / IV &mdash; Build out</div>
            <div><b>Open</b> · Summer 2027</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </header>
  );
}

// ── Vision ──────────────────────────────────────────────────────────────────
function Vision() {
  return (
    <section className="section vision" id="vision">
      <div>
        <Reveal>
          <div className="section-eyebrow">01 &mdash; The vision</div>
        </Reveal>
        <Reveal delay="1">
          <h2 className="section-title">
            Built around the <em>water,</em> not around the road.
          </h2>
        </Reveal>
        <Reveal delay="2">
          <p className="section-lede">
            Leo&rsquo;s Lakeside is a small, deliberate hospitality project.
            Each suite is sited for a private view, lifted on slender steel piers
            to leave the meadow intact, and finished in cedar that will silver
            into the landscape over time. Twenty-four keys. No motorboats.
            No televisions. A restaurant that closes at ten.
          </p>
        </Reveal>
        <Reveal delay="3">
          <div className="vision-quote">
            <div className="who">Leo Marchetti<br/>Founder</div>
            <div className="what">
              &ldquo;We are not building a resort. We are restoring a piece of
              shoreline and inviting twenty-four households at a time to be
              quiet in it.&rdquo;
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal className="vision-image" delay="2">
        <image-slot
          id="vision-cabin"
          shape="rect"
          placeholder="Architect rendering — single suite, exterior, golden hour"
        ></image-slot>
      </Reveal>
    </section>
  );
}

// ── Metrics ─────────────────────────────────────────────────────────────────
function Metric({ value, unit, decimals, label, note, prefix, suffix }) {
  return (
    <div className="metric">
      <div className="metric-label">{label}</div>
      <div className="metric-value">
        <CountUp to={value} decimals={decimals || 0} prefix={prefix || ""} suffix={suffix || ""} />
        {unit && <span className="unit">{unit}</span>}
      </div>
      <div className="metric-note">{note}</div>
    </div>
  );
}

function Metrics() {
  return (
    <section className="metrics" id="numbers">
      <div className="metrics-head">
        <div>
          <Reveal><div className="section-eyebrow">02 &mdash; By the numbers</div></Reveal>
          <Reveal delay="1"><h2 className="section-title">A small project, <em>sized for return.</em></h2></Reveal>
        </div>
        <Reveal delay="2">
          <p className="section-lede" style={{ maxWidth: "36ch" }}>
            Targets reviewed quarterly with an independent hospitality analyst.
            Full underwriting available on request.
          </p>
        </Reveal>
      </div>

      <div className="metrics-grid">
        <Reveal><Metric
          label="Suites"
          value={24}
          note="Six typologies, sleeping 2 – 6 each. Cap held at 24 to protect occupancy economics and site quietude."
        /></Reveal>
        <Reveal delay="1"><Metric
          label="Site"
          value={38}
          unit="acres"
          note="Private freehold including 1,400 linear feet of natural shoreline and protected woodland."
        /></Reveal>
        <Reveal delay="2"><Metric
          label="Capital raise"
          value={4.2}
          decimals={1}
          prefix="$"
          unit="M"
          note="Series A. $1.7M committed to date. $2.5M open through Q3 2026."
        /></Reveal>
        <Reveal delay="3"><Metric
          label="Target IRR"
          value={18.4}
          decimals={1}
          suffix="%"
          note="Five-year hold, indicative. Conservative model assumes 62% blended occupancy at $480 ADR."
        /></Reveal>
      </div>

      <div className="metrics-foot">
        Figures indicative &mdash; complete financial model &amp; sensitivities provided under NDA.
      </div>
    </section>
  );
}

// ── Video ───────────────────────────────────────────────────────────────────
function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="video-section" id="film">
      <div className="video-head">
        <div>
          <Reveal><div className="section-eyebrow">03 &mdash; The film</div></Reveal>
          <Reveal delay="1">
            <h2 className="section-title">
              Two minutes <em>on the water.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay="2">
          <p className="section-lede">
            Aerial and on-the-ground footage filmed in April 2026 &mdash; the site
            as it stands today, with concept overlays for the completed phase II
            structures. Sound on.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className={`video-wrap ${playing ? "video-playing" : ""}`}>
          <image-slot
            id="video-poster"
            shape="rect"
            placeholder="Video poster frame — dawn pano of the lake (1920×1080)"
          ></image-slot>
          <div className="video-overlay" onClick={() => setPlaying(true)}>
            <div className="video-play" aria-label="Play project film">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8V4z"/></svg>
            </div>
          </div>
          <div className="video-caption">
            <span className="rec"></span>
            <span>02:14 &middot; 4K &middot; April 2026</span>
          </div>
          <div className="video-player">
            <button className="close-btn" onClick={() => setPlaying(false)} aria-label="Close video">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
            <div className="placeholder">
              <div className="big">&ldquo;Stillness, in motion.&rdquo;</div>
              <div>Project film &middot; coming soon</div>
              <div style={{ marginTop: 14, opacity: 0.5 }}>Replace this slot with a real &lt;video&gt; source</div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="video-grid">
        <Reveal><div>
          <div className="label">Directed by</div>
          <div className="val">Mara Ostrove &middot; Field Studio</div>
        </div></Reveal>
        <Reveal delay="1"><div>
          <div className="label">Score</div>
          <div className="val">Original, recorded on site</div>
        </div></Reveal>
        <Reveal delay="2"><div>
          <div className="label">Premiered</div>
          <div className="val">Investor preview &middot; 02 May 2026</div>
        </div></Reveal>
      </div>
    </section>
  );
}

// ── Timeline / Progress ─────────────────────────────────────────────────────
const PHASES = [
  { date: "Q3 2024", title: "Land", status: "done", progress: 100,
    desc: "38-acre parcel acquired in full. Zoning variance for low-density resort use approved."
  },
  { date: "Q2 2025", title: "Design", status: "done", progress: 100,
    desc: "Master plan, environmental survey and shoreline study complete. Suite typology finalised with Atelier North."
  },
  { date: "Q1 2026", title: "Permits", status: "done", progress: 100,
    desc: "All municipal, environmental and shoreline permits in hand. Construction insurance bound."
  },
  { date: "Q2 2026 → Q1 2027", title: "Build", status: "active", progress: 42,
    desc: "Site works underway. Foundations on Suites 1–8 in. Pier crew mobilised. On schedule, slightly under budget."
  },
  { date: "Summer 2027", title: "Open", status: "upcoming", progress: 0,
    desc: "Soft launch with twelve suites in May, full opening in July. Bookings open to investors first."
  },
];

function Timeline() {
  return (
    <section className="timeline-section" id="progress">
      <div className="timeline-head">
        <div>
          <Reveal><div className="section-eyebrow">04 &mdash; Where we are</div></Reveal>
          <Reveal delay="1"><h2 className="section-title">On the ground, <em>on schedule.</em></h2></Reveal>
        </div>
        <Reveal delay="2">
          <p className="section-lede">
            Three of five phases complete. We are eleven weeks into construction
            and tracking 3% under our original capital plan. Quarterly progress
            reports are sent to all committed investors.
          </p>
        </Reveal>
      </div>

      <div className="timeline">
        {PHASES.map((p, i) => (
          <Reveal key={p.title} delay={i} className="phase-wrap" as="div">
            <div className="phase" data-status={p.status}>
              <div className="phase-marker"></div>
              <div className="phase-date">{p.date}</div>
              <h3 className="phase-title">{p.title}</h3>
              <div className="phase-status">
                {p.status === "done" && <>✓ Complete</>}
                {p.status === "active" && <>● In progress &middot; {p.progress}%</>}
                {p.status === "upcoming" && <>○ Upcoming</>}
              </div>
              <div className="phase-bar">
                <span style={{ transform: `scaleX(${p.progress / 100})` }}></span>
              </div>
              <p className="phase-desc">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Gallery ─────────────────────────────────────────────────────────────────
const GALLERY = [
  { id: "g-suite", cls: "g1", caption: "Suite 04 — east-facing rendering" },
  { id: "g-shore", cls: "g2", caption: "Shoreline, looking north" },
  { id: "g-interior", cls: "g3", caption: "Interior — cedar & oiled brass" },
  { id: "g-site", cls: "g4", caption: "Site progress — April 2026" },
  { id: "g-aerial", cls: "g5", caption: "Aerial study, masterplan" },
  { id: "g-bath", cls: "g6", caption: "Outdoor bath, suite typology B" },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-head">
        <Reveal><div className="section-eyebrow">05 &mdash; The work</div></Reveal>
        <Reveal delay="1">
          <h2 className="section-title">
            Renderings, site, <em>and the small details.</em>
          </h2>
        </Reveal>
      </div>
      <div className="gallery-grid">
        {GALLERY.map((g, i) => (
          <Reveal key={g.id} delay={i % 4} className={`gallery-item ${g.cls}`}>
            <image-slot id={g.id} shape="rect" placeholder={g.caption}></image-slot>
            <div className="caption">{g.caption}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Location ────────────────────────────────────────────────────────────────
function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-grid">
        <Reveal className="location-map" as="div">
          <image-slot
            id="loc-map"
            shape="rect"
            placeholder="Site map / satellite of the lake & parcel"
          ></image-slot>
          <div className="location-pin">
            <span className="ring"></span>
            <span className="label">The site &middot; 38 ac</span>
            <span className="dot"></span>
          </div>
        </Reveal>
        <div className="location-info">
          <Reveal><div className="section-eyebrow">06 &mdash; The place</div></Reveal>
          <Reveal delay="1"><h2 className="section-title">Far enough to forget. <em>Close enough to fill.</em></h2></Reveal>
          <Reveal delay="2">
            <p className="section-lede">
              A sheltered glacial lake on the eastern edge of the Pine River
              valley &mdash; deep, cold, motor-restricted, and within a comfortable
              drive of three major metros.
            </p>
          </Reveal>
          <Reveal delay="3">
            <div className="location-stats">
              <div className="row"><span className="k">Drive · Metro A</span><span className="v">1h 50m</span></div>
              <div className="row"><span className="k">Drive · Metro B</span><span className="v">2h 30m</span></div>
              <div className="row"><span className="k">Nearest airport</span><span className="v">42 min</span></div>
              <div className="row"><span className="k">Elevation</span><span className="v">1,180 ft</span></div>
              <div className="row"><span className="k">Season</span><span className="v">May → October</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Investment opportunity ──────────────────────────────────────────────────
function Investment() {
  return (
    <section className="invest-section" id="invest">
      <div className="invest-grid">
        <div>
          <Reveal><div className="section-eyebrow">07 &mdash; The opportunity</div></Reveal>
          <Reveal delay="1">
            <h2 className="section-title">
              Series A &mdash; <em>open through Q3.</em>
            </h2>
          </Reveal>
          <Reveal delay="2">
            <p className="section-lede">
              We are raising the remaining $2.5M of our $4.2M Series A. Capital
              is deployed against construction milestones, with quarterly
              distributions targeted from year two of operation.
            </p>
          </Reveal>
          <Reveal delay="3">
            <div className="invest-cta">
              <a href="#contact" className="btn primary">Request the deck →</a>
              <a href="#contact" className="btn ghost">Book a site visit</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay="1">
          <div className="invest-card">
            <div className="invest-line"><span className="k">Raise size</span><span className="v">$4.2M</span></div>
            <div className="invest-line"><span className="k">Committed</span><span className="v">$1.7M (40%)</span></div>
            <div className="invest-line"><span className="k">Open</span><span className="v">$2.5M</span></div>
            <div className="invest-line"><span className="k">Minimum ticket</span><span className="v">$50,000</span></div>
            <div className="invest-line"><span className="k">Instrument</span><span className="v">Common equity</span></div>
            <div className="invest-line"><span className="k">Target hold</span><span className="v">5 years</span></div>
            <div className="invest-line"><span className="k">Target IRR</span><span className="v">18.4%</span></div>
            <div className="invest-line"><span className="k">Close</span><span className="v">30 Sep 2026</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Team ────────────────────────────────────────────────────────────────────
const TEAM = [
  { id: "t-leo", name: "Leo Marchetti", role: "Founder · CEO", bio: "Twelve years in independent hospitality. Previously co-founded the Wren Inn group." },
  { id: "t-ana", name: "Ana Brückner", role: "Architect", bio: "Principal at Atelier North. Built four lakeside projects across Scandinavia." },
  { id: "t-sam", name: "Sam Okafor", role: "Operations", bio: "Former GM at Cliffside. Has opened twenty-three hospitality properties." },
  { id: "t-iris", name: "Iris Tovey", role: "Finance", bio: "Hospitality CFO and investor. Underwrote $180M across the sector." },
];

function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-head">
        <Reveal><div className="section-eyebrow">08 &mdash; The people</div></Reveal>
        <Reveal delay="1"><h2 className="section-title">A small team. <em>Long careers.</em></h2></Reveal>
      </div>
      <div className="team-grid">
        {TEAM.map((m, i) => (
          <Reveal key={m.id} delay={i}>
            <div className="member">
              <div className="member-photo">
                <image-slot id={m.id} shape="rect" placeholder={m.name}></image-slot>
              </div>
              <h3 className="member-name">{m.name}</h3>
              <div className="member-role">{m.role}</div>
              <p className="member-bio">{m.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Contact form ────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <Reveal><div className="section-eyebrow">09 &mdash; Get in touch</div></Reveal>
          <Reveal delay="1">
            <h2 className="section-title">Receive the full <em>investor pack.</em></h2>
          </Reveal>
          <Reveal delay="2">
            <p className="section-lede">
              The deck, financial model, architectural drawings and current
              construction report &mdash; sent under NDA within one business day.
              Site visits arranged on request.
            </p>
          </Reveal>
          <Reveal delay="3">
            <div className="meta">
              <div><a href="mailto:invest@leoslakeside.com">invest@leoslakeside.com</a></div>
              <div><a href="tel:+15551234567">+1 (555) 123-4567</a></div>
              <div>Pine River Valley &middot; By appointment only</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay="1">
          {sent ? (
            <div className="form-success">
              <div className="check">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12l4 4L19 7" />
                </svg>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontStyle: "italic" }}>
                Thank you.
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                We&rsquo;ll be in touch within one business day.
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <div className="field-row">
                <div className="field">
                  <label>Name</label>
                  <input type="text" required defaultValue="" placeholder="Your name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Organisation</label>
                  <input type="text" placeholder="Firm / family office (optional)" />
                </div>
                <div className="field">
                  <label>Indicative ticket</label>
                  <select defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>$50K — $100K</option>
                    <option>$100K — $250K</option>
                    <option>$250K — $500K</option>
                    <option>$500K +</option>
                    <option>Exploring</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>Anything we should know</label>
                <textarea rows="3" placeholder="Optional — questions, timeline, preferred channel"></textarea>
              </div>
              <div className="form-actions">
                <div className="note">
                  By submitting you agree to receive investor materials under
                  customary confidentiality terms.
                </div>
                <button type="submit" className="btn primary">Send →</button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">Leo&rsquo;s Lakeside Glamping</div>
        <div>© 2026 &middot; Pine River Holdings, LLC</div>
        <div>Investor relations &middot; invest@leoslakeside.com</div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, ScrollProgress, Hero, Vision, Metrics, VideoSection, Timeline,
  Gallery, Location, Investment, Team, Contact, Footer
});
