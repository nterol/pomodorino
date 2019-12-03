import React from 'react'

const TaskInput = ({ inputTask, handleClick, handleChange }) => (
    <>
        <input value={inputTask} onChange={handleChange} />
        <button onClick={handleClick}>Add a Task</button>
    </>
)

export default TaskInput
