import { CssBaseline } from "@material-ui/core";
import "@fontsource/roboto";
import { Inspections, Mels, TitleBar } from "components";

export function App() {
  return (
    <>
      <CssBaseline />
      <TitleBar />
      <Inspections />
      <Mels />
    </>
  );
}
