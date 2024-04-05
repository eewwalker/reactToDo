import { describe, it, expect } from "vitest";

import React from "react";
import { fireEvent, queryAllByText, render } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("productiv TodoApp", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={[]} />);
  });

  it("contains expected title", function () {
    const result = render(<TodoApp initialTodos={[]} />);
    expect(result.queryByText("Add Nü")).toBeInTheDocument();
  });
});

describe("working TodoApp", function () {
  it("creates new Todo", function () {
    const result = render(<TodoApp initialTodos={[]} />);

    expect(result.queryByText("newtitle")).not.toBeInTheDocument();

    const titleInput = result.getByLabelText("Title");
    const descriptionInput = result.getByLabelText("Description");
    const submitBtn = result.queryByText("Gø!");

    fireEvent.change(titleInput, { target: { value: "newtitle" } });
    fireEvent.change(descriptionInput, { target: { value: "testTodo" } });

    fireEvent.click(submitBtn);
    //we expect there are multiple todo with "newtitle" (todo + toptodo)
    expect(result.queryAllByText("newtitle")[0]).toBeInTheDocument();

  });
});