import { useState, useEffect } from "react";

const Clock:React.FC = () => {
  const [time, setTime] = useState("");
  const [weekday, setWeekday] = useState("");
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState("");

  const getCurrentTime = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentTime = new Date();
    const currentDay = currentTime.getDate();
    const currentMonth = currentTime.getMonth();
    
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formatTimeUnit = (unit:number) => String(unit).padStart(2, '0');

    setTime(`${formatTimeUnit(hours)} : ${formatTimeUnit(minutes)} : ${formatTimeUnit(seconds)}`);
    setWeekday(days[currentTime.getDay()]);
    setDay(currentDay);
    setMonth(months[currentMonth])
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentTime()
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div className="header-clock">
      <div className="header-time">
        {time}
      </div>

      <div className="header-date">
        {weekday}, {day} {month}
      </div>
    </div>
  )
}

export default Clock;
