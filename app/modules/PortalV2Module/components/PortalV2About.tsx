import { BOXES, boxStyle } from "~/modules/PortalV2Module/layout";

export function PortalV2About() {
  return (
    <>
      <div
        id="about"
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.aboutTitle),
          fontSize: "32px",
          lineHeight: "32px",
        }}
      >
        About BETIS Fasilkom UI
      </div>
      <p
        className="absolute text-font-light"
        style={{
          ...boxStyle(BOXES.aboutBody),
          fontSize: "18px",
          lineHeight: "28px",
        }}
      >
        Program bimbingan belajar gratis untuk siswa SMA/sederajat dan alumni
        yang membutuhkan dukungan dalam persiapan menuju perguruan tinggi
        negeri. Program ini menyediakan materi akademis dan edukasi perkuliahan,
        membantu peserta meraih pendidikan tinggi, serta menjadi wadah bagi
        mahasiswa UI untuk mengabdi kepada masyarakat.
      </p>
      <div
        className="absolute font-xilosa text-font-light"
        style={{
          ...boxStyle(BOXES.aboutPrevious),
          fontSize: "26px",
          lineHeight: "30px",
        }}
      >
        BETIS Sebelumnya
      </div>
      <div
        className="absolute font-xilosa text-font-dark-green"
        style={{
          ...boxStyle(BOXES.aboutApplicantsValue),
          fontSize: "22px",
          lineHeight: "24px",
          textAlign: "center",
        }}
      >
        350+
      </div>
      <div
        className="absolute text-font-dark"
        style={{
          ...boxStyle(BOXES.aboutApplicantsLabel),
          fontSize: "14px",
          lineHeight: "16px",
          textAlign: "center",
        }}
      >
        Pendaftar
      </div>
      <div
        className="absolute font-xilosa text-font-dark-green"
        style={{
          ...boxStyle(BOXES.aboutAcceptedValue),
          fontSize: "22px",
          lineHeight: "24px",
          textAlign: "center",
        }}
      >
        125
      </div>
      <div
        className="absolute text-font-dark"
        style={{
          ...boxStyle(BOXES.aboutAcceptedLabel),
          fontSize: "14px",
          lineHeight: "16px",
          textAlign: "center",
        }}
      >
        Peserta Diterima
      </div>
    </>
  );
}
