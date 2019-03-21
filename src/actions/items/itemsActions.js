import { LOAD_ITEMS_SUCCESS } from "../types";

const loadItemsSuccess = itemsList => ({
  type: LOAD_ITEMS_SUCCESS,
  payload: { itemsList }
});

const items = [
  {
    id: 0,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71x3e0x%2BM2L._SL1382_.jpg",
    title: "iPhone",
    price: "1000$"
  },
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81R%2B5Mv9jkL._SL1500_.jpg",
    title: "S9+",
    price: "900$"
  }
];
export const loadItems = () => async dispatch => {
  //dispatch(loadItemsRequest());
  return dispatch(loadItemsSuccess(items));
};
