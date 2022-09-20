import { render, screen } from "@testing-library/react";
import MyLibrary from "./index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Display library page content", () => {
  test("Should display", () => {
    render(
      <BrowserRouter>
        <MyLibrary />
      </BrowserRouter>
    );
    const Element = screen.getByText(/Personalized Learning Journeys/i);
    expect(Element).toBeInTheDocument();
  });
});
