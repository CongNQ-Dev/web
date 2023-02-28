import API from "../../../../API/api";
import * as ActionType from "../constant/content";
export const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};
export const actGetProductAPI = (gender, typeProduct) => {
  return async (dispatch) => {
    try {
      dispatch(
        createAction({
          type: ActionType.IS_LOADING_LIST_PRODUCT,
          payload: true,
        })
      );
      const res = await API(
        `product/?gender=${gender}&typeProduct=${typeProduct}`,
        "GET"
      );
      dispatch(
        createAction({
          type: ActionType.FETCH_API_LISTPRODUCT,
          payload: res.data,
        })
      );
      dispatch(
        createAction({
          type: ActionType.IS_LOADING_LIST_PRODUCT,
          payload: false,
        })
      );
    } catch (error) {
      console.log({ ...error });
    }
  };
};
