import { MouseEvent } from "react";
import { nanoid } from "nanoid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { Deferral } from "App/Deferral";
import { useSessionState } from "lib/useSessionState";

interface DeferralId {
  id: string;
}

export function DeferralList() {
  const [deferrals, setDeferrals] = useSessionState<DeferralId[]>(
    "deferrals",
    []
  );
  const deferralList = deferrals.map((deferral) => (
    <Deferral
      id={deferral.id}
      key={deferral.id}
      onClickDelete={deleteDeferral}
    />
  ));

  function addDeferral() {
    setDeferrals(deferrals.concat({ id: `deferral-${nanoid()}` }));
  }

  function deleteDeferral(event: MouseEvent<HTMLElement>) {
    setDeferrals(
      deferrals.filter((deferral) => deferral.id !== event.currentTarget.id)
    );
  }

  return (
    <Card elevation={0} square>
      <CardHeader
        title="Deferral"
        action={<AddButton onClick={addDeferral} />}
      />
      <CardContent>{deferralList}</CardContent>
    </Card>
  );
}

function AddButton(props: { onClick: () => void }) {
  return (
    <IconButton aria-label="add deferral" onClick={props.onClick}>
      <AddIcon />
    </IconButton>
  );
}
