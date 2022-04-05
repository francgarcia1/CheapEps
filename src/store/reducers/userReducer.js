//TYPES
const ADD_DATA = "sugarapp/user/ADD_DATA";
const CLEAR_DATA = "sugarapp/user/CLEAR_DATA";

//REDUCER
export default function reducer(state = { data: [] }, action = {}) {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: action.payload };
    case CLEAR_DATA:
      return { ...state, data: [] };

    default:
      return state;
  }
}

// ACTIONS

export const addData = (info) => (dispatch) => {
  dispatch({ type: ADD_DATA, payload: info });
};
