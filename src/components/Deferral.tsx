import { ReactEventHandler } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { DateSelector } from "components";

interface DeferralProps {
  deleteId: string;
  handleDelete: ReactEventHandler;
}

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    title: {
      flexBasis: "50%",
    },
    subtitle: {
      color: palette.text.secondary,
    },
    input: {
      width: "100%",
    },
    splitInput: {
      width: "50%",
    },
  })
);

export function Deferral({ deleteId, handleDelete }: DeferralProps) {
  const classes = useStyles();
  const typeOptions = ["MEL", "CDL", "NEF"].map((type) => (
    <MenuItem key={type} value={type}>
      {type}
    </MenuItem>
  ));

  return (
    <Accordion>
      <AccordionSummary
        aria-controls="deferral-details"
        expandIcon={<ExpandMoreIcon />}
        id="deferral-summary"
      >
        <Typography className={classes.title} variant="subtitle1">
          New Deferral
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          Item Number
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={3} md={1}>
            <TextField
              className={classes.input}
              id="type"
              label="Type"
              select
              value=""
              variant="filled"
            >
              {typeOptions}
            </TextField>
          </Grid>
          <Grid item xs={9} md={5}>
            <TextField
              className={classes.input}
              id="number"
              label="Number"
              variant="filled"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <TextField
              className={classes.splitInput}
              id="category"
              label="Cat"
              select
              variant="filled"
            >
              <MenuItem />
            </TextField>
            <TextField
              className={classes.splitInput}
              id="duration"
              inputProps={{ min: "1" }}
              label="Days"
              type="number"
              variant="filled"
            />
          </Grid>
          <Grid item xs={7} md={4}>
            <DateSelector
              handleChange={() => {}}
              label="Deferral Date"
              pickerId="deferral-date"
              value={null}
              width="100%"
            />
          </Grid>
        </Grid>
      </AccordionDetails>
      <AccordionActions>
        <IconButton
          aria-label="delete deferral"
          id={deleteId}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </AccordionActions>
    </Accordion>
  );
}
