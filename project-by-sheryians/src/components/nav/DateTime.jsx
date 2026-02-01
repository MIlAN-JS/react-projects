import React, { useEffect } from 'react'


const DateTime = () => {
  const [dateTime, setDateTime] = React.useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const minStr = minutes < 10 ? `0${minutes}` : minutes;
      setDateTime(`${day} ${month} ${date} , ${hours}:${minStr} ${ampm}`);
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>{dateTime}</div>
  );
}

export default DateTime