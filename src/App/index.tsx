import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { DeferralList } from "App/DeferralList";
import { InspectionList } from "App/InspectionList";
import { TitleBar } from "App/TitleBar";
import { useDarkMode } from "lib/useDarkMode";
import "@fontsource/roboto";

export function App() {
  return (
    <ThemeProvider theme={useDarkMode()}>
      <CssBaseline />
      <TitleBar />
      <InspectionList />
      <DeferralList />
    </ThemeProvider>
  );
}
