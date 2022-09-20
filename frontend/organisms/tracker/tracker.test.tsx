import React from "react";
import { render, screen } from "@testing-library/react";

import Tracker from "./index";

describe("Image", () => {
  test("Renders Tracker component", () => {
    render(<Tracker name="TARGET PER YEAR" />);
  });

  test("Checking image attribute", () => {
    render(<Tracker name="TARGET PER YEAR" />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "style",
      "height: 40px; width: 40px; margin-right: 41.5px;"
    );
    expect(image).toHaveAttribute("alt", "TARGET PER YEAR");
  });
});

