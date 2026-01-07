import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { LandingPageModule } from "~/modules/LandingPageModule";
import { LandingPageAction } from "~/modules/LandingPageModule/action";
import { LandingPageLoader } from "~/modules/LandingPageModule/loader";

export async function loader(args: LoaderFunctionArgs) {
  return LandingPageLoader(args);
}

export async function action(args: ActionFunctionArgs) {
  return LandingPageAction(args);
}

export default function LandingPagePage() {
  return <LandingPageModule />;
}
