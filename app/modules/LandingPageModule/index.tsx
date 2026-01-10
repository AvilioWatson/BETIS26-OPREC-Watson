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
      {" "}
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
          <Alert variant="success">A simple success alert-check it out!</Alert>
          <Alert variant="error">A simple error alert-check it out!</Alert>
          <Alert variant="warning">A simple warning alert-check it out!</Alert>
          <Alert variant="information">
            A simple information alert-check it out!
          </Alert>
          <Alert variant="loading">A simple loading alert-check it out!</Alert>
        </div>
      </div>
      <div>
        Toaster
        <div className="flex flex-col">
          <Button onClick={() => toast.success("Event has been created")}>
            Show Toast
          </Button>
          <Button onClick={() => toast.error("Event has been created")}>
            Show Toast
          </Button>
          <Button onClick={() => toast.warning("Event has been created")}>
            Show Toast
          </Button>
          <Button onClick={() => toast.info("Event has been created")}>
            Show Toast
          </Button>
          <Button onClick={() => toast.loading("Event has been created")}>
            Show Toast
          </Button>
        </div>
      </div>
      <div>
        Switch
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Switch defaultChecked />
            <span>Label</span>
          </div>
          <div className="flex items-center gap-2">
            <Switch />
            <span>Label</span>
          </div>
          <div className="flex items-center gap-2">
            <Switch size="sm" defaultChecked />
            <span>Label</span>
          </div>
          <div className="flex items-center gap-2">
            <Switch size="sm" />
            <span>Label</span>
          </div>
        </div>
      </div>
      <div>
        Radio
        <div className="flex flex-col gap-4">
          <RadioGroup defaultValue="option1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="option1" />
              <label htmlFor="option1">Label</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="option2" />
              <label htmlFor="option2">Label</label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="option3">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option3" id="option3" />
              <label htmlFor="option3">Label</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option4" id="option4" />
              <label htmlFor="option4">Label</label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div>
        Checkbox
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox1" defaultChecked />
            <label htmlFor="checkbox1">Label</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox2" />
            <label htmlFor="checkbox2">Label</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox3" defaultChecked />
            <label htmlFor="checkbox3">Label</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox4" />
            <label htmlFor="checkbox4">Label</label>
          </div>
        </div>
      </div>
    </main>
  );
}
