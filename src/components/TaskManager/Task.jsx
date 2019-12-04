import React, { useContext } from 'react'

import { TaskContext } from '../../context/TaskContext'

function Task({ taskName, deleteTask }) {
    const { selectedTask, setSelectedTask } = useContext(TaskContext)

    const handleClick = () => {
        if (taskName === selectedTask) setSelectedTask('')
        deleteTask(taskName)
    }
    return (
        <div onClick={() => setSelectedTask(taskName)}>
            {taskName}
            <div onClick={handleClick}>&#10005;</div>
        </div>
    )
}

export default Task
