import { cva } from "class-variance-authority";
import {
  CheckIcon,
  InfoIcon,
  Loader2Icon,
  XIcon,
  AlertTriangleIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <div className="flex size-6 items-center justify-center rounded-full bg-feedback-success">
            <CheckIcon className="size-4 text-white" />
          </div>
        ),
        info: (
          <div className="flex size-6 items-center justify-center rounded-full bg-feedback-information">
            <InfoIcon className="size-4 text-white" />
          </div>
        ),
        warning: (
          <div className="flex size-6 items-center justify-center rounded-full bg-feedback-warning">
            <AlertTriangleIcon className="size-4 text-white" />
          </div>
        ),
        error: (
          <div className="flex size-6 items-center justify-center rounded-full bg-feedback-error">
            <XIcon className="size-4 text-white" />
          </div>
        ),
        loading: (
          <div className="flex size-6 items-center justify-center rounded-full bg-feedback-loading">
            <Loader2Icon className="size-4 animate-spin text-white" />
          </div>
        ),
      }}
      toastOptions={{
        classNames: {
          toast:
            "rounded-2xl! md:rounded-[20px]! px-7! py-2! md:py-4! gap-4! border-2! py-4! px-6! shadow-lg!",
          success: "border-feedback-success! bg-feedback-background-success!",
          error: "border-feedback-error! bg-feedback-background-error!",
          warning: "border-feedback-warning! bg-feedback-background-warning!",
          info: "border-feedback-information! bg-feedback-background-information!",
          loading: "border-feedback-loading! bg-feedback-background-loading!",
          title: "text-s7! text-black!",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
