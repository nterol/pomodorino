import React from "react";

import { TaskContainer } from "./styles";

const Task = ({ taskName, hex, selectTask, onRemove }) => (
  <TaskContainer onClick={() => selectTask(taskName)} hex={hex}>
    <span>{taskName}</span>
    <button onClick={() => onRemove(taskName)}>&#10005</button>
  </TaskContainer>
);

export default Task;
