import { render, screen } from "@testing-library/react";
import { DateSelector } from "./DateSelector";

test("renders a datepicker", () => {
  render(
    <DateSelector
      handleChange={jest.fn()}
      label="picker label"
      pickerId="picker"
      value=""
    />
  );
  const datepicker = screen.getByLabelText(/^picker label$/i);
  expect(datepicker).toBeInTheDocument();
});
