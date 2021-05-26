import { render, screen } from "@testing-library/react";
import { Deferral } from "components";
import userEvent from "@testing-library/user-event";

const handleDelete = jest.fn();

beforeEach(() => {
  render(<Deferral deleteId="delete" handleDelete={handleDelete} />);
});

test("renders the title", () => {
  const heading = screen.getByText(/^new deferral$/i);
  expect(heading).toBeInTheDocument();
});

test("renders a subtitle", () => {
  const subheading = screen.getByText(/^item number$/i);
  expect(subheading).toBeInTheDocument();
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
  const select = screen.getByLabelText(/^cat$/i);
  expect(select).toBeInTheDocument();
});

test("renders input to enter deferral duration", () => {
  const input = screen.getByLabelText(/^days$/i);
  expect(input).toBeInTheDocument();
});

test("renders a datepicker", () => {
  const datepicker = screen.getByLabelText(/^deferral date$/i);
  expect(datepicker).toBeInTheDocument();
});

test("renders a delete button", () => {
  const button = screen.getByLabelText(/^delete deferral$/i);
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(handleDelete).toHaveBeenCalled();
});
