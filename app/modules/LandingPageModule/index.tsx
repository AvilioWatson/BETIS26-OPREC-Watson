import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function LandingPageModule() {
  return (
    <main className="flex items-center justify-center h-screen text-olivine-darker">
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </main>
  );
}
