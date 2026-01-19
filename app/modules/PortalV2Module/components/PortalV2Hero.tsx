import { Button } from "~/components/ui/button";
import { DialogTrigger } from "~/components/ui/dialog";
import { BOXES, boxStyle } from "~/modules/PortalV2Module/layout";

export function PortalV2Hero() {
  return (
    <>
      <div id="home" className="absolute left-0 top-0 h-px w-px" />
      <div
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.heroTitle),
          fontSize: "40px",
          lineHeight: "40px",
          textAlign: "center",
        }}
      >
        BETIS 2026
      </div>
      <div
        className="absolute text-font-light/80"
        style={{
          ...boxStyle(BOXES.heroSubtitle),
          fontSize: "20px",
          lineHeight: "24px",
          textAlign: "center",
        }}
      >
        Gapai Kampus Impian Bersama Bimbingan Belajar
        <br />
        Gratis Fasilkom UI.
      </div>
      <div className="absolute" style={boxStyle(BOXES.heroButtonExplore)}>
        <Button
          asChild
          variant="tertiary"
          className="h-full w-full border-2 border-stroke-light text-[12px] font-normal text-font-light"
        >
          <a href="#about" className="flex items-center gap-2">
            Eksplor Betis
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Button>
      </div>
      <div className="absolute" style={boxStyle(BOXES.heroButtonRegister)}>
        <DialogTrigger asChild>
          <Button
            variant="primary"
            className="h-full w-full text-[12px] font-normal"
          >
            Daftar Sekarang
          </Button>
        </DialogTrigger>
      </div>
    </>
  );
}
