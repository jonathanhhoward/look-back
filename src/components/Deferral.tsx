import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export function Deferral() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">New Deferral</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <InputLabel id="type-label">Type</InputLabel>
          <Select variant="filled" labelId="type-label" value="" />
        </FormControl>
        <FormControl>
          <TextField variant="filled" id="number" label="Number" />
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
}
