import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function LandingPageModule() {
  return (
    <main className="bg-main-theme flex items-center justify-center h-screen text-olivine-darker">
      <div>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
      </div>
    </main>
  );
}
