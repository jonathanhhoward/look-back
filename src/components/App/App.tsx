import { CssBaseline, Paper } from "@material-ui/core";
import "@fontsource/roboto";
import { Inspections, TitleBar } from "components";

export function App() {
  return (
    <>
      <CssBaseline />
      <TitleBar />
      <Inspections />
      <Paper>MEL</Paper>
    </>
  );
}
