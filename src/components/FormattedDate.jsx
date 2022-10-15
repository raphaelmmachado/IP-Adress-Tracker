import { useEffect, useState } from "react";
import { formatInTimeZone } from "date-fns-tz";

function FormatDate({ date, timezoneName }) {
  console.log(date, timezoneName);
  const [time, setTime] = useState("");
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    update();
    const newDate = new Date();
    const tempo = formatInTimeZone(
      newDate,
      timezoneName,
      "HH:mm:ss dd-MM-yyyy"
    );
    setTime(tempo);
  }, [seconds]);
  const update = () => setInterval(() => setSeconds((prev) => prev + 1), 1000);

  return <p>{time}</p>;
}
export { FormatDate };
