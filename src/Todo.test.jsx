import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("productiv Todo", function () {
  it("renders without crashing", function () {
    render(<Todo />);
  });

    it("contains expected title", function () {
    const result = render(<Todo />);
    expect(result.queryByText("priority")).toBeInTheDocument();
  });
});