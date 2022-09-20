import { render, screen } from "@testing-library/react";
import SearchResultsDropdown from "./index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Display search results dropdown", () => {
  test("Should display", () => {
    render(
      <BrowserRouter>
        <SearchResultsDropdown />
      </BrowserRouter>
    );
    const Element = screen.getAllByRole("heading")[1];
    expect(Element).toBeInTheDocument();
    expect(Element).toHaveTextContent("See all results");
  });
});
