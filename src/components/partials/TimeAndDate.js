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
    var dayOfWeek = [
      "یکشنبه",
      "دوشنبه",
      "سه شنبه",
      "چهارشنبه",
      "پنج شنبه",
      "جمعه",
      "شنبه"
    ];
    dayOfWeek = dayOfWeek[new Date().getDay()];

    let month = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند"
    ];
    month = month[m.jMonth()];

    let clock = persianJs(m.format("HH:mm"))
      .englishNumber()
      .toString();

    let date =
      dayOfWeek +
      " " +
      persianJs(m.jDate())
        .englishNumber()
        .toString() +
      " " +
      month;

    return date + " | " + clock;
  };

  return <JalaliDateAndTime style={{ display: "none" }} />;
}
