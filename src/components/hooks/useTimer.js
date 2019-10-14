import { useState, useEffect } from "react";

function useTimer(timerValue) {
  const [timerStart, setTimerStart] = useState(false);
  const [timer, setTimer] = useState(timerValue);

  const getMinutes = time => Math.floor(time / 60);

  const getSeconds = (time, minutes) => time - minutes * 60;

  useEffect(() => {
    let intervalRef;
    if (timerStart)
      intervalRef = setInterval(() => {
        if (timer > 0) setTimer(timer - 1);
        else {
          setTimerStart(false);
          setTimer(timerValue);
        }
      }, 1000);
    else clearInterval(intervalRef);
    return () => clearInterval(intervalRef);
  });

  const minutes = getMinutes(timer);

  const seconds = getSeconds(timer, minutes);

  return { minutes, seconds, setTimerStart, timerStart };
}

export default useTimer;
