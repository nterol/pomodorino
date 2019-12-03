import React, { useState } from 'react'

export const TaskContext = React.createContext()

export default function TaskProvider({ children }) {
    const [selectedTask, setSelectedTask] = useState('')

    return (
        <TaskContext.Provider value={{ selectedTask, setSelectedTask }}>
            {children}
        </TaskContext.Provider>
    )
}
