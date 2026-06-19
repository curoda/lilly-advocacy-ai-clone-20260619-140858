import SiteScripts from "./SiteScripts";

// Workshop registration pages and the privacy policy live on the original
// domain. This is a single-page clone, so these links resolve to the live
// originals to preserve their exact destination and keep them functional.
const ORIGIN = "https://events.helloeiko.com";

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header>
        <nav id="nav" aria-label="Primary">
          <div className="wrap">
            <div className="brand">
              <img src="/eiko-logo-transparent.png" alt="hello EIKO logo" />
              <div className="sep" aria-hidden="true"></div>
              <div className="series">Advocacy AI Training Series</div>
            </div>
            <div className="right">
              <div className="links" id="nav-links">
                <a href="#overview" className="mlink">
                  Overview
                </a>
                <a href="#workshops" className="mlink">
                  Workshops
                </a>
                <a href="#about" className="mlink">
                  About
                </a>
                <a href="#register" className="mlink">
                  Contact
                </a>
                <a href="#workshops" className="reg hide-mob">
                  Register
                </a>
              </div>
              <a
                href="#workshops"
                className="reg show-mob-inline"
                style={{
                  display: "none",
                  background: "var(--coral-btn)",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "13px",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Register
              </a>
              <button
                type="button"
                className="mobile-menu-btn"
                id="mobile-menu-btn"
                aria-label="Open menu"
                aria-expanded="false"
                aria-controls="nav-links"
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  menu
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* HERO / OVERVIEW */}
        <section id="overview">
          <div className="hero">
            <div className="glow" aria-hidden="true"></div>
            <div className="wrap">
              <div className="hero-credit-row">
                <span className="eyebrow hero-eyebrow">AI Training Series</span>
                <span className="hero-divider" aria-hidden="true"></span>
                <span className="hero-lockup">
                  <span className="lbl">Brought to you by</span>
                  <span className="logo-chip">
                    <img src="/lilly-logo-white.png" alt="Eli Lilly" />
                  </span>
                  <span className="lbl">delivered by</span>
                  <img
                    className="eiko-mark"
                    src="/eiko-wordmark-trimmed.png"
                    alt="hello EIKO"
                  />
                </span>
              </div>
              <h1>
                Build the confidence to use AI in{" "}
                <em>mission-driven work.</em>
              </h1>
              <p className="lead">
                A practical training series for teams across the advocacy
                community. Start with shared foundations, then move into
                hands-on practice on the work you do every day.
              </p>
              <div className="ctas">
                <a href="#workshops" className="btn btn-primary">
                  Register{" "}
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
                <a className="btn btn-ghost" href="#workshops">
                  See the workshops
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WORKSHOPS */}
        <section id="workshops" className="section cream">
          <div className="wrap">
            <div className="shead fade-up">
              <span className="eyebrow">The workshops</span>
              <h2>Choose the sessions that fit. Register to hold your spot.</h2>
              <p>
                One hour. Virtual. Each session stands alone. Start with AI
                Fundamentals and a deep dive into your platform of choice, then
                add the topic-focused sessions that fit most with the work that
                you do. All times U.S. Eastern.
              </p>
            </div>
            <div className="wlist">
              <div className="wcat fade-up">
                <h3>Foundations Workshops</h3>
                <p className="wcat-sub">
                  Start here. Build a confident base, then get up and running on
                  a specific tool. One hour each.
                </p>
              </div>

              <div className="witem fade-up">
                <div className="w-icon">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    foundation
                  </span>
                </div>
                <div className="w-info">
                  <div className="tag">Introduction &middot; 1 hour</div>
                  <h3>AI Fundamentals</h3>
                  <p>
                    Your starting point, no experience required. In one hour you
                    will get a clear picture of how AI works, learn the core
                    prompting techniques that make them useful, and see where
                    human judgment and ethics fit in. Built to leave you
                    confident and ready for the next step.
                  </p>
                </div>
                <div className="w-meta">
                  <div className="w-dates">
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Tue, Aug 4 &middot; 10am ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Thu, Aug 6 &middot; 12pm ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Mon, Aug 17 &middot; 10am ET
                    </span>
                  </div>
                  <a className="btn-mini" href={`${ORIGIN}/e/ai-foundations`}>
                    Register{" "}
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="w-platform-group fade-up">
                <div className="w-platform-intro">
                  <div className="w-icon">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      tune
                    </span>
                  </div>
                  <div className="w-info">
                    <div className="tag">Foundations &middot; 1 hour each</div>
                    <h3>Learn your AI platform</h3>
                    <p>
                      Get fully up and running in the tool your team uses, and
                      learn to use it with confidence. Each one-hour deep dive
                      covers setup, how to customize the platform for your role
                      and organization, the key features worth knowing, and the
                      habits that save you real time every day. Pick the platform
                      that fits your work.
                    </p>
                  </div>
                </div>

                <div className="w-deepdives">
                  <div className="wcard fade-up">
                    <div className="w-icon w-icon--logo">
                      <img src="/tool-logos/gemini.svg" alt="Gemini" />
                    </div>
                    <h4>Gemini</h4>
                    <div className="wcard-meta">
                      <span className="w-date">
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          calendar_today
                        </span>
                        Tue, Aug 18 &middot; 10am ET
                      </span>
                      <span className="w-cap">
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          groups
                        </span>
                        Limited to 20
                      </span>
                    </div>
                    <a
                      className="btn-mini"
                      href={`${ORIGIN}/e/gemini-foundations`}
                    >
                      Register{" "}
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </a>
                  </div>

                  <div className="wcard fade-up">
                    <div className="w-icon w-icon--logo">
                      <img src="/tool-logos/copilot.svg" alt="Microsoft Copilot" />
                    </div>
                    <h4>Microsoft Copilot</h4>
                    <div className="wcard-meta">
                      <span className="w-date">
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          calendar_today
                        </span>
                        Tue, Aug 18 &middot; 12pm ET
                      </span>
                      <span className="w-cap">
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          groups
                        </span>
                        Limited to 20
                      </span>
                    </div>
                    <a
                      className="btn-mini"
                      href={`${ORIGIN}/e/copilot-foundations`}
                    >
                      Register{" "}
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </a>
                  </div>

                  <div className="wcard fade-up">
                    <div className="w-icon w-icon--logo">
                      <img src="/tool-logos/claude.svg" alt="Claude" />
                    </div>
                    <h4>Claude</h4>
                    <div className="wcard-meta">
                      <span className="w-date">
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          calendar_today
                        </span>
                        Thu, Aug 20 &middot; 10am ET
                      </span>
                      <span className="w-cap">
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          groups
                        </span>
                        Limited to 20
                      </span>
                    </div>
                    <a
                      className="btn-mini"
                      href={`${ORIGIN}/e/claude-foundations`}
                    >
                      Register{" "}
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </a>
                  </div>

                  <div className="wcard fade-up">
                    <div className="w-icon w-icon--logo">
                      <img src="/tool-logos/chatgpt.svg" alt="ChatGPT" />
                    </div>
                    <h4>ChatGPT</h4>
                    <div className="wcard-meta">
                      <span className="w-date">
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          calendar_today
                        </span>
                        Thu, Aug 20 &middot; 12pm ET
                      </span>
                      <span className="w-cap">
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          groups
                        </span>
                        Limited to 20
                      </span>
                    </div>
                    <a
                      className="btn-mini"
                      href={`${ORIGIN}/e/chatgpt-foundations`}
                    >
                      Register{" "}
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="wcat fade-up">
                <h3>Topic-Focused Workshops</h3>
                <p className="wcat-sub">
                  Apply AI to a specific kind of work. One hour each. Choose the
                  sessions that will help you and your team the most.
                </p>
              </div>

              <div className="witem fade-up">
                <div className="w-icon">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    bolt
                  </span>
                </div>
                <div className="w-info">
                  <div className="tag">Topic-Focused &middot; 1 hour</div>
                  <h3>AI for Everyday Productivity</h3>
                  <p>
                    Use AI to handle the tasks that eat up your week: meeting
                    series summaries, finding and organizing your to do&rsquo;s,
                    crafting pre-reads and agendas and prepping for upcoming
                    meetings. Built for lean teams that need to do more without
                    adding staff.
                  </p>
                </div>
                <div className="w-meta">
                  <div className="w-dates">
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Mon, Aug 24 &middot; 10am ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Wed, Aug 26 &middot; 2pm ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Tue, Sep 1 &middot; 12pm ET
                    </span>
                    <span className="w-cap">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        groups
                      </span>
                      Limited to 20
                    </span>
                  </div>
                  <a
                    className="btn-mini"
                    href={`${ORIGIN}/e/ai-everyday-productivity`}
                  >
                    Register{" "}
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="witem fade-up">
                <div className="w-icon">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    handshake
                  </span>
                </div>
                <div className="w-info">
                  <div className="tag">Topic-Focused &middot; 1 hour</div>
                  <h3>AI for Fundraising &amp; Partnerships</h3>
                  <p>
                    Use AI to research prospects faster, customize existing deck
                    or proposal templates, and personalize donor outreach. Built
                    for development and partnership teams.
                  </p>
                </div>
                <div className="w-meta">
                  <div className="w-dates">
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Mon, Aug 24 &middot; 12pm ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Fri, Aug 28 &middot; 10am ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Tue, Sep 1 &middot; 2pm ET
                    </span>
                    <span className="w-cap">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        groups
                      </span>
                      Limited to 20
                    </span>
                  </div>
                  <a
                    className="btn-mini"
                    href={`${ORIGIN}/e/ai-fundraising-partnerships`}
                  >
                    Register{" "}
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="witem fade-up">
                <div className="w-icon">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    account_balance
                  </span>
                </div>
                <div className="w-info">
                  <div className="tag">Topic-Focused &middot; 1 hour</div>
                  <h3>AI for Advocacy &amp; Policy</h3>
                  <p>
                    Use AI to help your team track and respond to policy faster.
                    Covers summarizing legislation, drafting comment letters and
                    Hill briefing materials, and monitoring state-level bills.
                  </p>
                </div>
                <div className="w-meta">
                  <div className="w-dates">
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Mon, Aug 24 &middot; 2pm ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Fri, Aug 28 &middot; 12pm ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Thu, Sep 3 &middot; 10am ET
                    </span>
                    <span className="w-cap">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        groups
                      </span>
                      Limited to 20
                    </span>
                  </div>
                  <a
                    className="btn-mini"
                    href={`${ORIGIN}/e/ai-advocacy-policy`}
                  >
                    Register{" "}
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="witem fade-up">
                <div className="w-icon">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    school
                  </span>
                </div>
                <div className="w-info">
                  <div className="tag">Topic-Focused &middot; 1 hour</div>
                  <h3>AI for Patient Education &amp; Content</h3>
                  <p>
                    Use AI to turn complex clinical language into content
                    patients can actually use. Learn to rewrite for plain
                    language, adjust reading levels, and adapt clinical
                    guidelines into accessible patient materials faster than ever
                    before.
                  </p>
                </div>
                <div className="w-meta">
                  <div className="w-dates">
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Wed, Aug 26 &middot; 10am ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Fri, Aug 28 &middot; 2pm ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Thu, Sep 3 &middot; 12pm ET
                    </span>
                    <span className="w-cap">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        groups
                      </span>
                      Limited to 20
                    </span>
                  </div>
                  <a
                    className="btn-mini"
                    href={`${ORIGIN}/e/ai-patient-education`}
                  >
                    Register{" "}
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="witem fade-up">
                <div className="w-icon">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    precision_manufacturing
                  </span>
                </div>
                <div className="w-info">
                  <div className="tag">Topic-Focused &middot; 1 hour</div>
                  <h3>Building AI Agents</h3>
                  <p>
                    Move beyond basic prompting. Build AI agents tailored to your
                    organization that can generate customized content, handle
                    routine tasks, and deliver consistent output on demand. No
                    technical background required.
                  </p>
                </div>
                <div className="w-meta">
                  <div className="w-dates">
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Wed, Aug 26 &middot; 12pm ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Tue, Sep 1 &middot; 10am ET
                    </span>
                    <span className="w-date">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        calendar_today
                      </span>
                      Thu, Sep 3 &middot; 2pm ET
                    </span>
                    <span className="w-cap">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        groups
                      </span>
                      Limited to 20
                    </span>
                  </div>
                  <a className="btn-mini" href={`${ORIGIN}/e/building-ai-agents`}>
                    Register{" "}
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="wrap">
            <div className="shead fade-up">
              <span className="eyebrow">About</span>
              <h2>About hello EIKO.</h2>
              <p>
                hello EIKO is an AI consulting firm based in Alexandria,
                Virginia. We help mission-driven teams move from experimenting
                with AI to using it well, through hands-on training, practical
                tool building, and plain guidance. We are not here to talk you
                into AI. We are here to help you find where it earns its place in
                your work, where it does not belong, and how to tell the
                difference. This series is built in that spirit: short,
                practical, and honest about what these tools can and cannot do,
                and grounded in the real work advocacy teams do every day.
              </p>
            </div>
            <div className="leadership fade-up">
              <div className="lead-head">
                <span className="eyebrow">Our founders</span>
                <h3>Your instructors.</h3>
              </div>
              <div className="profiles">
                <div className="profile">
                  <img className="pic" src="/curt-odar.webp" alt="Curt Odar" />
                  <h4>Curt Odar</h4>
                  <p className="pbio">
                    With over two decades of experience in product leadership and
                    digital transformation, Curt combines executive-level insight
                    with deep technological know-how, helping mission-driven
                    organizations make the most of AI to advance the work that
                    matters to them.
                  </p>
                </div>
                <div className="profile">
                  <img
                    className="pic"
                    src="/eve-odar.webp"
                    alt="Eve Koopmann Odar"
                  />
                  <h4>Eve Koopmann Odar</h4>
                  <p className="pbio">
                    As a former CRO with expertise in sales, customer success,
                    and strategic growth, Eve applies her executive insight and
                    coaching experience to help teams confidently bring AI into
                    their everyday work and see measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGISTER */}
        <section id="register" className="section navy">
          <div className="wrap">
            <div className="reg-wrap fade-up">
              <span className="eyebrow">Contact</span>
              <h2>Questions, Comments, or Concerns? Let us know.</h2>
              <p className="lead">
                Send us a question and we will get back to you.
              </p>

              <div
                id="ask-form-container"
                className="ask-form-container fade-up"
              >
                <h3 id="ask-heading">Ask a question</h3>
                <form id="ask-form" aria-labelledby="ask-heading" noValidate>
                  <div className="field">
                    <label htmlFor="ask-name">
                      Name{" "}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="ask-name"
                      name="name"
                      autoComplete="name"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="ask-email">
                      Email{" "}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="ask-email"
                      name="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="ask-question">
                      Your question{" "}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="ask-question"
                      name="question"
                      rows={4}
                      required
                      aria-required="true"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-ghost" id="ask-submit">
                    Send question
                  </button>
                </form>
                <div
                  id="ask-status"
                  role="status"
                  aria-live="polite"
                  style={{ marginTop: "12px", fontSize: "14px", minHeight: "1px" }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="fbrand">
            <img src="/eiko-logo-transparent.png" alt="hello EIKO logo" />
            <div className="fc">
              Advocacy AI Training Series
              <br />
              Brought to you by <strong>Eli Lilly</strong>
            </div>
          </div>
          <div className="flinks">
            <a href={`${ORIGIN}/privacy`}>Privacy Policy</a>
          </div>
        </div>
      </footer>

      <SiteScripts />
    </>
  );
}
