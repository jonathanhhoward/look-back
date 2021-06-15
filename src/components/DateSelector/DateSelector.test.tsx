import { render, screen } from "@testing-library/react";
import { DateSelector } from "./DateSelector";

test("renders a datepicker", () => {
  render(
    <DateSelector
      onChange={jest.fn()}
      label="picker label"
      pickerId="picker"
      value=""
    />
  );
  const datepicker = screen.getByLabelText(/^picker label$/i);
  expect(datepicker).toBeInTheDocument();
});
