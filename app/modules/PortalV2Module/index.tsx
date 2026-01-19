import { Dialog } from "~/components/ui/dialog";
import { PortalV2About } from "~/modules/PortalV2Module/components/PortalV2About";
import { PortalV2Background } from "~/modules/PortalV2Module/components/PortalV2Background";
import { PortalV2Dialog } from "~/modules/PortalV2Module/components/PortalV2Dialog";
import { PortalV2Events } from "~/modules/PortalV2Module/components/PortalV2Events";
import { PortalV2Footer } from "~/modules/PortalV2Module/components/PortalV2Footer";
import { PortalV2Hero } from "~/modules/PortalV2Module/components/PortalV2Hero";
import { PortalV2Mobile } from "~/modules/PortalV2Module/components/PortalV2Mobile";
import { PortalV2Navbar } from "~/modules/PortalV2Module/components/PortalV2Navbar";
import { PortalV2Register } from "~/modules/PortalV2Module/components/PortalV2Register";
import { PortalV2Timeline } from "~/modules/PortalV2Module/components/PortalV2Timeline";
import { FRAME_HEIGHT, FRAME_WIDTH } from "~/modules/PortalV2Module/layout";

export function PortalV2Module() {
  return (
    <Dialog>
      <main className="bg-main-theme text-font-light">
        <PortalV2Mobile />
        <div
          className="relative mx-auto hidden w-full overflow-hidden md:block"
          style={{
            width: "min(100vw, 1440px)",
            height: `calc(min(100vw, 1440px) * ${FRAME_HEIGHT} / ${FRAME_WIDTH})`,
            ["--scale" as any]: `calc(min(100vw, 1440px) / ${FRAME_WIDTH})`,
          }}
        >
          <div
            className="relative origin-top-left"
            style={{
              width: FRAME_WIDTH,
              height: FRAME_HEIGHT,
              transform: "scale(var(--scale))",
            }}
          >
            <PortalV2Background />
            <PortalV2Navbar />
            <PortalV2Hero />
            <PortalV2About />
            <PortalV2Timeline />
            <PortalV2Events />
            <PortalV2Register />
            <PortalV2Footer />
          </div>
        </div>
      </main>
      <PortalV2Dialog />
    </Dialog>
  );
}
