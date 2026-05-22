"use client";

import { useEffect, useState } from "react";

export function ClockWidget() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
        .format(now)
        .toUpperCase();
      setTime(formatted);
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="clock">
      <span className="clock-tz">Local time in JKT</span>
      <br />
      <span className="clock-time">{time}</span>
    </p>
  );
}
