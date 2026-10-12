"use client";

import { useEffect, useMemo, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Student Records Engine",
    strapline: "Data without drama.",
    summary:
      "A reliable system for adding, searching, updating, and displaying student records.",
    detail:
      "Designed around structured programming, careful input validation, and defensive error handling—because useful software should stay useful when the input gets unpredictable.",
    tags: ["Systems", "Validation", "Error handling"],
    signal: "Reliable by design",
  },
  {
    number: "02",
    title: "Python Data Processor",
    strapline: "Messy input. Clear output.",
    summary:
      "A Python workflow that transforms structured data into organized, readable summaries.",
    detail:
      "Built with functions, loops, and conditional logic, then tested against expected outputs. The goal was simple: make the result accurate, understandable, and easy to trust.",
    tags: ["Python", "Data processing", "Testing"],
    signal: "Clarity from complexity",
  },
  {
    number: "03",
    title: "Algorithm Test Lab",
    strapline: "Correct isn’t enough. Prove it.",
    summary:
      "Implementations of common search and sorting algorithms tested across varied inputs.",
    detail:
      "Examined normal cases, edge cases, and unexpected behavior to understand not only whether an algorithm worked, but why—and where it could fail.",
    tags: ["Algorithms", "Edge cases", "Debugging"],
    signal: "Evidence over assumption",
  },
];

const principles = [
  {
    label: "01 / THINK",
    title: "Find the real problem.",
    copy: "Before I reach for code, I look for the constraint, the edge case, and the simplest useful outcome.",
  },
  {
    label: "02 / BUILD",
    title: "Make it understandable.",
    copy: "I value structure, readable logic, and decisions that another engineer can follow without a guided tour.",
  },
  {
    label: "03 / PROVE",
    title: "Test the edges.",
    copy: "Happy paths are a starting point. Confidence comes from checking assumptions and learning how the system behaves under pressure.",
  },
];

