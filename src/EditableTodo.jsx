import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [editToggle, setEditToggle] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setEditToggle(!editToggle);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(todo) {
    setEditToggle(!editToggle);
    update(todo);
  }

  return (
    <div className="EditableTodo">
      {editToggle && <TodoForm handleSave={handleSave} initialFormData={todo}  />}
      {!editToggle && <div className="mb-3">
        <div className="float-end text-sm-end">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}>
            Edit
          </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}>
            Del
          </button>
        </div>
        <Todo todo={todo} />
      </div>}
    </div>
  );
}

export default EditableTodo;
