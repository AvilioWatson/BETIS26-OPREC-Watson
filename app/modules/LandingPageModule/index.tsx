import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { FileUpload } from "~/components/ui/file-upload";
import { useState } from "react";

export function LandingPageModule() {
  const [files, setFiles] = useState<File | null>(null);

  return (
    <main className="bg-main-theme flex items-center justify-center min-h-screen text-olivine-darker p-8">
      <div className="w-full max-w-2xl space-y-6">
        <div>
          <Label>Email</Label>
          <Input placeholder="Enter your email" type="email" />
        </div>

        <div>
          <Label>Message</Label>
          <Textarea placeholder="Enter your message" />
        </div>

        <div>
          <Label>Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cat1">Category 1</SelectItem>
              <SelectItem value="cat2">Category 2</SelectItem>
              <SelectItem value="cat3">Category 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>File Upload</Label>
          <FileUpload
            maxSize={5}
            onChange={setFiles}
            value={files}
            accept=".pdf,.doc,.docx,.jpg,.png"
          />
        </div>
      </div>
    </main>
  );
}
