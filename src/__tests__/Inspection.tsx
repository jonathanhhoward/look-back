import { render, screen } from "@testing-library/react";
import { createMuiTheme } from "@material-ui/core";
import { DateTime, Duration, Interval } from "luxon";
import { Inspection } from "components";

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
  const oneDayAgo = Interval.before(DateTime.now(), Duration.fromISO("P1D"))
    .start;
  render(
    <Inspection
      title="14-day"
      duration={14}
      initialDate={oneDayAgo.toSQLDate()}
    />
  );
  const header = screen.getByText("14-day");
  expect(header).toHaveStyle(`color: ${palette.success.main}`);
});
