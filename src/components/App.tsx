import { CssBaseline } from "@material-ui/core";
import "@fontsource/roboto";
import { InspectionList, MelList, TitleBar } from "components";

export function App() {
  return (
    <>
      <CssBaseline />
      <TitleBar />
      <InspectionList />
      <MelList />
    </>
  );
}
