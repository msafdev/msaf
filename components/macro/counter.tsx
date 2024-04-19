"use client";

import { useState, useEffect, FC } from "react";

const Counter: FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  let formattedDays = days.toString();
  if (days > 99) {
    formattedDays = formattedDays.padStart(3, "0");
  } else {
    formattedDays = formattedDays.padStart(2, "0");
  }

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return (
    <div suppressHydrationWarning>
      {formattedDays}{formattedHours}{formattedMinutes}{formattedSeconds}
    </div>
  );
};

export default Counter;
