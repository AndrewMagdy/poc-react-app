import { LOAD_ITEMS_SUCCESS } from "../../actions/types";

const initialState = {
  itemsList: [],
  isLoading: false,
  isError: false,
  errorMessage: ""
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS_SUCCESS: {
      return {
        ...state,
        itemsList: action.payload.itemsList
      };
    }
    default: {
      return state;
    }
  }
};

export default itemsReducer;
