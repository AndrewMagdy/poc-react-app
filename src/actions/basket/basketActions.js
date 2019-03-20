import { ADD_ITEM_SUCCESS, REMOVE_ITEM_SUCCESS } from "../types";

const addItemSuccess = item => ({
  type: ADD_ITEM_SUCCESS,
  payload: { item }
});

const removeItemSuccess = item => ({
  type: REMOVE_ITEM_SUCCESS,
  payload: { item }
});

export const addItem = item => async dispatch => {
  //dispatch(addItemRequest());
  return dispatch(addItemSuccess(item));
};

export const removeItem = item => async dispatch => {
  //dispatch(removeItemRequest());
  return dispatch(removeItemSuccess(item));
};
