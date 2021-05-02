import { render, screen } from "@testing-library/react";
import { Inspection } from "./Inspection";

test("renders the inspection title", () => {
  render(<Inspection title="A Title" />);
  const title = screen.getByText("A Title");
  expect(title).toHaveTextContent("A Title");
});
