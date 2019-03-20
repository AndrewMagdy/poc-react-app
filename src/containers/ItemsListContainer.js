import { connect } from "react-redux";
import ItemsListComponent from "../components/ItemsListComponent";
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
)(ItemsListComponent);
