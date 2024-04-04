import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("productiv footer", function () {
  it("renders without crashing", function () {
    render(<Footer />);
  });

    it("contains expected title", function () {
    const result = render(<Footer />);
    expect(result.queryByText("Flüffy Data Enterprises")).toBeInTheDocument();
  });
});