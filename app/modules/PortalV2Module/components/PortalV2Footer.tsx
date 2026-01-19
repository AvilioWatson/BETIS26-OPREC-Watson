import { BOXES, boxStyle } from "~/modules/PortalV2Module/layout";

export function PortalV2Footer() {
  return (
    <>
      <div
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.footerBrand),
          fontSize: "28px",
          lineHeight: "30px",
        }}
      >
        BETIS
      </div>
      <div
        className="absolute text-font-light"
        style={{
          ...boxStyle(BOXES.footerTagline),
          fontSize: "14px",
          lineHeight: "16px",
        }}
      >
        Bimbingan Belajar Gratis
      </div>
      <div
        className="absolute text-font-light"
        style={{
          ...boxStyle(BOXES.footerAbout),
          fontSize: "12px",
          lineHeight: "14px",
        }}
      >
        About BETIS
      </div>
      <div
        className="absolute text-font-light"
        style={{
          ...boxStyle(BOXES.footerTalk),
          fontSize: "12px",
          lineHeight: "14px",
        }}
      >
        BETIS-Talk
      </div>
      <div
        className="absolute text-font-light"
        style={{
          ...boxStyle(BOXES.footerShop),
          fontSize: "12px",
          lineHeight: "14px",
        }}
      >
        BETIS-Shop
      </div>
      <div
        className="absolute text-font-light"
        style={{
          ...boxStyle(BOXES.footerAddress),
          fontSize: "12px",
          lineHeight: "16px",
        }}
      >
        Fakultas Ilmu Komputer Universitas Indonesia Kampus UI Depok, Pondok
        Cina, Kec. Beji, Kota Depok, Jawa Barat 16424
      </div>
      <div
        className="absolute text-font-light"
        style={{
          ...boxStyle(BOXES.footerEmail),
          fontSize: "12px",
          lineHeight: "14px",
        }}
      >
        betisfasilkomui2026@gmail.com
      </div>
    </>
  );
}
