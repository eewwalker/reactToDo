import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

describe("productiv TopTodo", function () {
  it("renders without crashing", function () {
    render(<TopTodo />);
  });

    it("contains expected title", function () {
    const result = render(<TopTodo />);
    expect(result.queryByText("Top Todo")).toBeInTheDocument();
  });
});