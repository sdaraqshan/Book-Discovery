import { render, screen } from "@testing-library/react";
import BatchmateList from "./index";
import React from "react";

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderBatchmateList = async () => {
  return render(
    <BatchmateList
      items={[27, 28, 29, 30]}
      title="Your Batchmates Also Read"
    />
  );
}

describe("Display batchmate list", () => {
  test("Should display", async () => {
    await renderBatchmateList();
    const Element = screen.getByText(/Your Batchmates Also Read/);
    await flushPromises();
    expect(Element).toBeInTheDocument();
  });
});
