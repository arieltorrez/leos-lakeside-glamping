/* eslint-disable */
// Leo's Lakeside Glamping — section components.
// Globals expected: React, useState, useEffect, useRef, TRANSLATIONS.

const { useState, useEffect, useRef, useCallback } = React;

// ── Language context ─────────────────────────────────────────────────────────
const LangContext = React.createContext({ lang: "en", t: (s) => s });

function useLang() { return React.useContext(LangContext); }

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

// ── CountUp ──────────────────────────────────────────────────────────────────
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
  const formatted = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 100);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const T = window.TRANSLATIONS[lang].nav;
  return (
    <nav className={`nav${hidden ? " nav--hidden" : ""}`} data-scrolled={scrolled}>
      <div className="nav-links">
        <a href="#vision">{T.vision}</a>
        <a href="#film">{T.film}</a>
        <a href="#progress">{T.progress}</a>
        <a href="#invest">{T.investment}</a>
        <a href="#contact">{T.contact}</a>
      </div>
      <a href="#top" className="nav-brand nav-brand--center">
        <img src="/uploads/logo.png" alt="Leo's Lakeside Glamping" style={{ height: "70px", width: "auto" }} />
      </a>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="nav-cta"
          style={{ cursor: "pointer", background: "none", border: "1px solid currentColor" }}
        >{T.lang}</button>
        <a href="#contact" className="nav-cta">{T.cta}</a>
      </div>
    </nav>
  );
}

// ── Scroll progress bar ──────────────────────────────────────────────────────
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

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ lang }) {
  const T = window.TRANSLATIONS[lang].hero;
  return (
    <header className="hero" id="top">
      <div className="hero-media">
        <video
          src="/uploads/hero-lake.mp4"
          autoPlay
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></video>
      </div>
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="dot"></span>
          <span>{T.eyebrow}</span>
        </div>
        <h1 className="hero-title">
          {T.title1}<br/><em>{T.title2}</em><br/>{T.title3}
        </h1>
        <div className="hero-row">
          <div className="hero-meta">
            <div><b>{T.project}</b> · {T.projectVal}</div>
            <div><b>{T.phase}</b> · {T.phaseVal}</div>
            <div><b>{T.open}</b> · {T.openVal}</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>{T.scroll}</span>
        <span className="line"></span>
      </div>
    </header>
  );
}

// ── Vision ───────────────────────────────────────────────────────────────────
function Vision({ lang }) {
  const T = window.TRANSLATIONS[lang].vision;
  const [who, what] = T.quoteWho.split("\n");
  return (
    <section className="section vision" id="vision">
      <div>
        <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
        <Reveal delay="1"><h2 className="section-title">{T.title.split(",")[0]},<em> {T.title.split(",").slice(1).join(",").trim()}</em></h2></Reveal>
        <Reveal delay="2"><p className="section-lede">{T.lede}</p></Reveal>
        <Reveal delay="3">
          <div className="vision-quote">
            <div className="who">{who}<br/>{what}</div>
            <div className="what">{T.quoteWhat}</div>
          </div>
        </Reveal>
      </div>
      <Reveal className="vision-image" delay="2">
        <image-slot id="vision-cabin" shape="rect" placeholder="Architect rendering — single suite, exterior, golden hour"></image-slot>
      </Reveal>
    </section>
  );
}

// ── Metrics ──────────────────────────────────────────────────────────────────
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

function Metrics({ lang }) {
  const T = window.TRANSLATIONS[lang].metrics;
  return (
    <section className="metrics" id="numbers">
      <div className="metrics-head">
        <div>
          <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
          <Reveal delay="1"><h2 className="section-title">{T.title.split(",")[0]}, <em>{T.title.split(",").slice(1).join(",").trim()}</em></h2></Reveal>
        </div>
        <Reveal delay="2"><p className="section-lede" style={{ maxWidth: "36ch" }}>{T.lede}</p></Reveal>
      </div>
      <div className="metrics-grid">
        <Reveal><Metric label={T.suites.label} value={5} note={T.suites.note} /></Reveal>
        <Reveal delay="1"><Metric label={T.site.label} value={1} unit="ha" note={T.site.note} /></Reveal>
        <Reveal delay="2"><Metric label={T.capital.label} value={135.96} decimals={0} prefix="$" unit="K" note={T.capital.note} /></Reveal>
        <Reveal delay="3"><Metric label={T.irr.label} value={37.5} decimals={0} suffix="%" note={T.irr.note} /></Reveal>
      </div>
      <div className="metrics-foot">{T.foot}</div>
    </section>
  );
}

