import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Home, Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Chip } from "~/components/ui/chip";
import { Alert } from "~/components/ui/alert";
import { Switch } from "~/components/ui/switch";
import { Checkbox } from "~/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { toast } from "sonner";

export function LandingPageModule() {
  return (
    <main className="flex items-center justify-center h-screen text-olivine-darker">
      Landing Page
    </main>
  );
}
