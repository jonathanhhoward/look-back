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
        <TextField variant="filled" id="number" label="Number" />
        <FormControl>
          <InputLabel id="category-label">Category</InputLabel>
          <Select variant="filled" labelId="category-label" value="" />
        </FormControl>
        <TextField
          type="number"
          variant="filled"
          id="duration"
          label="Duration"
        />
        <TextField
          type="date"
          variant="filled"
          id="date"
          label="Deferral Date"
        />
      </AccordionDetails>
    </Accordion>
  );
}
