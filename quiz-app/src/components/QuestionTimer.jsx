import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeOut,mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setting timeout");
     const timer = setTimeout(onTimeOut, timeout);
    return ()=> clearTimeout(timer);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    console.log("setting interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return ()=> clearInterval(interval);

  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />;
}