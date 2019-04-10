import { connect } from "react-redux";
import ItemsListComponent from "../components/ItemsListComponent";
import { addItem } from "../actions/basket/basketActions";
import { loadItems } from "../actions/items/itemsActions";

const mapStateToProps = (state, ownProps) => ({
  itemsList: state.items.itemsList,
  angularTestProp: ownProps.angularTestProp
});

const mapDispatchToProps = dispatch => ({
  addItemToBasket: item => dispatch(addItem(item)),
  loadItems: () => dispatch(loadItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsListComponent);
