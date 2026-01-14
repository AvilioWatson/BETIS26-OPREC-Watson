import { MailIcon, MapPinIcon, PinIcon } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="lg:px-21 lg:py-11 flex max-lg:flex-col justify-between gap-8 lg:gap-32 bg-tertiary-normal text-font-light">
      <div className="flex max-lg:flex-col-reverse flex-col gap-6 lg:gap-10">
        <div className="flex max-lg:flex-col items-center gap-5">
          <img src="/logo-white.webp" alt="logo" className="h-22.5" />
          <div>
            <h1 className="max-lg:text-center text-h2 font-xilosa">BETIS</h1>
            <p className="text-s6">Bimbingan Belajar Gratis</p>
          </div>
        </div>
        <div className="flex max-lg:justify-center gap-5 h-20">
          <img src="/socmed/instagram.svg" alt="instagram" />
          <img src="/socmed/facebook.svg" alt="facebook" />
          <img src="/socmed/linkedin.svg" alt="linkedin" />
          <img src="/socmed/x.svg" alt="x" />
          <img src="/socmed/tiktok.svg" alt="tiktok" />
        </div>
      </div>
      <div className="flex px-12 pb-8 flex-col items-center lg:items-end gap-6">
        <div className="w-full h-0.5 bg-font-light" />
        <div className="space-x-4 text-s6">
          <Link to="/">About BETIS</Link>

          <Link to="/betis-talk">BETIS-Talk</Link>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-3">
          <div className="flex max-lg:flex-row-reverse gap-3 items-center">
            <p className="text-[10px] lg:text-p8 lg:text-end">
              Fakultas Ilmu Komputer Universitas Indonesia Kampus UI Depok,
              Pondok Cina, Kec. Beji, Kota Depok, Jawa Barat 16424
            </p>
            <MapPinIcon className="shrink-0 lg:size-12" />
          </div>
          <div className="flex max-lg:flex-row-reverse gap-3 items-center">
            <p className="text-[10px] lg:text-p8 lg:text-end">
              betisfasilkomui2026@gmail.com
            </p>
            <MailIcon className="shrink-0 lg:size-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
