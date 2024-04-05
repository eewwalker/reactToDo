import { describe, it, expect } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
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
    const { getByLabelText, queryByText } = render(<TodoApp initialTodos={[]} />);

    expect(queryByText("ice cream: 100")).not.toBeInTheDocument();

    const titleInput = getByLabelText("Title");
    const descriptionInput = getByLabelText("Description");
    const submitBtn = queryByText("Gø!");

    fireEvent.change(titleInput, { target: { value: "newtitle" } });
    fireEvent.change(descriptionInput, { target: { value: "testTodo" } });

    // const result = render(<TodoApp initialTodos={[]} />);
    // expect(result.queryByText("You have no todos.")).toBeInTheDocument();
    // const newTodo = {
    //   title: "testTodo",
    //   description: "testTodo",
    //   priority: 1
    // };
    // fireEvent.change(nameInput, { target: { value: "ice cream" } });
    // const button = result.container.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(submitBtn);
    expect(queryByText("newtitle")).toBeInTheDocument();
    //TODO: Correct.
  });
});