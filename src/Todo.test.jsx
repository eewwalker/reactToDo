import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("productiv Todo", function () {
  it("renders without crashing", function () {
    const todo = {title: "newtitle", description: "y", priority:1};
    render(<Todo todo={todo}/>);
  });

    it("contains expected title", function () {
    const todo = {title: "newtitle", description: "y", priority:1};
    const result = render(<Todo todo={todo}/>);
    expect(result.queryByText("newtitle")).toBeInTheDocument();
  });
});