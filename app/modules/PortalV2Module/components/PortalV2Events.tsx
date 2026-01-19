import { Button } from "~/components/ui/button";
import { BOXES, boxStyle } from "~/modules/PortalV2Module/layout";

export function PortalV2Events() {
  return (
    <>
      <div
        id="events"
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.eventsTitle),
          fontSize: "32px",
          lineHeight: "32px",
        }}
      >
        Our Events
      </div>
      <div
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.eventsBeTalksTitle),
          fontSize: "22px",
          lineHeight: "24px",
        }}
      >
        Be-Talks
      </div>
      <p
        className="absolute text-font-light"
        style={{
          ...boxStyle(BOXES.eventsBeTalksBody),
          fontSize: "16px",
          lineHeight: "26px",
        }}
      >
        Be-Talks adalah acara yang bertujuan untuk membangkitkan semangat belajar
        bagi peserta BETIS Fasilkom UI 2026, serta masyarakat umum agar tetap
        konsisten dalam mengejar impian mereka. Dengan adanya Be-Talks,
        diharapkan peserta dapat kembali termotivasi dan lebih bersemangat dalam
        belajar.
      </p>
      <div
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.eventsWebinarTitle),
          fontSize: "22px",
          lineHeight: "24px",
        }}
      >
        Webinar PPKB
      </div>
      <p
        className="absolute text-font-light"
        style={{
          ...boxStyle(BOXES.eventsWebinarBody),
          fontSize: "16px",
          lineHeight: "26px",
        }}
      >
        Webinar Essay PPKB adalah acara yang dirancang untuk memberikan panduan
        kepada peserta mengenai cara menulis essay yang baik dan benar sebagai
        bagian dari seleksi PPKB (Prestasi dan Penelusuran Kemampuan Belajar).
        Dalam seminar ini, peserta akan mendapatkan wawasan mengenai struktur
        esai, strategi penulisan, serta tips untuk membuat esai yang menarik dan
        sesuai kriteria.
      </p>
      <div className="absolute" style={boxStyle(BOXES.eventsButtonPrimary1)}>
        <Button
          variant="secondary"
          className="h-full w-full text-[12px] font-normal text-font-light"
        >
          Button
        </Button>
      </div>
      <div className="absolute" style={boxStyle(BOXES.eventsButtonSecondary1)}>
        <Button
          variant="tertiary"
          className="h-full w-full border-stroke-light text-[12px] font-normal text-font-light hover:text-font-light active:text-font-light"
        >
          Button
        </Button>
      </div>
      <div className="absolute" style={boxStyle(BOXES.eventsButtonPrimary2)}>
        <Button
          variant="secondary"
          className="h-full w-full text-[12px] font-normal text-font-light"
        >
          Button
        </Button>
      </div>
      <div className="absolute" style={boxStyle(BOXES.eventsButtonSecondary2)}>
        <Button
          variant="tertiary"
          className="h-full w-full border-stroke-light text-[12px] font-normal text-font-light hover:text-font-light active:text-font-light"
        >
          Button
        </Button>
      </div>
    </>
  );
}
