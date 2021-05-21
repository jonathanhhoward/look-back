import { render, screen } from "@testing-library/react";
import { Deferral } from "components";

beforeEach(() => {
  render(<Deferral />);
});

test("renders the title", () => {
  const heading = screen.getByText(/^new deferral$/i);
  expect(heading).toBeInTheDocument();
});

test("renders input to select type", () => {
  const select = screen.getByLabelText(/^type$/i);
  expect(select).toBeInTheDocument();
});

test("renders input to enter deferral number", () => {
  const textfield = screen.getByLabelText(/^number$/i);
  expect(textfield).toBeInTheDocument();
});

test("renders input to select deferral category", () => {
  const select = screen.getByLabelText(/^category$/i);
  expect(select).toBeInTheDocument();
});
