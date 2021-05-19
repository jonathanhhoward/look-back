import { Card, CardHeader, IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

export function DeferralList() {
  return (
    <Card elevation={0} square>
      <CardHeader
        title="Deferral"
        action={
          <IconButton>
            <Add />
          </IconButton>
        }
      />
    </Card>
  );
}
