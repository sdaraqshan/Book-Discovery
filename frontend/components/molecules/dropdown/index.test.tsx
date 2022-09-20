import { render ,screen } from '@testing-library/react';
import Dropdown from "./index";
import React from 'react';

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderDropdown = async () => {
  return render(<Dropdown/>);
}

describe("Dropdown testing", () => {
  test("Explore dropdown", async () => {
    await renderDropdown();
    const dropDownElement = screen.getByText(/Categories/i);
    await flushPromises();
    expect(dropDownElement).toBeInTheDocument();
  });
});

