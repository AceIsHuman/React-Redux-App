import { LOAD_PLAYER, PLAYER_LOADED } from '../actions';

const initialState = {
  status: "Player Not Loaded",
  playerData: {},
  isLoading: false
};

export const playerReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_PLAYER:
      return {
        ...state,
        isLoading: true
      }
    case PLAYER_LOADED:
      return {
        ...state,
        playerData: action.payload,
        isLoading: false,
        status: "Player Loaded Successfully"
      }
    default:
      return state;
  }
}