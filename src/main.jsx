import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  {
    title: "Chess engine",
    description: "A chess-playing experiment with a neural model, minimax search, and alpha–beta pruning.",
    tags: "Python · Chess · Search",
  },
  {
    title: "Chess Elo predictor",
    description: "A small model exploring how chess ratings could be predicted from game data.",
    tags: "Machine learning · Chess",
  },
  {
    title: "Word learner",
    description: "A reinforcement learning experiment that tests random letter sequences against English words.",
    tags: "Python · Reinforcement learning",
  },
];

function App() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText("Syrusic");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="Shubham home">s<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-copy fade-in">
            <p className="eyebrow"><span className="status-dot" /> STUDENT · INDIA</p>
            <h1>Curious<br />by default<span className="green">.</span></h1>
            <p className="hero-summary">I’m Shubham — a student who likes making things with code, asking how they work, and finding a little order in a tricky problem.</p>
            <a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
          </div>
          <div className="orbit-art" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="core">s</div><i className="orbit-point point-one" /><i className="orbit-point point-two" />
            <span className="orbit-label">THINK · BUILD · REPEAT</span>
          </div>
          <div className="hero-meta"><span>CLASS 11</span><span className="meta-rule" /><span>LEARNING AS I GO</span></div>
        </section>

        <section className="section page-width" id="about">
          <div className="section-title fade-in"><span>01</span><h2>About</h2></div>
          <div className="about-copy fade-in">
            <p className="about-lead">Programming started as something fun. It still is.</p>
            <div className="about-detail">
              <p>I’m 16 and in class 11 in India. For about a year, I’ve been exploring TypeScript and Python through websites and small experiments. Recently, I’ve been drawn to computational thinking and automation: breaking a task down and finding a simpler way to do it.</p>
              <p>Outside of code, I enjoy maths—especially when it helps explain a computer science problem. I’m also working hard at school and figuring out what I want to learn next.</p>
              <div className="interests"><span>INTO LATELY</span><i>Maths</i><i>Automation</i><i>Machine learning</i></div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="page-width">
            <div className="section-title fade-in"><span>02</span><h2>Selected projects</h2></div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className="project fade-in" key={project.title}>
                  <span className="project-index">0{index + 1}</span>
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <span className="project-tags">{project.tags}</span>
                  <span className="project-mark" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-width writing-section" id="writing">
          <div className="section-title fade-in"><span>03</span><h2>Writing</h2></div>
          <div className="writing-note fade-in"><span className="writing-mark">✳</span><p>No posts yet. I’ll put notes and things I’m learning here when I start writing.</p></div>
        </section>

        <section className="section page-width contact-section" id="contact">
          <div className="section-title fade-in"><span>04</span><h2>Say hello</h2></div>
          <div className="contact-content fade-in">
            <p>Find me around the internet.</p>
            <div className="socials">
              <a href="https://x.com/Syrusic" target="_blank" rel="noreferrer">X <span>@Syrusic ↗</span></a>
              <a href="https://github.com/Syrusic" target="_blank" rel="noreferrer">GitHub <span>@Syrusic ↗</span></a>
              <button type="button" onClick={copyDiscord}>Discord <span>@Syrusic · {copied ? "Copied!" : "copy username"}</span></button>
              <a href="mailto:newtru@proton.me">Email <span>newtru@proton.me ↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer page-width"><a className="brand" href="#top">s<span>.</span></a><span>Made with curiosity <b>✳</b></span><a className="back-top" href="#top">BACK TO TOP ↑</a></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
