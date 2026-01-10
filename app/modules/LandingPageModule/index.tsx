import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  Home,
  PopcornIcon,
  Star,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Chip } from "~/components/ui/chip";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

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
      <div>
        Alert
        <div className="flex flex-col">
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </Alert>
          <Alert>
            <PopcornIcon />
            <AlertTitle>
              This Alert has a title and an icon. No description.
            </AlertTitle>
          </Alert>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Unable to process your payment.</AlertTitle>
            <AlertDescription>
              <p>Please verify your billing information and try again.</p>
              <ul className="list-inside list-disc text-sm">
                <li>Check your card details</li>
                <li>Ensure sufficient funds</li>
                <li>Verify billing address</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </main>
  );
}
