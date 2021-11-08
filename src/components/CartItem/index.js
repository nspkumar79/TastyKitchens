import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import './index.css'

class CartItem extends Component {
  state = {}

  componentDidMount() {
    const {eachItem} = this.props
    const {quantity} = eachItem
  }

  onDecrementClicked = () => {}

  onIncrementClicked = () => {}

  render() {
    const {eachItem} = this.props
    const {imageUrl, name, cost, quantity} = eachItem
    const totalItemCost = cost * quantity
    return (
      <>
        <li testid="cartItem" className="mobile-list-cart-item">
          <img className="mobile-cart-item-image" src={imageUrl} alt="" />
          <div>
            <h1 className="cart-Item-name">{name}</h1>
            <div className="cartItem-quantity-container">
              <button
                testid="decrement-quantity"
                type="button"
                className="decrement-button"
                onClick={this.onDecrementClicked}
              >
                <BsDashSquare />
              </button>
              <span testid="item-quantity" className="cart-item-quantity">
                {quantity}
              </span>
              <button
                testid="increment-quantity"
                type="button"
                className="increment-button"
                onClick={this.onIncrementClicked}
              >
                <BsPlusSquare />
              </button>
            </div>
            <p testid="total-price" className="cart-item-cost">
              <span>₹ </span>
              {totalItemCost}
            </p>
          </div>
        </li>
        <li testid="cartItem" className="desktop-list-cart-item">
          <div className="desktop-item-container">
            <img className="desktop-cart-item-image" src={imageUrl} alt="" />
            <h1 className="desktop-cart-item-name">{name}</h1>
          </div>
          <div className="desktop-cartItem-quantity-container">
            <button
              testid="decrement-quantity"
              type="button"
              className="decrement-button"
              onClick={this.onDecrementClicked}
            >
              <BsDashSquare />
            </button>
            <span testid="item-quantity" className="desktop-cart-item-quantity">
              {quantity}
            </span>
            <button
              testid="increment-quantity"
              type="button"
              className="increment-button"
              onClick={this.onIncrementClicked}
            >
              <BsPlusSquare />
            </button>
          </div>
          <p testid="total-price" className="desktop-cart-item-cost">
            <span>₹ </span>
            {totalItemCost}
          </p>
        </li>
      </>
    )
  }
}

export default CartItem
