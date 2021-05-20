import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { Deferral } from "components";
import { nanoid } from "nanoid";

interface DeferralId {
  id: string;
}

export function DeferralList() {
  const [deferrals, setDeferrals] = useState<DeferralId[]>([]);

  function handleClick() {
    setDeferrals(deferrals.concat({ id: `deferral-${nanoid()}` }));
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
        {deferrals.map((deferral) => (
          <Deferral key={deferral.id} />
        ))}
      </CardContent>
    </Card>
  );
}
