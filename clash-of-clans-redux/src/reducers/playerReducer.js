const initialState = {
  status: "Player Not Loaded",
  playerData: {},
  isLoading: false
};

export const playerReducer = (state = initialState, action) => {
  switch(action.type){
    default: return state;
  }
}