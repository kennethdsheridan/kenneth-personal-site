import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const navItems = [
  { href: "/systems", label: "Systems" },
  { href: "/robotics", label: "Robotics" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/now", label: "Now" },
  { href: "/resume", label: "Resume" },
];

export const metadata: Metadata = {
  title: {
    default: "Kenny Sheridan | Systems for AI, robotics, and accelerated infrastructure",
    template: "%s | Kenny Sheridan",
  },
  description:
    "A living systems profile for Kenny Sheridan: AI infrastructure, robotics, Nix, Rust, HPC, edge systems, and operational judgment.",
  metadataBase: new URL("https://kennethdsheridan.github.io"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen">
        <div className="watermark" aria-hidden="true">
          <Image src="/marine-emblem-watermark.png" alt="" width={438} height={466} priority />
        </div>
        <div className="content-layer flex min-h-screen flex-col">
          <header className="sticky top-0 z-20 border-b border-line bg-background/78 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
              <Link href="/" className="group flex flex-col leading-none">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.34em] text-gold">Kenny Sheridan</span>
                <span className="mt-1 text-sm text-muted group-hover:text-foreground">systems / AI / robotics</span>
              </Link>
              <nav className="hidden items-center gap-5 font-mono text-xs uppercase tracking-[0.18em] text-muted md:flex">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-gold">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="rounded-full border border-gold/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-gold transition hover:border-gold hover:bg-gold-soft"
              >
                Contact
              </Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-line px-5 py-10 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
              <p>Built as a living operating context for the AI and robotics age.</p>
              <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.16em]">
                <a className="hover:text-gold" href="https://github.com/kennethdsheridan">GitHub</a>
                <a className="hover:text-gold" href="https://forgejo.kennysheridan.io">Forgejo</a>
                <a className="hover:text-gold" href="https://codeberg.org/kennysheridan">Codeberg</a>
                <a className="hover:text-gold" href="https://www.linkedin.com/in/kennethdashensheridan/">LinkedIn</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
