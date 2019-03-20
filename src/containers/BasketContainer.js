import { connect } from "react-redux";
import BasketComponent from "../components/BasketComponent";
import { addItem, removeItem } from "../actions/basket/basketActions";

const mapStateToProps = state => ({
  basketItems: state.basket.basketItems
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketComponent);
