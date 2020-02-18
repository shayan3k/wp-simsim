import React, { useEffect, useState } from "react";
import moment from "moment-jalaali";
import persianJs from "persianjs";

export default function TimeAndDate() {
  const [counter, setCounter] = useState(-9999);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  const JalaliDateAndTime = () => {
    let m = moment();
    let today = new Date("January 1, 2008 11:10:00");
    console.log(today.getDay());
    let dayOfWeek = () => {
      switch (today.getDay()) {
        case 1:
          return "دوشنبه";
          break;

        case 2:
          return "سه شنبه";
          break;
        case 3:
          return "چهارشنبه";
          break;

        case 4:
          return "پنجشنبه";
          break;
        case 5:
          return "جمعه";
          break;

        case 6:
          return "شنبه";
          break;
        case 7:
          return "یکشنبه";
          break;
      }
    };

    let month = () => {
      switch (m.jMonth()) {
        case 0:
          return "فروردین";
          break;

        case 1:
          return "اردیبهشت";
          break;

        case 2:
          return "خرداد";
          break;

        case 3:
          return "تیر";
          break;

        case 4:
          return "مرداد";
          break;

        case 5:
          return "شهریور";
          break;

        case 6:
          return "مهر";
          break;

        case 7:
          return "آبان";
          break;

        case 8:
          return "آذر";
          break;

        case 9:
          return "دی";
          break;

        case 10:
          return "بهمن";
          break;

        case 11:
          return "اسفتد";
          break;
      }
    };

    let clock = persianJs(m.format("HH:mm"))
      .englishNumber()
      .toString();

    let date =
      dayOfWeek() +
      " " +
      persianJs(m.jDate())
        .englishNumber()
        .toString() +
      " " +
      month();

    return date + " | " + clock;
  };

  return <JalaliDateAndTime style={{ display: "none" }} />;
}