function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <span aria-hidden="true" className={`arrow arrow-${direction}`}>
      {direction === "right" ? "↗" : "↓"}
    </span>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [copied, setCopied] = useState(false);
  const [pointer, setPointer] = useState({ x: 72, y: 24 });
  const currentProject = useMemo(() => projects[activeProject], [activeProject]);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  async function copyEmail() {
    await navigator.clipboard.writeText("dagem.alemseged1@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main
      className="site-shell"
      style={
        {
          "--pointer-x": `${pointer.x}%`,
          "--pointer-y": `${pointer.y}%`,
        } as React.CSSProperties
      }
    >
      <header className="nav-wrap">
        <a className="monogram" href="#top" aria-label="Dagem Woldeyohannes, home">
          DW<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="mailto:dagem.alemseged1@gmail.com">
          Let’s talk <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal-1">
          <span className="status-dot" />
          Seattle-based software engineer
        </div>
        <h1 className="reveal-2">
          I turn complicated
          <span className="hero-outline">problems</span>
          into software that
          <span className="hero-accent">feels obvious.</span>
        </h1>
        <div className="hero-bottom reveal-3">
          <p>
            I’m Dagem—a computer science graduate who brings sharp logic,
            clean execution, and a healthy obsession with getting the details right.
          </p>
          <a className="circle-link" href="#work" aria-label="Explore selected work">
            <span>Explore</span>
            <Arrow direction="down" />
          </a>
        </div>

        <div className="signal-card reveal-4" aria-label="Current professional focus">
          <div className="signal-topline">
            <span>SIGNAL / 001</span>
            <span className="live-label"><i /> LIVE</span>
          </div>
          <div className="signal-command">
            <span className="prompt">$</span>
            <span>build --with-intent</span>
            <span className="cursor" />
          </div>
          <dl>
            <div><dt>FOCUS</dt><dd>Software engineering + AI evaluation</dd></div>
            <div><dt>METHOD</dt><dd>Build → test → refine</dd></div>
            <div><dt>STANDARD</dt><dd>Clear. Correct. Useful.</dd></div>
          </dl>
        </div>
      </section>

      <section className="marquee" aria-label="Technical skills">
        <div className="marquee-track">
          {["PYTHON", "C++", "JAVASCRIPT", "JAVA", "C", "DEBUGGING", "AI EVALUATION", "PYTHON", "C++", "JAVASCRIPT", "JAVA", "C", "DEBUGGING", "AI EVALUATION"].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}<i>✦</i></span>
          ))}
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Small projects.<br />Serious thinking.</h2>
          <p className="heading-copy">
            These projects are where I practice the habits that matter: structure,
            accuracy, and the discipline to test what I build.
          </p>
        </div>

        <div className="project-stage">
          <div className="project-list" role="tablist" aria-label="Projects">
            {projects.map((project, index) => (
              <button
                key={project.title}
                className={activeProject === index ? "project-tab active" : "project-tab"}
                onClick={() => setActiveProject(index)}
                role="tab"
                aria-selected={activeProject === index}
                aria-controls="project-panel"
              >
                <span>{project.number}</span>
                <strong>{project.title}</strong>
                <i>{activeProject === index ? "—" : "+"}</i>
              </button>
            ))}
          </div>

          <article className="project-panel" id="project-panel" role="tabpanel" aria-live="polite">
            <div className="project-orbit" aria-hidden="true">
              <span>{currentProject.number}</span>
              <i />
            </div>
            <p className="project-signal">{currentProject.signal}</p>
            <h3>{currentProject.strapline}</h3>
            <p className="project-summary">{currentProject.summary}</p>
            <p className="project-detail">{currentProject.detail}</p>
            <div className="tag-row">
              {currentProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        </div>
      </section>

      <section className="principles section" id="approach">
        <div className="section-heading compact">
          <p className="eyebrow">How I work</p>
          <h2>Clarity is<br />a feature.</h2>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article key={principle.label}>
              <span>{principle.label}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <p className="eyebrow">About Dagem</p>
        <div className="about-grid">
          <h2>
            Quiet confidence.<br />Loud results.
          </h2>
          <div className="about-copy">
            <p className="about-lead">
              I’m not interested in making simple things look complicated. I’m
              interested in understanding hard things well enough to make them simple.
            </p>
            <p>
              My computer science background at Augustana University gave me a strong
              base in programming, algorithms, data processing, and debugging. What I
              bring beyond the languages is a way of working: focused, systematic, and
              honest about what the evidence says.
            </p>
            <p>
              I’m early in my career and ambitious about the standard I set. Give me a
              difficult problem, room to learn, and a team that cares about the craft—I’ll
              bring energy, rigor, and follow-through.
            </p>
            <a className="resume-link" href="/dagem-woldeyohannes-resume.pdf" download>
              Download my résumé <Arrow />
            </a>
          </div>
        </div>

        <div className="capability-row" aria-label="Core capabilities">
          <div><span>01</span><strong>Logical<br />reasoning</strong></div>
          <div><span>02</span><strong>Code<br />comprehension</strong></div>
          <div><span>03</span><strong>Testing &<br />debugging</strong></div>
          <div><span>04</span><strong>Clear<br />communication</strong></div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-kicker">
          <span className="status-dot" /> Available for the right opportunity
        </div>
        <h2>Have a problem<br />worth solving?</h2>
        <div className="contact-actions">
          <a href="mailto:dagem.alemseged1@gmail.com" className="primary-button">
            Start a conversation <Arrow />
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? "Email copied" : "Copy email"}
          </button>
        </div>
        <p className="contact-note">Seattle, Washington · Open to remote opportunities</p>
      </section>

      <footer>
        <a className="monogram" href="#top" aria-label="Back to top">DW<span>.</span></a>
        <p>Designed with intent. Built with curiosity.</p>
        <p>© {new Date().getFullYear()} Dagem Woldeyohannes</p>
      </footer>
    </main>
  );
}
