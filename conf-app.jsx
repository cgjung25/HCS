// HCS Conference Landing — App
const { useState, useEffect } = React;

const WEEZEVENT_URL = "https://my.weezevent.com/conference-coaching-de-sante";

const LogoMark = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect x="6" y="6" width="28" height="28" rx="6" transform="rotate(45 20 20)" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M20 13v14M13 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const ArrowR = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);
const CalIco = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/></svg>);
const PinIco = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>);
const GlobeIco = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>);

const audIcons = [
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4"/><rect x="3.5" y="6" width="17" height="15" rx="3"/><path d="M9 13h6M12 10v6"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6" r="3"/><path d="M5 21c0-4 3-7 7-7s7 3 7 7"/></svg>
];

function ConfApp() {
  const [lang, setLang] = useState("en");
  const t = window.HCS_CONF_I18N[lang];
  const langs = ["en", "de", "fr", "it"];

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const RegBtn = ({ children, size = "lg" }) => (
    <a href={WEEZEVENT_URL} target="_blank" rel="noopener" className={`btn btn-primary btn-${size}`}>
      {children} <ArrowR/>
    </a>
  );

  return (
    <>
      {/* Top banner */}
      <div className="banner">
        {t.banner.lead}
        <a href={WEEZEVENT_URL} target="_blank" rel="noopener">{t.banner.cta}</a>
      </div>

      {/* Sticky nav */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label="HCS">
            <span className="brand-mark" style={{ color: "var(--accent)" }} aria-hidden="true">
              <LogoMark/>
            </span>
            <span className="brand-word">HCS<span className="sm">/CH</span></span>
          </a>
          <div className="nav-links">
            <a href="#audience">{t.nav.audience}</a>
            <a href="#program">{t.nav.program}</a>
            <a href="#speakers">{t.nav.speakers}</a>
            <a href="#venue">{t.nav.venue}</a>
            <a href="#pricing">{t.nav.pricing}</a>
          </div>
          <div className="nav-right">
            <div className="lang" role="group" aria-label="Language">
              {langs.map(l => (
                <button key={l} aria-pressed={lang === l} onClick={() => setLang(l)}>{l}</button>
              ))}
            </div>
            <a href={WEEZEVENT_URL} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
              {t.nav.register} <ArrowR size={14}/>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="cf-hero" id="top">
        <div className="wrap">
          <div className="cf-hero-inner">
            <span className="hero-pill"><span className="sym">+</span>{t.hero.pill}</span>
            <h1>{t.hero.title1}<br/><span className="accent">{t.hero.title2}</span></h1>
            <p className="lede">{t.hero.lede}</p>
            <div className="cf-meta">
              <div className="item"><CalIco/><div><span className="lab">{t.hero.dateLab}</span><span className="val">{t.hero.date}</span></div></div>
              <div className="item"><PinIco/><div><span className="lab">{t.hero.venueLab}</span><span className="val">{t.hero.venue}</span></div></div>
              <div className="item"><GlobeIco/><div><span className="lab">{t.hero.langLab}</span><span className="val">{t.hero.lang}</span></div></div>
            </div>
            <div className="cf-cta-row">
              <RegBtn>{t.hero.cta1}</RegBtn>
              <a href="#program" className="btn btn-ghost btn-lg">{t.hero.cta2}</a>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="cf-sec center" id="audience">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span>{t.aud.eyebrow}</span>
          <h2>{t.aud.title}</h2>
          <p className="sec-lede">{t.aud.lede}</p>
          <div className="audience-grid">
            {t.aud.items.map((it, i) => (
              <div className="audience" key={i}>
                <div className="ico">{audIcons[i]}</div>
                <h4>{it.t}</h4>
                <p>{it.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="cf-sec center" id="program">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span>{t.prog.eyebrow}</span>
          <h2>{t.prog.title}</h2>
          <p className="sec-lede">{t.prog.lede}</p>
          <div className="prog-frame">
            {t.prog.rows.map((r, i) => (
              <div className="prog-row" key={i}>
                <div className="time">{r[0]}</div>
                <div>
                  <div className="ttl">{r[1]}</div>
                  <div className="who">{r[2]}</div>
                </div>
                <div className={`kind ${r[4]}`}>{r[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="cf-sec center" id="speakers" style={{paddingTop:0}}>
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span>{t.spk.eyebrow}</span>
          <h2>{t.spk.title}</h2>
          <div className="spk-grid">
            {t.spk.list.map((s, i) => (
              <div className="spk" key={i}>
                <div className="pt" aria-hidden="true"></div>
                <div>
                  <div className="nm">{s[0]}</div>
                  <div className="rl">{s[1]}</div>
                </div>
                <div className="af">{s[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section className="cf-sec center" id="venue" style={{paddingTop:0}}>
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span>{t.venue.eyebrow}</span>
          <h2>{t.venue.title}</h2>
          <div className="venue-card venue-card--noimg">
            <div className="body">
              <h3>{t.venue.h}</h3>
              <p>{t.venue.p}</p>
              <div className="meta">
                <div>
                  <div className="lab">{t.venue.addrLab}</div>
                  <div className="val">{t.venue.addr}</div>
                </div>
                <div>
                  <div className="lab">{t.venue.transitLab}</div>
                  <div className="val">{t.venue.transit}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="cf-sec center" id="pricing" style={{paddingTop:0}}>
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span>{t.price.eyebrow}</span>
          <h2>{t.price.title}</h2>
          <p className="sec-lede">{t.price.lede}</p>
          <div className="price-grid">
            {t.price.tiers.map((p, i) => (
              <div className={`price-card ${p.featured ? "featured" : ""}`} key={i}>
                <div className="label">{p.label}</div>
                <div className="amt">
                  <span className="num">{p.num}</span>
                  <span className="cur">{p.cur}</span>
                </div>
                <div className="desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cf-sec center" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="final-cta">
            <span className="eyebrow"><span className="dot"></span>{t.final.eyebrow}</span>
            <h3>{t.final.title}</h3>
            <p>{t.final.body}</p>
            <RegBtn>{t.final.cta}</RegBtn>
            <span className="small">{t.final.small}</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="brand" style={{marginBottom:"1rem"}}>
                <span className="brand-mark" style={{color:"var(--accent)"}} aria-hidden="true"><LogoMark size={30}/></span>
                <span className="brand-word">HCS<span className="sm">/CH</span></span>
              </div>
              <p className="muted" style={{fontSize:"0.88rem", maxWidth:"34ch", lineHeight:1.55, margin:0}}>{t.footer.tagline}</p>
            </div>
            <div>
              <h5>{t.footer.contact}</h5>
              <ul>{t.footer.contactList.map((l,i)=>(<li key={i}><a href="#">{l}</a></li>))}</ul>
            </div>
            <div>
              <h5>{t.footer.conference}</h5>
              <ul>
                <li><a href="#program">{t.footer.conferenceList[0]}</a></li>
                <li><a href="#speakers">{t.footer.conferenceList[1]}</a></li>
                <li><a href="#venue">{t.footer.conferenceList[2]}</a></li>
                <li><a href={WEEZEVENT_URL} target="_blank" rel="noopener">{t.footer.conferenceList[3]}</a></li>
              </ul>
            </div>
            <div>
              <h5>{t.footer.legal}</h5>
              <ul>{t.footer.legalList.map((l,i)=>(<li key={i}><a href="#">{l}</a></li>))}</ul>
            </div>
          </div>
          <div className="footer-base">
            <span>{t.footer.base}</span>
            <span>SHCC · v2026.1</span>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ConfApp/>);
