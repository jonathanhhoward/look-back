import { render, screen } from "@testing-library/react";
import { Deferral } from "components";

test("renders the title", () => {
  render(<Deferral />);
  const heading = screen.getByText(/^new deferral$/i);
  expect(heading).toBeInTheDocument();
});

test("renders input to select type", () => {
  render(<Deferral />);
  const select = screen.getByLabelText(/^type$/i);
  expect(select).toBeInTheDocument();
});

test("renders input to enter deferral number", () => {
  render(<Deferral />);
  const textfield = screen.getByLabelText(/^number$/i);
  expect(textfield).toBeInTheDocument();
});

test("renders input to select deferral category", () => {
  render(<Deferral />);
  const select = screen.getByLabelText(/^category$/i);
  expect(select).toBeInTheDocument();
});
