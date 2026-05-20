// Page A propos — histoire, espaces, equipe
// Exports: AboutPage

const TEAM = [
  { name: 'Armony',  role: 'Libraire · Toulon',    kanji: '花', accent: '#ff7db8', bio: 'Toujours un manga a recommander et un avis tranche sur les derniers chapitres.' },
  { name: 'Damien',  role: 'Libraire · Toulon',    kanji: '力', accent: '#f4c83d', bio: 'Specialiste shonen, il peut debattre pendant des heures de quel arc de One Piece est le meilleur.' },
  { name: 'Fred',    role: 'Libraire · Marseille',  kanji: '海', accent: '#e8b648', bio: 'Fan de seinen et de recits sombres. Si vous cherchez du Berserk ou du Vagabond, c\'est lui qu\'il faut voir.' },
  { name: 'Fanny',   role: 'Libraire · Marseille',  kanji: '星', accent: '#8cd3a0', bio: 'Elle gere les evenements et connait chaque client par son prenom. Ambiance garantie.' },
];

const ESPACES = [
  {
    num: '01',
    title: 'La Librairie',
    kanji: '本',
    desc: 'Plus de 15 000 references : manga en francais et en japonais, artbooks, franco-belge, comics. Tous les genres, des grands classiques aux pepites meconnues. L\'equipe se fera un plaisir de vous conseiller.',
  },
  {
    num: '02',
    title: 'Le Lounge',
    kanji: '道',
    desc: 'Cachee au fond de la librairie, une ruelle tokyoite regorgeant de details. Enseignes lumineuses d\'izakaya, panneaux de quartier — l\'immersion est totale. Il reste encore beaucoup de secrets a percer.',
  },
  {
    num: '03',
    title: 'Le Temple',
    kanji: '寺',
    desc: 'Quelques metres en contrebas, un temple urbain construit aux dimensions traditionnelles. Tatamis, papiers de riz — on remonte quelques siecles en arriere.',
  },
  {
    num: '04',
    title: 'Figurines & Goodies',
    kanji: '物',
    desc: 'Une selection drastique de produits officiels de qualite. Figurines, accessoires, objets de collection — de quoi completer l\'experience manga.',
  },
];

