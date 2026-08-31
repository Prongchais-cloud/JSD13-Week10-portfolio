import { companies, goals } from "../data/portfolio.js";
import { useReveal } from "../hooks/useReveal.js";

/* Syntax-highlighted intro snippet — Ink Well surface, mono locked at 14px */
function CodePane() {
  return (
    <div
      role="img"
      aria-label="Code snippet introducing Por: a developer object with name, location, role, stack and learning goals"
      className="overflow-hidden rounded-md border border-steel-border bg-ink-well transition-colors hover:border-graphite-hairline"
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 border-b border-steel-border px-4 py-3"
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-mute-red opacity-70" />
        <span className="h-2.5 w-2.5 rounded-full bg-key-lime opacity-70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal-lime opacity-70" />
        <span className="ml-2 font-geist-mono text-caption text-fog-text">
          por.config.ts
        </span>
      </div>

      {/* Code body */}
      <pre className="overflow-x-auto p-6 font-geist-mono text-caption leading-[1.43] text-fog-text max-[30rem]:p-4">
        <code>
          <span className="text-fog-text">
            {"// learning in public, one project at a time"}
          </span>
          {"\n"}
          <span className="text-syntax-violet">const</span>{" "}
          <span className="text-key-lime">por</span>:{" "}
          <span className="text-loop-green">Developer</span> = {"{"}
          {"\n  "}
          <span className="text-tag-magenta">name</span>:{" "}
          <span className="text-syntax-pink">"Por"</span>,
          {"\n  "}
          <span className="text-tag-magenta">location</span>:{" "}
          <span className="text-syntax-pink">"Thailand"</span>,
          {"\n  "}
          <span className="text-tag-magenta">role</span>:{" "}
          <span className="text-syntax-pink">
            "Aspiring Software Developer"
          </span>
          ,
          {"\n  "}
          <span className="text-tag-magenta">stack</span>: [
          <span className="text-syntax-pink">"HTML"</span>,{" "}
          <span className="text-syntax-pink">"CSS"</span>,{" "}
          <span className="text-syntax-pink">"JavaScript"</span>,{" "}
          <span className="text-syntax-pink">"React"</span>],
          {"\n  "}
          <span className="text-tag-magenta">learning</span>: [
          <span className="text-syntax-pink">"Node.js"</span>,{" "}
          <span className="text-syntax-pink">"Airflow"</span>,{" "}
          <span className="text-syntax-pink">"dbt"</span>],
          {"\n  "}
          <span className="text-tag-magenta">openToWork</span>:{" "}
          <span className="text-loop-green">true</span>,
          {"\n"}
          {"}"};
          {"\n\n"}
          <span className="text-syntax-violet">export default</span>{" "}
          <span className="text-key-lime">por</span>;
          <span
            className="ml-1 inline-block h-[1em] w-[0.5em] animate-blink bg-signal-lime align-text-bottom"
            aria-hidden="true"
          />
        </code>
      </pre>
    </div>
  );
}

export default function About() {
  const headRef = useReveal();
  const paneRef = useReveal();
  const copyRef = useReveal();
  const stripRef = useReveal();

  return (
    <section id="about" className="container-page py-24 max-[75rem]:py-20">
      {/* Section head */}
      <div ref={headRef} className="reveal mb-16 max-w-[40rem]">
        <p className="mb-3 font-geist-mono text-caption text-fog-text">
          <span className="text-signal-lime">{"//"}</span> about
        </p>
        <h2 className="mb-4 font-satoshi text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.2] tracking-[0.05em] text-bone-text">
          Career changer, learning in public
        </h2>
        <p className="text-body-lg leading-normal text-fog-text">
          Transitioning into software development with discipline and
          curiosity — every project below was built by hand while studying
          the fundamentals full-time.
        </p>
      </div>

      {/* Code pane + copy */}
      <div className="mb-24 grid grid-cols-2 items-center gap-12 max-lg:grid-cols-1 max-lg:gap-8">
        <div ref={paneRef} className="reveal">
          <CodePane />
        </div>

        <div ref={copyRef} className="reveal">
          <p className="mb-4 font-light leading-[1.4] tracking-[0.025em] text-cloud-text text-subheading">
            I'm transitioning into a career in software development —
            currently focused on building foundational programming skills,
            with an eye toward{" "}
            <strong className="font-medium text-bone-text">
              data engineering
            </strong>{" "}
            and{" "}
            <strong className="font-medium text-bone-text">AI/ML</strong>{" "}
            roles in the Thai job market.
          </p>
          <p className="mb-6 text-body text-fog-text">
            Learning full-time and self-directed, with hands-on project work
            in web development fundamentals and beyond. I treat every project
            as practice for real-world engineering: semantic markup, clean
            data flow, and honest debugging.
          </p>
          <ul className="grid gap-3">
            {goals.map((goal) => (
              <li
                key={goal}
                className="relative pl-6 text-body text-ash-text before:absolute before:left-0 before:top-[0.55em] before:h-2 before:w-2 before:rounded-full before:bg-signal-lime before:opacity-85"
              >
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo strip — companies band */}
      <div
        ref={stripRef}
        className="reveal border-t border-steel-border pt-12 text-center"
      >
        <p className="mb-6 font-geist-mono text-caption text-fog-text">
          Companies I'm aiming for
        </p>
        <ul className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {companies.map((company) => (
            <li
              key={company}
              className="font-satoshi text-subheading font-medium tracking-[0.025em] text-ash-text opacity-75 transition-opacity hover:opacity-100"
            >
              {company}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}