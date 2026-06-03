// app.jsx — IDEAL RECRUIT main App

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  return (
    <>
      <ResponsiveStyle />
      <Hero tweaks={t} />
      <LogicSection />
      <Comparison />
      {t.showResults && <Results />}
      <InitialMonthPlan />
      <Sharing />
      {t.showPricing && <Pricing />}
      <Philosophy />
      <Contact />

      <TweaksPanel>
        <TweakSection label="ヒーローのコピー" />
        <TweakText label="H1見出し" value={t.h1}
          onChange={(v) => setTweak("h1", v)} />
        <TweakText label="サブコピー" value={t.sub}
          onChange={(v) => setTweak("sub", v)} />
        <TweakText label="主要CTA" value={t.ctaPrimary}
          onChange={(v) => setTweak("ctaPrimary", v)} />

        <TweakSection label="セクション表示" />
        <TweakToggle label="実績データ" value={t.showResults}
          onChange={(v) => setTweak("showResults", v)} />
        <TweakToggle label="料金プラン" value={t.showPricing}
          onChange={(v) => setTweak("showPricing", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
