import axios from "axios";

export const LOAD_DATA = "LOAD_DATA";
export const DATA_LOADED = "DATA_LOADED";

export const fetchHolidays = () => {
  return function(dispatch) {
    const key = '09e2ff30-198d-4dcd-8973-400c5e917cb9';
    dispatch({ type: LOAD_DATA });
    axios
      .get(`https://holidayapi.com/v1/holidays?key=${key}&country=US&year=2018`)
      .then(res => {
        dispatch({ type: DATA_LOADED, payload: res.data.holidays });
      })
      .catch(err => {
        console.error(err)
      })
  };
};