import { ChangeEvent, ReactEventHandler, useState } from "react";
import { Dayjs } from "dayjs";
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
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DateSelector, IntervalStatusText } from "components";
import {
  DeferralCategory,
  DeferralState,
  DeferralType,
  DurationAttributes,
} from "./types";

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

const types: DeferralType[] = ["MEL", "CDL", "NEF"];
const typeMap = new Map<DeferralType, DeferralCategory[]>([
  ["MEL", ["A", "B", "C", "D"]],
  ["CDL", ["CDL"]],
  ["NEF", ["P"]],
]);
const categoryMap = new Map<DeferralCategory, DurationAttributes>([
  ["A", { value: "", disabled: false }],
  ["B", { value: "3", disabled: true }],
  ["C", { value: "10", disabled: true }],
  ["D", { value: "120", disabled: true }],
  ["P", { value: "120", disabled: false }],
  ["CDL", { value: "120", disabled: false }],
]);

export function Deferral({ deleteId, handleDelete }: DeferralProps) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [deferral, setDeferral] = useState<DeferralState>({
    type: "",
    number: "",
    category: "",
    duration: "",
  });
  const [date, setDate] = useState<Dayjs | null>(null);
  const typeOptions = types.map((type) => (
    <MenuItem key={type} value={type}>
      {type}
    </MenuItem>
  ));
  const categories = deferral.type ? typeMap.get(deferral.type) : undefined;
  const categoryOptions = categories ? (
    categories.map((category) => (
      <MenuItem key={category} value={category}>
        {category}
      </MenuItem>
    ))
  ) : (
    <MenuItem />
  );
  const durationDisabled =
    !deferral.category || categoryMap.get(deferral.category)?.disabled;

  function handleChangeType(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    setDeferral({
      ...deferral,
      type: event.target.value as DeferralType,
      category: "",
      duration: "",
    });
    setDate(null);
  }

  function handleChangeNumber(event: ChangeEvent<HTMLInputElement>) {
    setSubtitle(event.target.value);
    setDeferral({ ...deferral, number: event.target.value });
  }

  function handleChangeCategory(event: ChangeEvent<HTMLInputElement>) {
    const category = event.target.value as DeferralCategory;
    const duration = categoryMap.get(category)?.value || "";
    setDeferral({ ...deferral, category, duration });
  }

  function handleChangeDuration(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const duration =
      Number(value) < 1 ? "1" : Math.floor(Number(value)).toString();
    setDeferral({ ...deferral, duration });
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
            text={title || "Deferral Type"}
          />
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          {subtitle || "Deferral Number"}
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
              disabled={!deferral.type}
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
              disabled={!deferral.number}
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
              disabled={durationDisabled}
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
              disabled={!deferral.duration}
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
