import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { DeferralList, InspectionList, TitleBar } from "components";
import { useDarkMode } from "utils";
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
