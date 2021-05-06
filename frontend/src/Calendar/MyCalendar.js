import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import Calendar from "react-calendar";
import { Link, useHistory } from "react-router-dom";
import {format} from "date-fns"

const MyCalendar = () => {
  // Calendar state
  const [value, setValue] = useState(new Date());

  let history = useHistory()

  /* OnClick function to go to daily view */
  const handleClickDate = (value) => {
    console.log("Clicked", value, "formatted: ", format(value, "y-MM-dd"));
    let formattedDate = format(value, "y-MM-dd");
    history.push(`/date/${formattedDate}`);
  };

  function onChange(nextValue) {
    setValue(nextValue);
  }

  //TODO
  /**
   * Get the current month (with the current date)
   * Fetch a list of the days that have an event planned
   * For the month only
   * Compare in a function
   *
   */
   const tileContent = ({ date, view }) =>
   view === "month" && date.getDay() === 2 ? <p>*</p> : null;

  return (
    <Wrapper>
      <Calendar
        tileContent={tileContent}
        defaultView="month"
        onChange={onChange}
        value={value}
        prev2Label={null}
        next2Label={null}
        onClickDay={((value, event) => handleClickDate(value, event))}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  background-color: ${COLORS.background};
  height: 100vh;
  .react-calendar {
    max-width: 100%;
    background: white;
    /*border: 1px solid #a0a096;*/
    /*font-family: Arial, Helvetica, sans-serif;*/
    line-height: 2em;
    text-align: center;
  }
  /* Mon, Tues, Wednesday etc */
  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: 400;
    font-size: 1.1rem;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }
  .react-calendar button {
    border: none;
    outline: none;
    background-color: ${COLORS.overlay1};
    font-size: 1.3rem;
  }
  .react-calendar__tile {
    max-width: 14vw;
    height: 14vh;
    padding: 0.6em 0em;
    background-color: white;
    border-radius: 50px;
    text-align: center;
  }
  .react-calendar__navigation {
    height: 40px;
    margin: 10px 0;
  }
  .react-calendar__navigation button {
    min-width: 40px;
    background: white;
    font-size: 1.4rem;
    padding: 0;
    margin: 0 3px;
    border: none;
    border-radius: 50px;
    text-transform: lowercase;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #c1c7c3;
  }
  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }
`;

export default MyCalendar;