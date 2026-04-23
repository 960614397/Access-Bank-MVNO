import { useState } from "react";

const LOGO = "data:image/png;base64,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";

const or = "#F5A623", nv = "#003B71", dk = "#0A0F1E", dk2 = "#111827", cd = "#151D2E";
const tx = "#E8EDF5", mt = "#8899AA";

const s = {
  body:{ fontFamily:"'DM Sans',sans-serif", background:dk, color:tx, minHeight:"100vh", lineHeight:1.65 },
  ls:{ position:"fixed", inset:0, zIndex:9999, background:dk, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:20 },
  lcard:{ background:cd, border:`1px solid rgba(245,166,35,.15)`, borderRadius:16, padding:"44px 40px", width:"100%", maxWidth:460, textAlign:"center" },
  h2:{ fontFamily:"Georgia,serif", fontSize:24, fontWeight:700, color:"#fff", marginBottom:10 },
  inp:{ width:"100%", padding:"13px 16px", background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", borderRadius:8, color:"#fff", fontSize:14, marginBottom:12, outline:"none", fontFamily:"inherit", display:"block" },
  btn:{ width:"100%", padding:14, background:or, color:"#000", border:"none", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", marginTop:4, fontFamily:"inherit" },
  nav:{ position:"sticky", top:0, zIndex:100, background:"rgba(10,15,30,.95)", borderBottom:`1px solid rgba(245,166,35,.15)`, padding:"0 48px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" },
  badge:{ border:`1.5px solid ${or}`, color:or, fontSize:10, fontWeight:600, padding:"3px 9px", borderRadius:20, letterSpacing:.5 },
  navlink:{ color:mt, textDecoration:"none", fontSize:13, fontWeight:500, marginLeft:28 },
  ncta:{ background:or, color:"#000", padding:"9px 20px", borderRadius:6, fontSize:13, fontWeight:600, textDecoration:"none" },
  sec:{ padding:"80px 60px" },
  si:{ maxWidth:1100, margin:"0 auto" },
  tag:{ display:"inline-block", fontSize:11, fontWeight:600, letterSpacing:1.5, textTransform:"uppercase", color:or, marginBottom:14 },
  h1:{ fontFamily:"Georgia,serif", fontSize:48, fontWeight:800, color:"#fff", lineHeight:1.12, marginBottom:22 },
  em:{ fontStyle:"italic", color:or },
  sub:{ color:mt, fontSize:15, lineHeight:1.7, marginBottom:28, maxWidth:500 },
  h2t:{ fontFamily:"Georgia,serif", fontSize:36, fontWeight:800, color:"#fff", lineHeight:1.2, marginBottom:14 },
  card:{ background:cd, border:`1px solid rgba(245,166,35,.15)`, borderRadius:12, padding:26, transition:"border-color .2s" },
  ct:{ fontSize:15, fontWeight:600, color:"#fff", marginBottom:7 },
  cx:{ fontSize:13, color:mt, lineHeight:1.6 },
  tag_o:{ background:"rgba(245,166,35,.15)", color:or, fontSize:10, fontWeight:600, padding:"3px 8px", borderRadius:20, display:"inline-block", marginRight:5, marginTop:8 },
  tag_b:{ background:"rgba(0,102,204,.2)", color:"#60A5FA", fontSize:10, fontWeight:600, padding:"3px 8px", borderRadius:20, display:"inline-block", marginRight:5, marginTop:8 },
  statnum:{ fontFamily:"Georgia,serif", fontSize:36, fontWeight:700, color:or, lineHeight:1 },
  statlab:{ fontSize:12, color:mt, marginTop:4, lineHeight:1.4 },
  row2:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"start" },
  row3:{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:20 },
  cg:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:18, marginTop:36 },
  tl_dot:{ position:"absolute", left:-25, top:4, width:12, height:12, background:or, borderRadius:"50%", border:`2px solid ${dk2}` },
  tl_gate:{ background:"rgba(245,166,35,.1)", border:`1px solid rgba(245,166,35,.3)`, borderRadius:5, padding:"4px 10px", fontSize:10, fontWeight:600, color:or, display:"inline-block", marginBottom:5 },
  quote:{ borderLeft:`3px solid ${or}`, padding:"20px 28px", background:"rgba(245,166,35,.05)", borderRadius:"0 10px 10px 0", margin:"36px 0" },
  hbox:{ background:"rgba(245,166,35,.06)", border:`1px solid rgba(245,166,35,.2)`, borderRadius:10, padding:24, marginTop:28 },
  dt_th:{ textAlign:"left", fontSize:10, textTransform:"uppercase", letterSpacing:1, color:mt, padding:"10px 14px", borderBottom:`1px solid rgba(245,166,35,.15)` },
  dt_td:{ padding:"12px 14px", fontSize:13, color:tx, borderBottom:"1px solid rgba(255,255,255,.04)" },
  pc_feat:{ background:cd, border:`1px solid ${or}`, borderRadius:14, padding:28, position:"relative", background:"linear-gradient(135deg,rgba(245,166,35,.08) 0%,#151D2E 60%)" },
  pc_norm:{ background:cd, border:`1px solid rgba(245,166,35,.15)`, borderRadius:14, padding:28, position:"relative" },
  uc:{ background:cd, border:`1px solid rgba(245,166,35,.15)`, borderRadius:12, padding:24 },
};

