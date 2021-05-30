import { render, screen } from "@testing-library/react";
import { createMuiTheme } from "@material-ui/core/styles";
import { DateTime, Duration, Interval } from "luxon";
import { Inspection } from "./Inspection";

const { palette } = createMuiTheme();

test("renders the inspection title", () => {
  render(<Inspection title="Title" duration={1} />);
  const title = screen.getByText("Title");
  expect(title).toHaveTextContent("Title");
});

test("renders a datepicker", () => {
  render(<Inspection title="Title" duration={1} />);
  const datepicker = screen.getByLabelText(/^inspection date$/i);
  expect(datepicker).toBeInTheDocument();
});

test("title color is 'success' when inspection expires after today", () => {
  const thirteenDaysAgo = Interval.before(
    DateTime.now(),
    Duration.fromISO("P13D")
  ).start;
  render(
    <Inspection
      title="14-day"
      duration={14}
      initialDate={thirteenDaysAgo.toSQLDate()}
    />
  );
  const title = screen.getByText("14-day");
  expect(title).toHaveStyle(`color: ${palette.success.main}`);
});

test("title color is 'warning' when inspection expires today", () => {
  const fourteenDaysAgo = Interval.before(
    DateTime.now(),
    Duration.fromISO("P14D")
  ).start;
  render(
    <Inspection
      title="14-day"
      duration={14}
      initialDate={fourteenDaysAgo.toSQLDate()}
    />
  );
  const title = screen.getByText("14-day");
  expect(title).toHaveStyle(`color: ${palette.warning.main}`);
});

test("title color is 'error' when inspection is expired", () => {
  const fifteenDaysAgo = Interval.before(
    DateTime.now(),
    Duration.fromISO("P15D")
  ).start;
  render(
    <Inspection
      title="14-day"
      duration={14}
      initialDate={fifteenDaysAgo.toSQLDate()}
    />
  );
  const title = screen.getByText("14-day");
  expect(title).toHaveStyle({
    color: palette.error.contrastText,
    backgroundColor: palette.error.main,
  });
});
