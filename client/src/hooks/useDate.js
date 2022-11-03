import React, { useEffect, useState } from 'react';

export const useDate = (nav) => {
  const [currentMonthYear, setCurrentMonthYear] = useState('');
  const [days, setDays] = useState([]);

  useEffect(() => {
    const weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    // console.log(dateString);
    setCurrentMonthYear(
      `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`,
    );
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          isCurrentDay: i - paddingDays === day && nav === 0,
          isInstituteEvent: i % 6 === 0 && i > 15,
          isClubEvent: i % 3 === 0,
          isInstituteHoliday: i % 4 === 0,
          date: dayString,
          day: i % 7,
        });
      } else {
        daysArr.push({
          value: ' ',
          isCurrentDay: false,
          isInstituteEvent: false,
          isClubEvent: false,
          isInstituteHoliday: false,
          date: '',
          day: i % 7,
        });
      }
    }

    for (let i = daysArr.length; i % 7 !== 0; i++) {
      console.log('hello');
      daysArr.push({
        value: ' ',
        isCurrentDay: false,
        isInstituteEvent: false,
        isClubEvent: false,
        isInstituteHoliday: false,
        date: '',
        day: i % 7,
      });
    }

    setDays(daysArr);
  }, [nav]);

  return {
    days,
    currentMonthYear,
  };
};
