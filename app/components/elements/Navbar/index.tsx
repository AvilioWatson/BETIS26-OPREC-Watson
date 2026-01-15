import { Button } from "~/components/ui/button";
import { NavbarItem } from "./const";
import { Link } from "react-router";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-999 max-w-480 mx-auto fixed inset-0">
      <div className="px-5 lg:px-12 h-12 lg:h-25 flex items-center justify-between gap-7 bg-tertiary-normal">
        <div className="flex items-center gap-3 text-h6 lg:text-h3 font-xilosa text-font-light">
          <img src="/logo-white.webp" alt="logo" className="h-15 max-lg:h-7" />
          BETIS 2026
        </div>

        {/* Desktop */}
        <div className="flex items-center gap-7 text-s6 text-font-light max-lg:hidden">
          {NavbarItem.map((item, idx) => {
            return (
              <Link key={idx} to={item.link}>
                {item.name}
              </Link>
            );
          })}
        </div>
        <Button variant="secondary" className="max-lg:hidden">
          Login
        </Button>

        {/* Mobile */}
        {isOpen ? (
          <XIcon
            onClick={toggleIsOpen}
            className="lg:hidden text-font-light cursor-pointer"
          />
        ) : (
          <MenuIcon
            onClick={toggleIsOpen}
            className="lg:hidden text-font-light cursor-pointer"
          />
        )}
      </div>

      {/* Drawer */}
      <div
        className={`${
          isOpen ? "" : "scale-y-0 opacity-0"
        } top-12 origin-top flex flex-col text-font-light absolute left-0 right-0 bg-tertiary-normal rounded-b-[20px] overflow-hidden z-10 transition duration-500`}
      >
        {NavbarItem.map((item, idx) => {
          return (
            <div key={idx} className="py-3 px-5">
              <Link to={item.link} onClick={toggleIsOpen}>
                {item.name}
              </Link>
            </div>
          );
        })}
        <button className="py-3 px-5 text-left bg-tertiary-hover">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
