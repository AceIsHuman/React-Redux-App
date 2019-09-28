import React from 'react';
import { connect } from 'react-redux';
import { fetchHolidays } from './actions';
import './App.css';
import { Card } from 'semantic-ui-react';

import HolidayCard from './components/HolidayCard';

const App = props => {
  const { fetchHolidays, holidays } = props;
  return (
    <div className="App">
      <h1>US Holidays 2018</h1>
      <button onClick={fetchHolidays}>fetchHolidays</button>
      <Card.Group centered>
        {holidays.map(holiday=> (
          <HolidayCard holiday={holiday} />
        ))}
      </Card.Group>
    </div>
  );
}

const mapStateToProps = state => ({
  holidays: state.holidaysReducer.holidays,
  isLoading: state.holidaysReducer.isLoading,
})

export default connect(mapStateToProps, { fetchHolidays })(App);
