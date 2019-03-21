import { ADD_ITEM_SUCCESS, REMOVE_ITEM_SUCCESS } from "../../actions/types";

const initialState = {
  basketItems: [],
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
      return {
        ...state,
        basketItems: state.basketItems.filter(
          element => element !== action.payload.removedItem
        )
      };
    }

    default: {
      return state;
    }
  }
};

export default basketReducer;
