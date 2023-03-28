const { DateTime } = require("luxon");
const { Interval } = require("luxon");

const today = DateTime.local();
const ng = DateTime.local(2024, 1, 1);
const interval = Interval.fromDateTimes(today, ng);
const interval_l = interval.length("days", true);
console.log(interval_l.toFixed(), "дней осталось до Нового Года!"); 