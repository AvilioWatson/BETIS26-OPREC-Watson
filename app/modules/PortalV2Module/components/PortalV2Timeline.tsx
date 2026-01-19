import { BOXES, boxStyle } from "~/modules/PortalV2Module/layout";

export function PortalV2Timeline() {
  return (
    <>
      <div
        id="timeline"
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.timelineTitle),
          fontSize: "36px",
          lineHeight: "36px",
          textAlign: "center",
        }}
      >
        Timeline BETIS
      </div>
      <div
        className="absolute font-xilosa text-font-dark"
        style={{
          ...boxStyle(BOXES.timelineWebinarTitle),
          fontSize: "18px",
          lineHeight: "20px",
        }}
      >
        Webinar PPKB
      </div>
      <div
        className="absolute text-font-dark"
        style={{
          ...boxStyle(BOXES.timelineWebinarDate),
          fontSize: "14px",
          lineHeight: "16px",
        }}
      >
        24 Mei 2026
      </div>
      <div
        className="absolute font-xilosa text-font-dark"
        style={{
          ...boxStyle(BOXES.timelineBeTalksTitle),
          fontSize: "18px",
          lineHeight: "20px",
        }}
      >
        Be Talks
      </div>
      <div
        className="absolute text-font-dark"
        style={{
          ...boxStyle(BOXES.timelineBeTalksDate),
          fontSize: "14px",
          lineHeight: "16px",
        }}
      >
        15 Maret 2026
      </div>
      <div
        className="absolute font-xilosa text-font-dark"
        style={{
          ...boxStyle(BOXES.timelineMainEventTitle),
          fontSize: "18px",
          lineHeight: "20px",
        }}
      >
        Main Event
      </div>
      <div
        className="absolute text-font-dark"
        style={{
          ...boxStyle(BOXES.timelineMainEventDate),
          fontSize: "14px",
          lineHeight: "16px",
        }}
      >
        19 April 2026
      </div>
      <div
        className="absolute font-xilosa text-font-dark"
        style={{
          ...boxStyle(BOXES.timelineGrandTitle),
          fontSize: "18px",
          lineHeight: "20px",
        }}
      >
        Grand Launching
      </div>
      <div
        className="absolute text-font-dark"
        style={{
          ...boxStyle(BOXES.timelineGrandDate),
          fontSize: "14px",
          lineHeight: "16px",
        }}
      >
        25 Januari 2026
      </div>
    </>
  );
}