// ── Video ─────────────────────────────────────────────────────────────────────
function VideoSection({ lang }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = React.useRef(null);
  const T = window.TRANSLATIONS[lang].film;

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => { if (videoRef.current) videoRef.current.play(); }, 50);
  };
  const handleClose = () => {
    setPlaying(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <section className="video-section" id="film">
      <div className="video-head">
        <div>
          <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
          <Reveal delay="1">
            <h2 className="section-title">
              {T.title.split(" on ")[0]} <em>on {T.title.split(" on ")[1]}</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay="2"><p className="section-lede">{T.lede}</p></Reveal>
      </div>
      <Reveal>
        <div className={`video-wrap ${playing ? "video-playing" : ""}`}>
          <div className="video-overlay" onClick={handlePlay}>
            <div className="video-play" aria-label="Play project film">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8V4z"/></svg>
            </div>
          </div>
          <div className="video-caption">
            <span className="rec"></span>
            <span>0:32 · 4K · 2026</span>
          </div>
          <div className="video-player">
            <button className="close-btn" onClick={handleClose} aria-label="Close video">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
            <video ref={videoRef} src="/uploads/the-film.mp4" controls style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
          </div>
        </div>
      </Reveal>
      <div className="video-grid">
        <Reveal><div><div className="label">{T.directedBy}</div><div className="val">{T.directedVal}</div></div></Reveal>
        <Reveal delay="1"><div><div className="label">{T.score}</div><div className="val">{T.scoreVal}</div></div></Reveal>
        <Reveal delay="2"><div><div className="label">{T.premiered}</div><div className="val">{T.premieredVal}</div></div></Reveal>
      </div>
    </section>
  );
}

// ── Timeline ─────────────────────────────────────────────────────────────────
const PHASES_STATUS = ["done", "done", "done", "active", "upcoming"];
const PHASES_PROGRESS = [100, 100, 100, 42, 0];

