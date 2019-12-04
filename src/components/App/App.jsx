import React from 'react'

import TaskProvider from '../../context/TaskContext'
import Timer from '../Timer'
import TeamManager from '../TeamManager'
import TaskManager from '../TaskManager/'

import { AppContainer, GlobaleStyle } from './styles'

function App() {
    return (
        <TaskProvider>
            <GlobaleStyle />
            <AppContainer>
                <TeamManager />
                <Timer timerValue={1500} />
                <TaskManager />
            </AppContainer>
        </TaskProvider>
    )
}

export default App
