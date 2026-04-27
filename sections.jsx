// HCS — About + Conference + Speakers + Venue + Sponsors + Association + Resources + Registration + Footer
const { useState: useStateSec } = React;

function Strip({ items }) {
  // doubled for visual density, single-line, no animation (clinical feel)
  return (
    <div className="wrap" aria-hidden="true">
      <div className="strip" style={{justifyContent:'space-between', flexWrap:'wrap'}}>
        {items.map((s,i) => (
          <span key={i}><span className="sep">+</span> {s}</span>
        ))}
      </div>
    </div>
  );
}

function About({ t }) {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="two-col">
          <div className="section-head">
            <span className="eyebrow"><span className="dot"></span>{t.about.eyebrow}</span>
            <h2 className="h2">{t.about.title}</h2>
          </div>
          <p className="lede" style={{maxWidth:'52ch'}}>{t.about.body}</p>
        </div>
        <div className="pillars">
          {t.about.pillars.map((p,i) => (
            <div key={i} className="pillar">
              <span className="num">{p.num}</span>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Conference({ t }) {
  return (
    <section className="section" id="conference" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="two-col" style={{marginBottom:'2.5rem'}}>
          <div className="section-head">
            <span className="eyebrow"><span className="dot"></span>{t.conf.eyebrow}</span>
            <h2 className="h2">{t.conf.title}</h2>
          </div>
          <p className="lede" style={{maxWidth:'52ch'}}>{t.conf.lede}</p>
        </div>

        <div className="day-tabs">
          <button className="day-tab" aria-current="true">
            <span className="day-num">{t.conf.day}</span>
            {t.conf.dayLabel}
          </button>
        </div>

        <div className="conf-frame">
          {t.conf.program.map((row,i) => (
            <div key={i} className="program-row">
              <div className="time">{row.time}</div>
              <div>
                <div className="title">{row.title}</div>
                <div className="speaker">
                  {row.speaker}
                  {row.role && <span className="role">— {row.role}</span>}
                </div>
              </div>
              <div className={`kind ${row.kind.toLowerCase().match(/keyn|plen/) ? 'keynote' : ''} ${row.kind.toLowerCase().match(/break|pause/) ? 'break' : ''}`}>{row.kind}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speakers({ t }) {
  return (
    <section className="section" id="speakers" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="two-col" style={{marginBottom:'2.5rem'}}>
          <div className="section-head">
            <span className="eyebrow"><span className="dot"></span>{t.speakers.eyebrow}</span>
            <h2 className="h2">{t.speakers.title}</h2>
          </div>
          <div></div>
        </div>
        <div className="speaker-grid">
          {t.speakers.list.map((s,i) => (
            <div key={i} className="speaker-card">
              <div className="portrait" aria-hidden="true">
                <span className="ph-label">portrait</span>
              </div>
              <div>
                <div className="name">{s.name}</div>
                <div className="role">{s.role}</div>
              </div>
              <div className="affil">{s.affil}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Venue({ t }) {
  return (
    <section className="section" id="venue" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="section-head" style={{marginBottom:'1rem'}}>
          <span className="eyebrow"><span className="dot"></span>{t.venue.eyebrow}</span>
        </div>
        <div className="venue">
          <div className="venue-img" aria-hidden="true">
            <span className="ph-label">venue photograph · aula exterior</span>
          </div>
          <div className="venue-body">
            <h3 className="h3">{t.venue.title}</h3>
            <p className="lede" style={{fontSize:'1rem', lineHeight:1.6}}>{t.venue.body}</p>
            <div className="venue-meta">
              <div>
                <div className="lab">{t.venue.addrLabel}</div>
                <div className="val">{t.venue.addr}</div>
              </div>
              <div>
                <div className="lab">{t.venue.transitLabel}</div>
                <div className="val">{t.venue.transit}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sponsors({ t }) {
  return (
    <section className="section" id="sponsors" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="two-col" style={{marginBottom:'2rem'}}>
          <div className="section-head">
            <span className="eyebrow"><span className="dot"></span>{t.sponsors.eyebrow}</span>
            <h2 className="h2">{t.sponsors.title}</h2>
          </div>
          <div></div>
        </div>
        <div className="sponsor-tier">
          {t.sponsors.tiers.map((tier, ti) => (
            <div key={ti}>
              <div className="tier-label">{tier.label}</div>
              <div className={`sponsor-row ${tier.height === 'lg' ? 'platinum' : ''}`}>
                {Array.from({length: tier.count}).map((_,i) => (
                  <div key={i} className="sponsor-cell">
                    <span className="ph">logo · {String(i+1).padStart(2,'0')}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Association({ t }) {
  return (
    <section className="section" id="association" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="two-col">
          <div className="section-head">
            <span className="eyebrow"><span className="dot"></span>{t.assoc.eyebrow}</span>
            <h2 className="h2">{t.assoc.title}</h2>
          </div>
          <p className="lede" style={{maxWidth:'52ch'}}>{t.assoc.body}</p>
        </div>
        <div className="stat-grid">
          {t.assoc.stats.map((s,i) => (
            <div key={i} className="stat">
              <span className="v">{s.v}</span>
              <span className="l">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources({ t }) {
  const Icon = window.HCSIcon;
  return (
    <section className="section" id="resources" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="two-col" style={{marginBottom:'2rem'}}>
          <div className="section-head">
            <span className="eyebrow"><span className="dot"></span>{t.resources.eyebrow}</span>
            <h2 className="h2">{t.resources.title}</h2>
          </div>
          <div></div>
        </div>
        <div className="resource-list">
          {t.resources.list.map((r,i) => (
            <a key={i} href="#" className="resource-item">
              <div className="id">{r.id}</div>
              <div>
                <div className="title">{r.title}</div>
                <div className="desc">{r.desc}</div>
              </div>
              <div className="meta">{r.meta}</div>
              <div className="arrow"><Icon.Arrow size={18}/></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Register({ t }) {
  const Icon = window.HCSIcon;
  return (
    <section className="section" id="register" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="reg">
          <div>
            <span className="eyebrow"><span className="dot"></span>{t.reg.eyebrow}</span>
            <h3 className="h3" style={{marginTop:'0.6rem', marginBottom:'0.8rem'}}>{t.reg.title}</h3>
            <p className="lede" style={{fontSize:'1rem', lineHeight:1.6, maxWidth:'48ch'}}>{t.reg.body}</p>
            <a href="#" className="btn btn-primary btn-lg" style={{marginTop:'1.5rem'}}>
              {t.reg.cta} <Icon.Arrow size={15}/>
            </a>
          </div>
          <div className="price-card">
            <div className="price-meta">{t.reg.tier}</div>
            <div className="price">
              <span className="num">{t.reg.price}</span>
              <span className="cur">{t.reg.currency}</span>
            </div>
            <div className="muted" style={{fontSize:'0.82rem'}}>{t.reg.pricePer}</div>
            <div className="price-list">
              {t.reg.lines.map((ln,i) => (
                <div key={i} className="ln"><span>{ln[0]}</span><span className="v">{ln[1]}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  const Icon = window.HCSIcon;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{marginBottom:'1rem'}}>
              <span className="brand-mark" aria-hidden="true" style={{ color: "var(--accent)" }}>
                <Icon.Logo size={30} />
              </span>
              <span className="brand-word">HCS<span className="sm">/CH</span></span>
            </div>
            <p className="muted" style={{fontSize:'0.88rem', maxWidth:'34ch', lineHeight:1.55, margin:0}}>{t.footer.tagline}</p>
          </div>
          <div>
            <h5>{t.footer.contact}</h5>
            <ul>{t.footer.contactList.map((l,i)=>(<li key={i}><a href="#">{l}</a></li>))}</ul>
          </div>
          <div>
            <h5>{t.footer.explore}</h5>
            <ul>{t.footer.exploreList.map((l,i)=>(<li key={i}><a href="#">{l}</a></li>))}</ul>
          </div>
          <div>
            <h5>{t.footer.legal}</h5>
            <ul>{t.footer.legalList.map((l,i)=>(<li key={i}><a href="#">{l}</a></li>))}</ul>
          </div>
        </div>
        <div className="footer-base">
          <span>{t.footer.base}</span>
          <span>HCS · v2026.1</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  HCSStrip: Strip,
  HCSAbout: About,
  HCSConference: Conference,
  HCSSpeakers: Speakers,
  HCSVenue: Venue,
  HCSSponsors: Sponsors,
  HCSAssociation: Association,
  HCSResources: Resources,
  HCSRegister: Register,
  HCSFooter: Footer
});
