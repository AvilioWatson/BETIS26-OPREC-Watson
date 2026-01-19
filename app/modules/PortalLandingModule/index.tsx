import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";

const FRAME_WIDTH = 1440;
const FRAME_HEIGHT = 6009;
const FORM_LEFT = 280;
const FORM_TOP = 4865;
const FORM_WIDTH = 880;
const FORM_HEIGHT = 753;

const toPercent = (value: number, base: number) =>
  `${(value / base) * 100}%`;

export function PortalLandingModule() {
  return (
    <main className="bg-main-theme">
      <section
        id="home"
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}` }}
      >
        <img
          src="/assets/frame-1.svg"
          alt=""
          aria-hidden="true"
          className="block h-full w-[100vw] max-w-none"
        />

        <div
          id="about"
          className="absolute h-px w-px"
          style={{ top: toPercent(1441, FRAME_HEIGHT) }}
        />

        <Dialog>
          <div className="absolute inset-0">
            <nav
              className="absolute flex items-center justify-between px-12"
              style={{
                left: "0%",
                top: "0%",
                width: "100%",
                height: toPercent(100, FRAME_HEIGHT),
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#home"
                    className="pointer-events-auto"
                    style={{
                      width: toPercent(237, FRAME_WIDTH),
                      height: toPercent(46, FRAME_HEIGHT),
                    }}
                    aria-label="BETIS 2026"
                  />
                </TooltipTrigger>
                <TooltipContent sideOffset={6}>BETIS 2026</TooltipContent>
              </Tooltip>

              <div
                className="pointer-events-auto flex items-center"
                style={{
                  width: toPercent(545, FRAME_WIDTH),
                  height: toPercent(28, FRAME_HEIGHT),
                  gap: toPercent(48, FRAME_WIDTH),
                }}
              >
                {["Home", "Course", "Leaderboard", "Betis-Talk"].map((item) => (
                  <Tooltip key={item}>
                    <TooltipTrigger asChild>
                      <a
                        href="#home"
                        className="flex-1 text-center"
                        aria-label={item}
                      >
                        <span className="sr-only">{item}</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={6}>{item}</TooltipContent>
                  </Tooltip>
                ))}
              </div>

              <div
                className="pointer-events-auto"
                style={{
                  width: toPercent(125, FRAME_WIDTH),
                  height: toPercent(56, FRAME_HEIGHT),
                }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                      <Button
                        variant="none"
                        className="h-full w-full bg-transparent text-transparent shadow-none"
                        aria-label="Login"
                      />
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={6}>Login</TooltipContent>
                </Tooltip>
              </div>
            </nav>

            <div
              className="absolute flex items-center justify-center"
              style={{
                left: toPercent(424, FRAME_WIDTH),
                top: toPercent(392, FRAME_HEIGHT),
                width: toPercent(593, FRAME_WIDTH),
                height: toPercent(56, FRAME_HEIGHT),
                gap: toPercent(20, FRAME_WIDTH),
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="none"
                    className="h-full w-full border-2 border-stroke-light bg-transparent text-transparent shadow-none"
                    aria-label="Eksplor Betis"
                  >
                    <a href="#about">
                      <span className="sr-only">Eksplor Betis</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={6}>Eksplor Betis</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <Button
                      variant="none"
                      className="h-full w-full bg-transparent text-transparent shadow-none"
                      aria-label="Daftar Sekarang"
                    />
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent sideOffset={6}>Daftar Sekarang</TooltipContent>
              </Tooltip>
            </div>

            <div
              className="absolute flex items-center"
              style={{
                left: toPercent(404, FRAME_WIDTH),
                top: toPercent(4146, FRAME_HEIGHT),
                width: toPercent(914, FRAME_WIDTH),
                height: toPercent(56, FRAME_HEIGHT),
                gap: toPercent(12, FRAME_WIDTH),
              }}
            >
              {["Button", "Button"].map((label, index) => (
                <Tooltip key={`${label}-${index}`}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={index === 0 ? "secondary" : "none"}
                      className={`h-full w-full bg-transparent text-transparent shadow-none ${
                        index === 1 ? "border-2 border-stroke-light" : ""
                      }`}
                      aria-label={label}
                    />
                  </TooltipTrigger>
                  <TooltipContent sideOffset={6}>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            <div
              className="absolute flex items-center"
              style={{
                left: toPercent(404, FRAME_WIDTH),
                top: toPercent(4566, FRAME_HEIGHT),
                width: toPercent(914, FRAME_WIDTH),
                height: toPercent(56, FRAME_HEIGHT),
                gap: toPercent(12, FRAME_WIDTH),
              }}
            >
              {["Button", "Button"].map((label, index) => (
                <Tooltip key={`${label}-${index}`}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={index === 0 ? "secondary" : "none"}
                      className={`h-full w-full bg-transparent text-transparent shadow-none ${
                        index === 1 ? "border-2 border-stroke-light" : ""
                      }`}
                      aria-label={label}
                    />
                  </TooltipTrigger>
                  <TooltipContent sideOffset={6}>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            <div
              className="absolute pointer-events-none"
              style={{
                left: toPercent(FORM_LEFT, FRAME_WIDTH),
                top: toPercent(FORM_TOP, FRAME_HEIGHT),
                width: toPercent(FORM_WIDTH, FRAME_WIDTH),
                height: toPercent(FORM_HEIGHT, FRAME_HEIGHT),
              }}
            />

            <div
              className="absolute"
              style={{
                left: toPercent(FORM_LEFT + 249, FRAME_WIDTH),
                top: toPercent(FORM_TOP + 569, FRAME_HEIGHT),
                width: toPercent(382, FRAME_WIDTH),
                height: toPercent(56, FRAME_HEIGHT),
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="none"
                    className="h-full w-full bg-transparent text-transparent shadow-none"
                    aria-label="Register"
                  />
                </TooltipTrigger>
                <TooltipContent sideOffset={6}>Register</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <DialogContent className="bg-background-light">
            <DialogHeader>
              <DialogTitle>Coming Soon</DialogTitle>
              <DialogDescription>
                Website is still in building
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>1, 
      </section>
    </main>
  );
}
