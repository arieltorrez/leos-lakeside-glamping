/* eslint-disable */
// App shell + Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "fontPair": "cormorant-dmsans",
  "progressBar": true,
  "accent": "#6b7a4a"
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  "cormorant-dmsans": {
    display: '"Cormorant Garamond", Georgia, serif',
    body: '"DM Sans", system-ui, sans-serif',
  },
  "playfair-manrope": {
    display: '"Playfair Display", Georgia, serif',
    body: '"Manrope", system-ui, sans-serif',
  },
  "italiana-sora": {
    display: '"Italiana", "Cormorant Garamond", Georgia, serif',
    body: '"Sora", system-ui, sans-serif',
  },
};

function applyFontPair(key) {
  const pair = FONT_PAIRS[key] || FONT_PAIRS["cormorant-dmsans"];
  const root = document.documentElement;
  root.style.setProperty("--font-display", pair.display);
  root.style.setProperty("--font-body", pair.body);
}

function App() {
  const { useTweaks } = window;
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-palette", t.palette);
  }, [t.palette]);

  React.useEffect(() => {
    applyFontPair(t.fontPair);
  }, [t.fontPair]);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    // Re-derive accent-ink contrast (light text on dark accents, dark on light)
    const c = t.accent.replace("#", "");
    if (c.length === 6) {
      const r = parseInt(c.slice(0, 2), 16);
      const g = parseInt(c.slice(2, 4), 16);
      const b = parseInt(c.slice(4, 6), 16);
      const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      document.documentElement.style.setProperty(
        "--accent-ink",
        lum > 0.6 ? "#1a1f1c" : "#fdfbf6"
      );
    }
  }, [t.accent]);

  const { TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakColor } = window;

  return (
    <React.Fragment>
      {t.progressBar && <ScrollProgress />}
      <Nav />
      <Hero />
      <Vision />
      <Metrics />
      <VideoSection />
      <Timeline />
      <Gallery />
      <Location />
      <Investment />
      <Team />
      <Contact />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakRadio
            label="Mood"
            value={t.palette}
            onChange={(v) => setT("palette", v)}
            options={[
              { value: "cream", label: "Cream" },
              { value: "sand", label: "Sand" },
              { value: "midnight", label: "Midnight" },
            ]}
          />
          <TweakColor
            label="Accent"
            value={t.accent}
            onChange={(v) => setT("accent", v)}
            options={["#6b7a4a", "#b56a3d", "#c8a064", "#3f5b6b"]}
          />
        </TweakSection>

        <TweakSection label="Type">
          <TweakRadio
            label="Pairing"
            value={t.fontPair}
            onChange={(v) => setT("fontPair", v)}
            options={[
              { value: "cormorant-dmsans", label: "Cormorant" },
              { value: "playfair-manrope", label: "Playfair" },
              { value: "italiana-sora", label: "Italiana" },
            ]}
          />
        </TweakSection>

        <TweakSection label="Chrome">
          <TweakToggle
            label="Scroll progress bar"
            value={t.progressBar}
            onChange={(v) => setT("progressBar", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
