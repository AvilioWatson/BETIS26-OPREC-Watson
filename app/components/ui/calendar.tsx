import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker";

import { cn } from "~/lib/utils";
import { Button, buttonVariants } from "~/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "none",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background-light w-full group/calendar px-4 py-8 rounded-xl! border-2! border-stroke-medium-light shadow-none [--cell-size:--spacing(9)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0.5 md:-top-2.5 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-8 hover:shadow-none aria-disabled:opacity-50 p-0 select-none border-2 border-stroke-medium-light bg-background-light rounded-xl shadow-none hover:bg-background-medium-light transition-colors",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-8 hover:shadow-none aria-disabled:opacity-50 p-0 select-none border-2 border-stroke-medium-light bg-background-light rounded-xl shadow-none hover:bg-background-medium-light transition-colors",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center w-full",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border-2 border-stroke-medium-light shadow-none has-focus:ring-ring/50 has-focus:ring-[3px] rounded-xl bg-background-light",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 opacity-0 cursor-pointer appearance-none [&_option]:bg-background-light [&_option]:text-p8! [&_option]:py-2.5 [&_option]:px-4",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-stroke-medium-light rounded-md flex-1 font-normal text-p8! select-none",
          defaultClassNames.weekday
        ),
        week: cn(
          "flex w-full mt-1 md:mt-6 gap-0.5 md:gap-1",
          defaultClassNames.week
        ),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [data-selected=true]:rounded-bg-stroke-medium-light group/day aspect-square select-none",
          props.showWeekNumber,
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-xl bg-background-medium-light",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "rounded-r-xl bg-background-medium-light",
          defaultClassNames.range_end
        ),
        today: cn(
          "bg-background-medium-light text-stroke-medium font-bold! rounded-xl data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-stroke-medium-light aria-selected:text-stroke-medium-light",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-stroke-medium-light opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      data-day={day.date.toLocaleDateString()}
      data-selected={modifiers.selected}
      className={cn(
        "size-full p-0! flex items-center justify-center hover:shadow-none hover:bg-background-olivine-light",
        "border-2 border-stroke-medium-light bg-background-light rounded-xl shadow-none",
        "text-p8! font-normal leading-none transition-colors",
        "data-[selected=true]:bg-stroke-medium data-[selected=true]:text-background-light data-[selected=true]:border-stroke-medium-light",
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
