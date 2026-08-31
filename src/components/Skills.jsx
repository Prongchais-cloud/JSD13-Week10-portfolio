import { learningPills, skillGroups } from "../data/portfolio.js";
import { useReveal } from "../hooks/useReveal.js";
import { skillIcons } from "./Icons.jsx";

/* Chromatic icon tints — syntax palette, icons only */
const TINTS = {
  violet: "text-syntax-violet",
  pink: "text-syntax-pink",
  lime: "text-signal-lime",
  green: "text-loop-green",
};

const DOT_COLORS = {
  violet: "bg-syntax-violet",
  pink: "bg-syntax-pink",
  green: "bg-loop-green",
  lime: "bg-signal-lime",
};

export default function Skills() {
  const headRef = useReveal();
  const gridRef = useReveal();
  const pillsRef = useReveal();

  return (
    <section
      id="skills"
      className="container-page border-t border-steel-border py-24 max-[75rem]:py-20"
    >
      {/* Section head */}
      <div ref={headRef} className="reveal mb-16 max-w-[40rem]">
        <p className="mb-3 font-geist-mono text-caption text-fog-text">
          <span className="text-signal-lime">{"//"}</span> skills
        </p>
        <h2 className="mb-4 font-satoshi text-[clamp(1.75rem,4vw,2.25rem)] font-medium leading-[1.2] tracking-[0.05em] text-bone-text">
          A foundation, widening every week
        </h2>
        <p className="text-body-lg leading-normal text-fog-text">
          From semantic markup to APIs and databases — the tools I use to
          take ideas from a blank file to something that runs.
        </p>
      </div>

      {/* Skill cards */}
      <div
        ref={gridRef}
        className="reveal mb-12 grid grid-cols-2 gap-6 max-lg:grid-cols-1"
      >
        {skillGroups.map((group) => {
          const Icon = skillIcons[group.icon];
          return (
            <article
              key={group.title}
              className="rounded-md border border-steel-border bg-slate-canvas p-8 transition-colors hover:border-graphite-hairline max-[30rem]:p-6"
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-steel-border ${TINTS[group.tint]}`}
              >
                <Icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="mb-3 font-satoshi text-heading-sm font-medium text-bone-text">
                {group.title}
              </h3>
              <ul className="grid gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-body text-fog-text">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {/* Currently-learning pills */}
      <div
        ref={pillsRef}
        className="reveal border-t border-steel-border pt-8"
      >
        <p className="mb-4 font-geist-mono text-caption text-fog-text">
          <span className="text-fog-text">{"// currently_learning:"}</span>
        </p>
        <ul className="flex flex-wrap gap-3">
          {learningPills.map((pill) => (
            <li key={pill.label} className="pill">
              <span
                className={`h-2 w-2 rounded-full ${DOT_COLORS[pill.dot]}`}
                aria-hidden="true"
              />
              {pill.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}