import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DatePicker } from "lib/DatePicker";

const handleAccept = jest.fn();
const handleChange = jest.fn();

test("renders a datepicker", () => {
  render(
    <DatePicker
      label="picker label"
      onAccept={handleAccept}
      onChange={handleChange}
      pickerId="picker"
      value=""
    />
  );
  const datepicker = screen.getByLabelText(/^picker label$/i);
  expect(datepicker).toBeInTheDocument();
  userEvent.click(datepicker);
  userEvent.keyboard("{enter}");
  expect(handleAccept).toHaveBeenCalled();
  expect(handleChange).toHaveBeenCalled();
});
