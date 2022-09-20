import { render, screen } from "@testing-library/react";
import OtherReviewList from "./index";
import React from "react";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderOtherReviews = async () => {
  return render(
    <OtherReviewList/>
  );
}

describe("Display other reviews", () => {
  test("Should display", async () => {
    await renderOtherReviews();
    const Element = screen.getByText(/See More/);
    await flushPromises();
    expect(Element).toBeInTheDocument();
  });
});
