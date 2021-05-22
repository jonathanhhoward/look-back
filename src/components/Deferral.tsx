import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

export function Deferral() {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">New Deferral</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <FormControl>
                <InputLabel id="type-label">Type</InputLabel>
                <Select variant="filled" labelId="type-label" value="" />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="number">Number</InputLabel>
                <FilledInput type="text" id="number" />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel id="category-label">Category</InputLabel>
                <Select variant="filled" labelId="category-label" value="" />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="duration">Duration</InputLabel>
                <FilledInput type="number" id="duration" />
              </FormControl>
            </Grid>
            <Grid item>
              <DatePicker
                disableFuture
                disableToolbar
                format="MM/dd/yyyy"
                id="deferral-date"
                inputVariant="filled"
                label="Deferral Date"
                onChange={() => {}}
                value={null}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </MuiPickersUtilsProvider>
  );
}
