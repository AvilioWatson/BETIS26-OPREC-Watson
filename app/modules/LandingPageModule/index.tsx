import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function LandingPageModule() {
  return (
    <main className="bg-main-theme font-bold text-s3 flex text-font-light flex-col gap-6 items-center justify-center min-h-screen p-8">
      {/* TODO: Kerjakan implementasi anda di sini (bisa hapus konten di bawah)*/}
      Landing Page
      <Link to="/ds">
        <Button>Design System</Button>
      </Link>
    </main>
  );
}
