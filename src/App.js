import React, { useState } from "react";

import Timer from "./components/Timer";
import TaskManager from "./components/task-manager/TaskManager";

function App() {
  const [currentTask, setCurrentTask] = useState("");

  const selectTask = task => setCurrentTask(task);
  return (
    <div>
      <Timer timerValue={1500} currentTask={currentTask} />
      <TaskManager selectTask={selectTask} />
    </div>
  );
}

export default App;
