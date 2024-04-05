import { describe, it, expect, vi } from "vitest";

import React from "react";
import { fireEvent, queryAllByText, render } from "@testing-library/react";
import TodoForm from "./TodoForm";
import TodoApp from "./TodoApp";

describe("productiv form", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  })


  it("empties the input after submit", function () {
    // function fakeCreate(newTodo) {
      //   let todo = {newTodo};
      // }
    const mockCreate = vi.fn();
    const result = render(<TodoForm handleSave={mockCreate}/>);

    const titleInput = result.getByLabelText("Title");

    const descriptionInput = result.getByLabelText("Description");
    const submitBtn = result.queryByText("Gø!");

    fireEvent.change(titleInput, { target: { value: "newtitle" } });

    fireEvent.change(descriptionInput, { target: { value: "testTodo" } });

    fireEvent.click(submitBtn);
    expect(mockCreate).toHaveBeenCalledTimes(1);

    expect(titleInput.value).toEqual("");
  });
})