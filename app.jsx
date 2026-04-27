// HCS — App entry
const { useState, useEffect } = React;

function App() {
  const [lang, setLang] = useState("en");
  const [activeSection, setActiveSection] = useState("home");
  const t = window.HCS_I18N[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Highlight nav based on scroll
  useEffect(() => {
    const ids = ["home", "about", "conference", "sponsors", "association", "resources"];
    const onScroll = () => {
      const y = window.scrollY + 120;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= y) { setActiveSection(ids[i]); return; }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const {
    HCSNav, HCSHero, HCSStrip, HCSAbout, HCSConference,
    HCSSpeakers, HCSVenue, HCSSponsors, HCSAssociation,
    HCSResources, HCSRegister, HCSFooter
  } = window;

  return (
    <>
      <HCSNav t={t} lang={lang} setLang={setLang} activeSection={activeSection}/>
      <HCSHero t={t}/>
      <HCSStrip items={t.strip}/>
      <HCSAbout t={t}/>
      <HCSConference t={t}/>
      <HCSSpeakers t={t}/>
      <HCSVenue t={t}/>
      <HCSSponsors t={t}/>
      <HCSAssociation t={t}/>
      <HCSResources t={t}/>
      <HCSRegister t={t}/>
      <HCSFooter t={t}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
