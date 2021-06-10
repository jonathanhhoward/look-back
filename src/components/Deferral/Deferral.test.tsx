import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMuiTheme } from "@material-ui/core/styles";
import { Deferral } from "./Deferral";

const { palette } = createMuiTheme();
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

test("inputting values enables the next input and updates title and subtitle", () => {
  // select type
  const title = screen.getByText(/^new deferral$/i);
  const type = screen.getByLabelText(/^type$/i);
  userEvent.click(type);
  const typeSelect = screen.getByRole("listbox", { name: /^type$/i });
  const typeOption = screen.getByRole("option", { name: /^mel$/i });
  userEvent.selectOptions(typeSelect, typeOption);
  expect(title).toHaveTextContent(/^mel$/i);

  // enter number
  const subtitle = screen.getByText(/^item number$/i);
  const number = screen.getByLabelText(/^number$/i);
  expect(number).toBeEnabled();
  userEvent.type(number, "10-10-10-10");
  expect(subtitle).toHaveTextContent(/^10-10-10-10$/i);

  // select category
  const category = screen.getByLabelText(/^category$/i);
  userEvent.click(category);
  const categorySelect = screen.getByRole("listbox", { name: /^category$/i });
  expect(categorySelect).toBeInTheDocument();
  const categoryOptions = screen
    .getAllByRole("option")
    .map((option: HTMLOptionElement) => option.textContent);
  expect(categoryOptions).toStrictEqual(["A", "B", "C", "D"]);
  const categoryOption = screen.getByRole("option", { name: /^a$/i });
  userEvent.selectOptions(categorySelect, categoryOption);

  // enter duration
  const duration = screen.getByLabelText(/^duration$/i);
  expect(duration).toBeEnabled();
  userEvent.type(duration, "14");

  // pick date
  const datepicker = screen.getByLabelText(/^deferral date$/i);
  userEvent.click(datepicker);
  const dialog = screen.queryAllByRole("dialog");
  expect(dialog).not.toHaveLength(0);
  userEvent.keyboard("{enter}");
  expect(title).toHaveStyle(`color: ${palette.success.main}`);
});