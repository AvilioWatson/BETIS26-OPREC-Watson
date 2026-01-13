import * as React from "react";
import { cn } from "~/lib/utils";
import { UploadIcon, XIcon, FileIcon } from "lucide-react";

interface FileUploadProps
  extends Omit<React.ComponentProps<"div">, "onChange"> {
  onChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  disabled?: boolean;
  value?: File[];
}

function FileUpload({
  className,
  onChange,
  accept,
  multiple = false,
  maxSize,
  disabled = false,
  value = [],
  ...props
}: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>(value);
  const [isDragging, setIsDragging] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setFiles(value);
  }, [value]);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
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
    setIsDragging(false);

    if (disabled) return;

    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(validateFile);

    if (validFiles.length > 0) {
      const newFiles = multiple ? [...files, ...validFiles] : [validFiles[0]];
      setFiles(newFiles);
      onChange?.(newFiles);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles = selectedFiles.filter(validateFile);

      if (validFiles.length > 0) {
        const newFiles = multiple ? [...files, ...validFiles] : [validFiles[0]];
        setFiles(newFiles);
        onChange?.(newFiles);
      }
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange?.(newFiles);
  };

  const handleClick = () => {
    if (!disabled) {
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
          "relative flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-8 transition-colors cursor-pointer",
          isDragging && !disabled
            ? "border-moonstone-dark bg-moonstone-light"
            : "border-stroke-medium hover:border-moonstone-normal hover:bg-background-olivine-light-ghost",
          disabled &&
            "opacity-50 cursor-not-allowed hover:border-stroke-medium hover:bg-transparent"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
        />
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-full bg-background-olivine-light p-3">
            <UploadIcon className="size-6 md:size-8 text-olivine-dark" />
          </div>
          <div className="text-center">
            <p className="text-s7 md:text-p7 font-semibold text-font-dark">
              {isDragging
                ? "Drop files here"
                : "Click to upload or drag and drop"}
            </p>
            <p className="text-s8 text-font-medium mt-1">
              {accept
                ? `Accepted formats: ${accept}`
                : "All file types accepted"}
              {maxSize && ` • Max size: ${maxSize}MB`}
            </p>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 rounded-lg border border-stroke-light bg-background-light p-4"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="shrink-0 rounded-md bg-background-olivine-light p-2">
                  <FileIcon className="size-5 text-olivine-dark" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-s7 md:text-p7 font-medium text-font-dark truncate">
                    {file.name}
                  </p>
                  <p className="text-s8 text-font-medium">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                disabled={disabled}
                className="shrink-0 rounded-full p-1 hover:bg-stroke-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <XIcon className="size-4 md:size-5 text-font-dark" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { FileUpload };
