import { ReactEventHandler } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
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
    label: {
      paddingLeft: "8px",
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

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
            <FormControl className={classes.input}>
              <InputLabel className={classes.label} id="type">
                Type
              </InputLabel>
              <Select labelId="type" value="" variant="filled" />
            </FormControl>
          </Grid>
          <Grid item xs={9} md={5}>
            <FormControl className={classes.input}>
              <InputLabel className={classes.label} htmlFor="number">
                Number
              </InputLabel>
              <FilledInput id="number" type="text" />
            </FormControl>
          </Grid>
          <Grid item xs={5} md={2}>
            <FormControl className={classes.splitInput}>
              <InputLabel className={classes.label} id="category">
                Cat
              </InputLabel>
              <Select labelId="category" value="" variant="filled" />
            </FormControl>
            <FormControl className={classes.splitInput}>
              <InputLabel className={classes.label} htmlFor="duration">
                Days
              </InputLabel>
              <FilledInput
                id="duration"
                inputProps={{ min: "1" }}
                type="number"
              />
            </FormControl>
          </Grid>
          <Grid item xs={7} md={4}>
            <DateSelector
              date={null}
              label="Deferral Date"
              pickerId="deferral-date"
              setDate={() => {}}
              width="100%"
            />
          </Grid>
        </Grid>
      </AccordionDetails>
      <AccordionActions>
        <IconButton
          data-testid="delete-button"
          id={deleteId}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </AccordionActions>
    </Accordion>
  );
}