function AboutPage({ shop = 'toulon', theme = 'dark', onBack, onShopSwitch, onToggleTheme, onConnect, connected, onNav }) {
  const S      = TSUNDOKU[shop];
  const dark   = theme === 'dark';
  const bg     = dark ? '#0a0a12' : '#f7f5ef';
  const ink    = dark ? '#fff'    : '#111';
  const muted  = dark ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.55)';
  const cardBg = dark ? '#14141c' : '#fff';
  const border = dark ? 'rgba(255,255,255,.1)'  : 'rgba(0,0,0,.1)';
  const bp     = useBreakpoint();

  return (
    <div style={{ width: '100%', background: bg, color: ink, fontFamily: FONTS.body, minHeight: 800 }}>
      <Navbar
        shop={shop} theme={theme} connected={connected}
        active="A propos"
        onConnect={onConnect} onBack={onBack}
        onToggleTheme={onToggleTheme} onShopSwitch={onShopSwitch} onNav={onNav}
      />

      {/* ── EN-TETE ── */}
      <div style={{
        position: 'relative',
        padding: bp.isMobile ? '50px 20px 60px' : bp.isTablet ? '60px 40px 70px' : '80px 60px 90px',
        overflow: 'hidden', background: S.bg, color: '#fff', borderBottom: `4px solid ${S.accent}`,
      }}>
        <div style={{ position: 'absolute', inset: 0, color: S.accent, opacity: .15, ...HALFTONE_MED }} />
        <div style={{
          position: 'absolute', inset: 0, color: S.accent, opacity: .06,
          ...SPEED_LINES('currentColor'),
          maskImage: 'radial-gradient(circle at 75% 40%, transparent 20%, black 65%)',
          WebkitMaskImage: 'radial-gradient(circle at 75% 40%, transparent 20%, black 65%)',
        }} />
        {!bp.isMobile && (
          <div style={{
            position: 'absolute', right: -40, top: -80,
            fontFamily: FONTS.jpDisplay, fontWeight: 900,
            fontSize: bp.isTablet ? 300 : 560,
            color: S.accent, opacity: .15, lineHeight: .82, letterSpacing: -20,
          }}>積</div>
        )}
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          <div style={{
            fontSize: 11, letterSpacing: 4, color: S.accent, fontWeight: 700,
            marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 24, height: 1, background: S.accent }} />
            A propos · 私たちについて
          </div>
          <h1 style={{
            fontFamily: FONTS.display,
            fontSize: bp.isMobile ? 48 : bp.isTablet ? 72 : 100,
            lineHeight: .88, margin: 0, letterSpacing: -4, textShadow: `5px 5px 0 ${S.bgDeep}`,
          }}>
            Le paradis<br />
            <span style={{ color: S.accent }}>des passionnes.</span>
          </h1>
          {!bp.isMobile && (
            <div style={{ marginTop: 22, maxWidth: 580, fontSize: 17, lineHeight: 1.6, opacity: .88 }}>
              Nee de l'esprit de trois passionnes de manga et de culture japonaise,
              Tsundoku a pour ambition d'offrir une experience chaleureuse,
              conviviale et un peu folle.
            </div>
          )}
        </div>
      </div>

      {/* ── DEFINITION + INTRO ── */}
      <div style={{
        padding: bp.isMobile ? '50px 20px' : bp.isTablet ? '60px 40px' : '90px 60px',
        maxWidth: 1400, margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: bp.isDesktop ? '1fr 1fr' : '1fr',
          gap: bp.isMobile ? 40 : 80, alignItems: 'flex-start',
        }}>
          {/* Definition */}
          <div>
            <div style={{
              fontSize: 11, letterSpacing: 4, color: S.accent, fontWeight: 700,
              marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 24, height: 1, background: S.accent }} />
              Tsundoku · 積ん読
            </div>
            <div style={{
              background: cardBg, border: `1px solid ${border}`,
              padding: bp.isMobile ? '28px 24px' : '36px 40px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', right: -10, top: -20,
                fontFamily: FONTS.jpDisplay, fontWeight: 900, fontSize: 160,
                color: S.accent, opacity: .08, lineHeight: 1, pointerEvents: 'none',
              }}>積</div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  fontFamily: FONTS.display, fontSize: bp.isMobile ? 20 : 26,
                  color: S.accent, marginBottom: 6, letterSpacing: -.5,
                }}>Tsundoku</div>
                <div style={{
                  fontSize: 12, color: muted, letterSpacing: 1.5,
                  textTransform: 'uppercase', marginBottom: 16, fontWeight: 600,
                }}>Nom commun · japonais</div>
                <div style={{
                  fontSize: bp.isMobile ? 15 : 17, lineHeight: 1.7,
                  color: dark ? 'rgba(255,255,255,.82)' : 'rgba(0,0,0,.72)',
                  fontStyle: 'italic',
                }}>
                  "Syndrome consistant a acheter des livres et a les entreposer autour de soi
                  sans toutefois jamais les lire."
                </div>
              </div>
            </div>
          </div>

          {/* Texte d'introduction */}
          <div>
            <h2 style={{
              fontFamily: FONTS.display,
              fontSize: bp.isMobile ? 36 : bp.isTablet ? 48 : 56,
              lineHeight: .9, margin: '0 0 24px', letterSpacing: -2, color: ink,
            }}>
              Bien plus<br />
              <span style={{ color: S.accent }}>qu'une librairie.</span>
            </h2>
            <div style={{
              fontSize: 16, lineHeight: 1.75,
              color: dark ? 'rgba(255,255,255,.82)' : 'rgba(0,0,0,.72)',
            }}>
              <p style={{ margin: '0 0 16px' }}>
                Pilotee par une equipe dynamique et accueillante, Tsundoku propose
                plus de 15 000 references de manga et de goodies sur plus de 300 m²
                de librairie et d'espaces de rencontres.
              </p>
              <p style={{ margin: '0 0 16px' }}>
                A Marseille, les dessins du talentueux Mathieu Bablet ont pris vie
                a l'ete 2021. L'auteur de BD grenoblois a dessine les plans et
                les concept arts de l'integralite de l'espace.
              </p>
              <p style={{ margin: 0 }}>
                C'est un lieu ou l'on se sent bien, ou l'on voyage, ou l'on apprend,
                ou l'on echange, ou l'on se retrouve entre passionnes. Tout simplement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── LES ESPACES ── */}
      <div style={{
        background: S.bg,
        padding: bp.isMobile ? '50px 20px' : bp.isTablet ? '60px 40px' : '80px 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, color: S.accent, opacity: .1, ...HALFTONE_MED }} />
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          <div style={{
            fontSize: 11, letterSpacing: 4, color: S.accent, fontWeight: 700,
            marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 24, height: 1, background: S.accent }} />
            Les espaces · 空間
          </div>
          <h2 style={{
            fontFamily: FONTS.display,
            fontSize: bp.isMobile ? 40 : bp.isTablet ? 56 : 72,
            lineHeight: .9, margin: '0 0 36px', letterSpacing: -2, color: '#fff',
          }}>
            Little Tokyo<br />
            <span style={{ color: S.accent }}>a Marseille.</span>
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: bp.isMobile ? '1fr' : bp.isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: bp.isMobile ? 14 : 20,
          }}>
            {ESPACES.map((esp, i) => (
              <div key={i} style={{
                background: 'rgba(0,0,0,.25)', border: `1px solid ${S.accent}33`,
                padding: bp.isMobile ? '24px 22px' : '30px 28px',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Kanji decoratif */}
                <div style={{
                  position: 'absolute', right: -8, bottom: -16,
                  fontFamily: FONTS.jpDisplay, fontWeight: 900, fontSize: 100,
                  color: S.accent, opacity: .1, lineHeight: 1, pointerEvents: 'none',
                }}>{esp.kanji}</div>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    fontFamily: FONTS.display, fontSize: 48, color: S.accent,
                    lineHeight: 1, letterSpacing: -2, marginBottom: 14, opacity: .7,
                  }}>{esp.num}</div>
                  <div style={{
                    fontFamily: FONTS.display, fontSize: bp.isMobile ? 22 : 26, color: '#fff',
                    letterSpacing: -.5, marginBottom: 12, lineHeight: 1.1,
                  }}>{esp.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', lineHeight: 1.6 }}>
                    {esp.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── EQUIPE ── */}
      <div style={{
        padding: bp.isMobile ? '50px 20px' : bp.isTablet ? '60px 40px' : '90px 60px',
        maxWidth: 1400, margin: '0 auto',
      }}>
        <div style={{
          fontSize: 11, letterSpacing: 4, color: S.accent, fontWeight: 700,
          marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 24, height: 1, background: S.accent }} />
          L'equipe · チーム
        </div>
        <h2 style={{
          fontFamily: FONTS.display,
          fontSize: bp.isMobile ? 40 : bp.isTablet ? 56 : 72,
          lineHeight: .9, margin: '0 0 36px', letterSpacing: -2, color: ink,
        }}>
          Ceux qui font<br />
          <span style={{ color: S.accent }}>la boutique.</span>
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: bp.isMobile ? 'repeat(2, 1fr)' : bp.isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: bp.isMobile ? 12 : 24,
        }}>
          {TEAM.map((member, i) => (
            <div key={i} style={{
              border: `2px solid ${border}`, background: cardBg,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                height: 220,
                background: `linear-gradient(135deg, ${S.bg} 0%, ${S.bgDeep} 100%)`,
                position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ position: 'absolute', inset: 0, color: member.accent, opacity: .22, ...HALFTONE_SMALL }} />
                <div style={{
                  fontFamily: FONTS.jpDisplay, fontWeight: 900, fontSize: 120,
                  color: member.accent, opacity: .9, lineHeight: 1,
                  textShadow: `4px 4px 0 rgba(0,0,0,.4)`,
                }}>{member.kanji}</div>
              </div>
              <div style={{ padding: '20px 20px 24px' }}>
                <div style={{
                  fontSize: 10, letterSpacing: 2, color: S.accent,
                  fontWeight: 700, textTransform: 'uppercase', marginBottom: 6,
                }}>{member.role}</div>
                <div style={{
                  fontFamily: FONTS.display, fontSize: 22, lineHeight: 1,
                  letterSpacing: -.5, color: ink,
                }}>{member.name}</div>
                <div style={{ marginTop: 12, fontSize: 13, color: muted, lineHeight: 1.6 }}>
                  {member.bio}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA contacter ── */}
      <div style={{
        padding: bp.isMobile ? '40px 20px 60px' : '70px 60px 90px',
        maxWidth: 1400, margin: '0 auto',
        borderTop: `1px solid ${border}`,
        display: 'flex',
        flexDirection: bp.isMobile ? 'column' : 'row',
        alignItems: bp.isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between', gap: 28, flexWrap: 'wrap',
      }}>
        <div>
          <div style={{
            fontFamily: FONTS.display,
            fontSize: bp.isMobile ? 34 : 56,
            letterSpacing: -2, lineHeight: .9, color: ink,
          }}>
            Tu veux nous contacter ?
          </div>
          <div style={{ marginTop: 14, fontSize: 15, color: muted, maxWidth: 520, lineHeight: 1.6 }}>
            Une question, une idee, un partenariat — ecrivez-nous.
          </div>
        </div>
        <button onClick={() => onNav && onNav('contact')} style={{
          background: S.accent, color: S.bgDeep, border: 'none',
          padding: '18px 32px', fontWeight: 700, fontSize: 14,
          letterSpacing: 3, textTransform: 'uppercase',
          borderRadius: 99, cursor: 'pointer', fontFamily: FONTS.body,
          whiteSpace: 'nowrap', boxShadow: `0 0 0 4px ${S.accent}44`,
        }}>Nous contacter →</button>
      </div>

      <Footer shop={shop} theme={theme} />
    </div>
  );
}

Object.assign(window, { AboutPage });
