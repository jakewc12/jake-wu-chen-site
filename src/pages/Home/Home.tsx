import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Headshot from './headshot.png';
import {
  EXPERIENCE,
  FACTS,
  LINKS,
  PROJECTS,
  PROVIRAS,
  RESUME_URL,
  SKILLS,
} from '../../content';
import type { Project } from '../../content';

const Chips: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="stack">
    {items.map((item) => (
      <span key={item} className="chip">
        {item}
      </span>
    ))}
  </div>
);

const LinkRow: React.FC<{ links: { label: string; href: string }[] }> = ({ links }) =>
  links.length ? (
    <div className="flinks">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label} ↗
        </a>
      ))}
    </div>
  ) : null;

const SectionHead: React.FC<{ no: string; title: string }> = ({ no, title }) => (
  <div className="sechead">
    <span className="secno">{no}</span>
    <h2>{title}</h2>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className="pcard reveal">
    {project.image && <img className="pcard-media" src={project.image} alt={`${project.title} screenshot`} />}
    <div className="kind">{project.kind}</div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <Chips items={project.stack} />
    <LinkRow links={project.links} />
  </article>
);

// Fades sections in as they scroll into view.
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const Home: React.FC = () => {
  useReveal();

  // Client-side redirects (e.g. /projects -> /#projects) don't trigger the browser's anchor scroll.
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <main>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">
            Boston · DC · Seattle ·
          </div>
          <h1>
            Jacob <span className="nowrap">Wu-Chen</span>
          </h1>
          <p className="thesis">
            Software engineer building <span className="hl">full-stack products and AI tooling.</span>
          </p>
          <p className="sub">
            Software Developer <em>MORSE Corp</em>
            <br />
            CO-FOUNDER &amp; CTO @ <em>PROVIRAS</em>
            <br />
            B.S. COMPUTER SCIENCE @ <em>NORTHEASTERN UNIVERSITY</em>
          </p>
          <div className="actions">
            <a href={RESUME_URL} target="_blank" rel="noreferrer">
              Resume ↗
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </header>

      <section className="sec" id="about">
        <div className="wrap">
          <SectionHead no="00" title="About" />
          <div className="about-grid reveal">
            <img className="photo" src={Headshot} alt="Portrait of Jacob Wu-Chen" width={300} height={300} />
            <div className="about-txt">
              <p>
                Hi, I'm Jake! I'm a software engineer and a recent Computer Science graduate from Northeastern
                University.
              </p>
              <p>
                I'm currently a software engineer at MORSE Corp, where I ship full-stack products at for national security purposes. I'm also building{' '}
                <b>Proviras</b>, a startup I co-founded that helps AI agent teams spend less on LLMs without
                losing quality.
              </p>
              <p>
                Away from the keyboard, I'm usually on a golf course, bouldering, or looking for a fun jazz bar.
              </p>
              <div className="facts">
                {FACTS.map((fact) => (
                  <div key={fact.k} className="row">
                    <span className="k">{fact.k}</span>
                    <span className={'v'}>{fact.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="experience">
        <div className="wrap">
          <SectionHead no="01" title="Experience" />
          <div className="xp reveal">
            {EXPERIENCE.map((job, i) => (
              <div key={job.company} className="xp-row">
                <span className="xp-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="xp-when">{job.when}</span>
                <div className="xp-main">
                  <span className="role">{job.role}</span>
                  <span className="co"> · {job.company}</span>
                  <div className="desc">{job.desc}</div>
                  <Chips items={job.stack} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="projects">
        <div className="wrap">
          <SectionHead no="02" title="Projects" />
          <div className="grid2">
            {PROJECTS.filter((p) => p.image).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="grid2">
            {PROJECTS.filter((p) => !p.image).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="skills">
        <div className="wrap">
          <SectionHead no="03" title="Skills" />
          <div className="skills reveal">
            {SKILLS.map((skill) => (
              <div key={skill.group} className="skill-row">
                <span className="skill-group">{skill.group}</span>
                <Chips items={skill.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="proviras">
        <div className="wrap">
          <SectionHead no="04" title="Building" />
          <div className="feature reveal">
            <span className="tag">{PROVIRAS.tag}</span>
            <h3>{PROVIRAS.name}</h3>
            <div className="role">{PROVIRAS.role}</div>
            {PROVIRAS.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Chips items={PROVIRAS.stack} />
            <LinkRow links={PROVIRAS.links} />
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h2>Let's build something.</h2>
          <p>I'm happy to talk about AI agents, dev tools, or startups.</p>
          <a className="mail" href={`mailto:${LINKS.email}`}>
            {LINKS.email}
          </a>
          <div className="socials">
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer">
              Resume ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
