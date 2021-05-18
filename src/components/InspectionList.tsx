import { Card, CardContent, CardHeader } from "@material-ui/core";
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
