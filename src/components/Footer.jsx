import { profile } from "../data/portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel-border py-8">
      <div className="container-page flex flex-wrap items-center justify-between gap-3 text-caption text-fog-text max-md:flex-col max-md:text-center">
        <p>
          © {year} {profile.name} — hand-built with React, Tailwind CSS &
          Vite.
        </p>
        <p>
          {profile.location} · UTC+7
        </p>
      </div>
    </footer>
  );
}