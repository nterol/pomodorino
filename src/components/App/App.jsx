import React from 'react'

import TaskProvider from '../TaskContext'
import Timer from '../Timer'
import TeamManager from '../TeamManager'
import TaskManager from '../TaskManager/'

import { AppContainer } from './styles'

function App() {
    return (
        <TaskProvider>
            <AppContainer>
                <TeamManager />
                <Timer timerValue={1500} />
                <TaskManager />
            </AppContainer>
        </TaskProvider>
    )
}

export default App
