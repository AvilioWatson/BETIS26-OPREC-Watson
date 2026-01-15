import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Alert } from "~/components/ui/alert";
import { Checkbox } from "~/components/ui/checkbox";
import { Chip } from "~/components/ui/chip";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Switch } from "~/components/ui/switch";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { Select } from "~/components/ui/select";
import { Calendar } from "~/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { FileUpload } from "~/components/ui/file-upload";
import { StarIcon, Star } from "lucide-react";
import { toast } from "sonner";

export default function DesignSystemPage() {
  const [checked, setChecked] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [files, setFiles] = useState<File | null>(null);

  return (
    <main className="min-h-screen p-8 bg-linear-0">
      <div className="mx-auto max-w-7xl gap-8">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Design System Guidelines
        </h1>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Typography</h2>

          {/* Font Families */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Font Families
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="mb-2 text-sm font-medium text-gray-500">Xilosa</p>
                <p className="font-xilosa text-2xl">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Manrope
                </p>
                <p className="font-manrope text-2xl">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Poppins
                </p>
                <p className="font-poppins text-2xl">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>

          {/* Headings */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Headings
            </h3>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H1</span>
                </div>
                <div className="text-h1 flex-1 font-xilosa leading-h1">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3.75rem</div>
                  <div>LH: 3.75rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H2</span>
                </div>
                <div className="text-h2 flex-1 font-xilosa leading-h2">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3rem</div>
                  <div>LH: 3.75rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H3</span>
                </div>
                <div className="text-h3 flex-1 font-xilosa leading-h3">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>2.25rem</div>
                  <div>LH: 2.5rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H4</span>
                </div>
                <div className="text-h4 flex-1 font-xilosa leading-h4">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.875rem</div>
                  <div>LH: 2.25rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H5</span>
                </div>
                <div className="text-h5 flex-1 font-xilosa leading-h5">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.5rem</div>
                  <div>LH: 2rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H6</span>
                </div>
                <div className="text-h6 flex-1 font-xilosa leading-h6">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.25rem</div>
                  <div>LH: 1.75rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtitles */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Subtitles
            </h3>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S1</span>
                </div>
                <div className="text-s1 flex-1 font- leading-s1">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3.75rem</div>
                  <div>LH: 3.75rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S2</span>
                </div>
                <div className="text-s2 flex-1 font- leading-s2">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3rem</div>
                  <div>LH: 3rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S3</span>
                </div>
                <div className="text-s3 flex-1 font- leading-s3">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>2.25rem</div>
                  <div>LH: 2.5rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S4</span>
                </div>
                <div className="text-s4 flex-1 font- leading-s4">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.875rem</div>
                  <div>LH: 2.25rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S5</span>
                </div>
                <div className="text-s5 flex-1 font- leading-s5">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.5rem</div>
                  <div>LH: 2rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S6</span>
                </div>
                <div className="text-s6 flex-1 font- leading-s6">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.25rem</div>
                  <div>LH: 1.75rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S7</span>
                </div>
                <div className="text-s7 flex-1 font- leading-s7">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1rem</div>
                  <div>LH: 1.75rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S8</span>
                </div>
                <div className="text-s8 flex-1 font- leading-s8">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>0.875rem</div>
                  <div>LH: normal</div>
                  <div>Weight: 600</div>
                </div>
              </div>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Paragraphs
            </h3>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P1</span>
                </div>
                <div className="text-p1 flex-1 font-poppins leading-p1">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3.75rem</div>
                  <div>LH: 3.75rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P2</span>
                </div>
                <div className="text-p2 flex-1 font-poppins leading-p2">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3rem</div>
                  <div>LH: 3rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P3</span>
                </div>
                <div className="text-p3 flex-1 font-poppins leading-p3">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>2.25rem</div>
                  <div>LH: 2.5rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P4</span>
                </div>
                <div className="text-p4 flex-1 font-poppins leading-p4">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.875rem</div>
                  <div>LH: 2.25rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P5</span>
                </div>
                <div className="text-p5 flex-1 font-poppins leading-p5">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.5rem</div>
                  <div>LH: 2rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P6</span>
                </div>
                <div className="text-p6 flex-1 font-poppins leading-p6">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.25rem</div>
                  <div>LH: 1.75rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P7</span>
                </div>
                <div className="text-p7 flex-1 font-poppins leading-p7">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1rem</div>
                  <div>LH: 1.5rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P8</span>
                </div>
                <div className="text-p8 flex-1 font-poppins leading-p8">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>0.875rem</div>
                  <div>LH: 1.25rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Color Palettes
          </h2>
          <div className="space-y-8">
            {/* Olivine */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Olivine
              </h3>
              <p className="mb-4 text-sm text-gray-500">Green Palette</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Moonstone */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Moonstone
              </h3>
              <p className="mb-4 text-sm text-gray-500">Blue/Teal Palette</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Payneys Grey */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Payneys Grey
              </h3>
              <p className="mb-4 text-sm text-gray-500">Slate/Steel Palette</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Pearl */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Pearl
              </h3>
              <p className="mb-4 text-sm text-gray-500">Beige/Warm Palette</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Caput Mortuum */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Caput Mortuum
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Deep Red/Earth Palette
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Miscellaneous */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Miscellaneous
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Semantic Colors & Utilities
              </p>

              {/* Main Theme */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Main Theme
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-main-theme" />
                    <p className="text-xs text-gray-600">main-theme</p>
                  </div>
                </div>
              </div>

              {/* Font Colors */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Font Colors
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-font-light" />
                    <p className="text-xs text-gray-600">font-light</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-font-medium" />
                    <p className="text-xs text-gray-600">font-medium</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-font-dark" />
                    <p className="text-xs text-gray-600">font-dark</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-font-dark-green" />
                    <p className="text-xs text-gray-600">font-dark-green</p>
                  </div>
                </div>
              </div>

              {/* Background Colors */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Background Colors
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-background-light" />
                    <p className="text-xs text-gray-600">background-light</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-background-olivine-light" />
                    <p className="text-xs text-gray-600">
                      background-olivine-light
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-background-olivine-light-ghost" />
                    <p className="text-xs text-gray-600">
                      background-olivine-light-ghost
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-background-dark" />
                    <p className="text-xs text-gray-600">background-dark</p>
                  </div>
                </div>
              </div>

              {/* Stroke Colors */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Stroke Colors
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-stroke-light" />
                    <p className="text-xs text-gray-600">stroke-light</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-stroke-medium-light" />
                    <p className="text-xs text-gray-600">stroke-medium-light</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-stroke-medium" />
                    <p className="text-xs text-gray-600">stroke-medium</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-stroke-dark" />
                    <p className="text-xs text-gray-600">stroke-dark</p>
                  </div>
                </div>
              </div>

              {/* Interactions */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Interactions<span className="font-medium"> / Primary</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-primary-normal" />
                    <p className="text-xs text-gray-600">primary-normal</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-primary-hover" />
                    <p className="text-xs text-gray-600">primary-hover</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-primary-active" />
                    <p className="text-xs text-gray-600">primary-active</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-primary-disabled" />
                    <p className="text-xs text-gray-600">primary-disabled</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Interactions<span className="font-medium"> / Secondary</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-secondary-normal" />
                    <p className="text-xs text-gray-600">secondary-normal</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-secondary-hover" />
                    <p className="text-xs text-gray-600">secondary-hover</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-secondary-active" />
                    <p className="text-xs text-gray-600">secondary-active</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-secondary-disabled" />
                    <p className="text-xs text-gray-600">secondary-disabled</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Interactions<span className="font-medium"> / Tertiary</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-tertiary-normal" />
                    <p className="text-xs text-gray-600">tertiary-normal</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-tertiary-hover" />
                    <p className="text-xs text-gray-600">tertiary-hover</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-tertiary-active" />
                    <p className="text-xs text-gray-600">tertiary-ctive</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-tertiary-disabled" />
                    <p className="text-xs text-gray-600">tertiary-disabled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Atomic Components Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Atomic Components
          </h2>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Buttons
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm font-medium text-gray-500">
                    Primary
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Button</Button>
                    <Button variant="primary">
                      <Star />
                      Button
                      <Star />
                    </Button>
                    <Button variant="primary" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-gray-500">
                    Secondary
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="secondary">Button</Button>
                    <Button variant="secondary">
                      <Star />
                      Button
                      <Star />
                    </Button>
                    <Button variant="secondary" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-gray-500">
                    Tertiary
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="tertiary">Button</Button>
                    <Button variant="tertiary">
                      <Star />
                      Button
                      <Star />
                    </Button>
                    <Button variant="tertiary" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Alerts
            </h3>
            <div className="space-y-4">
              <Alert variant="success">This is a success alert message</Alert>
              <Alert variant="error">This is an error alert message</Alert>
              <Alert variant="warning">This is a warning alert message</Alert>
              <Alert variant="information">
                This is an information alert message
              </Alert>
              <Alert variant="loading">This is a loading alert message</Alert>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Checkboxes
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="check1"
                    checked={checked}
                    onCheckedChange={(value) => setChecked(value === true)}
                  />
                  <label htmlFor="check1" className="text-sm cursor-pointer">
                    Checkbox
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check2" checked />
                  <label htmlFor="check2" className="text-sm cursor-pointer">
                    Checked
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check3" disabled />
                  <label
                    htmlFor="check3"
                    className="text-sm cursor-not-allowed opacity-50"
                  >
                    Disabled
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check4" checked disabled />
                  <label
                    htmlFor="check4"
                    className="text-sm cursor-not-allowed opacity-50"
                  >
                    Checked Disabled
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Chips */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">Chips</h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex flex-wrap gap-4">
                <Chip variant="primary">Primary Chip</Chip>
                <Chip variant="secondary">Secondary Chip</Chip>
                <Chip variant="tertiary">Tertiary Chip</Chip>
                <Chip variant="primary">
                  <StarIcon />
                  With Icon
                </Chip>
              </div>
            </div>
          </div>

          {/* Radio Groups */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Radio Groups
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="r1" />
                  <label htmlFor="r1" className="text-sm cursor-pointer">
                    Option 1
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="r2" />
                  <label htmlFor="r2" className="text-sm cursor-pointer">
                    Option 2
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="r3" disabled />
                  <label
                    htmlFor="r3"
                    className="text-sm cursor-not-allowed opacity-50"
                  >
                    Option 3 (Disabled)
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Switches */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Switches
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <Switch
                    id="switch1"
                    checked={switchValue}
                    onCheckedChange={setSwitchValue}
                  />
                  <label htmlFor="switch1" className="text-sm cursor-pointer">
                    Switch
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="switch2" checked />
                  <label htmlFor="switch2" className="text-sm cursor-pointer">
                    Checked
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="switch3" disabled />
                  <label
                    htmlFor="switch3"
                    className="text-sm cursor-not-allowed opacity-50"
                  >
                    Disabled
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="switch4" checked disabled />
                  <label
                    htmlFor="switch4"
                    className="text-sm cursor-not-allowed opacity-50"
                  >
                    Checked Disabled
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Tooltips */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Tooltips
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex flex-wrap gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="primary">Hover</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Toaster */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Toaster (Toast Notifications)
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="mb-4 text-sm text-gray-600">
                Click buttons to trigger toast notifications
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  onClick={() => toast.success("Success toast")}
                >
                  Success
                </Button>
                <Button
                  variant="primary"
                  onClick={() => toast.error("Error toast")}
                >
                  Error
                </Button>
                <Button
                  variant="primary"
                  onClick={() => toast.warning("Warning toast")}
                >
                  Warning
                </Button>
                <Button
                  variant="primary"
                  onClick={() => toast.info("Information toast")}
                >
                  Information
                </Button>
                <Button
                  variant="primary"
                  onClick={() => toast.loading("Loading toast")}
                >
                  Loading
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Molecular Components Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Molecular Components
          </h2>

          {/* Input Fields */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Input Fields
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="input-default">Default Input</Label>
                  <Input id="input-default" placeholder="Enter text..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-disabled">Disabled Input</Label>
                  <Input id="input-disabled" placeholder="Disabled" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-error">Input with Error</Label>
                  <Input
                    id="input-error"
                    placeholder="Error state"
                    className="border-feedback-error"
                  />
                  <p className="text-sm text-feedback-error">
                    This field is required
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Textarea */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Textarea
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="textarea-default">Default Textarea</Label>
                  <Textarea
                    id="textarea-default"
                    placeholder="Enter your message..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="textarea-disabled">Disabled Textarea</Label>
                  <Textarea
                    id="textarea-disabled"
                    placeholder="Disabled"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Select */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Select Dropdown
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="select-default">Select an option</Label>
                  <Select>
                    <option value="">Choose...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="select-disabled">Disabled Select</Label>
                  <Select disabled>
                    <option value="">Choose...</option>
                    <option value="option1">Option 1</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Calendar
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              File Upload
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <Label>Upload Files</Label>
                  <FileUpload value={files} onChange={setFiles} />
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">Card</h3>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    This is a card component with header and content sections.
                    It can be used to group related information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">Tabs</h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <p className="text-sm text-gray-600">
                    Content for Tab 1. This is where you can display content
                    specific to this tab.
                  </p>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <p className="text-sm text-gray-600">
                    Content for Tab 2. Each tab can have different content.
                  </p>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <p className="text-sm text-gray-600">
                    Content for Tab 3. Tabs help organize information in a
                    compact space.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Accordion */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Accordion
            </h3>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Accordion Item 1</AccordionTrigger>
                  <AccordionContent>
                    This is the content for the first accordion item. Click the
                    trigger to expand or collapse this section.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Accordion Item 2</AccordionTrigger>
                  <AccordionContent>
                    This is the content for the second accordion item.
                    Accordions are great for FAQs and collapsible sections.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Accordion Item 3</AccordionTrigger>
                  <AccordionContent>
                    This is the content for the third accordion item. You can
                    add any content here including text, images, or other
                    components.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Pagination */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Pagination
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">100</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>

          {/* Dialog */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Dialog (Modal)
            </h3>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="primary">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-gray-600">
                      This is a dialog component. It can be used for modals,
                      alerts, or any content that needs to overlay the main
                      page.
                    </p>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="tertiary">Cancel</Button>
                    <Button variant="primary">Confirm</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
