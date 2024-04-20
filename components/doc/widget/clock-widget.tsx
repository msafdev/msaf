"use client";

import { useState, useEffect } from "react";

import { RxClock } from "react-icons/rx";

const ClockWidget = ({
  timezone = "Asia/Jakarta",
}: {
  timezone?:
    | "Asia/Jakarta"
    | "America/New_York"
    | "Europe/London"
    | "Asia/Tokyo"
    | "Australia/Sydney"
    | "Europe/Berlin";
}) => {
  const [currentHour, setCurrentHour] = useState("");
  const [currentMinute, setCurrentMinute] = useState("");
  const [ampm, setAmPm] = useState("");
  const [zone, setZone] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: "numeric" as const,
        minute: "2-digit" as const,
        hour12: true,
        timeZoneName: "short" as const,
        timeZone: "Asia/Jakarta",
      };
      const formattedTime = now.toLocaleTimeString("en-US", options);
      const [time, ampm, tz] = formattedTime.split(" ");
      const [hour, minute] = time.split(":");
      setCurrentHour(hour);
      setCurrentMinute(minute);
      setAmPm(ampm);
      setZone(tz);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid aspect-square w-full max-w-64 grid-cols-1 grid-rows-1 overflow-hidden rounded-3xl border bg-popover">
      <div className="flex h-full w-full flex-col items-center justify-between gap-y-3 pt-3">
        <div className="flex w-full items-start justify-between px-3">
          <div className="flex flex-col">
            <h3 className="font-medium leading-none text-foreground [font-size:_clamp(1.4rem,5vw,1.8rem)]">
              Clock
            </h3>
            <code className="mt-2 leading-none text-muted-foreground [font-size:_clamp(0.6rem,5vw,1rem)]">
              {zone || "GMT+7"}
            </code>
          </div>
          <RxClock className="aspect-square h-auto w-1/6 max-w-6" />
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-end rounded-b-3xl border-t bg-background pb-2 text-foreground">
          <div className="my-auto flex w-full items-start justify-center">
            <p className="text-2xl font-semibold">{currentHour || "00"}</p>
            <span className="mx-1 text-lg">:</span>
            <p className="text-2xl font-semibold">{currentMinute || "00"}</p>
            <p className="ml-2 text-sm">{ampm || "AM"}</p>
          </div>
          <div className="mx-auto flex w-fit items-center rounded-full border bg-popover px-2.5">
            <code className="text-sm font-medium text-foreground py-0.5">Sat</code>
            <div className="mx-2 h-full bg-border w-[1px]"/>
            <code className="text-sm font-medium text-foreground py-0.5">
              April 21
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockWidget;
