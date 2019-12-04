import React, { useState, useEffect, Suspense } from 'react'

import TaskInput from './TaskInput'

import { TaskManagerContainer } from './styles'

const Task = React.lazy(() => import('./Task'))

function TaskManager() {
    const [inputTask, setInputTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const handleClick = () => {
        setTaskList([...taskList, inputTask])
        setInputTask('')
    }

    const handleChange = ({ target: { value } }) => setInputTask(value)

    const deleteTask = taskName =>
        setTaskList(taskList.filter(task => task !== taskName))

    return (
        <TaskManagerContainer>
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
        </TaskManagerContainer>
    )
}

export default TaskManager
