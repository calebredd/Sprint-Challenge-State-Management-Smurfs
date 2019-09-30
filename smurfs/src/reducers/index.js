import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  POST_SMURF_START,
  POST_SMURF_FAIL,
  POST_SMURF_SUCCESS
} from "../action/";
const initialState = {
  name: "OG Smurf",
  age: 3000,
  height: "7cm",
  id: Date.now(),
  error: "",
  isFetching: false,
  smurfs: [
    {
      name: "OG Smurf",
      age: 3000,
      height: "7cm",
      id: Date.now(),
      error: "",
      isFetching: false
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURF_START:
      return { ...state, isFetching: true };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: [action.payload[0], ...state.smurfs]
      };
    case FETCH_SMURF_FAIL:
      return { ...state, error: action.payload, isFetching: false };
    case POST_SMURF_START:
      return { ...state, isFetching: false };
    case POST_SMURF_SUCCESS:
      return { ...state, isFetching: false };
    case POST_SMURF_FAIL:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}
