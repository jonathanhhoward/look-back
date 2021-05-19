import CssBaseline from "@material-ui/core/CssBaseline";
import { DeferralList, InspectionList, TitleBar } from "components";
import "@fontsource/roboto";

export function App() {
  return (
    <>
      <CssBaseline />
      <TitleBar />
      <InspectionList />
      <DeferralList />
    </>
  );
}
