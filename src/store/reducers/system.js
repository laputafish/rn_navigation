import {
  SET_SYSTEM_STATE
} from "../actions/actionTypes";

const initialState = {
  settings: {
    landingPagesLoaded: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SYSTEM_STATE:
      return {
        ...state,
        settings: (action.key) => {
          state.settings[action.key] = action.values;
          return state;
        }
      };
    default:
      return state;
  }
};

export default reducer;
