import React, { useState, useEffect } from 'react';
import '../css/calendar.css';


const Calendar = () => {

    const date = new Date();


    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let [month, setMonth] = useState(date.getMonth());  // Sets the month
    let [displayMonth, setDisplayMonth] = useState(months[month]); // this is  the initial State
    let [currentMonth, setCurrentMonth] = useState(months[date.getMonth()]);
    let [currentYear, setCurrentYear] = useState(date.getFullYear());
    let [year, setYear] = useState(date.getFullYear());
    let [displayYear, setDisplayYear] = useState(year);
    let [showCalendar, setShowCalendar] = useState(false);
    let [displayedDay, setDisplayedDay] = useState(date.getDate());
    let [selectedDay, setSelectedDay] = useState();
    const getDate = (month, year) => new Date(year, month, 0).getDate();

    let [days, setDays] = useState(getDate(month, year));
    let arrayOfDays = [];

    for (let i = 1; i < days; i++) {
        arrayOfDays.push(i);
    }

// ---------------------------------------
    let previousMonth = () => {
        setSelectedDay('')
        console.log(displayMonth);
        if (month === -1) {
            setMonth(month = 11);
            console.log(month)
            setYear(year--);
            setDisplayYear(year);
            setDays(setYear(year--), getDate(month, year));

        }
            setMonth(month-1);
           
            setDisplayMonth(months[month])
            setDays(getDate(month, year)); 
    }

    //-----------------------------------------------
    let nextMonth = () => {
       
        setSelectedDay('');

        if (month === 12) {
            console.log('This is the current month', month);
            setMonth(month = 0);
            setYear(year++);
            setDisplayYear(year);
            setDays(setYear(year++), getDate(month, year));
        }
        console.log(month);
        setMonth(month+1);
            setDisplayMonth(months[month])
            setDays(getDate(month, year));
     console.log('This is the displayed month', displayMonth);
    }

    // ---------------------------------------------------

    let showTheCalendar = () => {
        showCalendar ? setShowCalendar(false) : setShowCalendar(true);
    };

    return (
        <div className="date-picker">
            <div className="selected-date" onClick={showTheCalendar}>{!selectedDay ? <span>{currentMonth} {displayedDay} {currentYear}</span> : <span>{displayMonth} {selectedDay} {year}</span>}</div>

            {showCalendar ?
                <><div className="dates">
                    <div className="month">
                        <div className="arrows previous" onClick={previousMonth} onMouseEnter={() => setMonth(month-1)} onMouseLeave={() => setMonth(month+1)}>&lt;</div>
<div className="displayMonth"> {displayMonth} {displayYear}</div>
                        <div className="arrows nextMonth" onClick={nextMonth} onMouseEnter={() => setMonth(month+1)} onMouseLeave={() => setMonth(month -1)}>&gt;</div>
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