import React from "react";
import { render, screen } from "@testing-library/react";
import ReviewDetails from "./index";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderReviewDetails = async () => {
  return render(
    <ReviewDetails
      title="Radha"
      designation="Professor at Harvard  University"
      rating={4.5}
    />
  );
}

describe("Review", () => {
  test("Renders Review", async () => {
    await renderReviewDetails();
  });

  test("Checking review text properties", async () => {
    await renderReviewDetails();
    const reviewer_name = screen.getByText("Radha");
    await flushPromises();
    expect(reviewer_name).toHaveStyle("height: 24px; color: rgb(23, 23, 23);");
    const reviewer_designation = screen.getByText(
      "Professor at Harvard University"
    );
    await flushPromises();
    expect(reviewer_designation).toHaveStyle(
      "height: 16px; color: rgb(137, 137, 137);"
    );
  });

  test("Checking for review icons", async () => {
    await renderReviewDetails();
    const star = screen.getByAltText("Star");
    await flushPromises();
    expect(star).toHaveAttribute("style", "width: 24px; height: 24px;");
  });
});
