import * as ActionType from "../constant/content";
let initialState = {
  data: [],
  isLoading: false,
};
const reducerURL = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_API_LISTPRODUCT:
      state.data = payload;
      break;

    case ActionType.IS_LOADING_LIST_PRODUCT:
      state.isLoading = payload;
      break;
    default:
      break;
  }
  return { ...state };
};
export default reducerURL;
