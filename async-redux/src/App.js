import React from 'react';
import { connect } from 'react-redux';
import { fetchHolidays } from './actions';
import './App.css';

const App = props => {
  const { fetchHolidays, holidays } = props;
  return (
    <div className="App">
      <h1>Redux Project</h1>
      <button onClick={fetchHolidays}>fetchHolidays</button>
      {holidays.map(holiday=> (
        <>
          <h3>{holiday.name}</h3>
          <p>Date: {holiday.date}</p>
          <p>Observed: {holiday.observed}</p>
        </>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  holidays: state.holidaysReducer.holidays,
  isLoading: state.holidaysReducer.isLoading,
})

export default connect(mapStateToProps, { fetchHolidays })(App);
