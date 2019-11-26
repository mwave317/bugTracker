import React, { useState, useEffect } from 'react';
import '../css/calendar.css';
import '../App.css';


const Calendar = () => {

    const date = new Date();
    const [months , setMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    const [dayHeadings, setDayHeadings] = useState (['S','M','T','W','T','F','S'])
    let [arrayOfPastMonth, setArrayOfPastMonth] = useState([]);
    let [arrayOfDays, setArrayOfDays ] = useState([]);
    let [month, setMonth] = useState(date.getMonth());
    let [displayMonth, setDisplayMonth] = useState(months[month]);
    let [currentMonth, setCurrentMonth] = useState(months[date.getMonth()]);
    let [currentYear, setCurrentYear] = useState(date.getFullYear());
    let [year, setYear] = useState(date.getFullYear());
    let [displayYear, setDisplayYear] = useState(year);
    let [showCalendar, setShowCalendar] = useState(false);
    let [displayedDay, setDisplayedDay] = useState(date.getDate());
    let [selectedDay, setSelectedDay] = useState();
    let [getDate, setGetDate] = useState(new Date(year, month, 0))
    let [getPastMonth, setPastMonth] = useState(date.getMonth());
    let [getDaysInPastMonth, setGetDaysInPastMonth] = useState(new Date(year, getPastMonth--, 0).getDate());
    let [days, setDays] = useState(new Date(year, getPastMonth, 0).getDate());
    //Setting the days for the past month
    
    
    let [getStartDate, setStartDate] = useState(getDate.getDay());
    let [daysToShowOfPastMonth, setDaysToShowOfPastMonth ] = useState(getDaysInPastMonth - getStartDate);

    //----------------------------------
    let displayDays = () => {
        for (let i = daysToShowOfPastMonth; i <= getDaysInPastMonth; i++) {
            arrayOfPastMonth.push(i);
        }
        arrayOfDays.push(...arrayOfPastMonth);

        for (let j = 1; j <= days ; j++) {
            arrayOfDays.push(j);
        }  
        return arrayOfDays;
    }
    // ---------------------------------------
    let previousMonth = () => {
        setSelectedDay('')

        if (month === -1) {
            setMonth(month = 11);

            setYear(year--);
            setDisplayYear(year);
            setDays(setYear(month, year));

        }
        setMonth(month - 1);

        setDisplayMonth(months[month])
        // setDays(getDate.getDate(month,year));
    }

    //-----------------------------------------------
    let nextMonth = () => {

        setSelectedDay('');

        if (month === 12) {

            setMonth(month = 0);
            setYear(year++);
            setDisplayYear(year);
            // setDays(setYear(year++), getDate(month, year));
        }
        setMonth(month + 1);
        setDisplayMonth(months[month])
        // setDays(getDate(month, year));

    }

    // ---------------------------------------------------

    let showTheCalendar = () => {
        showCalendar ? setShowCalendar(false) : setShowCalendar(true);
    };

    useEffect(() => {
        displayDays();
    }, []);

    return (
        <div className="date-picker">
            <div className="selected-date" onClick={showTheCalendar}>{!selectedDay ? <span>{currentMonth} {displayedDay} {currentYear}</span> : <span>{displayMonth} {selectedDay} {year}</span>}</div>

            {showCalendar ?
                <><div className="dates">
                    <div className="month" >
                        <div className="arrows previous" onClick={previousMonth} onMouseEnter={() => setMonth(month - 1)} onMouseLeave={() => setMonth(month + 1)}>&lt;</div>
                        <div className="displayMonth"> {displayMonth} {displayYear}</div>
                        <div className="arrows nextMonth" onClick={nextMonth} onMouseEnter={() => setMonth(month + 1)} onMouseLeave={() => setMonth(month - 1)}>&gt;</div>
                    </div>
                    <div className ="daysOfWeek">{dayHeadings.map((day, index) =><div key ={index}>{day}</div>)}</div>
                    <div className="days">{arrayOfDays.map((day, index) => <div key={index}  onClick={() => setSelectedDay(day)}>{day}</div>)}</div>
                </div>
                </>
                : ''}
        </div>
    )
}

export default Calendar;