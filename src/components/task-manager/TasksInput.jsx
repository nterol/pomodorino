import React from "react";

function TaskInput({ newTask, handleInput, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput}>{newTask}</input>
        <button>Create new task</button>
      </form>
    </div>
  );
}

export default TaskInput;
