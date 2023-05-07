import { useState } from 'react';
import './calendar.css';

export default Calendar;

function Calendar() {
  const[month, setMonth] = useState(getCurrentMonth()); 
  const [calendar, setCalendar] = useState(initCalendar());

  return ( 
    <>
      <div class="calendarDiv">
        <p class="calendarHeader">{month}</p>
        <table class="calendarTable">
          <tr>
            <th>MO</th>
            <th>TU</th>
            <th>WE</th>
            <th>TH</th>
            <th>FR</th>
            <th>SA</th>
            <th>SU</th>
          </tr>
          {calendar.map((week) => (
          <tr>
            {week.map((day) => (
              <td><CalendarItem value={day}> </CalendarItem></td>
          ))}
          </tr>
          ))}
        </table>
      </div>
    </>
    

  );
}


function CalendarItem(props) {
  const styles = {
    backgroundColor: props.value.Colour,
    borderColor: props.value.Colour
  }

  return (
    <>
      <div class="calendarItemDiv"
          style = {styles}>
        <a>
            {props.value.date.getDate()}
       </a>
      </div>
    </>
  );
}

class CalendarDate {
  date;
  colour;

  constructor(date) {
    this.date = date;
    this.colour = this.calculateColour(date);
  }

  get Date() {
    return this.date;
  }
  set Date(value) {
    this.date = value;
  }

  get Colour() {
    return this.colour;
  }


  calculateColour(date) {
    let today = new Date();

    if (date < today) { 
      if (Math.random() < 0.33) {
        return '#556B2F';
      }
      else if (Math.random() < 0.07) {
        return 'red';
      }
  
      return '#f2f2f2';
    }
    else if (date > today) {
      if (Math.random() < 0.40) {
        return '#77CC77';
      }
      return '#f2f2f2';
    }
    else {
      return '#7070ff';
    } 
  }
}


function initCalendar() {
  let calendarArray = [
    [],
    [],
    [],
    [],
    [],
  ]

  // Counter to show 2 past weeks, current week, 2 future weeks
  let currentDate = new Date();
  let add = currentDate.getDay() === 0 ? 7 : currentDate.getDay();
  let counter = 13 + add;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      let tempDate = new Date();
      tempDate.setDate(tempDate.getDate() - counter--);
      calendarArray[i][j] = new CalendarDate(tempDate);
    }
  } 
  return calendarArray;
}


function getCurrentMonth() {
  let monthNames = [
    'January', 'February', 'March', 
    'April', 'May', 'June', 
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];

  return monthNames[new Date().getMonth()].toUpperCase();
}