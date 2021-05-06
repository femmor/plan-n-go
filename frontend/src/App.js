import React from "react";
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import CalendarView from "./Calendar/CalendarView";

function App() {
  return (
    <AppWrapper>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/calendar-month">
            <CalendarView />
          </Route>
          <Route path="/date/:date">
            <p>Some date</p>
          </Route>
          <Route path="/new">
            <p>new</p>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  padding: 50px;
`;

export default App
