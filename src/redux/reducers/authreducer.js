import ActionTypes from '../types';

const initialState = {
  userData:{},
};
export default function authreducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      const {userData} = action.payload;
      return {
        ...state,
        userData: userData,
      };

    default:
      return state;
  }
}
