import {SET_SYSTEM_STATE} from './actionTypes';

export const setSystemState = (key, value) => {
  return {
      type: SET_SYSTEM_STATE,
      key: key,
      value: value
  };
}
