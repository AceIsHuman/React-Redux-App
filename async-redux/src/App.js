import React from 'react';
import { connect } from 'react-redux';
import { fetchHolidays } from './actions';
import './App.css';

const App = props => {
  const { fetchHolidays } = props;
  return (
    <div className="App">
      <h1>Redux Project</h1>
      <button onClick={fetchHolidays}>fetchHolidays</button>
    </div>
  );
}

const mapStateToProps = state => ({
  holidays: state.holidays,
  isLoading: state.isLoading,
})

export default connect(mapStateToProps, { fetchHolidays })(App);
