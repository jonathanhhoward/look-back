import { render, screen } from "@testing-library/react";
import { Inspection } from "components";

test("renders the inspection title", () => {
  render(<Inspection title="Title" />);
  const title = screen.getByText("Title");
  expect(title).toHaveTextContent("Title");
});
