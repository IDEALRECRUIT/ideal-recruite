// sections.jsx — IDEAL RECRUIT 集客サービスLP（再構成版）

// ─── NAV ────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true"></div>
          <span>IDEAL&nbsp;RECRUIT</span>
        </div>
        <nav className="nav-links">
          <a href="#logic">ロジック</a>
          <a href="#comparison">比較</a>
          <a href="#results">実績</a>
          <a href="#pricing">料金</a>
          <a href="#philosophy">想い</a>
        </nav>
        <a href="#contact" className="btn btn-primary nav-cta">お問い合わせ</a>
      </div>
    </header>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────
function Hero({ tweaks }) {
  return (
    <section style={{paddingTop: 56, paddingBottom: 96, background:"linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)"}}>
      <div className="wrap">
        {/* Category line — top center */}
        <div style={{
          textAlign:"center",
          marginBottom:48,
          paddingBottom:32,
          borderBottom:"1px solid var(--line)",
        }}>
          <div style={{
            fontSize:"clamp(22px, 3.2vw, 34px)",
            fontWeight:800,
            color:"var(--text)",
            letterSpacing:"-0.01em",
            lineHeight:1.5,
          }}>
            人材紹介会社のための、求職者集客代行
          </div>
        </div>

        <div style={{
          display:"grid", gridTemplateColumns:"1.05fr 1fr", gap:48, alignItems:"center",
        }} className="hero-grid">
          {/* LEFT */}
          <div>
            <h1 style={{
              fontSize:"clamp(28px, 4.2vw, 52px)",
              fontWeight:900,
              lineHeight:1.4,
              letterSpacing:"-0.005em",
              color:"var(--text)",
            }}>
              {(() => {
                const parts = tweaks.h1.split("、").filter((p) => p.length > 0);
                return parts.map((p, i) => {
                  const isLast = i === parts.length - 1;
                  return (
                    <React.Fragment key={i}>
                      <span style={isLast ? {color:"var(--accent)"} : {}}>
                        {p}{i < parts.length - 1 ? "、" : ""}
                      </span>
                      {i < parts.length - 1 && <br/>}
                    </React.Fragment>
                  );
                });
              })()}
            </h1>
            <p style={{
              marginTop:24, fontSize:16, color:"var(--sub)",
              lineHeight:2, maxWidth:520, fontWeight:500,
            }}>
              {tweaks.sub}
            </p>
            <div style={{display:"flex", gap:14, marginTop:36, flexWrap:"wrap", alignItems:"center"}}>
              <a href="#contact" className="btn btn-primary">
                {tweaks.ctaPrimary} <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#1E5FA8"/>
      <path d="M4.5 8.2L7 10.5L11.5 5.8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function HeroVisual() {
  const rows = [
    { label: "応募人数",   range: "114〜150", unit: "人", pct: 100, color: "var(--primary)" },
    { label: "有効応募",   range: "57〜75",   unit: "人", pct: 50,  color: "#3D7CC4" },
    { label: "面談実施",   range: "34〜45",   unit: "人", pct: 30,  color: "#6B9BD6" },
    { label: "決定数",     range: "4〜6",     unit: "人", pct: 4,   color: "var(--accent)" },
  ];
  return (
    <div style={{position:"relative"}}>
      <div style={{
        background:"#fff",
        border:"1px solid var(--line)",
        borderRadius:12,
        padding:"28px 28px 24px",
        boxShadow:"0 20px 48px rgba(30,95,168,0.12), 0 4px 12px rgba(30,95,168,0.06)",
      }}>
        <div style={{
          display:"flex", justifyContent:"space-between", alignItems:"center",
          marginBottom:20,
        }}>
          <div>
            <div style={{fontSize:11, color:"var(--sub)", fontWeight:600, letterSpacing:"0.08em", marginBottom:4}}>
              MONTHLY PERFORMANCE
            </div>
            <div style={{fontSize:16, fontWeight:700, color:"var(--text)"}}>
              月次運用実績レンジ
            </div>
          </div>
          <div style={{
            background:"var(--bg-light)",
            border:"1px solid var(--line)",
            padding:"6px 12px",
            borderRadius:6,
            fontSize:11, fontWeight:600, color:"var(--primary)",
          }}>
            広告費 15万円
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:18}}>
          {rows.map((r) => (
            <div key={r.label}>
              <div style={{
                display:"flex", justifyContent:"space-between", alignItems:"baseline",
                marginBottom:6,
              }}>
                <span style={{fontSize:13, fontWeight:600, color:"var(--text)"}}>{r.label}</span>
                <span style={{display:"flex", alignItems:"baseline", gap:4, whiteSpace:"nowrap"}}>
                  <span className="num" style={{
                    fontSize:24, fontWeight:800, color:r.color,
                    letterSpacing:"-0.01em",
                  }}>{r.range}</span>
                  <span style={{fontSize:13, color:"var(--sub)", fontWeight:500}}>{r.unit}</span>
                </span>
              </div>
              <div style={{
                height:6, background:"var(--bg-light)", borderRadius:999,
                overflow:"hidden", position:"relative",
              }}>
                <div style={{
                  height:"100%", width:`${r.pct}%`, background:r.color,
                  borderRadius:999,
                  transition:"width 1s ease",
                }}></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop:24, paddingTop:16, borderTop:"1px solid var(--line-soft)",
          fontSize:11, color:"var(--sub)", textAlign:"right",
          lineHeight:1.6,
        }}>
          ※ 5社の運用実績データに基づく月次レンジ
        </div>
      </div>
      <div style={{
        position:"absolute", top:-14, right:-14,
        background:"var(--accent)", color:"#fff",
        width:90, height:90, borderRadius:"50%",
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
        boxShadow:"0 10px 24px rgba(242,107,124,0.4)",
        transform:"rotate(8deg)",
      }}>
        <span style={{fontSize:10, fontWeight:700, letterSpacing:"0.05em"}}>初月</span>
        <span style={{fontSize:14, fontWeight:900, lineHeight:1}}>広告費</span>
        <span style={{fontSize:14, fontWeight:900, lineHeight:1, marginTop:2}}>0円</span>
      </div>
    </div>
  );
}

