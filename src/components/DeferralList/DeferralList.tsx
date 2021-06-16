import { MouseEvent, useState } from "react";
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

  function handleAddDeferral() {
    setDeferrals(deferrals.concat({ id: `deferral-${nanoid()}` }));
  }

  function handleDeleteDeferral(event: MouseEvent<HTMLElement>) {
    setDeferrals(
      deferrals.filter((deferral) => deferral.id !== event.currentTarget.id)
    );
  }

  return (
    <Card elevation={0} square>
      <CardHeader
        title="Deferral"
        action={
          <IconButton aria-label="add deferral" onClick={handleAddDeferral}>
            <AddIcon />
          </IconButton>
        }
      />
      <CardContent>
        {deferrals.map((deferral) => (
          <Deferral
            key={deferral.id}
            deleteId={deferral.id}
            onClickDelete={handleDeleteDeferral}
          />
        ))}
      </CardContent>
    </Card>
  );
}
