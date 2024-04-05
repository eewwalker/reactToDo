import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

describe("productiv TopTodo", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={[{
      title: "newtitle",
      description: "Description",
      priority: 1}]}/>);
  });

    it("contains expected title", function () {
    const result = render(<TopTodo todos={[{
      title: "newtitle",
      description: "Description",
      priority: 1}]}/>);
    expect(result.queryByText("newtitle")).toBeInTheDocument();
  });
});