// ─── ②ロジック ───────────────────────────────────────────────────────────────
function LogicSection() {
  return (
    <section id="logic" style={{background:"var(--bg-light)"}}>
      <div className="wrap">
        <div style={{textAlign:"center", marginBottom:56}}>
          <div className="section-eyebrow">LOGIC</div>
          <h2 style={{
            fontSize:"clamp(26px, 3.8vw, 42px)", marginTop:16,
            fontWeight:900, color:"var(--text)", lineHeight:1.45,
          }}>
            人材紹介事業は、<br/>
            <span style={{color:"var(--accent)"}}>「決定数」</span>が出なければ成り立たない。
          </h2>
          <p className="section-sub" style={{maxWidth:680, margin:"22px auto 0"}}>
            だから私たちは、応募数でも有効応募数でもなく、<br/>
            <strong style={{color:"var(--primary)"}}>「会えて、決まる応募」</strong>を作ることに集中しています。
          </p>
        </div>

        <div style={{
          background:"#fff", border:"1px solid var(--line)",
          borderRadius:12, padding:"40px 44px",
          boxShadow:"0 8px 24px rgba(30,95,168,0.06)",
          maxWidth:880, margin:"0 auto",
        }} className="logic-card">
          <div style={{textAlign:"center", marginBottom:36}}>
            <div style={{fontSize:12, color:"var(--sub)", letterSpacing:"0.1em", fontWeight:700}}>
              EFFECTIVE APPLICATION RATE
            </div>
            <h3 style={{fontSize:"clamp(18px, 2.4vw, 22px)", marginTop:8, color:"var(--text)", fontWeight:800}}>
              「有効応募率」が、すべての出発点。
            </h3>
          </div>

          <div style={{display:"flex", flexDirection:"column", gap:28}}>
            {[
              {label:"クリック課金型のWeb広告", pct:8, range:"5〜10%", color:"#B8C5D8", labelColor:"var(--sub)"},
              {label:"求人ボックス × IDEAL RECRUIT", pct:50, range:"50%前後", color:"var(--accent)", labelColor:"var(--accent)", highlight:true},
            ].map((row) => (
              <div key={row.label}>
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:10, alignItems:"baseline", flexWrap:"wrap", gap:8}}>
                  <span style={{fontSize:14, fontWeight:700, color:row.labelColor}}>{row.label}</span>
                  <span className="num" style={{fontSize:24, fontWeight:800, color:row.labelColor, letterSpacing:"-0.01em"}}>{row.range}</span>
                </div>
                <div style={{height:14, background:"var(--bg-light)", borderRadius:99, overflow:"hidden"}}>
                  <div style={{height:"100%", width:`${row.pct}%`, background:row.color, borderRadius:99, transition:"width 1.2s ease"}}></div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop:36, paddingTop:28, borderTop:"1px solid var(--line-soft)",
            color:"var(--sub)", fontSize:14.5, lineHeight:2,
          }}>
            <p style={{margin:"0 0 14px"}}>
              クリック課金型の広告は、応募数こそ多く取れますが、面談につながらない応募が9割。CAは空応募の対応で消耗し、提案に時間が割けません。
            </p>
            <p style={{margin:"0 0 14px"}}>
              さらに私たちは、応募を集めるためだけに <span style={{color:"var(--text)", background:"#FFF0F2", padding:"1px 6px", borderRadius:3, fontWeight:600}}>「事務職／月給25万円〜」</span> のような甘い条件を提示することもしていません。掲載する求人は、<strong style={{color:"var(--text)"}}>すべて実際の紹介案件の条件にそのまま合わせて</strong>います。だからこそ、応募者が来た後にCAが「話せる」「推薦できる」応募になります。
            </p>
            <p style={{margin:0}}>
              求人ボックスと運用ノウハウで、<strong style={{color:"var(--accent)"}}>有効応募率を50%まで引き上げます。</strong>応募数より、決定につながる「中身」を。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── シェアリング求人（軽量説明） ──────────────────────────────────────────────
function Sharing() {
  return (
    <section id="sharing" style={{background:"var(--bg-light)"}}>
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">SHARING</div>
          <h2 className="section-title">
            集客で集まった求職者は、<br/>
            <span className="primary">自社案件 + アツい案件</span>で決定機会が広がります。
          </h2>
          <p style={{
            maxWidth:820, margin:"28px auto 0",
            fontSize:"clamp(16px, 1.9vw, 20px)",
            color:"var(--text)", fontWeight:500, lineHeight:2,
          }}>
            私たちは50社を超える企業様から、高フィー・面談確約・未経験OKなどの<br/>
            「決まりやすい案件」をお預かりしています。<br/>
            自社案件で決まらなかった求職者も、<strong style={{color:"var(--accent)"}}>この共有案件で決定につなげられます。</strong>
          </p>

          {/* 求人の信頼性ポイント */}
          <div style={{
            maxWidth:820, margin:"28px auto 0",
            padding:"22px 26px",
            background:"#fff",
            border:"1px solid var(--line)",
            borderRadius:10,
            textAlign:"left",
          }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              fontSize:12, color:"var(--primary)", fontWeight:700,
              letterSpacing:"0.06em", marginBottom:10,
            }}>
              <span style={{
                width:6, height:6, borderRadius:99, background:"var(--accent)",
              }}></span>
              REAL&nbsp;JOBS&nbsp;ONLY
            </div>
            <p style={{
              margin:0,
              fontSize:"clamp(14px, 1.6vw, 16px)",
              color:"var(--text)", lineHeight:1.95, fontWeight:500,
            }}>
              共有する求人は、<strong>実際の紹介案件の求人票からそのまま作成</strong>しています。条件を盛ったり、誇張表現を使ったりはしません。だから、<strong style={{color:"var(--accent)"}}>応募が来た後にCAが「話せる」「決めやすい」案件</strong>になります。
            </p>
          </div>

          {/* コスト構造の明示 */}
          <div style={{
            maxWidth:680, margin:"28px auto 0",
            display:"flex", alignItems:"center", justifyContent:"center", gap:14,
            padding:"16px 24px",
            background:"#fff",
            border:"1.5px solid var(--accent)",
            borderRadius:99,
            color:"var(--text)",
            fontSize:"clamp(14px, 1.7vw, 16px)",
            fontWeight:700,
            flexWrap:"wrap",
          }}>
            <span style={{
              background:"var(--accent)", color:"#fff",
              padding:"3px 12px", borderRadius:99,
              fontSize:11, letterSpacing:"0.06em", fontWeight:700,
              whiteSpace:"nowrap",
            }}>NO RUNNING COST</span>
            <span>ランニングコストはかからず、<span style={{color:"var(--accent)"}}>決定が出たときだけ</span>料金が発生します。</span>
          </div>
        </div>

        {/* 還元構造 */}
        <div style={{
          maxWidth: 880, margin:"0 auto",
          background:"#fff", border:"1px solid var(--line)",
          borderRadius:12, padding:"36px 36px 32px",
          boxShadow:"0 4px 16px rgba(30,95,168,0.06)",
        }}>
          <div style={{
            display:"flex", justifyContent:"space-between", alignItems:"baseline",
            marginBottom:20, flexWrap:"wrap", gap:8,
          }}>
            <div style={{
              fontSize:11, color:"var(--sub)", fontWeight:700,
              letterSpacing:"0.1em",
            }}>FEE&nbsp;BREAKDOWN&nbsp;/&nbsp;貴社の取り分</div>
            <div style={{fontSize:11, color:"var(--sub)"}}>※ 1件決定あたりの分配</div>
          </div>

          <div style={{
            display:"flex", height:64, borderRadius:8, overflow:"hidden",
            border:"1px solid var(--line)",
          }} className="share-bar">
            <div style={{
              flex:"0 0 20%", background:"var(--bg-blue)", color:"var(--primary)",
              display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
              borderRight:"1px solid var(--line)",
            }}>
              <span className="num" style={{fontSize:22, fontWeight:800, lineHeight:1}}>20%</span>
              <span style={{fontSize:10, marginTop:4, color:"var(--sub)", fontWeight:600}}>案件元企業</span>
            </div>
            <div style={{
              flex:"0 0 20%", background:"var(--bg-blue)", color:"var(--primary)",
              display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
              borderRight:"1px solid var(--line)",
            }}>
              <span className="num" style={{fontSize:22, fontWeight:800, lineHeight:1}}>20%</span>
              <span style={{fontSize:10, marginTop:4, color:"var(--sub)", fontWeight:600}}>IDEAL RECRUIT</span>
            </div>
            <div style={{
              flex:"0 0 60%", background:"var(--accent)", color:"#fff",
              display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
              position:"relative",
            }}>
              <span className="num" style={{fontSize:30, fontWeight:900, lineHeight:1}}>60%</span>
              <span style={{fontSize:11, marginTop:4, fontWeight:700, letterSpacing:"0.04em"}}>貴社の取り分</span>
            </div>
          </div>

          <div style={{
            marginTop:24, padding:"20px 22px",
            background:"var(--bg-light)", borderLeft:"3px solid var(--accent)",
            borderRadius:"0 6px 6px 0",
            fontSize:14, color:"var(--text)", lineHeight:1.9,
          }}>
            <div style={{
              display:"inline-block",
              background:"var(--accent)", color:"#fff",
              fontSize:11, fontWeight:700, letterSpacing:"0.05em",
              padding:"3px 10px", borderRadius:99,
              marginBottom:10,
            }}>集客サービスの上位プランをご契約の場合</div>
            <p style={{margin:0}}>
              次でご紹介する集客サービスの上位プランをご契約いただくと、IDEAL RECRUITの取り分20%から最大15%を貴社へ還元する <strong style={{color:"var(--accent)"}}>「シェアリングOFF特典」</strong> が付きます。<br/>
              結果、貴社の取り分は <strong style={{color:"var(--accent)"}}>70〜75%</strong> まで広がります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ③競合比較 ───────────────────────────────────────────────────────────────
function Comparison() {
  return (
    <section id="comparison">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">POSITIONING</div>
          <h2 className="section-title">
            送客サービスの<br/>
            <span className="primary">「サブの一手」</span>として、機能します。
          </h2>
        </div>

        <div style={{
          maxWidth:780, margin:"0 auto 48px",
          padding:"28px 32px",
          background:"var(--bg-light)",
          borderLeft:"4px solid var(--primary)",
          borderRadius:"0 8px 8px 0",
        }}>
          <p style={{margin:0, fontSize:15, color:"var(--text)", lineHeight:2.1}}>
            メインの集客は、<strong>送客サービスで構いません。</strong>職種・年齢・経験など、貴社が欲しい候補者をピンポイントでコントロールできる、優れた選択肢です。<br/>
            <br/>
            ただ、それだけでは事業の決定数を支える<strong style={{color:"var(--accent)"}}>「有効応募の分母」が足りない。</strong>私たちは、そのサブの一手を担います。
          </p>
        </div>

        <div style={{
          border:"1px solid var(--line)", borderRadius:12, overflow:"hidden",
          background:"#fff", boxShadow:"0 8px 24px rgba(30,95,168,0.06)",
        }}>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%", borderCollapse:"collapse", fontSize:14, minWidth:720}}>
              <thead>
                <tr>
                  <th style={{...cellHead, background:"var(--bg-light)", color:"var(--text)", borderRight:"1px solid var(--line)"}}></th>
                  <th style={{...cellHead, background:"#E8EDF5", color:"var(--text)", textAlign:"center", borderRight:"1px solid var(--line)"}}>送客サービス</th>
                  <th style={{...cellHead, background:"#E8EDF5", color:"var(--text)", textAlign:"center", borderRight:"1px solid var(--line)"}}>クリック課金型広告</th>
                  <th style={{...cellHead, background:"var(--primary)", color:"#fff", textAlign:"center"}}>IDEAL RECRUIT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["提供するもの", "完成した有効応募", "応募の流入", "決定に近い応募 + 運用伴走"],
                  ["単価", "高い", "低い（だが空転）", "中間"],
                  ["有効応募率", "高い", "5〜10%", "50%前後"],
                  ["CAの稼働", "提案に集中可", "空応募の対応で圧迫", "提案に集中可"],
                  ["メイン用途", "主軸", "主軸", "サブで効く"],
                ].map(([label, a, b, c], i) => {
                  const isLast = label === "メイン用途";
                  return (
                    <tr key={i} style={{borderTop:"1px solid var(--line)", background: i % 2 === 1 ? "var(--bg-light)" : "#fff"}}>
                      <td style={{...cellBody, fontWeight:700, color:"var(--primary)", borderRight:"1px solid var(--line)", whiteSpace:"nowrap", width:140, fontSize:13}}>{label}</td>
                      <td style={{...cellBody, textAlign:"center", borderRight:"1px solid var(--line)", color:"var(--text)"}}>{a}</td>
                      <td style={{...cellBody, textAlign:"center", borderRight:"1px solid var(--line)", color:"var(--text)"}}>{b}</td>
                      <td style={{
                        ...cellBody, textAlign:"center",
                        color: isLast ? "var(--accent)" : "var(--primary)",
                        fontWeight:700,
                        background:"var(--bg-blue)",
                        fontSize: isLast ? 15 : 14,
                      }}>{c}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ④実績データ ──────────────────────────────────────────────────────────────
function Results() {
  const tiers = [
    {
      budget: "100,000",
      jobs: "約9,000",
      apps: "66〜76",
      cpa: "1,300〜1,500",
      validRate: "50%",
      validApps: "33〜38",
      validCPA: "2,600〜3,000",
      validCPAFee: "12,600〜13,000",
      meetRate: "60%",
      meets: "19〜22",
      meetCPA: "21,000〜21,600",
    },
    {
      budget: "150,000",
      jobs: "約9,000",
      apps: "100〜115",
      cpa: "1,300〜1,500",
      validRate: "50%",
      validApps: "50〜57",
      validCPA: "2,600〜3,000",
      validCPAFee: "12,600〜13,000",
      meetRate: "60%",
      meets: "30〜34",
      meetCPA: "21,000〜21,600",
      featured: true,
    },
    {
      budget: "200,000",
      jobs: "約9,000",
      apps: "133〜153",
      cpa: "1,300〜1,500",
      validRate: "50%",
      validApps: "66〜76",
      validCPA: "2,600〜3,000",
      validCPAFee: "12,600〜13,000",
      meetRate: "60%",
      meets: "39〜45",
      meetCPA: "21,000〜21,600",
    },
  ];
  const cols = [
    { k: "budget",      label: "広告費",                    unit: "円" },
    { k: "jobs",        label: "案件数",                    unit: "件" },
    { k: "apps",        label: "応募人数",                  unit: "人" },
    { k: "cpa",         label: "応募単価",                  unit: "円" },
    { k: "validRate",   label: "有効応募率",                unit: "" },
    { k: "validApps",   label: "有効応募数",                unit: "人" },
    { k: "validCPA",    label: "有効応募単価",              unit: "円" },
    { k: "validCPAFee", label: "有効応募単価＋フィー",      unit: "円", sublabel: "（10,000円）" },
    { k: "meetRate",    label: "面談実施率",                unit: "" },
    { k: "meets",       label: "面談実施数",                unit: "人", highlight: true },
    { k: "meetCPA",     label: "面談実施単価",              unit: "円" },
  ];

  return (
    <section id="results">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">RESULTS</div>
          <h2 className="section-title">
            結果、<span className="accent">月4〜6人の決定</span>。
          </h2>
          <p className="section-sub">
            広告費別の月次運用実績レンジ。<br/>
            実際に運用している人材紹介会社5社の数値をもとにしています。
          </p>
        </div>

        <div style={{
          background:"#fff",
          border:"1px solid var(--line)",
          borderRadius:12,
          padding:"28px 32px",
          marginBottom:32,
          boxShadow:"0 4px 16px rgba(30,95,168,0.06)",
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:36,
        }} className="results-sample">
          <div>
            <div style={{
              fontSize:12, color:"var(--accent)", fontWeight:700,
              letterSpacing:"0.08em", marginBottom:10,
            }}>SAMPLE / 配信案件例</div>
            <h3 style={{
              fontSize:22, fontWeight:800, color:"var(--primary)",
              lineHeight:1.5, marginBottom:12,
            }}>事務案件</h3>
            <div style={{
              display:"flex", gap:8, flexWrap:"wrap", marginTop:8,
            }}>
              <span style={{
                background:"var(--bg-blue)", color:"var(--primary)",
                padding:"4px 10px", borderRadius:4, fontSize:12, fontWeight:600,
              }}>IT事務・インフラ・サポート職</span>
              <span style={{
                background:"#FFE9EC", color:"var(--accent)",
                padding:"4px 10px", borderRadius:4, fontSize:12, fontWeight:600,
              }}>未経験系</span>
              <span style={{
                background:"#FFE9EC", color:"var(--accent)",
                padding:"4px 10px", borderRadius:4, fontSize:12, fontWeight:600,
              }}>面談確約</span>
            </div>
          </div>
          <div style={{
            background:"var(--bg-light)",
            padding:"20px 22px",
            borderRadius:8,
            fontSize:13.5,
            color:"var(--text)",
            lineHeight:1.9,
          }}>
            <div style={{fontWeight:700, color:"var(--primary)", marginBottom:6}}>
              【面接確約！】未経験OK／フィー70万
            </div>
            <div style={{color:"var(--sub)", fontSize:12.5}}>
              ※面接確約は対象者に限り<br/>
              IT事務・インフラ・サポート職<br/>
              2月入社可能<br/>
              勤務地域：大阪府、兵庫県、京都府、東京都
            </div>
          </div>
        </div>

        <div style={{
          border:"1px solid var(--line)",
          borderRadius:12,
          overflow:"hidden",
          background:"#fff",
          boxShadow:"0 8px 24px rgba(30,95,168,0.08)",
        }}>
          <div style={{overflowX:"auto"}}>
            <table style={{
              width:"100%",
              borderCollapse:"collapse",
              fontSize:13,
              minWidth: 1080,
            }}>
              <thead>
                <tr style={{background:"var(--primary)", color:"#fff"}}>
                  {cols.map((c) => (
                    <th key={c.k} style={{
                      ...cellHead,
                      textAlign: "center",
                      verticalAlign: "middle",
                      background: c.highlight ? "var(--accent)" : "var(--primary)",
                      borderRight: "1px solid rgba(255,255,255,0.15)",
                      whiteSpace: "nowrap",
                    }}>
                      <div>{c.label}</div>
                      {c.sublabel && (
                        <div style={{fontSize:10, fontWeight:500, opacity:0.85, marginTop:2}}>
                          {c.sublabel}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tiers.map((t, i) => (
                  <tr key={i} style={{
                    borderTop:"1px solid var(--line)",
                    background: t.featured ? "var(--bg-blue)" : (i % 2 === 1 ? "var(--bg-light)" : "#fff"),
                    position:"relative",
                  }}>
                    {cols.map((c, ci) => {
                      const val = t[c.k];
                      const isBudget = c.k === "budget";
                      const isMeets = c.k === "meets";
                      return (
                        <td key={c.k} style={{
                          padding:"22px 14px",
                          textAlign:"center",
                          verticalAlign:"middle",
                          borderRight: ci < cols.length - 1 ? "1px solid var(--line-soft)" : "0",
                          whiteSpace:"nowrap",
                          color: isBudget ? "var(--primary)" : (isMeets ? "var(--accent)" : "var(--text)"),
                          fontWeight: isBudget || isMeets ? 800 : (t.featured ? 700 : 500),
                          fontSize: isBudget ? 16 : (isMeets ? 16 : 13.5),
                          position:"relative",
                        }} className="num">
                          {t.featured && ci === 0 && (
                            <div style={{marginBottom: 6}}>
                              <span style={{
                                display:"inline-block",
                                background:"var(--accent)", color:"#fff",
                                padding:"3px 10px", borderRadius:99,
                                fontSize:10, fontWeight:700, letterSpacing:"0.04em",
                              }}>推奨</span>
                            </div>
                          )}
                          <span>
                            {val}
                            {c.unit && <span style={{
                              fontSize:11, marginLeft:1, fontWeight:500,
                              color: isBudget ? "var(--primary)" : (isMeets ? "var(--accent)" : "var(--sub)"),
                            }}>{c.unit}</span>}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{
          marginTop:36,
          padding:"24px 28px",
          background:"linear-gradient(135deg, #EEF3FB 0%, #FFE9EC 100%)",
          borderRadius:12,
          textAlign:"center",
          fontSize:"clamp(20px, 2.6vw, 28px)",
          fontWeight:800,
          color:"var(--primary)",
          lineHeight:1.5,
        }}>
          このパッケージで
          <span style={{color:"var(--accent)", margin:"0 6px"}}>月4〜6人</span>
          決まっています。
        </div>

        <div style={{marginTop:20, textAlign:"center", fontSize:12, color:"var(--sub)"}}>
          ※ 上記は5社の運用実績データの月次レンジです。領域・職種により変動します。
        </div>
      </div>
    </section>
  );
}
const cellHead = {
  padding: "14px 16px",
  textAlign: "left",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "0.04em",
};
const cellBody = {
  padding: "16px",
  textAlign: "left",
  color: "var(--text)",
};

// ─── 初月特別プラン ───────────────────────────────────────────────────────────
function InitialMonthPlan() {
  return (
    <section id="initial-month">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow" style={{color:"var(--accent)"}}>INITIAL MONTH OFFER</div>
          <h2 className="section-title">
            ご紹介<span className="accent">初月特別プラン</span>
          </h2>
          <p className="section-sub">
            6カ月契約の前に、まずは<strong>初月体験プラン</strong>でお試しいただけます。<br/>
            <strong style={{color:"var(--accent)"}}>広告費は弊社が負担。</strong>貴社の負担は<strong>有効応募1件あたり10,000円のみ</strong>です。
          </p>
        </div>

        <div style={{
          maxWidth: 920, margin:"0 auto",
          background:"#fff",
          border:"2px solid var(--accent)",
          borderRadius: 20,
          overflow:"hidden",
          boxShadow:"0 20px 48px rgba(242,107,124,0.15)",
          position:"relative",
        }}>
          {/* Top corner ribbon */}
          <div style={{
            position:"absolute", top:0, right:0,
            background:"var(--dark)", color:"#fff",
            padding:"6px 20px",
            fontSize:11, fontWeight:700, letterSpacing:"0.1em",
            borderBottomLeftRadius:12,
          }}>FIRST MONTH ONLY</div>

          <div style={{
            display:"grid",
            gridTemplateColumns:"minmax(280px, 0.9fr) 1.3fr",
            gap: 0,
          }} className="initial-grid">
            {/* Pink left - price */}
            <div style={{
              background:"linear-gradient(135deg, #F26B7C 0%, #E5566A 100%)",
              color:"#fff",
              padding:"56px 28px",
              textAlign:"center",
              display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",
              position:"relative",
            }}>
              <div style={{
                fontSize:14, fontWeight:700, letterSpacing:"0.08em",
                color:"#fff", marginBottom: 14, opacity: 0.9,
              }}>有効応募単価</div>
              <div style={{display:"flex", alignItems:"baseline", gap:4, lineHeight:1}}>
                <span className="num" style={{
                  fontSize: 76, fontWeight:900, letterSpacing:"-0.04em",
                  color:"#fff",
                  textShadow:"0 2px 0 rgba(0,0,0,0.06)",
                }}>10,000</span>
                <span style={{fontSize: 26, fontWeight:800, color:"#fff"}}>円</span>
              </div>
              <div style={{fontSize:12, marginTop:10, opacity:0.85, fontWeight:500}}>（税抜）</div>

              <div style={{
                marginTop: 28,
                padding:"10px 18px",
                background:"rgba(255,255,255,0.15)",
                borderRadius: 99,
                fontSize:12, fontWeight:600,
                border:"1px solid rgba(255,255,255,0.3)",
                letterSpacing:"0.04em",
              }}>初月限定</div>
            </div>

            {/* White right - features */}
            <div style={{padding:"40px 36px"}}>
              <div style={{
                fontSize:12, fontWeight:700, color:"var(--sub)",
                letterSpacing:"0.1em", marginBottom:20,
              }}>WHAT'S&nbsp;INCLUDED</div>
              <ul style={{
                listStyle:"none", padding:0, margin:0,
                display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px 24px",
              }} className="initial-features">
                {[
                  { t:"求人票の選定" },
                  { t:"求人ボックスナイズド作業", sub:"（9,000件〜）" },
                  { t:"閲覧制限項目設定" },
                  { t:"検索NGワード設定" },
                  { t:"随時記事追加" },
                  { t:"課金額の最適化" },
                ].map((f) => (
                  <li key={f.t} style={{display:"flex", gap:10, alignItems:"flex-start"}}>
                    <span style={{
                      width:18, height:18, borderRadius:"50%",
                      background:"var(--accent)", color:"#fff",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      flexShrink:0, fontSize:10, fontWeight:800, marginTop:3,
                    }}>✓</span>
                    <span style={{fontSize:14, fontWeight:600, color:"var(--text)", lineHeight:1.7}}>
                      {f.t}
                      {f.sub && <span style={{color:"var(--sub)", fontWeight:400, fontSize:12, display:"block"}}>{f.sub}</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop:26, paddingTop:18, borderTop:"1px dashed var(--line)",
                fontSize:12, color:"var(--accent)", lineHeight:1.95, fontWeight:600,
              }}>
                <div>※1 広告費は弊社持ち</div>
                <div>※2 求人ボックスのID/PASSをご共有ください</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{textAlign:"center", marginTop:40}}>
          <a href="#contact" className="btn btn-primary" style={{padding:"18px 38px"}}>
            初月プランを試す <span className="arrow">→</span>
          </a>
          <p style={{marginTop:14, fontSize:12, color:"var(--sub)"}}>
            初月の効果をご確認いただいたうえで、6カ月契約のプランへお進みいただけます。
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── ⑤料金プラン ──────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: "定額平均70応募プラン",
      tagline: "まずは小さく始めたい",
      meetCPA: "13,000〜18,000円",
      total: "40",
      features: [
        { label: "面接し放題パック" },
        { label: "求職者案件サポート" },
      ],
      featured: false,
    },
    {
      name: "シェアリングOFF 平均90応募プラン",
      tagline: "もっとも選ばれているプラン",
      meetCPA: "14,500〜20,000円",
      total: "50",
      features: [
        { label: "面接し放題パック" },
        { label: "求職者案件サポート" },
        { label: "シェアリング求人 10%オフ", sub: "案件還元率：70%", highlight: true },
      ],
      featured: true,
    },
    {
      name: "メンバーマネジメント平均120応募プラン",
      tagline: "事業を伸ばし切りたい",
      meetCPA: "14,500〜20,000円",
      total: "80",
      features: [
        { label: "面接し放題パック" },
        { label: "求職者案件サポート" },
        { label: "シェアリング求人 15%オフ", sub: "案件還元率：75%", highlight: true },
        { label: "個別のマネジメント／求人勉強", sub: "20万円相当", highlight: true },
      ],
      featured: false,
    },
  ];
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">PRICING</div>
          <h2 className="section-title">
            6カ月契約 通常プラン
          </h2>
          <p className="section-sub">
            初月体験の後にお進みいただく、本契約プランです。<br/>
            <span style={{fontSize:12, color:"var(--sub)"}}>※地域は主要都市全て含む / 6カ月契約</span>
          </p>
        </div>

        <div style={{
          display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20,
          alignItems:"stretch",
        }} className="pricing-grid">
          {plans.map((p) => (
            <div key={p.name} style={{
              display:"flex", flexDirection:"column",
              position:"relative",
            }}>
              {/* 面談実施単価 (above card) */}
              <div style={{
                textAlign:"center",
                marginBottom:14,
                fontSize:13,
                color:"var(--sub)",
                fontWeight:600,
              }}>
                面談実施単価 <span className="num" style={{color:"var(--text)", fontWeight:700}}>{p.meetCPA}</span>
              </div>

              <div style={{
                background:"#fff",
                border: p.featured ? "2px solid var(--accent)" : "1px solid var(--line)",
                borderRadius:14,
                display:"flex", flexDirection:"column", flex:1,
                boxShadow: p.featured
                  ? "0 16px 40px rgba(242,107,124,0.18)"
                  : "0 2px 8px rgba(30,95,168,0.05)",
                position:"relative",
                overflow:"visible",
              }}>
                {p.featured && (
                  <span style={{
                    position:"absolute", top:-12, left:"50%",
                    transform:"translateX(-50%)",
                    background:"var(--accent)", color:"#fff",
                    padding:"5px 18px", borderRadius:99,
                    fontSize:11, fontWeight:700, letterSpacing:"0.04em",
                    whiteSpace:"nowrap",
                    boxShadow:"0 4px 12px rgba(242,107,124,0.4)",
                    zIndex:3,
                  }}>もっとも選ばれているプラン</span>
                )}

                {/* Header — uniform across cards */}
                <div style={{
                  padding:"32px 24px 28px",
                  textAlign:"center",
                  borderBottom:"1px solid var(--line)",
                }}>
                  <div style={{
                    fontSize:11, fontWeight:600, color:"var(--accent)",
                    letterSpacing:"0.1em", marginBottom:10,
                    textTransform:"uppercase",
                  }}>
                    {p.tagline}
                  </div>
                  <div style={{
                    fontSize:14, fontWeight:700, color:"var(--text)",
                    lineHeight:1.5, marginBottom:18,
                    minHeight: 42,
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    {p.name}
                  </div>
                  <div style={{
                    display:"flex", alignItems:"baseline", justifyContent:"center", gap:4,
                    color:"var(--primary)",
                  }}>
                    <span style={{fontSize:14, fontWeight:600, color:"var(--sub)"}}>合計</span>
                    <span className="num" style={{
                      fontSize: 56, fontWeight:900, letterSpacing:"-0.03em", lineHeight:1,
                      color:"var(--primary)",
                    }}>{p.total}</span>
                    <span style={{fontSize:20, fontWeight:800, color:"var(--primary)"}}>万円</span>
                    <span style={{fontSize:11, fontWeight:500, color:"var(--sub)", marginLeft:2}}>税抜</span>
                  </div>
                  <div style={{
                    fontSize:11, marginTop:8, color:"var(--sub)", fontWeight:500,
                  }}>
                    2アカウント作成を前提
                  </div>
                </div>

                {/* Features — clean checklist */}
                <div style={{
                  padding:"24px 24px 8px",
                  display:"flex", flexDirection:"column", gap:14,
                  flex:1,
                }}>
                  {p.features.map((f, fi) => (
                    <div key={fi} style={{
                      display:"flex", gap:12, alignItems:"flex-start",
                      paddingBottom:14,
                      borderBottom: fi < p.features.length - 1 ? "1px dashed var(--line-soft)" : "0",
                    }}>
                      <span style={{
                        width:20, height:20, borderRadius:"50%",
                        background: f.highlight ? "var(--accent)" : "var(--primary)",
                        color:"#fff",
                        display:"flex", alignItems:"center", justifyContent:"center",
                        flexShrink:0, fontSize:11, fontWeight:800, marginTop:2,
                      }}>✓</span>
                      <div style={{flex:1}}>
                        <div style={{
                          fontSize:14, fontWeight:700,
                          color: f.highlight ? "var(--accent)" : "var(--text)",
                          lineHeight:1.55,
                        }}>{f.label}</div>
                        {f.sub && (
                          <div style={{fontSize:11.5, fontWeight:500, color:"var(--sub)", marginTop:2}}>
                            {f.sub}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{padding:"16px 24px 24px"}}>
                  <a href="#contact" className={p.featured ? "btn btn-primary" : "btn btn-ghost"} style={{
                    width:"100%", padding:"14px 20px", fontSize:14,
                  }}>
                    このプランを試す <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ⑥想い+3者WIN ────────────────────────────────────────────────────────────
function Philosophy() {
  return (
    <section id="philosophy">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">PHILOSOPHY</div>
          <h2 className="section-title">
            なぜ、私たちは<br/>
            このサービスをやっているか。
          </h2>
        </div>

        <div style={{
          maxWidth:780, margin:"0 auto",
          fontSize:15.5, color:"var(--text)", lineHeight:2.15,
        }}>
          <p style={{margin:"0 0 1.4em"}}>
            人材紹介という事業は、結局のところ、<strong>決定数が出なければ成り立ちません。</strong>
          </p>
          <p style={{margin:"0 0 1.4em"}}>
            数を追うサービスはたくさんあります。質を磨くサービスもあります。けれど、最終的に<strong style={{color:"var(--primary)"}}>「人材紹介会社の売上」にコミットしているサービス</strong>は、実は多くありません。
          </p>
          <p style={{margin:"0 0 1.4em"}}>
            私たちが追っているKGIは、応募数でも、有効応募数でもなく、<strong style={{color:"var(--accent)"}}>貴社の売上</strong>です。
          </p>

          <PhiloHeading>担当者の動線設計まで、伴走します。</PhiloHeading>
          <p style={{margin:"0 0 1.4em"}}>
            有効応募を届けるだけでは、売上にはなりません。担当者が、目の前の応募者からどう紹介を組み立てるか。どうご経歴を整理し、どの企業に、どの順番で推薦するか。
          </p>
          <p style={{margin:"0 0 1.4em"}}>
            その動線が描けないと、決定までは届かない。だから私たちは、運用と並走しながら、<strong>担当者の動線設計（コンサル）</strong>までを伴走します。
          </p>

          <PhiloHeading>運用を支えてくれているのは、障害者施設の利用者様です。</PhiloHeading>
          <p style={{margin:"0 0 1.4em"}}>
            求人入稿・投稿運用・PDCAの実務を、施設の皆様と一緒に回しています。さらに、求人ボックスの正規代理店資格を施設に取得いただくことで、<strong>広告費の一部が施設に還元される</strong>仕組みも組み込みました。
          </p>
        </div>

        {/* 3者WIN */}
        <div style={{
          marginTop:64, padding:"44px 36px",
          background:"#fff", borderRadius:16,
          border:"1px solid var(--line)",
          boxShadow:"0 8px 24px rgba(30,95,168,0.06)",
          maxWidth:980, margin:"64px auto 0",
        }}>
          <div style={{textAlign:"center", marginBottom:36}}>
            <div style={{fontSize:12, color:"var(--accent)", fontWeight:700, letterSpacing:"0.12em"}}>3-WAY WIN</div>
            <h3 style={{
              fontSize:"clamp(22px, 2.8vw, 28px)",
              fontWeight:800, color:"var(--primary)", marginTop:10,
              lineHeight:1.5,
            }}>
              3者すべてが、WINになるサービスでありたい。
            </h3>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:0}} className="three-way-grid">
            {[
              {who:"人材紹介会社", title:"決定数の安定", desc:"有効応募と動線設計の伴走で、月次の決定数が読める事業に。", color:"var(--primary)", bg:"#EEF3FB", icon:"agency"},
              {who:"IDEAL RECRUIT", title:"事業継続", desc:"運用代行と顧客の成功と共に、長く事業を続けられる仕組みに。", color:"var(--accent)", bg:"#FFE9EC", icon:"us"},
              {who:"障害者施設", title:"経済的自立", desc:"求人運用業務の委託と、代理店資格による広告費の還元。", color:"var(--dark)", bg:"var(--bg-blue)", icon:"facility"},
            ].map((c, i) => (
              <div key={c.who} style={{
                padding:"28px 22px",
                textAlign:"center",
                borderRight: i < 2 ? "1px dashed var(--line)" : "0",
                position:"relative",
              }}>
                <WinIcon kind={c.icon} color={c.color} bg={c.bg} />
                <div style={{fontSize:11, color:"var(--sub)", fontWeight:600, marginTop:16, letterSpacing:"0.1em"}}>FOR</div>
                <div style={{fontSize:17, color:c.color, fontWeight:800, marginTop:4}}>{c.who}</div>
                <div style={{
                  fontSize:15, fontWeight:700, color:"var(--text)",
                  marginTop:14, paddingTop:14, borderTop:"1px solid var(--line-soft)",
                }}>{c.title}</div>
                <p style={{fontSize:12.5, color:"var(--sub)", lineHeight:1.9, margin:"8px 0 0"}}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop:40, padding:"22px 28px",
            background:"linear-gradient(135deg, #EEF3FB 0%, #FFE9EC 100%)",
            borderRadius:12, textAlign:"center",
            fontSize:"clamp(15px, 1.9vw, 18px)", fontWeight:700,
            color:"var(--primary)", lineHeight:1.85,
          }}>
            人材紹介会社の決定数。私たちの事業継続。障害者施設の経済的自立。<br/>
            <span style={{color:"var(--accent)"}}>この3者すべてがWINになるサービスでありたい。それが、IDEAL RECRUITの姿です。</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhiloHeading({ children }) {
  return (
    <h3 style={{
      fontSize:"clamp(18px, 2.2vw, 22px)",
      fontWeight:800, color:"var(--primary)",
      marginTop:48, marginBottom:18,
      paddingBottom:10, borderBottom:"2px solid var(--primary)",
      lineHeight:1.5,
    }}>{children}</h3>
  );
}

function WinIcon({ kind, color, bg }) {
  const size = 64;
  if (kind === "agency") {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill={bg}/>
        <rect x="16" y="20" width="32" height="28" rx="2" fill={color}/>
        <rect x="21" y="25" width="8" height="2.5" fill="#fff"/>
        <rect x="21" y="30" width="18" height="2.5" fill="#fff"/>
        <rect x="21" y="35" width="14" height="2.5" fill="#fff"/>
        <circle cx="42" cy="40" r="6" fill="#F26B7C"/>
        <path d="M39 40 L41 42 L45 38" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (kind === "us") {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill={bg}/>
        <path d="M32 14 L42 28 L32 34 L22 28 Z" fill={color}/>
        <rect x="25" y="34" width="14" height="18" rx="1.5" fill="#1E5FA8"/>
        <circle cx="32" cy="22" r="3" fill="#fff"/>
        <rect x="28" y="42" width="8" height="2" fill="#fff" opacity="0.7"/>
      </svg>
    );
  }
  // facility
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill={bg}/>
      <path d="M32 14 L48 26 V48 H16 V26 Z" fill={color}/>
      <rect x="27" y="34" width="10" height="14" fill="#fff"/>
      <circle cx="24" cy="28" r="2.5" fill="#fff"/>
      <circle cx="40" cy="28" r="2.5" fill="#fff"/>
      <path d="M22 50 Q32 44 42 50" stroke="#fff" strokeWidth="2" fill="none" opacity="0.6"/>
    </svg>
  );
}

// ─── お問い合わせ ────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe51awX9G0dUX7MOb1HkZj4z0PKmUvTiEk7UZFkR61JnqXTZA/formResponse";

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.target);
    const body = new URLSearchParams(fd).toString();
    fetch(FORM_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
      .then(() => { setSent(true); setLoading(false); })
      .catch(() => { setSent(true); setLoading(false); });
  }

  return (
    <section id="contact" style={{background:"var(--bg-light)"}}>
      <div className="wrap-narrow">
        <div className="section-head">
          <div className="section-eyebrow">CONTACT</div>
          <h2 className="section-title">お問い合わせ</h2>
          <p className="section-sub">
            まずはお気軽にご相談ください。1営業日以内に担当よりご連絡いたします。
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            background:"#fff",
            border:"1px solid var(--line)",
            borderRadius:12,
            padding:"40px",
            boxShadow:"0 8px 24px rgba(30,95,168,0.06)",
          }}
        >
          {sent ? (
            <div style={{padding:"48px 0", textAlign:"center"}}>
              <div style={{
                width:64, height:64, borderRadius:"50%",
                background:"var(--primary)", color:"#fff",
                display:"flex", alignItems:"center", justifyContent:"center",
                margin:"0 auto 20px",
                fontSize:32, fontWeight:700,
              }}>✓</div>
              <h3 style={{fontSize:22, fontWeight:800, color:"var(--text)"}}>
                送信が完了しました。
              </h3>
              <p style={{marginTop:14, color:"var(--sub)", fontSize:15}}>
                1営業日以内に、担当よりご連絡いたします。
              </p>
            </div>
          ) : (
            <div style={{display:"flex", flexDirection:"column", gap:22}}>
              <Field label="会社名" required>
                <input type="text" name="entry.1126552359" placeholder="株式会社〇〇" />
              </Field>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}} className="contact-row">
                <Field label="お名前" required>
                  <input type="text" name="entry.646307458" placeholder="山田 太郎" />
                </Field>
                <Field label="部署・役職">
                  <input type="text" name="entry.958837037" placeholder="代表取締役" />
                </Field>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}} className="contact-row">
                <Field label="メールアドレス" required>
                  <input type="email" name="entry.1041686022" placeholder="name@example.com" />
                </Field>
                <Field label="電話番号">
                  <input type="tel" name="entry.986063571" placeholder="03-0000-0000" />
                </Field>
              </div>
              <Field label="現状の月次面談数">
                <select name="entry.417480949" defaultValue="">
                  <option value="" disabled>選択してください</option>
                  <option>10名未満</option>
                  <option>10〜30名</option>
                  <option>30〜50名</option>
                  <option>50名以上</option>
                </select>
              </Field>
              <Field label="ご相談内容" required>
                <textarea name="entry.1977386434" rows="4" placeholder="集客面でのお困りごと、ご質問など"></textarea>
              </Field>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{
                  marginTop:8, padding:"20px", fontSize:16, width:"100%",
                  opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "送信中..." : <span>送信する <span className="arrow">→</span></span>}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label style={{display:"flex", flexDirection:"column", gap:6}}>
      <span style={{fontSize:13, fontWeight:600, color:"var(--text)"}}>
        {label}
        {required && <span style={{
          color:"var(--accent)", marginLeft:8, fontSize:11,
          background:"#fff0f2", padding:"2px 6px", borderRadius:3,
        }}>必須</span>}
      </span>
      {React.cloneElement(children, {
        required: required,
        style: {
          border:"1px solid var(--line)",
          borderRadius:6,
          padding:"12px 14px",
          fontSize:14,
          fontFamily:"inherit",
          color:"var(--text)",
          outline:"none",
          background:"#fff",
          width:"100%",
          appearance: children.type === "select" ? "none" : undefined,
          transition:"border-color .15s ease",
          resize: children.type === "textarea" ? "vertical" : undefined,
        },
        onFocus: (e) => e.target.style.borderColor = "var(--primary)",
        onBlur: (e) => e.target.style.borderColor = "var(--line)",
      })}
    </label>
  );
}

// ─── 会社情報 ────────────────────────────────────────────────────────────────
function Company() {
  return (
    <section id="company" style={{padding:"72px 0"}}>
      <div className="wrap">
        <div style={{
          display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:48, alignItems:"center",
        }} className="company-grid">
          <div>
            <div className="section-eyebrow">COMPANY</div>
            <h2 className="section-title" style={{textAlign:"left", marginTop:14, fontSize:"clamp(22px, 3vw, 32px)"}}>
              IDEAL RECRUIT 株式会社
            </h2>
            <p style={{marginTop:20, color:"var(--sub)", lineHeight:2, fontSize:14.5}}>
              人材紹介会社の事業成長を、求人ボックスの集客代行で支援しています。
            </p>
          </div>
          <table style={{
            width:"100%", borderCollapse:"collapse", fontSize:14,
          }}>
            <tbody>
              {[
                ["会社名", "IDEAL RECRUIT 株式会社"],
                ["設立", "2021年4月"],
                ["事業内容", "人材紹介会社向け 求職者集客代行"],
                ["所在地", "大阪市福島区福島七丁目1番10号"],
                ["電話", "（フォームよりお問い合わせください）"],
              ].map(([k, v]) => (
                <tr key={k} style={{borderTop:"1px solid var(--line)"}}>
                  <th style={{
                    padding:"14px 0", textAlign:"left", verticalAlign:"top",
                    width:120, fontWeight:600, color:"var(--primary)",
                  }}>{k}</th>
                  <td style={{padding:"14px 0", color:"var(--text)"}}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background:"var(--dark)", color:"rgba(255,255,255,0.7)",
      padding:"56px 0 32px",
    }}>
      <div className="wrap">
        <div style={{
          display:"flex", justifyContent:"space-between", flexWrap:"wrap",
          gap:32, alignItems:"flex-start",
        }}>
          <div>
            <div className="brand" style={{color:"#fff"}}>
              <div className="brand-mark" style={{background:"#fff"}}></div>
              <span>IDEAL&nbsp;RECRUIT</span>
            </div>
            <p style={{marginTop:14, fontSize:13, color:"rgba(255,255,255,0.55)", maxWidth:340, lineHeight:1.9}}>
              人材紹介会社のための、求職者集客代行サービス。
            </p>
          </div>
          <div style={{display:"flex", gap:48, fontSize:13}}>
            <div style={{display:"flex", flexDirection:"column", gap:8}}>
              <span style={{color:"rgba(255,255,255,0.4)", fontWeight:600, marginBottom:4}}>サービス</span>
              <a href="#logic">ロジック</a>
              <a href="#comparison">比較</a>
              <a href="#results">実績</a>
              <a href="#pricing">料金</a>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:8}}>
              <span style={{color:"rgba(255,255,255,0.4)", fontWeight:600, marginBottom:4}}>会社</span>
              <a href="#philosophy">想い</a>
              <a href="#company">会社情報</a>
              <a href="#contact">お問い合わせ</a>
              <a href="#">プライバシーポリシー</a>
            </div>
          </div>
        </div>
        <div style={{
          marginTop:48, paddingTop:24,
          borderTop:"1px solid rgba(255,255,255,0.12)",
          display:"flex", justifyContent:"space-between",
          fontSize:12, color:"rgba(255,255,255,0.4)", flexWrap:"wrap", gap:8,
        }}>
          <span>© 2026 IDEAL RECRUIT 株式会社</span>
          <span>大阪市福島区福島七丁目1番10号</span>
        </div>
      </div>
    </footer>
  );
}

// Responsive
const responsiveCSS = `
@media (max-width: 880px) {
  .hero-grid, .pricing-grid, .results-sample, .company-grid, .three-way-grid, .contact-row, .initial-grid {
    grid-template-columns: 1fr !important;
  }
  .initial-features { grid-template-columns: 1fr !important; }
  .pricing-grid > div { transform: none !important; }
  .three-way-grid > div { border-right: 0 !important; border-bottom: 1px dashed var(--line); padding-bottom: 28px; }
  .three-way-grid > div:last-child { border-bottom: 0; }
  .logic-card { padding: 28px 22px !important; }
}
`;
function ResponsiveStyle() {
  return <style>{responsiveCSS}</style>;
}

Object.assign(window, {
  Nav, Hero, HeroVisual, Check,
  LogicSection, Comparison, Sharing,
  Results, InitialMonthPlan, Pricing,
  Philosophy, WinIcon, PhiloHeading,
  Contact, Field, Company, Footer,
  ResponsiveStyle,
});
