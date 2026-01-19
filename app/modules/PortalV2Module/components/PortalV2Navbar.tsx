import { Button } from "~/components/ui/button";
import { DialogTrigger } from "~/components/ui/dialog";

const navItems = ["Home", "Course", "Leaderboard", "Betis-Talk"];

export function PortalV2Navbar() {
  return (
    <header className="absolute left-0 top-0 hidden w-full md:block">
      <div className="flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-3">
          <img src="/logo-white.webp" alt="BETIS 2026" className="h-9 w-auto" />
          <span className="font-xilosa text-2xl text-font-light">
            BETIS 2026
          </span>
        </div>
        <nav className="flex items-center gap-12 font-normal text-font-light">
          {navItems.map((item) => (
            <a key={item} href="#home" className="hover:text-font-medium">
              {item}
            </a>
          ))}
        </nav>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="h-12 px-7 text-sm text-font-dark shadow-none"
          >
            Login
          </Button>
        </DialogTrigger>
      </div>
    </header>
  );
}
