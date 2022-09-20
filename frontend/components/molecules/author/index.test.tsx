import { render ,screen } from '@testing-library/react';
import Author from "./index";
import React from 'react';

const flushPromises = () => {
  return new Promise((resolve) => setTimeout(resolve, 0));
 }

const renderAuthor = async () => {
  return render(<Author />);
}

describe('Display about author content', () => {
  test('Should display', async () => {
    await renderAuthor();
    const buttonElement = screen.getByText(/About Author/i);
    await flushPromises();
    expect(buttonElement).toBeInTheDocument();
  });
});
