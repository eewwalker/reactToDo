import { describe, it, expect } from "vitest";

import React from "react";
import { fireEvent, queryAllByText, queryByText, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("editable todo", function () {
  it("renders without crashing", function () {
    const todo = {
      id: 324555,
      title: "newtitle",
      description: "desc",
      priority: 1
    }
    function fakeUpdate(newTodo) {
      let todo = {newTodo};
    }
    function fakeRemove(newTodo) {
      let todo = {newTodo};
    }
    render(<EditableTodo todo={todo} update={fakeUpdate} remove={fakeRemove}/>);
  })


  // it("update", function () {
  //   let todo = {
  //     id: 324555,
  //     title: "newtitle",
  //     description: "desc",
  //     priority: 1
  //   }

  //   function fakeUpdate(updatedTodo) {
  //     todo = {updatedTodo};
  //   }

  //   function fakeRemove(newTodo) {
  //     let todo = {newTodo};
  //   }
  //   const result = render(<EditableTodo todo={{
  //     id: 324555,
  //     title: "newtitle",
  //     description: "desc",
  //     priority: 1
  //   }} update={fakeUpdate} remove={fakeRemove}/>);

  //   expect(result.queryByText("newtitle")).toBeInTheDocument();
  //   const editBtn = result.queryByText("Edit");
  //   fireEvent.click(editBtn);

  //   const titleInput = result.getByLabelText("Title");
  //   fireEvent.change(titleInput, { target: { value: "updated" } });

  //   const submitBtn = result.queryByText("Gø!");

  //   fireEvent.click(submitBtn);

  //   expect(result.queryByText("newtitle")).not.toBeInTheDocument();
  // })

  it("not seeing the edit form", function() {
    const todo = {
      id: 324555,
      title: "newtitle",
      description: "desc",
      priority: 1
    }
    function fakeUpdate(newTodo) {
      let todo = {newTodo};
    }
    function fakeRemove(newTodo) {
      let todo = {newTodo};
    }
    const result = render(<EditableTodo todo={todo} update={fakeUpdate} remove={fakeRemove}/>);


    expect(result.queryByText("Priority:")).not.toBeInTheDocument();
  })
  it("seeing the edit form", function() {
    const todo = {
      id: 324555,
      title: "newtitle",
      description: "desc",
      priority: 1
    }
    function fakeUpdate(newTodo) {
      let todo = {newTodo};
    }
    function fakeRemove(newTodo) {
      let todo = {newTodo};
    }
    const result = render(<EditableTodo todo={todo} update={fakeUpdate} remove={fakeRemove}/>);

    const editBtn = result.queryByText("Edit");
    fireEvent.click(editBtn);

    expect(result.queryByText("Priority:")).toBeInTheDocument();

})

})