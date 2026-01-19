import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const timelineItems = [
  { title: "Webinar PPKB", date: "24 Mei 2026" },
  { title: "Main Event", date: "19 April 2026" },
  { title: "Be Talks", date: "15 Maret 2026" },
  { title: "Grand Launching", date: "25 Januari 2026" },
];

const eventCards = [
  {
    title: "Be-Talks",
    description:
      "Be-Talks adalah acara yang bertujuan untuk membangkitkan semangat belajar bagi peserta BETIS Fasilkom UI 2026, serta masyarakat umum agar tetap konsisten dalam mengejar impian mereka.",
  },
  {
    title: "Webinar PPKB",
    description:
      "Webinar Essay PPKB adalah acara yang dirancang untuk memberikan panduan kepada peserta mengenai cara menulis essay yang baik dan benar sebagai bagian dari seleksi PPKB.",
  },
];

export function PortalV2Mobile() {
  return (
    <div className="md:hidden">
      <header className="bg-tertiary-normal text-font-light">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <img src="/logo-white.webp" alt="BETIS 2026" className="h-8 w-8" />
            <span className="font-xilosa text-xl">BETIS 2026</span>
          </div>
          <Button variant="primary" className="h-10 px-4 text-sm">
            Login
          </Button>
        </div>
      </header>

      <section className="px-4 pb-12 pt-10 text-center text-font-light">
        <h1 className="font-xilosa text-3xl">BETIS 2026</h1>
        <p className="mt-3 text-sm text-font-light/80">
          Gapai Kampus Impian Bersama Bimbingan Belajar
          <br />
          Gratis Fasilkom UI.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button variant="tertiary" className="w-full border-2">
            Eksplor Betis
          </Button>
          <Button variant="primary" className="w-full">
            Daftar Sekarang
          </Button>
        </div>
      </section>

      <section className="px-4 py-10 text-font-light">
        <h2 className="font-xilosa text-2xl">About BETIS Fasilkom UI</h2>
        <Card className="mt-4 border-2 border-stroke-light bg-primary-normal">
          <CardContent className="p-4 text-sm">
            Program bimbingan belajar gratis untuk siswa SMA/sederajat dan alumni
            yang membutuhkan dukungan dalam persiapan menuju perguruan tinggi
            negeri.
          </CardContent>
        </Card>
      </section>

      <section className="px-4 py-10 text-font-light">
        <h2 className="font-xilosa text-2xl text-center">Timeline BETIS</h2>
        <div className="mt-6 grid gap-4">
          {timelineItems.map((item) => (
            <Card key={item.title} className="border-2 border-stroke-light">
              <CardContent className="p-4 text-sm text-font-dark">
                <div className="font-xilosa text-base">{item.title}</div>
                <div className="text-xs">{item.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 text-font-light">
        <h2 className="font-xilosa text-2xl">Our Events</h2>
        <div className="mt-6 grid gap-6">
          {eventCards.map((event) => (
            <Card key={event.title} className="border-2 border-stroke-light">
              <CardContent className="p-4">
                <div className="font-xilosa text-lg text-font-light">
                  {event.title}
                </div>
                <p className="mt-2 text-sm text-font-light/90">
                  {event.description}
                </p>
                <div className="mt-4 grid gap-3">
                  <Button variant="secondary" className="w-full">
                    Button
                  </Button>
                  <Button variant="tertiary" className="w-full border-2">
                    Button
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 text-font-light">
        <h2 className="font-xilosa text-2xl text-center">Daftar BETIS</h2>
        <Card className="mt-6 border-2 border-stroke-light bg-moonstone-normal">
          <CardContent className="p-4">
            <h3 className="text-center font-xilosa text-2xl">Register</h3>
            <form className="mt-6 grid gap-4">
              {[
                "Nama Lengkap",
                "Nama Panggilan",
                "No. HP/WA",
                "Email",
                "Password",
                "Konfirmasi Password",
              ].map((label) => (
                <div key={label}>
                  <Label className="text-xs">
                    {label} <span className="text-feedback-error">*</span>
                  </Label>
                  <Input className="mt-2 bg-background-light" />
                </div>
              ))}
            </form>
            <Button variant="secondary" className="mt-6 w-full">
              Register
            </Button>
            <div className="mt-4 text-center text-xs">
              Already have an account?
              <br />
              <span className="text-font-dark-green">Login</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-primary-normal px-4 py-8 text-font-light">
        <div className="font-xilosa text-xl">BETIS</div>
        <div className="text-xs">Bimbingan Belajar Gratis</div>
        <div className="mt-4 text-xs">
          Fakultas Ilmu Komputer Universitas Indonesia Kampus UI Depok, Pondok
          Cina, Kec. Beji, Kota Depok, Jawa Barat 16424
        </div>
        <div className="mt-2 text-xs">betisfasilkomui2026@gmail.com</div>
      </footer>
    </div>
  );
}
