import { projects } from "../data/portfolio.js";
import { useReveal } from "../hooks/useReveal.js";

export default function Projects() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section
      id="projects"
      className="container-page border-t border-steel-border py-24 max-[75rem]:py-20"
    >
      {/* Section head */}
      <div ref={headRef} className="reveal mb-16 max-w-[40rem]">
        <p className="mb-3 font-geist-mono text-caption text-fog-text">
          <span className="text-signal-lime">{"//"}</span> projects
        </p>
        <h2 className="mb-4 font-satoshi text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.2] tracking-[0.05em] text-bone-text">
          Shipped while learning
        </h2>
        <p className="text-body-lg leading-normal text-fog-text">
          Three hands-on projects that taught me component design, data
          fetching, and responsive layout — the honest way, by building.
        </p>
      </div>

      {/* Project cards */}
      <div
        ref={gridRef}
        className="reveal grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-lg:[&>*:last-child]:col-span-full max-md:grid-cols-1 max-md:[&>*:last-child]:col-auto"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-md border border-steel-border bg-slate-canvas p-8 transition-colors hover:border-graphite-hairline max-[30rem]:p-6"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="font-geist-mono text-caption text-signal-lime">
                {project.index}
              </span>
              <ul className="flex flex-wrap justify-end gap-2" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="whitespace-nowrap rounded-full border border-steel-border px-2.5 py-1 text-caption text-ash-text"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mb-3 font-satoshi text-heading-sm font-medium text-bone-text">
              {project.title}
            </h3>
            <p className="mb-4 text-body text-fog-text">
              {project.description}
            </p>
            <p className="mb-6 text-caption leading-[1.43] text-ash-text">
              {project.highlights}
              {project.note && (
                <>
                  {" "}
                  <em className="not-italic text-fog-text">
                    ({project.note})
                  </em>
                </>
              )}
            </p>

            <a
              href={project.link}
              className="group mt-auto inline-flex items-center gap-2 text-caption font-medium text-cloud-text transition-colors hover:text-bone-text"
            >
              View repository
              <span
                className="text-syntax-pink transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}