const NavLink = ({href, children}) => <a href={href} style={s.navlink}>{children}</a>;

const Card = ({icon, title, text, tags}) => (
  <div style={s.card}>
    <div style={{fontSize:22, marginBottom:10}}>{icon}</div>
    <div style={s.ct}>{title}</div>
    <div style={s.cx}>{text}</div>
    {tags && <div style={{marginTop:8}}>{tags.map(([t,c])=><span key={t} style={c==="o"?s.tag_o:s.tag_b}>{t}</span>)}</div>}
  </div>
);

const Stat = ({n, l}) => (
  <div><div style={s.statnum}>{n}</div><div style={s.statlab}>{l}</div></div>
);

const StatsBox = ({stats}) => (
  <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20, marginTop:36, padding:32, background:cd, border:`1px solid rgba(245,166,35,.15)`, borderRadius:14}}>
    {stats.map(([n,l])=><Stat key={l} n={n} l={l}/>)}
  </div>
);

const SectionTag = ({children}) => <div style={s.tag}>{children}</div>;
const SectionTitle = ({children}) => <h2 style={s.h2t}>{children}</h2>;
const SectionSub = ({children}) => <p style={{...s.sub, marginBottom:0}}>{children}</p>;

const HBox = ({title,children}) => (
  <div style={s.hbox}>
    <div style={{color:or,fontSize:11,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>{title}</div>
    <div style={{fontSize:13,color:tx,lineHeight:1.65}}>{children}</div>
  </div>
);

const TL = ({items}) => (
  <div style={{position:"relative", paddingLeft:28}}>
    <div style={{position:"absolute",left:6,top:8,bottom:8,width:2,background:"rgba(245,166,35,.15)"}}/>
    {items.map(({gate,title,text},i)=>(
      <div key={i} style={{position:"relative",marginBottom:24}}>
        <div style={s.tl_dot}/>
        {gate && <div style={s.tl_gate}>{gate}</div>}
        <div style={{fontSize:14,fontWeight:600,color:"#fff"}}>{title}</div>
        {text && <div style={{fontSize:12,color:mt,marginTop:3}}>{text}</div>}
      </div>
    ))}
  </div>
);

const CheckList = ({items}) => (
  <ul style={{listStyle:"none",margin:0,padding:0}}>
    {items.map((it,i)=>(
      <li key={i} style={{padding:"7px 0",borderBottom:"1px solid rgba(255,255,255,.05)",fontSize:13,color:tx,display:"flex",alignItems:"center",gap:8}}>
        <span style={{color:or,fontWeight:700,minWidth:14}}>✓</span>{it}
      </li>
    ))}
  </ul>
);

const DT = ({headers,rows}) => (
  <table style={{width:"100%",borderCollapse:"collapse",marginTop:28}}>
    <thead><tr>{headers.map(h=><th key={h} style={s.dt_th}>{h}</th>)}</tr></thead>
    <tbody>{rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j} style={s.dt_td}>{c}</td>)}</tr>)}</tbody>
  </table>
);

const UCCard = ({icon,title,sub,body,outcome}) => (
  <div style={s.uc}>
    <div style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:10}}>
      <span style={{fontSize:20,flexShrink:0,marginTop:2}}>{icon}</span>
      <div>
        <div style={{fontSize:14,fontWeight:600,color:"#fff"}}>{title}</div>
        <div style={{fontSize:11,color:mt,marginTop:1}}>{sub}</div>
      </div>
    </div>
    <div style={{fontSize:12,color:mt,lineHeight:1.6}}>{body}</div>
    <div style={{marginTop:10,fontSize:11,color:tx,background:"rgba(245,166,35,.08)",borderRadius:5,padding:"6px 10px"}}>
      <span style={{color:or,fontWeight:700}}>✓ </span>{outcome}
    </div>
  </div>
);

