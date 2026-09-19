/* eslint-disable */
// Leo's Lakeside Glamping — Investor note page (/investors).
// Globals expected: React, TRANSLATIONS, Reveal, ScrollProgress, Footer (from components.jsx).

const { useState, useEffect, useRef } = React;

function IT(lang) { return window.TRANSLATIONS[lang].investorPage; }

// ── Nav ──────────────────────────────────────────────────────────────────────
function InvestorNav({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const nav = IT(lang).nav;
  const langLbl = window.TRANSLATIONS[lang].nav.lang;
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav${hidden ? " nav--hidden" : ""}`} data-scrolled={scrolled}>
      <div style={{ flex: 1 }} className="nav-desktop-only"></div>

      <div className="nav-center">
        <a href="/" className="nav-brand nav-brand--center">
          <img src="/uploads/logo.png" alt="Leo's Lakeside Glamping" style={{ height: "80px", width: "auto" }} />
        </a>
        <div className="nav-links nav-desktop-only">
          <a href="#project">{nav.project}</a>
          <a href="#numbers">{nav.numbers}</a>
          <a href="#offer">{nav.offer}</a>
          <a href="#team">{nav.team}</a>
          <a href="#faq">{nav.faq}</a>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", gap: "12px", alignItems: "center", justifyContent: "flex-end" }} className="nav-desktop-only">
        <button onClick={() => setLang(lang === "en" ? "es" : "en")} className="nav-cta" style={{ cursor: "pointer", background: "none", border: "1px solid currentColor" }}>{langLbl}</button>
        <a href="/" className="nav-cta">{nav.backHome}</a>
      </div>

      <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ display: menuOpen ? "none" : undefined }}>
        <span></span><span></span><span></span>
      </button>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <button className="nav-mobile-close" onClick={closeMenu}>✕</button>
          <a href="#project" onClick={closeMenu}>{nav.project}</a>
          <a href="#numbers" onClick={closeMenu}>{nav.numbers}</a>
          <a href="#offer" onClick={closeMenu}>{nav.offer}</a>
          <a href="#team" onClick={closeMenu}>{nav.team}</a>
          <a href="#faq" onClick={closeMenu}>{nav.faq}</a>
          <div className="nav-mobile-actions">
            <button onClick={() => { setLang(lang === "en" ? "es" : "en"); closeMenu(); }} className="nav-cta">{langLbl}</button>
            <a href="/" className="nav-cta" onClick={closeMenu}>{nav.backHome}</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function InvestorHero({ lang }) {
  const T = IT(lang).hero;
  return (
    <header className="hero investor-hero" id="top">
      <div className="hero-media">
        <image-slot id="investor-hero" shape="rect" placeholder={T.mediaPending}></image-slot>
      </div>
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="dot"></span>
          <span>{T.eyebrow}</span>
        </div>
        <h1 className="hero-title">{T.title}</h1>
        <p className="hero-subhead">{T.subhead}</p>
        <div className="hero-cta-row">
          <a href="#offer" className="btn primary">{T.cta1}</a>
          <a href="#cta" className="btn ghost">{T.cta2}</a>
        </div>
      </div>
    </header>
  );
}

// ── Project ──────────────────────────────────────────────────────────────────
function ProjectSection({ lang }) {
  const T = IT(lang).project;
  return (
    <section className="section" id="project">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <Reveal delay="2"><p className="section-lede" style={{ maxWidth: "70ch" }}>{T.body}</p></Reveal>
      <Reveal delay="3">
        <div className="chip-row">
          {T.stats.map((s, i) => <span className="chip" key={i}>{s}</span>)}
        </div>
      </Reveal>
    </section>
  );
}

// ── Track record ─────────────────────────────────────────────────────────────
function TrackRecordSection({ lang }) {
  const T = IT(lang).trackRecord;
  return (
    <section className="section section-alt" id="track-record">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <Reveal delay="2"><p className="section-lede" style={{ maxWidth: "72ch" }}>{T.body}</p></Reveal>
      <Reveal delay="3">
        <div className="chip-row">
          {T.ratings.map((r, i) => (
            <span className="chip" key={i}><strong>{r.v}</strong> {r.k}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

// ── Numbers ──────────────────────────────────────────────────────────────────
function NumbersSection({ lang }) {
  const T = IT(lang).numbers;
  return (
    <section className="section" id="numbers">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <Reveal delay="2"><p className="section-lede" style={{ maxWidth: "62ch" }}>{T.lede}</p></Reveal>
      <Reveal delay="3">
        <div className="table-wrap" style={{ marginTop: "48px" }}>
          <table className="data-table">
            <thead>
              <tr><th></th><th>{T.colConservative}</th><th>{T.colBase}</th></tr>
            </thead>
            <tbody>
              {T.rows.map((r, i) => (
                <tr key={i}><td>{r.label}</td><td>{r.conservative}</td><td>{r.base}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
      <div className="metrics-foot" style={{ marginTop: "24px" }}>{T.note}</div>
    </section>
  );
}

// ── Offer ────────────────────────────────────────────────────────────────────
function OfferSection({ lang }) {
  const T = IT(lang).offer;
  const tranches = [T.tranche1, T.tranche2];
  return (
    <section className="section section-inverted" id="offer">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <Reveal delay="2"><p className="section-lede" style={{ maxWidth: "70ch" }}>{T.bodyIntro}</p></Reveal>
      <div className="tranche-grid">
        {tranches.map((tr, i) => (
          <Reveal key={i} delay={i + 1}>
            <div className="invest-card">
              <div className="tranche-label">{tr.label}</div>
              <div className="invest-line"><span className="k">{T.fieldLabels.raises}</span><span className="v">{tr.raises}</span></div>
              <div className="invest-line"><span className="k">{T.fieldLabels.finances}</span><span className="v">{tr.finances}</span></div>
              <div className="invest-line"><span className="k">{T.fieldLabels.yieldVal}</span><span className="v">{tr.yieldVal}</span></div>
              <div className="invest-line"><span className="k">{T.fieldLabels.released}</span><span className="v">{tr.released}</span></div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay="2">
        <div className="chip-row" style={{ marginTop: "40px" }}>
          {T.tickets.map((tk, i) => <span className="chip" key={i}>{tk.k} — {tk.v}</span>)}
        </div>
      </Reveal>
      <Reveal delay="3">
        <div className="offer-callout"><strong>{T.calloutBold}</strong> {T.calloutRest}</div>
      </Reveal>
    </section>
  );
}

// ── Currency ─────────────────────────────────────────────────────────────────
function CurrencySection({ lang }) {
  const T = IT(lang).currency;
  return (
    <section className="section" id="currency">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <Reveal delay="2"><p className="section-lede" style={{ maxWidth: "70ch" }}>{T.body}</p></Reveal>
    </section>
  );
}

// ── Protections ──────────────────────────────────────────────────────────────
function ProtectionsSection({ lang }) {
  const T = IT(lang).protections;
  return (
    <section className="section section-alt" id="protections">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <Reveal delay="2">
        <ul className="check-list">
          {T.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </Reveal>
    </section>
  );
}

// ── Comparison ───────────────────────────────────────────────────────────────
function ComparisonSection({ lang }) {
  const T = IT(lang).comparison;
  return (
    <section className="section" id="comparison">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <Reveal delay="2">
        <div className="table-wrap" style={{ marginTop: "40px" }}>
          <table className="data-table">
            <thead>
              <tr><th>{T.colAlt}</th><th>{T.colNominal}</th><th>{T.colReal}</th></tr>
            </thead>
            <tbody>
              {T.rows.map((r, i) => (
                <tr key={i} className={r.highlight ? "highlight" : ""}>
                  <td>{r.label}</td><td>{r.nominal}</td><td>{r.real}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}

// ── Team ─────────────────────────────────────────────────────────────────────
function InvestorTeam({ lang }) {
  const T = IT(lang).team;
  return (
    <section className="section section-alt" id="team">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <div className="team-grid investor-team-grid">
        {T.members.map((m, i) => (
          <Reveal key={m.name} delay={i}>
            <div className="member">
              <div className="member-photo">
                <image-slot id={`investor-team-${i}`} shape="rect" placeholder={m.name}></image-slot>
              </div>
              <h3 className="member-name">{m.name}</h3>
              <div className="member-role">{m.role}</div>
              {m.pending ? (
                <div className="pending-block">
                  <span className="pending-tag">Pending</span>
                  <p>{m.bio}</p>
                </div>
              ) : (
                <p className="member-bio">{m.bio}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────
function FaqItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="faq-item" data-open={open}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="icon">+</span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? "600px" : "0px" }}>
        <p style={{ margin: 0, paddingBottom: open ? 24 : 0 }}>{a}</p>
      </div>
    </div>
  );
}

function FaqSection({ lang }) {
  const T = IT(lang).faq;
  return (
    <section className="section" id="faq">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <div className="faq-list">
        {T.items.map((it, i) => <FaqItem key={i} q={it.q} a={it.a} defaultOpen={i === 0} />)}
      </div>
    </section>
  );
}

// ── Final CTA ────────────────────────────────────────────────────────────────
function FinalCta({ lang }) {
  const T = IT(lang).cta;
  return (
    <section className="section section-inverted" id="cta">
      <Reveal><div className="section-eyebrow">{T.eyebrow}</div></Reveal>
      <Reveal delay="1"><h2 className="section-title">{T.title}</h2></Reveal>
      <Reveal delay="2"><p className="section-lede" style={{ maxWidth: "60ch" }}>{T.body}</p></Reveal>
      <Reveal delay="3">
        <div className="invest-cta" style={{ flexWrap: "wrap" }}>
          <a href="/uploads/leos-lakeside-term-sheet-local.pdf" className="btn primary" download>{T.downloadLocal}</a>
          <a href="/uploads/leos-lakeside-term-sheet-foreign.pdf" className="btn ghost" download>{T.downloadForeign}</a>
          <span className="pending-chip">{T.contactPending}</span>
        </div>
      </Reveal>
    </section>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
function InvestorApp() {
  const [lang, setLang] = useState("en");
  return (
    <React.Fragment>
      <ScrollProgress />
      <InvestorNav lang={lang} setLang={setLang} />
      <InvestorHero lang={lang} />
      <ProjectSection lang={lang} />
      <TrackRecordSection lang={lang} />
      <NumbersSection lang={lang} />
      <OfferSection lang={lang} />
      <CurrencySection lang={lang} />
      <ProtectionsSection lang={lang} />
      <ComparisonSection lang={lang} />
      <InvestorTeam lang={lang} />
      <FaqSection lang={lang} />
      <FinalCta lang={lang} />
      <Footer lang={lang} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<InvestorApp />);
