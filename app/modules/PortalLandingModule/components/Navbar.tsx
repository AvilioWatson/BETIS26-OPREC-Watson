import { Button } from "~/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Course", href: "#course" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Betis-Talk", href: "#betis-talk" },
];

export function Navbar() {
  return (
    <header className="bg-tertiary-normal text-font-light">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-12 py-6">
        <div className="flex items-center gap-3">
          <img src="/logo-white.webp" alt="BETIS 2026" className="h-11 w-auto" />
          <span className="font-xilosa text-h3">BETIS 2026</span>
        </div>

        <nav className="hidden items-center gap-12 text-s6 font-normal md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          variant="secondary"
          className="h-14 px-9 text-p6 text-font-dark"
        >
          Login
        </Button>
      </div>
    </header>
  );
}
