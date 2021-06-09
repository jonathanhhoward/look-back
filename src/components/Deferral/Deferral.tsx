import { ChangeEvent, ReactEventHandler, useState } from "react";
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
import { DateSelector, IntervalStatusText } from "components";
import { DateTime } from "luxon";

interface DeferralProps {
  deleteId: string;
  handleDelete: ReactEventHandler;
}

type DeferralType = "MEL" | "CDL" | "NEF";

interface DeferralState {
  type: DeferralType | "";
  number: string;
  category: string;
  duration: string;
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

function isEmpty(s: string) {
  return s === "";
}

export function Deferral({ deleteId, handleDelete }: DeferralProps) {
  const classes = useStyles();
  const [title, setTitle] = useState("New Deferral");
  const [subtitle, setSubtitle] = useState("Item Number");
  const [deferral, setDeferral] = useState<DeferralState>({
    type: "",
    number: "",
    category: "",
    duration: "",
  });
  const [date, setDate] = useState<DateTime | null>(null);
  const types: DeferralType[] = ["MEL", "CDL", "NEF"];
  const typeOptions = types.map((type) => (
    <MenuItem key={type} value={type}>
      {type}
    </MenuItem>
  ));
  const categoryOptions = ["A", "B", "C", "D"].map((category) => (
    <MenuItem key={category} value={category}>
      {category}
    </MenuItem>
  ));

  function handleChangeType(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    setDeferral({ ...deferral, type: event.target.value as DeferralType });
  }

  function handleChangeNumber(event: ChangeEvent<HTMLInputElement>) {
    setSubtitle(event.target.value);
    setDeferral({ ...deferral, number: event.target.value });
  }

  function handleChangeCategory(event: ChangeEvent<HTMLInputElement>) {
    setDeferral({ ...deferral, category: event.target.value });
  }

  function handleChangeDuration(event: ChangeEvent<HTMLInputElement>) {
    setDeferral({ ...deferral, duration: event.target.value });
  }

  return (
    <Accordion>
      <AccordionSummary
        aria-controls="deferral-details"
        expandIcon={<ExpandMoreIcon />}
        id="deferral-summary"
      >
        <Typography className={classes.title} variant="subtitle1">
          <IntervalStatusText
            date={date}
            duration={Number(deferral.duration)}
            text={title}
          />
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          {subtitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              className={classes.input}
              id="type"
              label="Type"
              onChange={handleChangeType}
              select
              value={deferral.type}
              variant="filled"
            >
              {typeOptions}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              className={classes.input}
              disabled={isEmpty(deferral.type)}
              id="number"
              label="Number"
              onChange={handleChangeNumber}
              value={deferral.number}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              className={classes.splitInput}
              disabled={isEmpty(deferral.number)}
              id="category"
              label="Category"
              onChange={handleChangeCategory}
              select
              value={deferral.category}
              variant="filled"
            >
              {categoryOptions}
            </TextField>
            <TextField
              className={classes.splitInput}
              disabled={isEmpty(deferral.category)}
              id="duration"
              inputProps={{ min: "1" }}
              label="Duration"
              onChange={handleChangeDuration}
              type="number"
              value={deferral.duration}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DateSelector
              disabled={isEmpty(deferral.duration)}
              handleChange={setDate}
              label="Deferral Date"
              pickerId="deferral-date"
              value={date}
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
