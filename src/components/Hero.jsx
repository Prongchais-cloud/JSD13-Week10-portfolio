import { heroMeta } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container-page flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center py-24 pb-16 text-center max-md:min-h-0"
    >
      {/* Eyebrow badge */}
      <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-steel-border px-3 py-1 text-caption text-ash-text">
        <span
          className="h-2 w-2 rounded-full bg-signal-lime animate-pulse-dot"
          aria-hidden="true"
        />
        Transitioning into Tech
      </p>

      {/* Headline — Satoshi 500, 0.05em tracking */}
      <h1 className="mb-6 font-satoshi text-[clamp(2.5rem,7vw,3.75rem)] font-medium leading-none tracking-[0.05em] text-bone-text">
        Aspiring
        <br />
        <span className="text-signal-lime">Software Developer</span>
      </h1>

      {/* Subtext — Geist 400, 18px, fog */}
      <p className="mb-10 max-w-[37.5rem] text-body-lg leading-normal text-fog-text">
        I'm Por — learning full-time, self-directed, and building hands-on
        projects in web development with an eye toward data engineering and
        AI/ML roles in the Thai job market.
      </p>

      {/* CTAs */}
      <div className="mb-12 flex flex-wrap justify-center gap-3 max-[30rem]:w-full max-[30rem]:flex-col">
        <a href="#projects" className="btn-primary max-[30rem]:w-full">
          View projects
        </a>
        <a href="#contact" className="btn-ghost max-[30rem]:w-full">
          Get in touch
        </a>
      </div>

      {/* Mono meta line — code-context syntax colors */}
      <p className="font-geist-mono text-caption text-fog-text">
        <span className="text-fog-text">{"// currently learning:"}</span>{" "}
        {heroMeta.map((item, i) => (
          <span key={item}>
            <span className="text-loop-green">{item}</span>
            {i < heroMeta.length - 1 && <span> · </span>}
          </span>
        ))}
      </p>
    </section>
  );
}