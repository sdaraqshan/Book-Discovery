import { render, screen } from "@testing-library/react";
import RecommendationCard from "./index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Display recommendations card", () => {
  test("Should display", () => {
    render(
      <BrowserRouter>
        <RecommendationCard book_id={21} />
      </BrowserRouter>
    );
    const Element = screen.getByText(/Category/i);
    expect(Element).toBeInTheDocument();
  });
});
