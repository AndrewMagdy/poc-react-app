import { connect } from "react-redux";
import BasketComponent from "../components/BasketComponent";
import { removeItem } from "../actions/basket/basketActions";

const mapStateToProps = state => ({
  basketItems: state.basket.basketItems
});

const mapDispatchToProps = dispatch => ({
  removeItemFromBasket: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketComponent);
