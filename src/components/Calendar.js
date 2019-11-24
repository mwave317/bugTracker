import React, { useState,useEffect } from 'react';
import '../css/calendar.css';


const Calendar =  () => {

    const date = new Date();
    let today = date.toDateString().slice(4);
    const day = date.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    let month = date.getMonth();
    let year = date.getFullYear();
    const getDate = new Date(year, month, 0).getDate(); // This  will get the days of  the month and year provided.

    const [showCalendar , setShowCalendar ] = useState(false);
    const [displayCalendar, setDisplayCalendar] = useState([]);
    const [displayMonth, setDisplayMonth] = useState(months[month]);
    const [displayYear, setDisplayYear] = useState(year);
   

    let dateSelected = date;
    let daySelected = day;
    let  monthSelected = month;
    let selectedYear = year;

    let previousMonth =  ()  =>  {
        month--
        if  (month < 0) {
            month = 11;
            year--;
    }
    let pastMonth = months[month];
    setDisplayMonth(pastMonth);
    setDisplayYear(year);
}
console.log('THis is the displayMonth and year', displayMonth, displayYear);

    let nextMonth =  ()  =>  {
        month++
        if  (month > 11) {
            month = 0;
            year++;
        }
        let futureMonth = months[month]
        setDisplayMonth(futureMonth);
        setDisplayYear(year);
        
    }



    let showTheCalendar = () => {
        showCalendar ? setShowCalendar(false) : setShowCalendar(true);
    };

    let displayTheCalendar = () =>  {
            setDisplayCalendar(<><div className="dates"><div className="month"><div className="arrows previous" onClick={previousMonth}>&lt;</div><div className="displayMonth">{displayMonth} {displayYear}</div><div className="arrows nextMonth" onClick={nextMonth}>&gt;</div></div><div className="days"></div></div></>);
        }

    useEffect(() => {
        displayTheCalendar();
    }, []);
    

 return  (
     <div className ="date-picker">
         <div className="selected-date" onClick={showTheCalendar}>{today}</div>
         
         {showCalendar ? displayCalendar : ''}
         </div>
 )
}

export default Calendar;