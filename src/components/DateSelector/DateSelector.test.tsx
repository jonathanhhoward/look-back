import { render, screen } from "@testing-library/react";
import { DateSelector } from "./DateSelector";
import userEvent from "@testing-library/user-event";

const handleAccept = jest.fn();
const handleChange = jest.fn();

test("renders a datepicker", () => {
  render(
    <DateSelector
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
