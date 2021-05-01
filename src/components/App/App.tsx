import { CssBaseline, Paper } from "@material-ui/core";
import "@fontsource/roboto";
import { TitleBar } from "components";

export function App() {
  return (
    <>
      <CssBaseline />
      <TitleBar />
      <Paper>Inspection</Paper>
      <Paper>MEL</Paper>
    </>
  );
}
