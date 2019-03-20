import React, { Component } from "react";

class ItemsListComponent extends Component {
  renderBasketItem = item => {
    return <p> {item.name}</p>;
  };
  render() {
    const { basketItems, addItem } = this.props;
    return (
      <div>
        <h1> ItemsListComponent</h1>
        {basketItems.map(basketItem => this.renderBasketItem(basketItem))}
        <button onClick={() => addItem({ name: "Another Item" })}>
          Add Item
        </button>
      </div>
    );
  }
}

export default ItemsListComponent;
