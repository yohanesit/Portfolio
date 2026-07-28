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
        .replace(/\s/g, "")
        .toUpperCase();
      setTime(formatted);
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="clock">
      <span className="clock-tz">Current time in Jakarta</span>
      <br />
      <span className="clock-time">{time ? `${time} WIB` : ""}</span>
    </p>
  );
}
