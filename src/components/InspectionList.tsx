import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Inspection } from "components";

export function InspectionList() {
  return (
    <Card elevation={0} square>
      <CardHeader title="Inspection" />
      <CardContent>
        <Inspection title="14-Day" duration={14} />
        <Inspection title="2-Day" duration={2} />
      </CardContent>
    </Card>
  );
}
