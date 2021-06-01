import { render, screen } from "@testing-library/react";
import { createMuiTheme } from "@material-ui/core/styles";
import { DateTime, Duration, Interval } from "luxon";
import { IntervalStatusText } from "./IntervalStatusText";

const { palette } = createMuiTheme();

test("text color is 'success' when inspection expires after today", () => {
  const thirteenDaysAgo = Interval.before(
    DateTime.now(),
    Duration.fromISO("P13D")
  ).start;
  render(
    <IntervalStatusText date={thirteenDaysAgo} duration={14} text="14-day" />
  );
  const text = screen.getByText("14-day");
  expect(text).toHaveStyle(`color: ${palette.success.main}`);
});

test("title color is 'warning' when inspection expires today", () => {
  const fourteenDaysAgo = Interval.before(
    DateTime.now(),
    Duration.fromISO("P14D")
  ).start;
  render(
    <IntervalStatusText date={fourteenDaysAgo} duration={14} text="14-day" />
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
    <IntervalStatusText date={fifteenDaysAgo} duration={14} text="14-day" />
  );
  const title = screen.getByText("14-day");
  expect(title).toHaveStyle({
    color: palette.error.contrastText,
    backgroundColor: palette.error.main,
  });
});
