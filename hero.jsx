// HCS — Hero section
function Hero({ t }) {
  const Icon = window.HCSIcon;
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow-row">
              <span className="hero-pill">
                <span className="sym">+</span>
                {t.hero.pill}
              </span>
              <span className="eyebrow"><span className="dot"></span>Registrations open</span>
            </div>

            <h1>
              <span>{t.hero.title1}</span>
              <span className="line2 serif-italic" style={{fontStyle:'normal'}}>{t.hero.title2}</span>
            </h1>

            <p className="lede">{t.hero.lede}</p>

            <div className="hero-cta">
              <a href="#register" className="btn btn-primary btn-lg">
                {t.hero.cta1} <Icon.Arrow size={15}/>
              </a>
              <a href="#conference" className="btn btn-ghost btn-lg">{t.hero.cta2}</a>
            </div>

            <div className="hero-meta">
              <div className="item">
                <Icon.Calendar size={18}/>
                <div>
                  <span className="lab">{t.hero.dateLabel}</span>
                  <span className="val">{t.hero.date}</span>
                </div>
              </div>
              <div className="item">
                <Icon.Pin size={18}/>
                <div>
                  <span className="lab">{t.hero.cityLabel}</span>
                  <span className="val">{t.hero.city}</span>
                </div>
              </div>
              <div className="item">
                <Icon.Globe size={18}/>
                <div>
                  <span className="lab">{t.hero.langLabel}</span>
                  <span className="val">{t.hero.lang}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side card — schedule snapshot */}
          <aside className="hero-card" aria-label="Conference summary">
            <div className="row">
              <span className="key">Edition</span>
              <span className="val">04 / 2026</span>
              <span className="tag">Annual</span>
            </div>
            <div className="row">
              <span className="key">Format</span>
              <span className="val">In-person · single day</span>
              <span className="tag">CME</span>
            </div>
            <div className="row">
              <span className="key">Capacity</span>
              <span className="val">320 seats</span>
              <span className="tag" style={{color:'var(--fg-2)', borderColor:'var(--rule)'}}>72% filled</span>
            </div>
            <div className="row">
              <span className="key">Streams</span>
              <span className="val">Research · Clinical · Policy</span>
              <span className="tag">3</span>
            </div>
            <div className="row">
              <span className="key">CME credits</span>
              <span className="val">7 SSMIG credits</span>
              <span className="tag">FMH</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

window.HCSHero = Hero;
