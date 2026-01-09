import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Home, Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Chip } from "~/components/ui/chip";

export function LandingPageModule() {
  return (
    <main className="flex items-center justify-center h-screen text-olivine-darker">
      <div>
        Chip
        <div>
          <Chip>Chip</Chip>
          <Chip>
            <Home />
            Chip
          </Chip>
          <Chip variant="secondary">Chip</Chip>
          <Chip variant="secondary">
            <Home />
            Chip
          </Chip>
          <Chip variant="tertiary">Chip</Chip>
          <Chip variant="tertiary">
            <Home />
            Chip
          </Chip>
        </div>
      </div>
      <div>
        Button
        <div className="flex flex-col">
          <Button>
            <Star />
            Button
            <Star />
          </Button>
          <Button disabled>
            <Star />
            Button
            <Star />
          </Button>
          <Button variant="secondary">
            <Star />
            Button
            <Star />
          </Button>
          <Button variant="secondary" disabled>
            <Star />
            Button
            <Star />
          </Button>
          <Button variant="tertiary">
            <Star />
            Button
            <Star />
          </Button>
          <Button variant="tertiary" disabled>
            <Star />
            Button
            <Star />
          </Button>
        </div>
      </div>
      <div>
        Tooltip
        <div className="flex flex-col">
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </main>
  );
}
