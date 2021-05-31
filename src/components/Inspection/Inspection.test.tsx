import { render, screen } from "@testing-library/react";
import { Inspection } from "./Inspection";

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
