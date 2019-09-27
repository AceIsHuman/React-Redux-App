import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayer } from './actions';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux Project</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  playerData: state.playerData,
  isLoading: state.isLoading,
  status: state.status
})

export default connect(mapStateToProps, { fetchPlayer })(App);