function Timeline({ lang }) {
  const T = window.TRANSLATIONS[lang].timeline;
  return (
    <section className="timeline-section" id="progress">
      <div className="timeline-head">
        <div>
          <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
          <Reveal delay="1"><h2 className="section-title">{T.title.split(",")[0]}, <em>{T.title.split(",")[1].trim()}</em></h2></Reveal>
        </div>
        <Reveal delay="2"><p className="section-lede">{T.lede}</p></Reveal>
      </div>
      <div className="timeline">
        {T.phases.map((p, i) => (
          <Reveal key={p.title} delay={i} className="phase-wrap" as="div">
            <div className="phase" data-status={PHASES_STATUS[i]}>
              <div className="phase-marker"></div>
              <div className="phase-date">{p.date}</div>
              <h3 className="phase-title">{p.title}</h3>
              <div className="phase-status">
                {PHASES_STATUS[i] === "done" && <>{T.done}</>}
                {PHASES_STATUS[i] === "active" && <>{T.active} · {PHASES_PROGRESS[i]}%</>}
                {PHASES_STATUS[i] === "upcoming" && <>{T.upcoming}</>}
              </div>
              <div className="phase-bar">
                <span style={{ transform: `scaleX(${PHASES_PROGRESS[i] / 100})` }}></span>
              </div>
              <p className="phase-desc">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Gallery ──────────────────────────────────────────────────────────────────
const GALLERY_IDS = ["g-suite", "g-shore", "g-interior", "g-site", "g-aerial", "g-bath"];
const GALLERY_CLS = ["g1", "g2", "g3", "g4", "g5", "g6"];
const GALLERY_SRCS = [
  "/uploads/g-suite.webp", "/uploads/g-shore.webp", "/uploads/g-interior.webp",
  "/uploads/g-site.webp", "/uploads/g-aerial.webp", "/uploads/g-bath.webp"
];

function Gallery({ lang }) {
  const T = window.TRANSLATIONS[lang].gallery;
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-head">
        <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
        <Reveal delay="1">
          <h2 className="section-title">
            {T.title.split(",")[0]}, <em>{T.title.split(",").slice(1).join(",").trim()}</em>
          </h2>
        </Reveal>
      </div>
      <div className="gallery-grid">
        {GALLERY_IDS.map((id, i) => (
          <Reveal key={id} delay={i % 4} className={`gallery-item ${GALLERY_CLS[i]}`}>
            <img src={GALLERY_SRCS[i]} alt={T.captions[i]} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div className="caption">{T.captions[i]}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Location ─────────────────────────────────────────────────────────────────
function Location({ lang }) {
  const T = window.TRANSLATIONS[lang].location;
  return (
    <section className="location-section" id="location">
      <div className="location-grid">
        <Reveal className="location-map" as="div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14466.895356048912!2d-69.11475983616843!3d-16.18001458207651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDEwJzUzLjgiUyA2OcKwMDYnNTYuNyJX!5e0!3m2!1ses!2sbo!4v1778889973881!5m2!1ses!2sbo"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: "420px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Reveal>
        <div className="location-info">
          <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
          <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
          <Reveal delay="2"><p className="section-lede">{T.lede}</p></Reveal>
          <Reveal delay="3">
            <div className="location-stats">
              {T.stats.map((s, i) => (
                <div key={i} className="row"><span className="k">{s.k}</span><span className="v">{s.v}</span></div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Investment ────────────────────────────────────────────────────────────────
function Investment({ lang }) {
  const T = window.TRANSLATIONS[lang].investment;
  return (
    <section className="invest-section" id="invest">
      <div className="invest-grid">
        <div>
          <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
          <Reveal delay="1"><h2 className="section-title">{T.title.split("—")[0]}&mdash;<em>{T.title.split("—")[1].trim()}</em></h2></Reveal>
          <Reveal delay="2"><p className="section-lede">{T.lede}</p></Reveal>
          <Reveal delay="3">
            <div className="invest-cta">
              <a href="#contact" className="btn primary">{T.cta1}</a>
              <a href="#contact" className="btn ghost">{T.cta2}</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay="1">
          <div className="invest-card">
            {T.lines.map((l, i) => (
              <div key={i} className="invest-line"><span className="k">{l.k}</span><span className="v">{l.v}</span></div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Team ──────────────────────────────────────────────────────────────────────
const TEAM_IDS = ["t-ariel", "t-yuri"];

function Team({ lang }) {
  const T = window.TRANSLATIONS[lang].team;
  return (
    <section className="team-section" id="team">
      <div className="team-head">
        <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
        <Reveal delay="1"><h2 className="section-title">{T.title.split(".")[0]}. <em>{T.title.split(".")[1].trim()}</em></h2></Reveal>
      </div>
      <div className="team-grid">
        {T.members.map((m, i) => (
          <Reveal key={TEAM_IDS[i]} delay={i}>
            <div className="member">
              <div className="member-photo">
                <image-slot id={TEAM_IDS[i]} shape="rect" placeholder={m.name}></image-slot>
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

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact({ lang }) {
  const [sent, setSent] = useState(false);
  const T = window.TRANSLATIONS[lang].contact;
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
          <Reveal delay="1"><h2 className="section-title">{T.title.split(" the ")[0]} the <em>{T.title.split(" the ")[1]}</em></h2></Reveal>
          <Reveal delay="2"><p className="section-lede">{T.lede}</p></Reveal>
          <Reveal delay="3">
            <div className="meta">
              <div><a href="mailto:invest@leoslakeside.com">invest@leoslakeside.com</a></div>
              <div><a href="https://wa.me/59172072795" target="_blank">+591 72072795 (WhatsApp)</a></div>
              <div>{T.address}</div>
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
              <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontStyle: "italic" }}>{T.successTitle}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{T.successSub}</div>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <div className="field-row">
                <div className="field"><label>{T.nameLbl}</label><input type="text" required placeholder={T.namePh} /></div>
                <div className="field"><label>{T.emailLbl}</label><input type="email" required placeholder={T.emailPh} /></div>
              </div>
              <div className="field-row">
                <div className="field"><label>{T.orgLbl}</label><input type="text" placeholder={T.orgPh} /></div>
                <div className="field">
                  <label>{T.ticketLbl}</label>
                  <select defaultValue="">
                    <option value="" disabled>{T.ticketPh}</option>
                    {T.tickets.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="field"><label>{T.notesLbl}</label><textarea rows="3" placeholder={T.notesPh}></textarea></div>
              <div className="form-actions">
                <div className="note">{T.legal}</div>
                <button type="submit" className="btn primary">{T.send}</button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer({ lang }) {
  const T = window.TRANSLATIONS[lang].footer;
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">{T.brand}</div>
        <div>{T.copy}</div>
        <div>{T.ir}</div>
      </div>
    </footer>
  );
}

// ── App wrapper ───────────────────────────────────────────────────────────────
function App() {
  const [lang, setLang] = useState("en");
  return (
    <React.Fragment>
      <Nav lang={lang} setLang={setLang} />
      <ScrollProgress />
      <Hero lang={lang} />
      <Vision lang={lang} />
      <Metrics lang={lang} />
      <VideoSection lang={lang} />
      <Timeline lang={lang} />
      <Gallery lang={lang} />
      <Location lang={lang} />
      <Investment lang={lang} />
      <Team lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </React.Fragment>
  );
}

Object.assign(window, {
  Nav, ScrollProgress, Hero, Vision, Metrics, VideoSection, Timeline,
  Gallery, Location, Investment, Team, Contact, Footer, App
});
