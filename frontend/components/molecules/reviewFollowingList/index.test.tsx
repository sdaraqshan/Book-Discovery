import { render, screen } from "@testing-library/react";
import FollowingReview from "./index";
import React from "react";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderReviewFollowing = async () => {
  return render(<FollowingReview />);
}

describe("Display Following Review", () => {
  test("Should display", async () => {
    await renderReviewFollowing();
    const Element = screen.getByText(/See More/);
    await flushPromises();
    expect(Element).toBeInTheDocument();
  });
});
