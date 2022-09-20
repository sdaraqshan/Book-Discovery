import React from "react";
import { render, screen } from "@testing-library/react";
import logo from "./../../../../public/assets/images/logo.png";
import book from "./../../../../public/assets/images/books/book_wide_1.png";

import Image from "./index";

describe("Image", () => {
  test("Renders Image component", () => {
    render(<Image src={logo} alt="Logo" />);
  });

  test("Checking src and alt attributes", () => {
    render(<Image src={logo} alt="Logo" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("Checking style attribute", () => {
    render(
      <Image
        src={book}
        alt="Book"
        style={{ height: "88px", width: "188px", borderRadius: "4px" }}
      />
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "style",
      "height: 88px; width: 188px; border-radius: 4px;"
    );
  });
});
