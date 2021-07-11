import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { createTheme } from "@material-ui/core/styles";
import { StatusColorText } from "lib/StatusColorText";

const { palette } = createTheme();

test("text color is 'success' when inspection expires after today", () => {
  const thirteenDaysAgo = dayjs().subtract(13, "day");
  render(
    <StatusColorText date={thirteenDaysAgo} duration={14} text="14-day" />
  );
  const text = screen.getByText("14-day");
  expect(text).toHaveStyle({ backgroundColor: palette.success.main });
});

test("title color is 'warning' when inspection expires today", () => {
  const fourteenDaysAgo = dayjs().subtract(14, "day");
  render(
    <StatusColorText date={fourteenDaysAgo} duration={14} text="14-day" />
  );
  const title = screen.getByText("14-day");
  expect(title).toHaveStyle({ backgroundColor: palette.warning.main });
});

test("title color is 'error' when inspection is expired", () => {
  const fifteenDaysAgo = dayjs().subtract(15, "day");
  render(<StatusColorText date={fifteenDaysAgo} duration={14} text="14-day" />);
  const title = screen.getByText("14-day");
  expect(title).toHaveStyle({ backgroundColor: palette.error.main });
});
