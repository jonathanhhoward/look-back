import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Inspection } from "App/Inspection";

export function InspectionList() {
  return (
    <Card elevation={0} square>
      <CardHeader title="Inspection" />
      <CardContent>
        <Inspection title="2-Day" duration={2} />
        <Inspection title="14-Day" duration={14} />
      </CardContent>
    </Card>
  );
}
