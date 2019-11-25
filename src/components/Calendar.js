import React, { useState } from 'react';
import '../css/calendar.css';


const Calendar = () => {

    const date = new Date();
    let today = date.toDateString().slice(4);
    const day = date.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let [month, setMonth] = useState(date.getMonth());
    let [displayMonth, setDisplayMonth] = useState(months[month]);
    let [year, setYear] = useState(date.getFullYear());
    let [displayYear, setDisplayYear] = useState(year);
    let [showCalendar, setShowCalendar] = useState(false);


    const getDate = (month, year) => new Date(year, month, 0).getDate();

    let [days, setDays] = useState(getDate(month, year));
    let dateSelected = date;
    let daySelected = day;
    let arrayOfDays = [];

    for (let i = 1; i <= days; i++) {
        arrayOfDays.push(i);
    }

    let previousMonth = () => {

        if (month === 0) {
            month = 12;
            setYear(year--);
            setDisplayYear(year);
            setDays(setYear(year--), getDate(month, year));

        }
        setMonth(month--);
        setDisplayMonth(months[month]);
        setDays(getDate(month + 1, year));

    }


    let nextMonth = () => {

        if (month === 11) {
            month = -1;
            setYear(year++);
            setDisplayYear(year);
            setDays(setYear(year++), getDate(month, year));
        }

        setMonth(month++);
        setDisplayMonth(months[month]);
        setDays(getDate(month + 1, year));
    }

    let showTheCalendar = () => {
        showCalendar ? setShowCalendar(false) : setShowCalendar(true);
    };

    return (
        <div className="date-picker">
            <div className="selected-date" onClick={showTheCalendar}>{today}</div>

            {showCalendar ? <><div className="dates"><div className="month"><div className="arrows previous" onClick={previousMonth}>&lt;</div><div className="displayMonth">{displayMonth} {displayYear}</div><div className="arrows nextMonth" onClick={nextMonth}>&gt;</div></div><div className="days">{arrayOfDays.map((day, index) => <div key={index}>{day}</div>)}</div></div></> : ''}
        </div>
    )
}

export default Calendar;