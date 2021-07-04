import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { DeferralList } from "App/DeferralList";
import { InspectionList } from "App/InspectionList";
import { TitleBar } from "App/TitleBar";
import { useDarkMode } from "lib/useDarkMode";
import "@fontsource/roboto";

export function App() {
  const theme = useDarkMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TitleBar />
      <InspectionList />
      <DeferralList />
    </ThemeProvider>
  );
}
