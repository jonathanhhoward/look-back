import { Container, Paper } from "@material-ui/core";
import { Inspection } from "components";

export function InspectionList() {
  return (
    <Paper>
      <Container>
        <h2>Inspection</h2>
        <Inspection title="14-Day" duration={14} />
        <Inspection title="2-Day" duration={2} />
      </Container>
    </Paper>
  );
}
