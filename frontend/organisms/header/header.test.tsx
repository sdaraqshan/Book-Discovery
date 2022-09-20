import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from "./index";

describe("Image", () => {
  test("Renders Header component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test("Checking logo attribute", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const image = screen.getByAltText("logo");
    expect(image).toHaveAttribute("style", "height: 27.8px;");
  });

  test("Checking text style", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const p = screen.getByText("Home");
    expect(p).toHaveStyle("height: 22px");
  });

  test("Checking avatar attribute", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const image = screen.getByAltText("avatar");
    expect(image).toHaveAttribute(
      "style",
      "height: 32px; width: 32px; border-radius: 100%;"
    );
  });
});
