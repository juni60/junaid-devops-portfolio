import { projects } from "./data/projects";

const technologies = [
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "GitLab CI",
  "Linux",
  "Prometheus",
  "Grafana",
  "SonarQube",
  "Trivy",
];

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="logo">
          J<span>.</span>A
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let&apos;s Talk
        </a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="status">
            <span className="status-dot" />
            Available for DevOps Opportunities
          </div>

          <p className="eyebrow">DEVOPS / CLOUD ENGINEER</p>

          <h1>
            Building infrastructure
            <br />
            <span>that just works.</span>
          </h1>

          <p className="hero-description">
            I design and automate cloud infrastructure, CI/CD pipelines,
            containerized applications and Kubernetes environments using
            modern DevOps practices.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Get In Touch
            </a>
          </div>

          <div className="hero-stack">
            <span>Currently working with</span>

            <div>
              <strong>AWS</strong>
              <i>•</i>
              <strong>Azure</strong>
              <i>•</i>
              <strong>Kubernetes</strong>
              <i>•</i>
              <strong>Terraform</strong>
            </div>
          </div>
        </div>

        <div className="hero-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>

            <span>devops@junaid:~</span>
          </div>

          <div className="terminal-body">
            <p>
              <span className="terminal-green">$</span> whoami
            </p>

            <p className="terminal-output">junaid-ahmed</p>

            <p>
              <span className="terminal-green">$</span> role
            </p>

            <p className="terminal-output">
              DevOps / Cloud Engineer
            </p>

            <p>
              <span className="terminal-green">$</span> kubectl get
              infrastructure
            </p>

            <div className="terminal-table">
              <div>NAME</div>
              <div>STATUS</div>
              <div>ENV</div>

              <div>ci-cd</div>
              <div className="green">READY</div>
              <div>PROD</div>

              <div>kubernetes</div>
              <div className="green">READY</div>
              <div>CLOUD</div>

              <div>monitoring</div>
              <div className="green">ACTIVE</div>
              <div>PROD</div>
            </div>

            <p className="terminal-cursor">
              <span className="terminal-green">$</span> _
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about" id="about">
        <div className="section-label">01 — ABOUT</div>

        <div className="about-grid">
          <div>
            <h2>
              Turning code into
              <br />
              <span>reliable systems.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I&apos;m Junaid Ahmed, a DevOps / Cloud Engineer focused on
              automation, cloud infrastructure and reliable application
              delivery.
            </p>

            <p>
              I work with AWS, Azure, Docker, Kubernetes, Terraform and
              CI/CD tools to build repeatable deployment workflows and
              infrastructure.
            </p>

            <p>
              My approach is simple: automate repetitive work, make
              deployments predictable, improve observability and build
              systems that are easier to operate.
            </p>
          </div>
        </div>

        <div className="stats">
          <div>
            <strong>02+</strong>
            <span>Cloud Platforms</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>DevOps Technologies</span>
          </div>

          <div>
            <strong>05+</strong>
            <span>Infrastructure Projects</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Things to Automate</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills" id="skills">
        <div className="section-label">02 — TOOLBOX</div>

        <div className="section-heading">
          <h2>
            Tools I use to
            <br />
            <span>build & automate.</span>
          </h2>

          <p>
            A practical DevOps toolkit covering cloud, infrastructure,
            containers, CI/CD, security and observability.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((technology, index) => (
            <div className="tech-card" key={technology}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <strong>{technology}</strong>

              <div className="tech-arrow">↗</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section projects" id="projects">
        <div className="section-label">03 — SELECTED WORK</div>

        <div className="section-heading project-heading">
          <h2>
            Things I&apos;ve
            <br />
            <span>built & deployed.</span>
          </h2>

          <p>
            Real projects and infrastructure labs demonstrating cloud,
            automation and DevOps engineering skills.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <a
              href={`/projects/${project.slug}`}
              className="project-card"
              key={project.slug}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-link">↗</div>
            </a>
          ))}
        </div>
      </section>

      {/* DevOps Workflow */}
      <section className="section workflow">
        <div className="section-label">04 — HOW I WORK</div>

        <div className="workflow-header">
          <h2>
            From commit
            <br />
            <span>to production.</span>
          </h2>
        </div>

        <div className="pipeline">
          <div className="pipeline-step">
            <span>01</span>
            <strong>CODE</strong>
            <small>Git / GitHub</small>
          </div>

          <div className="pipeline-line" />

          <div className="pipeline-step">
            <span>02</span>
            <strong>BUILD</strong>
            <small>CI Pipeline</small>
          </div>

          <div className="pipeline-line" />

          <div className="pipeline-step">
            <span>03</span>
            <strong>SECURE</strong>
            <small>SonarQube / Trivy</small>
          </div>

          <div className="pipeline-line" />

          <div className="pipeline-step">
            <span>04</span>
            <strong>DEPLOY</strong>
            <small>Docker / Kubernetes</small>
          </div>

          <div className="pipeline-line" />

          <div className="pipeline-step">
            <span>05</span>
            <strong>MONITOR</strong>
            <small>Prometheus / Grafana</small>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="contact-glow" />

        <div className="section-label">05 — CONTACT</div>

        <h2>
          Let&apos;s build something
          <br />
          <span>reliable.</span>
        </h2>

        <p>
          Looking for a DevOps internship, cloud opportunity or a project
          where I can automate and improve infrastructure.
        </p>

        <a
          href="mailto:junaidahmed.soomro01@gmail.com"
          className="contact-button"
        >
          Start a Conversation ↗
        </a>

        <div className="contact-footer">
          <span>Junaid Ahmed</span>
          <span>DevOps / Cloud Engineer</span>
          <span>© 2026</span>
        </div>
      </section>
    </main>
  );
}