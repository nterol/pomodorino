import React from 'react'

import useTimer from '../hooks/useTimer'
import { TimerContainer } from './styles'

function Timer({ timerValue }) {
    const { minutes, seconds, setTimerStart, timerStart } = useTimer(timerValue)

    const handleClick = () => {
        setTimerStart(!timerStart)
    }

    return (
        <TimerContainer>
            <div>
                <span>{`${minutes} minute${minutes === 1 ? '' : 's'}`}</span>
                <span>:</span>
                <span>{`${seconds} seconde${seconds === 1 ? '' : 's'}`}</span>
            </div>
            <button onClick={handleClick}>
                {timerStart ? 'Stop timer' : 'Launch Timer'}
            </button>
        </TimerContainer>
    )
}
export default Timer
