import { render } from "@testing-library/react";
import Banner from "./index";
import React from "react";

describe("Display banner", () => {
  test("Should be display", () => {
    render(<Banner />);
  });
});
