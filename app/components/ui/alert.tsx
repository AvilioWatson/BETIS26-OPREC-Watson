import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import {
  AlertCircleIcon,
  CheckIcon,
  InfoIcon,
  Loader2Icon,
  XIcon,
} from "lucide-react";

const alertVariants = cva(
  "h-16 md:h-24 flex flex-1 px-5 md:px-7 text-sm gap-5 items-center",
  {
    variants: {
      variant: {
        success: "bg-feedback-background-success",
        error: "bg-feedback-background-error",
        warning: "bg-feedback-background-warning",
        information: "bg-feedback-background-information",
        loading: "bg-feedback-background-loading",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

const alertSideVariants = cva("w-2 shrink-0", {
  variants: {
    variant: {
      success: "bg-feedback-success",
      error: "bg-feedback-error",
      warning: "bg-feedback-warning",
      information: "bg-feedback-information",
      loading: "bg-feedback-loading",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

const alertMeta = {
  success: {
    title: "Success",
    icon: CheckIcon,
    iconBg: "bg-feedback-success",
  },
  error: {
    title: "Error",
    icon: XIcon,
    iconBg: "bg-feedback-error",
  },
  warning: {
    title: "Warning",
    icon: AlertCircleIcon,
    iconBg: "bg-feedback-warning",
  },
  information: {
    title: "Information",
    icon: InfoIcon,
    iconBg: "bg-feedback-information",
  },
  loading: {
    title: "Loading",
    icon: Loader2Icon,
    iconBg: "bg-feedback-loading",
  },
} as const;

function Alert({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  const meta = alertMeta[variant ?? "success"];
  const title = meta.title;
  const Icon = meta.icon;

  return (
    <div
      data-slot="alert"
      role="alert"
      className="flex rounded-lg relative overflow-hidden"
      {...props}
    >
      <div className={cn(alertSideVariants({ variant }), className)} />
      <div className={cn(alertVariants({ variant }), className)}>
        <div
          className={cn(
            alertSideVariants({ variant }),
            "flex items-center justify-center rounded-full size-9 md:size-15"
          )}
        >
          <Icon
            className={cn(
              "size-5 md:size-9 text-font-light",
              variant === "loading" && "animate-spin"
            )}
          />
        </div>
        <div className="space-y-1 text-black">
          <h1 className="text-s8 md:text-s6">{title}</h1>
          <p className="text-p8 md:text-p7">{children}</p>
        </div>
      </div>
    </div>
  );
}

export { Alert };
