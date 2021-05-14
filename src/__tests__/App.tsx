import { render } from "@testing-library/react";
import { App } from "components";

test("renders without crashing", () => {
  render(<App />);
});
