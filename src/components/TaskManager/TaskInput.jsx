import React from 'react'

import { Button } from '../common/styles'
import { InputWithTask, TaskInputContainer } from './styles'

const TaskInput = ({ inputTask, handleClick, handleChange }) => (
    <TaskInputContainer>
        <InputWithTask value={inputTask} onChange={handleChange} />
        <Button onClick={handleClick}>Add a Task</Button>
    </TaskInputContainer>
)

export default TaskInput
