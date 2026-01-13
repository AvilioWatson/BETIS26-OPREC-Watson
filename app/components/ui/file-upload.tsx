import * as React from "react";
import { cn } from "~/lib/utils";
import { UploadIcon, Trash2, FileIcon } from "lucide-react";

interface FileUploadProps
  extends Omit<React.ComponentProps<"div">, "onChange"> {
  onChange?: (file: File | null) => void;
  accept?: string;
  maxSize?: number; // in MB
  disabled?: boolean;
  value?: File | null;
}

function FileUpload({
  className,
  onChange,
  accept,
  maxSize,
  disabled = false,
  value = null,
  ...props
}: FileUploadProps) {
  const [file, setFile] = React.useState<File | null>(value);
  const [isDragging, setIsDragging] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dragCounter = React.useRef(0);

  React.useEffect(() => {
    setFile(value);
  }, [value]);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      dragCounter.current++;
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      dragCounter.current--;
      if (dragCounter.current === 0) {
        setIsDragging(false);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const validateFile = (file: File): boolean => {
    if (maxSize && file.size > maxSize * 1024 * 1024) {
      console.warn(`File ${file.name} exceeds maximum size of ${maxSize}MB`);
      return false;
    }
    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current = 0;
    setIsDragging(false);

    if (disabled || file) return;

    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFile = droppedFiles.find(validateFile);

    if (validFile) {
      setFile(validFile);
      onChange?.(validFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (file) {
      // Clear input value if file already exists
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return;
    }

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      if (validateFile(selectedFile)) {
        setFile(selectedFile);
        onChange?.(selectedFile);
      }
    }
    // Clear input value to allow re-uploading the same file
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const removeFile = () => {
    setFile(null);
    onChange?.(null);
    // Clear input value to allow re-uploading the same file
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (!disabled && !file) {
      inputRef.current?.click();
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
        className={cn(
          "relative flex flex-col h-60 w-73 md:w-95.5 items-center justify-center gap-4 rounded-xl border-2 bg-background-light p-12 md:p-16 transition-all shadow-xs",
          isDragging && !disabled && !file
            ? "border-stroke-medium bg-background-olivine-light cursor-pointer"
            : "border-stroke-medium-light",
          disabled &&
            "opacity-50 cursor-not-allowed hover:border-stroke-medium-light",
          file
            ? "border-dashed border-4 bg-background-dark cursor-default"
            : "cursor-pointer"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept={accept}
          disabled={disabled}
        />
        {!file ? (
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-full bg-stroke-light/30 p-4">
              <UploadIcon className="size-8 md:size-10 text-stroke-medium-light" />
            </div>
            <div className="text-center">
              <p className="text-p8! text-stroke-medium-light">
                {isDragging
                  ? "Drop your file here"
                  : maxSize
                  ? `Please upload your File Here, Max Size ${maxSize} MB`
                  : "Please upload your File Here"}
              </p>
            </div>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              disabled={disabled}
              className="absolute cursor-pointer top-4 right-4 z-10 rounded-lg bg-background-light border-stroke-medium-light p-2 hover:bg-background-medium-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="size-4 md:size-5 text-feedback-error" />
            </button>
            <div
              className="flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-full bg-stroke-light/30 p-4">
                <FileIcon className="size-8 md:size-10 text-stroke-medium" />
              </div>
              <div className="text-center">
                <p className="text-p8! text-stroke-medium">{file.name}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export { FileUpload };
