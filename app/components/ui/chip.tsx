import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const chipVariants = cva(
  "w-fit h-fit inline-flex text-s8 px-3 md:px-5 py-0.5 items-center justify-center rounded-full whitespace-nowrap [&>svg]:size-4 md:[&>svg]:size-5.5 gap-1",
  {
    variants: {
      variant: {
        primary: "text-stroke-light bg-payneys-grey-normal",
        secondary: "text-caput-mortuum-dark-hover bg-pearl-normal",
        tertiary: "text-caput-mortuum-dark-hover bg-moonstone-light-active",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function Chip({
  className,
  variant,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof chipVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="chip"
      className="bg-stroke-dark w-fit h-fit text-s8 md:text-s7 font-semibold rounded-full p-0.5 shrink-0 flex justify-center"
      children={
        <div className={cn(chipVariants({ variant }), className)}>
          {children}
        </div>
      }
      {...props}
    />
  );
}

export { Chip, chipVariants };
