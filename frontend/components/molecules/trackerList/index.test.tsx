import { render, screen } from "@testing-library/react";
import TrackerList from "./index";
import React from "react";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderTrackerList = async () => {
  return render(<TrackerList margin="64px 0px 0px 0px" />);
}

describe("Display Tracker list", () => {
  test("Should display", async () => {
    await renderTrackerList();
    const Element = screen.getByText(/BOOKS READ/);
    await flushPromises();
    expect(Element).toBeInTheDocument();
  });
});
