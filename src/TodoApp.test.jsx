import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("productiv TodoApp", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });

    it("contains expected title", function () {
    const result = render(<TodoApp />);
    expect(result.queryByText("Add Nü")).toBeInTheDocument();
  });
});

describe("working TodoApp", function () {
    it("creates new Todo", function() {
        const newTodo = {
            title: "testTodo",
            description: "testTodo",
            priority: 1
        }
        
    })
})