import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

export function PortalV2Dialog() {
  return (
    <DialogContent className="bg-background-light">
      <DialogHeader>
        <DialogTitle>Coming Soon</DialogTitle>
        <DialogDescription>Website is still in building</DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
