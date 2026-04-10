import React, { Component } from "react";
import PropTypes from "prop-types";

class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addToCart(this.props.item);
  }

  render() {
    const { name, price } = this.props.item;

    return (
      <div className="card">
        <h3>{name}</h3>
        <p className="price">₹{price}</p>
        <button onClick={this.handleClick}>Add to Cart</button>
      </div>
    );
  }
}

FoodItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  addToCart: PropTypes.func.isRequired,
};

export default FoodItem;