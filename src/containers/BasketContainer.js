import { connect } from "react-redux";
import BasketComponent from "../components/BasketComponent";
import { removeItem } from "../actions/basket/basketActions";

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  return {
    basketItems: state.basket.basketItems,
    angularNavigateTo: ownProps.angularNavigateTo
  };
};

const mapDispatchToProps = dispatch => ({
  removeItemFromBasket: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketComponent);
