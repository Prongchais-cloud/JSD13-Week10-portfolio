import { contactPills, profile } from "../data/portfolio.js";
import { useReveal } from "../hooks/useReveal.js";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";

const DOT_COLORS = {
  violet: "bg-syntax-violet",
  pink: "bg-syntax-pink",
  green: "bg-loop-green",
  lime: "bg-signal-lime",
};

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      className="container-page border-t border-steel-border py-24 max-[75rem]:py-20"
    >
      <div ref={ref} className="reveal flex flex-col items-center text-center">
        <p className="mb-3 font-geist-mono text-caption text-fog-text">
          <span className="text-signal-lime">{"//"}</span> contact
        </p>

        <h2 className="mb-4 font-satoshi text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.11] tracking-[0.05em] text-bone-text">
          Let&apos;s build something
        </h2>

        <p className="mb-10 max-w-[37.5rem] text-body-lg leading-normal text-fog-text">
          I&apos;m open to opportunities, collaborations, and good
          conversations about code. The fastest way to reach me is email.
        </p>

        {/* Action buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3 max-[30rem]:w-full max-[30rem]:flex-col">
          <a href={`mailto:${profile.email}`} className="btn-primary max-[30rem]:w-full">
            <MailIcon className="h-4 w-4" />
            Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost max-[30rem]:w-full"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost max-[30rem]:w-full"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        {/* Status pills */}
        <ul className="flex flex-wrap justify-center gap-3">
          {contactPills.map((pill) => (
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
