import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Deferral } from "./Deferral";

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
  const options = screen
    .getAllByRole("option")
    .map((option: HTMLOptionElement) => option.textContent);
  expect(options).toStrictEqual(["MEL", "CDL", "NEF"]);
});

test("renders disabled input to enter deferral number", () => {
  const input = screen.getByLabelText(/^number$/i);
  expect(input).toBeInTheDocument();
  expect(input).toBeDisabled();
});

test("renders disabled input to select deferral category", () => {
  const input = screen.getByLabelText(/^category$/i);
  expect(input).toBeInTheDocument();
  userEvent.click(input);
  const select = screen.queryByRole("listbox", { name: /^category$/i });
  expect(select).not.toBeInTheDocument();
});

test("renders disabled input to enter deferral duration", () => {
  const input = screen.getByLabelText(/^duration$/i);
  expect(input).toBeInTheDocument();
  expect(input).toBeDisabled();
});

test("renders a disabled datepicker", () => {
  const datepicker = screen.getByLabelText(/^deferral date$/i);
  expect(datepicker).toBeInTheDocument();
  userEvent.click(datepicker);
  const dialog = screen.queryAllByRole("dialog");
  expect(dialog).toHaveLength(0);
});

test("renders a delete button", () => {
  const button = screen.getByLabelText(/^delete deferral$/i);
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(handleDelete).toHaveBeenCalled();
});
