// Fiche evenement — presentation simple
// Exports: EventPage

const EVENT = {
  day: '03', month: 'MAI', year: '2026', hour: '18h30 – 21h',
  title: 'Dedicace · Tatsuki Fujimoto',
  tag:   'Rencontre',
  kanji: '会',
  ono:   'KON-KON !',
  desc:  "Le mangaka de Chainsaw Man et Fire Punch passe chez Tsundoku. 2h de dedicaces, discussion libre avec l'equipe et un apercu de son prochain projet — en exclu francaise.",
  price: 'Gratuit · entree libre',
};

function EventPage({ shop = 'toulon', theme = 'dark', onBack, onShopSwitch, onToggleTheme, onConnect, connected, onNav }) {
  const S    = TSUNDOKU[shop];
  const dark = theme === 'dark';
  const bg   = dark ? '#0a0a12' : '#f7f5ef';
  const ink  = dark ? '#fff'    : '#111';
  const muted = dark ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.55)';
  const border = dark ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)';
  const bp   = useBreakpoint();

  return (
    <div style={{ width: '100%', background: bg, color: ink, fontFamily: FONTS.body, minHeight: 800 }}>
      <Navbar
        shop={shop} theme={theme} connected={connected}
        onConnect={onConnect} onBack={onBack}
        onToggleTheme={onToggleTheme} onShopSwitch={onShopSwitch} onNav={onNav}
      />

      {/* ── POSTER ── */}
      <div style={{
        position: 'relative',
        padding: bp.isMobile ? '50px 20px 60px' : bp.isTablet ? '60px 40px 70px' : '80px 60px 90px',
        overflow: 'hidden', background: S.bg, color: '#fff', borderBottom: `4px solid ${S.accent}`,
      }}>
        <div style={{ position: 'absolute', inset: 0, color: S.accent, opacity: .15, ...HALFTONE_MED }} />
        <div style={{
          position: 'absolute', inset: 0, color: S.accent, opacity: dark ? .05 : .1,
          ...SPEED_LINES('currentColor'),
          maskImage: 'radial-gradient(circle at 80% 30%, transparent 20%, black 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 80% 30%, transparent 20%, black 60%)',
        }} />
        {!bp.isMobile && (
          <div style={{
            position: 'absolute', right: -30, top: -40,
            fontFamily: FONTS.jpDisplay, fontWeight: 900,
            fontSize: bp.isTablet ? 280 : 520,
            color: S.accent, opacity: .2, lineHeight: .82, letterSpacing: -20,
          }}>{EVENT.kanji}</div>
        )}
        {/* 2 cols desktop → 1 col mobile */}
        <div style={{
          maxWidth: 1400, margin: '0 auto', position: 'relative',
          display: 'grid',
          gridTemplateColumns: bp.isDesktop ? '1fr 1fr' : '1fr',
          gap: bp.isMobile ? 32 : 60, alignItems: 'center',
        }}>
          {/* Colonne gauche : texte */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: 4, color: S.accent, fontWeight: 700, marginBottom: 14 }}>
              {EVENT.tag} · イベント
            </div>
            <h1 style={{
              fontFamily: FONTS.display,
              fontSize: bp.isMobile ? 48 : bp.isTablet ? 68 : 88,
              lineHeight: .9, margin: 0, letterSpacing: -3, textShadow: `3px 3px 0 ${S.bgDeep}`,
            }}>
              {EVENT.title}
            </h1>
            <div style={{ marginTop: 22, fontSize: 17, lineHeight: 1.65, opacity: .85, maxWidth: 520 }}>
              {EVENT.desc}
            </div>

            {/* Meta-infos : date, heure, lieu, tarif */}
            <div style={{ marginTop: 34, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[
                ['Quand',   `${EVENT.day} ${EVENT.month} ${EVENT.year}`],
                ['Horaire', EVENT.hour],
                ['Ou',      `Tsundoku · ${S.name}`],
                ['Tarif',   EVENT.price],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{
                    fontSize: 10, letterSpacing: 2, color: S.accent,
                    fontWeight: 700, marginBottom: 4, textTransform: 'uppercase',
                  }}>{k}</div>
                  <div style={{ fontFamily: FONTS.display, fontSize: 18, lineHeight: 1.1, letterSpacing: -.3 }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite : cartouche date style BD */}
          <div style={{ position: 'relative', justifySelf: 'center' }}>
            <div style={{
              width: 360, height: 440,
              border: '4px solid #fff', background: S.bgDeep,
              position: 'relative', overflow: 'hidden',
              transform: 'rotate(-2deg)',
              boxShadow: `10px 10px 0 ${S.accent}`,
            }}>
              <div style={{ position: 'absolute', inset: 0, color: S.accent, opacity: .12, ...HALFTONE_MED }} />
              <div style={{ padding: '24px 28px', borderBottom: `2px solid ${S.accent}` }}>
                <div style={{ fontSize: 10, letterSpacing: 4, color: S.accent, fontWeight: 700 }}>
                  SAVE THE DATE · 日付
                </div>
              </div>
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '30px 20px 20px',
              }}>
                <div style={{
                  fontFamily: FONTS.display, fontSize: 200, color: S.accent,
                  lineHeight: .85, letterSpacing: -8,
                  textShadow: `4px 4px 0 #fff`,
                }}>{EVENT.day}</div>
                <div style={{
                  fontFamily: FONTS.display, fontSize: 48, color: '#fff',
                  letterSpacing: -1, marginTop: 6,
                }}>{EVENT.month} {EVENT.year}</div>
              </div>
              <div style={{
                padding: '16px 28px', borderTop: `2px solid ${S.accent}`,
                position: 'absolute', bottom: 0, left: 0, right: 0,
              }}>
                <div style={{
                  fontFamily: FONTS.hand, fontSize: 32, color: S.accent,
                  transform: 'rotate(-3deg)', textAlign: 'center',
                }}>« ne rate pas ca »</div>
              </div>
            </div>
            {/* Onomatopee */}
            <div style={{
              position: 'absolute', top: -30, right: -30,
              fontFamily: FONTS.display, color: '#fff', fontSize: 44, letterSpacing: -2,
              transform: 'rotate(10deg)', textShadow: `3px 3px 0 ${S.accent}`,
            }}>{EVENT.ono}</div>
          </div>
        </div>
      </div>

      {/* ── PROCHAINS EVENEMENTS ── */}
      <div style={{ padding: bp.isMobile ? '50px 20px' : '70px 60px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          fontSize: 11, letterSpacing: 4, color: S.accent, fontWeight: 700,
          marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 24, height: 1, background: S.accent }} />
          Agenda · イベント
        </div>
        <h2 style={{ fontFamily: FONTS.display, fontSize: bp.isMobile ? 36 : 48, margin: '0 0 28px', letterSpacing: -1.5 }}>
          Prochains evenements.
        </h2>

        {/* Message "a suivre" */}
        <div style={{
          textAlign: 'center',
          padding: bp.isMobile ? '48px 20px' : '64px 40px',
          background: dark ? '#14141c' : '#fff',
          border: `1px solid ${border}`,
          borderRadius: 8, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, color: S.accent, opacity: .05,
            ...HALFTONE_MED, pointerEvents: 'none',
          }} />
          <div style={{
            fontFamily: FONTS.jpDisplay, fontWeight: 900,
            fontSize: bp.isMobile ? 56 : 80,
            color: S.accent, opacity: .35, marginBottom: 16, position: 'relative',
          }}>続</div>
          <div style={{
            fontFamily: FONTS.display,
            fontSize: bp.isMobile ? 24 : 36,
            color: ink, letterSpacing: -1, position: 'relative',
          }}>A suivre...</div>
          <div style={{
            fontSize: 14, color: muted, marginTop: 12, position: 'relative', lineHeight: 1.6,
          }}>
            Les prochains evenements seront annonces sur nos reseaux sociaux.
          </div>
        </div>
      </div>

      <Footer shop={shop} theme={theme} />
    </div>
  );
}

Object.assign(window, { EventPage });
