import { useState, useEffect } from "react";
import "../styles.css"

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
      <div className = "clock">
        <h1>{date.toLocaleTimeString()}</h1>
      </div> 
  )
}

export default Clock;
