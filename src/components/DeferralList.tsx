import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

export function DeferralList() {
  return (
    <Card elevation={0} square>
      <CardHeader
        title="Deferral"
        action={
          <IconButton>
            <AddIcon />
          </IconButton>
        }
      />
    </Card>
  );
}
