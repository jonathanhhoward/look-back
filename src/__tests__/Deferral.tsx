import { render, screen } from "@testing-library/react";
import { Deferral } from "components";
import userEvent from "@testing-library/user-event";

const handleDelete = jest.fn();

beforeEach(() => {
  render(<Deferral deleteId="delete" handleDelete={handleDelete} />);
});

test("renders the title", () => {
  const title = screen.getByText(/^new deferral$/i);
  expect(title).toBeInTheDocument();
});

test("renders a subtitle", () => {
  const subtitle = screen.getByText(/^item number$/i);
  expect(subtitle).toBeInTheDocument();
});

test("renders input to select deferral type", () => {
  const input = screen.getByLabelText(/^type$/i);
  expect(input).toBeInTheDocument();
  userEvent.click(input);
  const select = screen.getByRole("listbox", { name: /^type$/i });
  expect(select).toBeInTheDocument();
});

test("renders input to enter deferral number", () => {
  const input = screen.getByLabelText(/^number$/i);
  expect(input).toBeInTheDocument();
});

test("renders input to select deferral category", () => {
  const input = screen.getByLabelText(/^cat$/i);
  expect(input).toBeInTheDocument();
  userEvent.click(input);
  const select = screen.getByRole("listbox", { name: /^cat$/i });
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
