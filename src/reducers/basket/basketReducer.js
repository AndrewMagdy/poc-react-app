import { ADD_ITEM_SUCCESS, REMOVE_ITEM_SUCCESS } from "../../actions/types";

const initialState = {
  basketItems: [{ name: "Item 1" }],
  isLoading: false,
  isError: false,
  errorMessage: ""
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_SUCCESS: {
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload.item]
      };
    }
    case REMOVE_ITEM_SUCCESS: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export default basketReducer;
