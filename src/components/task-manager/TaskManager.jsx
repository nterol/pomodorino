import React, { useState } from "react";

import Task from "./Task";
import TaskInput from "./TasksInput";

const generateHex = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

/* TODO: 
  Lift tasks state up
*/

/* NICE TO HAVE
  Hooks that 
  On mount: retrieve state from localstorage with key, then destroys it.
  On unmount save data to locastorage;
*/

function TaskManager({ selectTask }) {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const handleInput = e => setInputTask(e.target.value);

  const handleSubmit = () => {
    setTasks([...tasks, inputTask]);
    setInputTask("");
  };

  const onRemove = taskname =>
    setTasks(tasks.filter(task => task !== taskname));

  return (
    <div>
      <div>
        {tasks.map((task, i) => (
          <Task
            hex={generateHex()}
            taskName={task}
            onRemove={onRemove}
            selectTask={selectTask}
          />
        ))}
      </div>
      <TaskInput
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        inputTask={inputTask}
      />
    </div>
  );
}

export default TaskManager;
