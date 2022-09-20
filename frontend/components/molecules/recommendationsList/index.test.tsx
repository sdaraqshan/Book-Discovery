import { render, screen } from "@testing-library/react";
import RecommendationList from "./index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
};

const renderRecommendationList = async () => {
  render(
    <BrowserRouter>
      <RecommendationList
        items={[15, 16, 17, 18]}
        margin="104px 0px 0px 0px"
        title="Recommendations"
      />
    </BrowserRouter>
  );
};

describe("Display Recommendations list", () => {
  test("Should display", async () => {
    await renderRecommendationList();
    const Element = screen.getByText(/Recommendations/);
    await flushPromises();
    expect(Element).toBeInTheDocument();
  });
});
