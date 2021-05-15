import { Container, Paper } from "@material-ui/core";
import { Inspection } from "components";

export function InspectionList() {
  return (
    <Paper>
      <Container>
        <h2>Inspection</h2>
        <Inspection title="14-Day" />
        <Inspection title="2-Day" />
      </Container>
    </Paper>
  );
}
