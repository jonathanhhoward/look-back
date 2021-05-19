import { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{deferral}</Typography>
            </AccordionSummary>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}
