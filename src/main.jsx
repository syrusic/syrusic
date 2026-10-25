import React, { useEffect } from "react";
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

  return (
    <>
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
          </div>
        </section>
        <section className="section page-width" id="about">
          <div className="section-title fade-in"><span>01</span><h2>About</h2></div>
          <div className="about-copy fade-in">
            <div className="about-intro">
              <p className="about-lead">Programming started as something fun. It still is.</p>
            </div>
            <div className="about-detail">
              <p>I’m 16 and based in India. For about a year, I’ve been exploring TypeScript and Python through websites and small experiments. Recently, I’ve been drawn to computational thinking and automation: breaking a task down and finding a simpler way to do it.</p>
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
          <div className="about-socials" aria-label="Social links">
            <a href="https://x.com/syrusic" target="_blank" rel="noreferrer" aria-label="X: syrusic" title="X · syrusic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" /></svg><span>syrusic</span></a>
            <a href="https://discord.com/users/syrusic" target="_blank" rel="noreferrer" aria-label="Discord: syrusic" title="Discord · syrusic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.7 5.1A18 18 0 0 0 15.3 3l-.5 1a16 16 0 0 0-5.6 0l-.5-1a18 18 0 0 0-4.4 2.1C1.5 9.2.7 13.2 1.1 17.1a18 18 0 0 0 5.4 2.7l1.2-2a11 11 0 0 1-1.9-.9l.5-.4a13 13 0 0 0 11.4 0l.5.4a11 11 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.4-2.7c.5-4.5-.8-8.5-3.2-12ZM8.7 14.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" /></svg><span>syrusic</span></a>
            <a href="https://github.com/syrusic" target="_blank" rel="noreferrer" aria-label="GitHub: syrusic" title="GitHub · syrusic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.5 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3.1 1.1a10.7 10.7 0 0 1 5.6 0c2.1-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" /></svg><span>syrusic</span></a>
            <a className="contact-email" href="mailto:newtru@proton.me">newtru@proton.me <span aria-hidden="true">&#8599;</span></a>
          </div>
        </section>
      </main>

    </>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
