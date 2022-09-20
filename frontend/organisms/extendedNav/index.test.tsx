import { render, screen } from "@testing-library/react";
import ExtendedNav from "./index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Display extended navigation", () => {
  test("Should display", () => {
    render(
      <BrowserRouter>
        <ExtendedNav />
      </BrowserRouter>
    );
    // const Element = screen.getByText(/All Topics/i);
    // expect(Element).toBeInTheDocument();
  });
});
