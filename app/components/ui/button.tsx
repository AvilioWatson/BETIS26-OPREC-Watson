import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer px-8 h-12 md:h-14 rounded-[20px] justify-center gap-2 whitespace-nowrap text-s7 md:text-p6 transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 md:[&_svg:not([class*='size-'])]:size-7 shrink-0 [&_svg]:shrink-0 outline-none shadow-[8px_8px_8px_0px_rgba(0,0,0,0.1)] hover:shadow-[8px_8px_8px_0px_rgba(0,0,0,0.2)]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-normal hover:bg-primary-hover active:bg-primary-active text-stroke-light disabled:bg-primary-disabled disabled:text-stroke-light/50",
        secondary:
          "bg-secondary-normal hover:bg-secondary-hover active:bg-secondary-active text-stroke-light disabled:bg-secondary-disabled disabled:text-stroke-light/50",
        tertiary:
          "border-2 text-tertiary-normal hover:text-tertiary-hover active:text-tertiary-active disabled:border-caput-mortuum-light disabled:text-caput-mortuum-light",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function Button({
  className,
  variant = "primary",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
