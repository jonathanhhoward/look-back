import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { Deferral } from "components";

export function DeferralList() {
  const [deferrals, setDeferrals] = useState<string[]>([]);

  function handleClick() {
    const nextIndex = deferrals.length + 1;
    setDeferrals(deferrals.concat(`Deferral${nextIndex}`));
  }

  return (
    <Card elevation={0} square>
      <CardHeader
        title="Deferral"
        action={
          <IconButton onClick={handleClick}>
            <AddIcon />
          </IconButton>
        }
      />
      <CardContent>
        {deferrals.map((deferral, i) => (
          <Deferral key={i} title={deferral} />
        ))}
      </CardContent>
    </Card>
  );
}