const Phone = () => (
  <div style={{width:260,background:"#1A2235",borderRadius:32,border:"2px solid rgba(255,255,255,.1)",overflow:"hidden",boxShadow:"0 40px 80px rgba(0,0,0,.5)"}}>
    <div style={{background:or,padding:"12px 16px 8px",display:"flex",justifyContent:"space-between"}}>
      <span style={{fontSize:11,fontWeight:700,color:"#000"}}>9:41</span>
      <span style={{fontSize:10,color:"rgba(0,0,0,.6)"}}>▲▲ ■</span>
    </div>
    <div style={{background:nv,padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,.06)"}}>
      <div style={{fontSize:10,color:"rgba(255,255,255,.5)",marginBottom:2}}>Welcome back</div>
      <div style={{fontSize:14,fontWeight:700,color:"#fff",letterSpacing:.5}}>ACCESS CONNECT</div>
    </div>
    <div style={{padding:12,background:"#0D1528"}}>
      <div style={{background:cd,border:"1px solid rgba(255,255,255,.07)",borderRadius:10,padding:12,marginBottom:8}}>
        <div style={{fontSize:8,textTransform:"uppercase",letterSpacing:1,color:mt,marginBottom:2}}>Mobile Balance</div>
        <div style={{fontSize:20,fontWeight:700,color:"#fff"}}>3.8 GB</div>
        <div style={{fontSize:9,color:mt,marginTop:2}}>of 5 GB · Access Pan-Africa</div>
        <div style={{display:"inline-block",background:"rgba(245,166,35,.15)",color:or,fontSize:9,fontWeight:600,padding:"2px 7px",borderRadius:20,marginTop:5}}>+480 MB reward</div>
      </div>
      <div style={{background:cd,border:"1px solid rgba(255,255,255,.07)",borderRadius:10,padding:12}}>
        {[["Cross-border transfers","34 this month"],["Zero-rated banking","✓ Active"],["Payment streak","8 weeks"],["Cyber Shield","Protected"]].map(([l,v])=>(
          <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
            <span style={{fontSize:10,color:mt}}>{l}</span>
            <span style={{fontSize:10,fontWeight:600,color:v.startsWith("✓")||v==="Protected"?"#4ADE80":"#fff"}}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);

  const login = () => {
    if (user.trim()==="accessbank" && pass.trim()==="AccessBank2026") {
      setUnlocked(true);
    } else {
      setErr(true);
      setPass("");
    }
  };

  if (!unlocked) return (
    <div style={s.body}>
      <div style={s.ls}>
        <div style={{marginBottom:32}}><img src={LOGO} alt="Access Bank" style={{height:44,filter:"brightness(0) invert(1)"}}/></div>
        <div style={s.lcard}>
          <div style={{width:56,height:56,background:"rgba(245,166,35,.12)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 22px",fontSize:24}}>🔒</div>
          <h2 style={s.h2}>Access Document</h2>
          <p style={{color:mt,fontSize:13,marginBottom:26,lineHeight:1.6}}>This document is confidential and for authorised recipients only. Enter your credentials to continue.</p>
          <input style={s.inp} placeholder="Username" value={user} onChange={e=>setUser(e.target.value)} onKeyDown={e=>e.key==="Enter"&&login()} autoComplete="off"/>
          <input style={s.inp} type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} onKeyDown={e=>e.key==="Enter"&&login()} autoComplete="off"/>
          <button style={s.btn} onClick={login}>Access Document →</button>
          {err && <div style={{color:"#FF6B6B",fontSize:12,marginTop:10}}>Incorrect credentials. Please try again.</div>}
        </div>
        <div style={{marginTop:36,color:mt,fontSize:11,textAlign:"center"}}>🔒 Confidential · DSG / Broadbrand © 2026 · <span style={{color:or}}>Access Bank</span> MVNO Workshop · 28 April 2026</div>
      </div>
    </div>
  );

  return (
    <div style={s.body}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; } html { scroll-behavior: smooth; }`}</style>

      {/* NAV */}
      <nav style={s.nav}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <img src={LOGO} alt="Access Bank" style={{height:30}}/>
          <span style={s.badge}>MVNO 2026</span>
        </div>
        <div style={{display:"flex",gap:0}}>
          {["#why","#cvp","#vas","#usecases","#evp","#models","#methodology"].map((h,i)=>(
            <NavLink key={h} href={h}>{["Why MVNOs","CVP","VAS","Use Cases","EVP","Models","Methodology"][i]}</NavLink>
          ))}
        </div>
        <a href="#contact" style={s.ncta}>Get in touch</a>
      </nav>

      {/* HERO */}
      <section id="hero" style={{...s.sec, minHeight:"88vh", background:`radial-gradient(ellipse at 70% 50%,rgba(0,59,113,.35) 0%,transparent 60%),${dk}`, display:"flex", alignItems:"center"}}>
        <div style={{...s.si, display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center"}}>
          <div>
            <div style={{display:"inline-block",border:`1px solid rgba(245,166,35,.4)`,background:"rgba(245,166,35,.08)",color:or,fontSize:10,fontWeight:600,letterSpacing:1,textTransform:"uppercase",padding:"6px 14px",borderRadius:20,marginBottom:24}}>WORKSHOP · 28 APRIL 2026 · JOHANNESBURG</div>
            <h1 style={s.h1}>A banking-led MVNO <em style={s.em}>built around</em> the Access Bank customer.</h1>
            <p style={s.sub}>The Access Bank Pan-African Financial Connectivity Platform — turning everyday connectivity into cross-border payment power, customer loyalty, and pan-African financial inclusion.</p>
            <p style={{...s.sub,color:or,fontWeight:600,marginBottom:32}}>Not a telecom product. A pan-African financial growth engine.</p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a href="#usecases" style={{background:or,color:"#000",padding:"13px 24px",borderRadius:7,fontWeight:600,fontSize:14,textDecoration:"none"}}>Explore Use Cases →</a>
              <a href="#models" style={{border:"1.5px solid rgba(255,255,255,.2)",color:"#fff",padding:"13px 24px",borderRadius:7,fontWeight:500,fontSize:14,textDecoration:"none"}}>View Pricing Models</a>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginTop:44}}>
              {[["20–40%","ARPU increase via layered VAS"],["3×","Higher LTV with bundled VAS"],["11","Differentiated Access Bank use cases"],["71%","More loyal via personalisation"]].map(([n,l])=><Stat key={l} n={n} l={l}/>)}
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}><Phone/></div>
        </div>
      </section>

      {/* DSG */}
      <section id="dsg" style={{...s.sec, background:dk2}}>
        <div style={s.si}>
          <SectionTag>About DSG / Broadbrand</SectionTag>
          <SectionTitle>25+ years building <em style={s.em}>Africa's telco future</em></SectionTitle>
          <SectionSub>From founding in 1998 to launching Africa's leading MVNE platform, DSG and Broadbrand bring deep operational expertise, award-winning CX capability, and proven MVNO success across the continent.</SectionSub>
          <div style={{...s.row2, marginTop:40}}>
            <TL items={[
              {title:"1998 — Founded",text:"CXG, UPay, UFreight, DigitalMall established"},
              {title:"2000 — FTSE 250 listed entity"},
              {title:"2006–2008 — Pan-African Telco",text:"Cell One Namibia · Sasatel Tanzania · Broadband Uganda"},
              {title:"2012 — broadbrand launched"},
              {title:"2013 — eMVNE launched"},
              {title:"2018 — Digital Resilience"},
              {title:"2024 — eInsurer (Cyber Insurance)"},
            ]}/>
            <div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,padding:24,background:cd,border:`1px solid rgba(245,166,35,.15)`,borderRadius:14}}>
                {[["1,000+","Contact centre seats, JHB & Cape Town"],["6","Office locations across Africa & Seychelles"],["10+","Industry sectors served"],["25+","Years of telco & CX expertise"]].map(([n,l])=><Stat key={l} n={n} l={l}/>)}
              </div>
              <HBox title="Key Clients">
                <div style={{marginBottom:4}}><strong style={{color:"#fff"}}>Financial:</strong> FNB · Standard Bank · Capitec · Absa · Investec</div>
                <div style={{marginBottom:4}}><strong style={{color:"#fff"}}>Telco:</strong> MTN · Vodacom · Telkom · Rain · Kliq</div>
                <div><strong style={{color:"#fff"}}>Retail:</strong> SPAR · Woolworths · Pepkor · SAA · Gautrain</div>
              </HBox>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" style={{...s.sec, background:dk}}>
        <div style={s.si}>
          <SectionTag>Why MVNOs Matter</SectionTag>
          <SectionTitle>MVNOs are no longer side projects. <em style={s.em}>They are strategic digital brands.</em></SectionTitle>
          <SectionSub>Success requires more than network access. It takes alignment across five dimensions — and Access Bank is uniquely positioned to execute on all five.</SectionSub>
          <StatsBox stats={[["40%+","Churn without great CX — MVNO Nation Study"],["20–40%","ARPU increase through layered VAS"],["3×","Higher LTV per user with bundled VAS"],["71%","More likely to report loyalty — Zendesk"]]}/>
          <div style={s.cg}>
            <Card icon="📡" title="CVP" text="A value proposition that resonates deeply with your target audience. Not connectivity — relevance."/>
            <Card icon="📊" title="Marketing" text="Scalable, data-driven customer acquisition and retention. AI-powered campaigns that scale."/>
            <Card icon="💎" title="Customer Value" text="Maximise ARPU, engagement, and brand lifetime value through smart segmentation and CVM."/>
            <Card icon="✨" title="Customer Experience" text="Frictionless, digital-first and emotionally intelligent — from onboarding to loyalty journeys."/>
            <Card icon="🔗" title="VAS" text="Smart service bundling that unlocks loyalty and margin. Every service is a reason to stay."/>
            <div style={{...s.card,background:"rgba(245,166,35,.06)",border:`1px solid rgba(245,166,35,.3)`}}>
              <div style={{fontSize:22,marginBottom:10}}>❌</div>
              <div style={s.ct}>The MVNO Fallacy</div>
              <div style={s.cx}>NOT just about tech. NOT copying the MNO. NOT enough to launch with low prices. <strong style={{color:"#fff"}}>IS</strong> about building a business with its own brand logic and economics.</div>
            </div>
          </div>
          <div style={s.quote}><p style={{fontFamily:"Georgia,serif",fontSize:18,fontStyle:"italic",color:"#fff",lineHeight:1.5}}>"MVNOs don't compete on price. They win on value."</p><cite style={{display:"block",marginTop:8,fontSize:11,color:mt,fontStyle:"normal"}}>— #DoingSomethingGreat</cite></div>
        </div>
      </section>

      {/* CVP */}
      <section id="cvp" style={{...s.sec, background:dk2}}>
        <div style={s.si}>
          <SectionTag>Customer Value Proposition</SectionTag>
          <SectionTitle>Great CVPs don't just sell connectivity. <em style={s.em}>They sell relevance.</em></SectionTitle>
          <SectionSub>The CVP is Access Bank's strategic weapon — aligning with brand equity, how customers bank, and Africa's unmet financial connectivity needs.</SectionSub>
          <HBox title="Core Positioning">"AN MVNO IS A DIGITAL DELIVERY PLATFORM OFFERING UNPRECEDENTED VALUE, ANALYTICS & ENGAGEMENT" — Access Bank's banking relationship embedded in connectivity creates a proposition no pure telco can replicate.</HBox>
          <div style={s.cg}>
            <Card icon="💰" title="High Perceived Value, Low Cost" text="2GB data retail value R160/pm vs R39 actual cost — an extraordinary rewards mechanism for banking and payment behaviour."/>
            <Card icon="📱" title="Passive Behavioural Data" text="The SIM becomes a data asset enabling one-to-one personalised marketing and smarter financial product decisions."/>
            <Card icon="🤝" title="Greater Customer Entanglement" text="Deep daily integration into banking behaviour reduces churn and dramatically increases transaction frequency and lifetime value."/>
            <Card icon="🌍" title="Pan-African Ecosystem Growth" text="A vehicle to stimulate cross-border commerce, merchant adoption, diaspora engagement, and financial inclusion at scale."/>
          </div>
          <DT headers={["Dimension","Validation Question"]} rows={[
            ["Offering","Is the offering differentiated — not just cheaper?"],
            ["Value","Can we prove value through case studies or trials?"],
            ["Alignment","Are we aligned with target segment expectations?"],
            ["Goals","Does the CVP support long-term brand and margin goals?"],
          ]}/>
        </div>
      </section>

      {/* VAS */}
      <section id="vas" style={{...s.sec, background:dk}}>
        <div style={s.si}>
          <SectionTag>Value-Added Services</SectionTag>
          <SectionTitle>VAS = Revenue + Differentiation + Retention</SectionTitle>
          <SectionSub>MVNOs win when they monetise beyond connectivity. Access Bank has the ecosystem to stack unique VAS no pure telco can replicate.</SectionSub>
          <div style={s.cg}>
            <Card icon="🏦" title="Mobile Financial Services" text="Wallets, loans, insurance, payments via UPay — the natural extension of Access Bank's payments infrastructure into mobile." tags={[["Revenue","o"],["Stickiness","b"]]}/>
            <Card icon="🔒" title="Cybersecurity & Parental Controls" text="Bitdefender #1 ranked protection, Africa-exclusive via Digital Resilience. Antivirus, VPN, identity protection, parental controls." tags={[["Revenue","o"],["Stickiness","b"]]}/>
            <Card icon="🛡️" title="Personal Cyber Insurance" text="eInsurer — theft of funds, ID theft, cyberbullying, ransomware. Three tiers: MEGA, GIGA, TERA." tags={[["Revenue","o"],["High Margin","o"]]}/>
            <Card icon="🚗" title="Driver Safety & Telematics" text="Sentiance on-device AI — driving scores, crash detection, lifestyle insights. Used by Uber, Absa, State Farm." tags={[["Revenue","o"],["Differentiation","b"]]}/>
            <Card icon="📶" title="eSIM & Roaming Packs" text="Dual eSIM for local + global coverage. Essential for cross-border traders, diaspora, and pan-African remittance customers." tags={[["Revenue","o"],["Cross-border","b"]]}/>
            <Card icon="🎮" title="Loyalty & Cashback" text="Gamified rewards — points, streaks, levels. Powered by Xanite's real-time campaign engine tied to banking activity." tags={[["Retention","b"],["Stickiness","b"]]}/>
            <Card icon="❤️" title="Health & Wellness" text="Telehealth, fitness, mental wellbeing — turning the SIM into a daily health companion that strengthens the customer relationship." tags={[["Retention","b"],["Stickiness","b"]]}/>
            <Card icon="🏢" title="SME Tools" text="Email, CRM, invoicing — a business productivity suite for merchants and SMEs using Access Bank financial rails." tags={[["Revenue","o"],["High Margin","o"]]}/>
          </div>
          <div style={{...s.row2, marginTop:48}}>
            <div>
              <h3 style={{fontSize:20,fontFamily:"Georgia,serif",color:"#fff",marginBottom:8}}>Cybersecurity as a Strategic VAS</h3>
              <p style={{fontSize:13,color:mt,marginBottom:16}}>DSG holds exclusive Africa distribution rights for Bitdefender via Digital Resilience.</p>
              <div style={s.card}>
                <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:1,color:or,marginBottom:10}}>Multi-Access Security Suite</div>
                <CheckList items={["Advanced antivirus and malware protection","Safe browsing and real-time threat detection","Identity protection and online privacy","Secure VPN for encrypted connectivity","Cross-platform: Windows · Android · iOS · Chromebook"]}/>
              </div>
            </div>
            <div>
              <div style={{...s.card,marginBottom:14}}>
                <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:1,color:or,marginBottom:10}}>Parental Controls</div>
                <CheckList items={["App filtering and blocking","Screen time and usage limits","Location tracking and geofencing alerts","Activity reports and behaviour insights","Centralised management across all child devices"]}/>
              </div>
              <div style={{background:"rgba(245,166,35,.08)",border:`1px solid rgba(245,166,35,.25)`,borderRadius:10,padding:18,textAlign:"center"}}>
                <div style={{fontFamily:"Georgia,serif",fontSize:48,fontWeight:700,color:or}}>66%</div>
                <div style={{fontSize:12,color:tx}}>of parents worry about what apps their children are using</div>
              </div>
            </div>
          </div>
          <div style={{...s.row2, marginTop:48}}>
            <div>
              <h3 style={{fontSize:18,fontWeight:700,color:"#fff",marginBottom:8}}>eInsurer — Personal Cyber Insurance</h3>
              <p style={{fontSize:13,color:mt,marginBottom:14}}>Partners: Hippo.co.za · King Price · Blink by MiWay</p>
              <CheckList items={["Theft of funds via mobile banking or digital wallets","Identity theft and document fraud","Cyberbullying and online harassment","Cyber extortion and ransomware","Data loss and device compromise","Trauma counselling and school relocation for affected children"]}/>
            </div>
            <div>
              <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:1,color:or,marginBottom:12}}>Tiered Modules</div>
              {[["MEGA","Theft of funds"],["GIGA","Theft + ID Theft + Cyberbullying"],["TERA","Full coverage including privacy & liability claims"]].map(([t,d])=>(
                <div key={t} style={{...s.card,marginBottom:10}}><div style={s.ct}>{t}</div><div style={s.cx}>{d}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases" style={{...s.sec, background:dk2}}>
        <div style={s.si}>
          <SectionTag>Access Bank Use Cases</SectionTag>
          <SectionTitle>A unique value proposition for <em style={s.em}>Access Bank</em></SectionTitle>
          <SectionSub>Positioned not as a telecom provider, but as the Access Pan-African Financial Connectivity Platform. This is not telecom — it's a cross-border financial growth engine.</SectionSub>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginTop:36}}>
            <UCCard icon="💳" title="Pan-African Banking SIM" sub="Unified SIM/eSIM across African markets" body="Zero-rated banking apps across countries. Single customer identity across regions. Seamless onboarding and usage." outcome="True pan-African financial access — not local banking"/>
            <UCCard icon="⚡" title="Cross-Border Remittance Engine" sub="MVNO embedded in remittance flows" body="Zero-rated transfers between Access Bank customers. Data/airtime rewards for remittances. Instant cross-border payment incentives." outcome="Core transaction revenue driver"/>
            <UCCard icon="🌍" title="Diaspora Connectivity Platform" sub="Banking + connectivity for African diaspora" body="International travel eSIMs. Seamless remittance & banking access. Bundled FX & connectivity offers." outcome="Higher CLV for international users"/>
            <UCCard icon="🏪" title="SME & Cross-Border Trade" sub="Connectivity for import/export SMEs" body="Business eSIM for multi-country operations. Payment tracking. Trade finance integration." outcome="Access becomes trade enablement partner, not just a bank"/>
            <UCCard icon="🏦" title="Salary & Workforce Banking" sub="MVNO bundled into corporate banking" body="Connectivity linked to salary accounts. Cross-border employee banking. Incentives for primary bank usage." outcome="Predictable recurring revenue + stronger employer partnerships"/>
            <UCCard icon="🚀" title="Youth & Digital Banking Growth" sub="Acquire mobile-first customers at scale" body="Data bundles linked to account activity. Rewards for app usage and savings. Zero-rated onboarding." outcome="Rapid acquisition + long-term engagement"/>
            <UCCard icon="💡" title="Lending & Credit Behaviour Engine" sub="Use connectivity to influence repayments" body="Data rewards for on-time repayments. Behaviour-based credit insights. Incentives tied to loan usage." outcome="Improved repayment rates, reduced defaults"/>
            <UCCard icon="✈️" title="Travel & FX Integration Platform" sub="Extend FX and travel capabilities" body="Travel eSIM bundles. Local data rates linked to FX usage. Incentives for international card spend." outcome="Seamless travel + increased FX usage"/>
          </div>
          <DT headers={["Package","Target Customer","Value"]} rows={[
            ["Access Connect","Retail Customers","Banking + Engagement"],
            ["Access Remit Connect","Remittance Users","Cross-Border Transactions"],
            ["Access SME Connect","Businesses","Trade + Payments"],
            ["Access Travel Connect","Travellers","FX + Travel eSIM"],
            ["Access Diaspora Connect","International Users","Global Banking"],
          ]}/>
        </div>
      </section>

      {/* EVP */}
      <section id="evp" style={{...s.sec, background:dk}}>
        <div style={s.si}>
          <SectionTag>Employee Value Proposition</SectionTag>
          <SectionTitle>Not just an MVNO. An <em style={s.em}>Employee Engagement Platform</em> with connectivity embedded.</SectionTitle>
          <SectionSub>"Your People. Your Bank. Your Smarter Connected Life." — Mobile data becomes a reward, a benefit, and a loyalty currency.</SectionSub>
          <div style={s.cg}>
            {[["1","Reduce Cost of Living","Value data, voice, family SIM extensions, device finance, eSIM benefits and zero-rated banking apps + built-in cybersecurity."],["2","Reward the Right Behaviour","Earn data for hitting targets, completing training, wellness participation, financial education, surveys and referrals."],["3","Unified Super App","HR self-service, payslips, internal comms, emergency notifications, zero-rated intranet, wellness, gamification and learning modules."],["4","Safer Workforce","Bitdefender built-in: device protection, identity monitoring, phishing awareness, cyber education and optional family bundles."],["5","Workforce Intelligence","POPIA-compliant behavioural insights, engagement heatmaps, campaign ROI tracking, churn prediction and location-aware alerts."]].map(([n,t,x])=>(
              <div key={n} style={s.card}>
                <div style={{fontSize:16,background:"rgba(245,166,35,.1)",width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:7,marginBottom:12,fontWeight:700,color:or}}>{n}</div>
                <div style={s.ct}>{t}</div>
                <div style={s.cx}>{x}</div>
              </div>
            ))}
          </div>
          <div style={{...s.row3, marginTop:32}}>
            {[["👥","For HR",["Improved engagement + measurable participation","Lower turnover","Digital workforce enablement"]],["💼","For CFO",["Low CapEx model + predictable OpEx","Revenue share potential","Lower cost-to-serve via digital"]],["🎯","For CEO",["Defensive digital positioning","Data ownership + workforce loyalty moat","Platform expansion capability"]]].map(([icon,title,items])=>(
              <div key={title} style={s.card}>
                <div style={{fontSize:22,marginBottom:8}}>{icon}</div>
                <div style={{...s.ct,color:or,marginBottom:10}}>{title}</div>
                <CheckList items={items}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section id="models" style={{...s.sec, background:dk2}}>
        <div style={s.si}>
          <SectionTag>Engagement Models & Pricing</SectionTag>
          <SectionTitle>Three paths to launch <em style={s.em}>Access Bank Mobile</em></SectionTitle>
          <SectionSub>Choose the model that fits Access Bank's timeline and investment appetite. Charged at whichever is higher — monthly minimum or per-subscriber cost.</SectionSub>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:18,marginTop:36}}>
            <div style={s.pc_norm}>
              <div style={s.ct}>Option 1 — Full MVNO</div>
              <div style={{fontFamily:"Georgia,serif",fontSize:30,fontWeight:700,color:or}}>R2.7M <span style={{fontSize:13,fontFamily:"inherit",color:mt}}>build cost</span></div>
              <div style={{fontSize:11,color:mt,marginTop:2,marginBottom:18}}>Brand new MVNO · 6 months to launch</div>
              <CheckList items={["R400,000/month minimum","R12 per subscriber/month","Your own network name","Fully branded SIM card","OSS / BSS / PCRF / OCS / iPaaS"]}/>
            </div>
            <div style={{...s.pc_feat, position:"relative"}}>
              <div style={{position:"absolute",top:-11,left:"50%",transform:"translateX(-50%)",background:or,color:"#000",fontSize:9,fontWeight:700,padding:"3px 10px",borderRadius:20,whiteSpace:"nowrap"}}>Recommended · Fastest to Market</div>
              <div style={s.ct}>Option 2 — Digital Mobile</div>
              <div style={{fontFamily:"Georgia,serif",fontSize:30,fontWeight:700,color:or}}>R250K <span style={{fontSize:13,fontFamily:"inherit",color:mt}}>build cost</span></div>
              <div style={{fontSize:11,color:mt,marginTop:2,marginBottom:18}}>2 months to launch · fastest path</div>
              <CheckList items={["R75,000/month minimum","R7.50 per subscriber/month","Digital Mobile network","Branded or Digital Mobile SIM","VAS pre-integrated from day one","OSS / BSS / PCRF / OCS / iPaaS"]}/>
            </div>
            <div style={s.pc_norm}>
              <div style={s.ct}>Option 3 — Technology Only</div>
              <div style={{fontFamily:"Georgia,serif",fontSize:30,fontWeight:700,color:or}}>TBD <span style={{fontSize:13,fontFamily:"inherit",color:mt}}>solution dependent</span></div>
              <div style={{fontSize:11,color:mt,marginTop:2,marginBottom:18}}>Brand new MVNO · 6 months to launch</div>
              <CheckList items={["R200–400K/month minimum","R4.50–R12 per subscriber/month","Solution dependent branding","Modular — optional OSS/BSS/PCRF","Technology ownership"]}/>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" style={{...s.sec, background:dk}}>
        <div style={s.si}>
          <SectionTag>Project Methodology</SectionTag>
          <SectionTitle>From viability to full commercial launch <em style={s.em}>in 10 months</em></SectionTitle>
          <SectionSub>MVNE follows a structured engagement model with clear decision gates, combining Access Bank's business intelligence with telco models to deliver a bankable 60-month business plan.</SectionSub>
          <div style={{...s.row2, marginTop:40}}>
            <TL items={[
              {title:"M1–M3 · Commercial Viability Phase",text:"Acquisition, cash flow, bad debt, operating costs, revenue & proposition profitability"},
              {gate:"GATE: Board Approval",title:"M3"},
              {title:"M4 · Implementation Scoping"},
              {title:"M4–M7 · Build, Integrate & Test",text:"Implementation, integration, business simulation & testing"},
              {gate:"GATE: EXCO Approval",title:"M7"},
              {title:"M8–M9 · Soft Launch"},
              {gate:"GATE: Board Approval"},
              {title:"M10 ⭐ Full Commercial Launch"},
            ]}/>
            <div>
              <h3 style={{fontSize:15,fontWeight:600,color:"#fff",marginBottom:14}}>Phase Deliverables</h3>
              {[["MVP","Customer Value Proposition","Packages, deals and specific products forming the launch proposition"],["OM","Operating Model","Technical Architecture & relational diagram between parties"],["GTMP","Go-to-Market Plan","Sales, Distribution, Customer Care and Subscriber Lifecycle Management"],["ICX","Integrated Customer Experience","Customer Journeys and high-level business processes"],["BM","60-Month Business Plan","Granular commercial viability analysis with full sensitivity analysis"]].map(([code,title,desc])=>(
                <div key={code} style={{...s.card,marginBottom:10}}>
                  <div style={s.ct}><span style={{color:or}}>{code}</span> — {title}</div>
                  <div style={s.cx}>{desc}</div>
                </div>
              ))}
              <HBox title="3-Party Operating Model">
                <div style={{marginBottom:4}}><strong style={{color:"#fff"}}>Access Bank</strong> — Brand, go-to-market, customer relationship, loyalty</div>
                <div style={{marginBottom:4}}><strong style={{color:"#fff"}}>MVNE (DSG)</strong> — Technical & network operations, billing, care</div>
                <div><strong style={{color:"#fff"}}>MTN</strong> — Network infrastructure, wholesale billing, SIM procurement</div>
              </HBox>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{...s.sec, background:dk2, textAlign:"center"}}>
        <div style={s.si}>
          <h2 style={{...s.h2t,maxWidth:580,margin:"0 auto 14px"}}>Ready to build <em style={s.em}>Access Bank Mobile</em>?</h2>
          <p style={{...s.sub,margin:"0 auto 32px",textAlign:"center",maxWidth:600}}>The Access Bank financial ecosystem is already built. The MVNO layer turns it into a transaction-driven growth engine that extends reach, drives volume, and creates recurring revenue across Africa.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <a href="mailto:support@dsg.co.za" style={{background:or,color:"#000",padding:"14px 28px",borderRadius:7,fontWeight:600,fontSize:14,textDecoration:"none"}}>Contact DSG / Broadbrand →</a>
            <a href="#methodology" style={{border:"1.5px solid rgba(255,255,255,.2)",color:"#fff",padding:"14px 28px",borderRadius:7,fontWeight:500,fontSize:14,textDecoration:"none"}}>View Methodology</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#060A14",borderTop:`1px solid rgba(245,166,35,.15)`,padding:"48px 60px"}}>
        <div style={{...s.si,display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,marginBottom:40}}>
          <div>
            <img src={LOGO} alt="Access Bank" style={{height:30,filter:"brightness(0) invert(1)",marginBottom:14,display:"block"}}/>
            <p style={{fontSize:12,color:mt,lineHeight:1.6}}>A DSG / Broadbrand initiative in partnership with MTN.<br/>Workshop — 28 April 2026, Johannesburg.<br/>#DoingSomethingGreat</p>
          </div>
          {[["Sections",["#why:Why MVNOs","#cvp:CVP","#vas:VAS","#usecases:Use Cases","#evp:EVP","#models:Models","#methodology:Methodology"]],["Partners",["#vas:Bitdefender / Digital Resilience","#vas:eInsurer","#vas:Sentiance","#vas:Digital Mobile","#vas:Xanite CVM","#vas:UPay"]],["Contact",["mailto:support@dsg.co.za:support@dsg.co.za","tel:+27117597000:+2711 759 7000","https://dsg.co.za:dsg.co.za"]]].map(([title,links])=>(
            <div key={title}>
              <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:1,color:or,marginBottom:12,fontWeight:600}}>{title}</div>
              <ul style={{listStyle:"none"}}>
                {links.map(link=>{const[href,label]=link.split(":");return(<li key={label} style={{marginBottom:7}}><a href={href} style={{fontSize:12,color:mt,textDecoration:"none"}}>{label}</a></li>);})}
              </ul>
            </div>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:22,borderTop:`1px solid rgba(245,166,35,.15)`}}>
          <p style={{fontSize:11,color:mt}}>© 2026 DSG Digital Solutions Group. Confidential — All rights reserved. <span style={{color:or}}>Access Bank</span> MVNO Workshop · 28 April 2026</p>
          <p style={{fontSize:11,color:mt}}>#DoingSomethingGreat</p>
        </div>
      </footer>
    </div>
  );
}
