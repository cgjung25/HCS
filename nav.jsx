// HCS — Navigation bar
const { useState } = React;

function Nav({ t, lang, setLang, activeSection }) {
  const langs = ["en", "de", "fr", "it"];
  const Icon = window.HCSIcon;
  const links = [
    { key: "home", id: "home" },
    { key: "about", id: "about" },
    { key: "conference", id: "conference" },
    { key: "sponsors", id: "sponsors" },
    { key: "association", id: "association" },
    { key: "resources", id: "resources" }
  ];
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="brand" aria-label="HCS — Health Coaching Switzerland">
          <span className="brand-mark" aria-hidden="true" style={{ color: "var(--accent)" }}>
            <Icon.Logo size={34} />
          </span>
          <span className="brand-word">HCS<span className="sm">/CH</span></span>
        </a>

        <div className="nav-links" role="navigation">
          {links.map(l => (
            <a key={l.key}
               href={`#${l.id}`}
               className={activeSection === l.id ? "active" : ""}>
              {t.nav[l.key]}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            {langs.map(l => (
              <button key={l}
                      aria-pressed={lang === l}
                      onClick={() => setLang(l)}>
                {l}
              </button>
            ))}
          </div>
          <button className="icon-btn" aria-label="Theme">
            <Icon.Sun size={15}/>
          </button>
          <a href="#register" className="btn btn-primary btn-sm">{t.nav.register}</a>
        </div>
      </div>
    </nav>
  );
}

window.HCSNav = Nav;
