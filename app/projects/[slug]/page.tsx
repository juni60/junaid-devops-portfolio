import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      {/* Navbar */}
      <nav className="project-nav">
        <Link href="/" className="project-logo">
          J.A
        </Link>

        <Link href="/#projects" className="back-link">
          ← All Projects
        </Link>
      </nav>

      {/* Hero */}
      <section className="project-hero">
        <div className="project-hero-number">
          {project.number}
        </div>

        <div className="project-hero-content">
          <p className="project-label">DEVOPS PROJECT</p>

          <h1>{project.title}</h1>

          <p className="project-intro">
            {project.intro}
          </p>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="project-section">
        <div className="section-number">01</div>

        <div className="project-section-content">
          <p className="section-label">OVERVIEW</p>

          <h2>{project.overviewTitle}</h2>

          <div className="overview-text">
            {project.overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="project-section">
        <div className="section-number">02</div>

        <div className="project-section-content">
          <p className="section-label">ARCHITECTURE</p>

          <h2>How it works.</h2>

          <div className="architecture-flow">
            {project.architecture.map((item, index) => (
              <div className="architecture-item" key={item}>
                <div className="architecture-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="architecture-name">
                  {item}
                </div>

                {index < project.architecture.length - 1 && (
                  <div className="architecture-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="project-section">
        <div className="section-number">03</div>

        <div className="project-section-content">
          <p className="section-label">PIPELINE</p>

          <h2>From code to production.</h2>

          <div className="pipeline-list">
            {project.pipeline.map((step, index) => (
              <div className="pipeline-item" key={step.title}>
                <div className="pipeline-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="pipeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="project-section">
        <div className="section-number">04</div>

        <div className="project-section-content">
          <p className="section-label">TECHNOLOGIES</p>

          <h2>Tools behind the system.</h2>

          <div className="technology-grid">
            {project.technologies.map((technology) => (
              <div className="technology-card" key={technology.category}>
                <h3>{technology.category}</h3>
                <p>{technology.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="project-section">
        <div className="section-number">05</div>

        <div className="project-section-content">
          <p className="section-label">RESULTS</p>

          <h2>What was achieved.</h2>

          <div className="results-grid">
            {project.results.map((result) => (
              <div className="result-card" key={result}>
                <span>✓</span>
                <p>{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="project-cta">
        <p className="section-label">PROJECT REPOSITORY</p>

        <h2>Explore the implementation.</h2>

        <p>
          View the source code and implementation details on GitHub.
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View on GitHub ↗
        </a>
      </section>

      {/* Footer Navigation */}
      <section className="project-footer-nav">
        <Link href="/#projects">
          ← Back to Projects
        </Link>
      </section>
    </main>
  );
}