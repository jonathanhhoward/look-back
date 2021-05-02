import { CssBaseline } from "@material-ui/core";
import "@fontsource/roboto";
import { InspectionList, Mels, TitleBar } from "components";

export function App() {
  return (
    <>
      <CssBaseline />
      <TitleBar />
      <InspectionList />
      <Mels />
    </>
  );
}
