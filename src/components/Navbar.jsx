import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio.js";
import { useScrollSpy } from "../hooks/useReveal.js";
import { GitHubIcon, PlayMark } from "./Icons.jsx";

const SECTION_IDS = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  // Close the mobile menu if the viewport grows past the breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48.0625em)");
    const handleChange = (event) => {
      if (event.matches) setOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-border bg-slate-canvas/85 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="container-page flex h-18 items-center justify-between gap-6"
      >
        {/* Brand lockup */}
        <a href="#hero" className="inline-flex shrink-0 items-center gap-2">
          <PlayMark className="h-5 w-5 text-signal-lime" />
          <span className="font-geist text-xl font-semibold tracking-tight text-bone-text">
            por<em className="not-italic text-fog-text">.dev</em>
          </span>
        </a>

        {/* Center links */}
        <ul
          id="nav-links"
          className={`flex max-md:absolute max-md:top-18 max-md:left-0 max-md:right-0 max-md:flex-col max-md:gap-1 max-md:border-b max-md:border-steel-border max-md:bg-slate-canvas max-md:px-6 max-md:py-4 max-md:pb-6 ${
            open
              ? "max-md:flex"
              : "max-md:hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`inline-block rounded-md px-3.5 py-2.5 text-caption transition-colors max-md:text-body ${
                  activeId === link.href.slice(1)
                    ? "text-bone-text"
                    : "text-cloud-text hover:text-bone-text"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-caption text-cloud-text transition-colors hover:text-bone-text max-md:[&>span]:hidden"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>/por</span>
          </a>

          <a href="#contact" className="btn-primary max-md:hidden !py-2.5 !px-3.5 !text-caption">
            Get in touch
          </a>

          {/* Hamburger toggle */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <span
              className={`block h-px w-5 bg-cloud-text transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-cloud-text transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}