import React, { useState, useEffect, Suspense } from 'react'

import TaskInput from './TaskInput'

const Task = React.lazy(() => import('./Task'))

function TaskManager() {
    const [inputTask, setInputTask] = useState('')
    const [taskList, setTaskList] = useState([])

    useEffect(() => setInputTask(''), [taskList])

    const handleClick = () => setTaskList([...taskList, inputTask])

    const handleChange = ({ target: { value } }) => setInputTask(value)

    const deleteTask = taskName =>
        setTaskList(taskList.filter(task => task !== taskName))

    return (
        <div>
            <TaskInput
                handleChange={handleChange}
                handleClick={handleClick}
                inputTask={inputTask}
            />
            <Suspense fallback={<div>Pas encore de task</div>}>
                {taskList.length > 0 &&
                    taskList.map(taskName => (
                        <Task
                            key={taskName}
                            taskName={taskName}
                            deleteTask={deleteTask}
                        />
                    ))}
            </Suspense>
        </div>
    )
}

export default TaskManager
