import React, { useState } from 'react';
import '../css/calendar.css';


const Calendar = () => {

    const date = new Date();


    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let [month, setMonth] = useState(date.getMonth());
    let [displayMonth, setDisplayMonth] = useState(months[month]);
    let [currentMonth, setCurrentMonth] = useState(months[date.getMonth()]);
    let [currentYear, setCurrentYear] = useState(date.getFullYear());
    let [year, setYear] = useState(date.getFullYear());
    let [displayYear, setDisplayYear] = useState(year);
    let [showCalendar, setShowCalendar] = useState(false);
    let [displayedDay, setDisplayedDay] = useState(date.getDate());
    let [selectedDay, setSelectedDay] = useState();


    console.log(date.getDay());
    const getDate = (month, year) => new Date(year, month, 0).getDate();

    let [days, setDays] = useState(getDate(month, year));
    let arrayOfDays = [];

    for (let i = 1; i <= days; i++) {
        arrayOfDays.push(i);
    }

    let previousMonth = () => {
        setSelectedDay('')
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
        setSelectedDay('')
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
            <div className="selected-date" onClick={showTheCalendar}>{!selectedDay ? <span>{currentMonth} {displayedDay} {currentYear}</span> : <span>{displayMonth} {selectedDay} {year}</span>}</div>

            {showCalendar ?
                <><div className="dates">
                    <div className="month">
                        <div className="arrows previous" onClick={previousMonth}>&lt;</div>
                        <div className="displayMonth">{displayMonth} {displayYear}</div>
                        <div className="arrows nextMonth" onClick={nextMonth}>&gt;</div>
                    </div>
                    <div className="days">{arrayOfDays.map((day, index) => <div key={index} onClick={() => setSelectedDay(index + 1)}>{day}</div>)}
                    </div>
                </div>
                </>
                : ''}
        </div>
    )
}

export default Calendar;