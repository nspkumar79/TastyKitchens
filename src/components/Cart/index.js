import {Component} from 'react'
import CartItem from '../CartItem'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Cart extends Component {
  state = {cartData: []}

  componentDidMount() {
    const cartData = localStorage.getItem('cartData')
    const parseCartData = JSON.parse(cartData)
    if (parseCartData === null || parseCartData.length === 0) {
      this.setState({cartStatus: false})
    } else {
      this.setState({cartData: parseCartData, cartStatus: true})
    }
  }

  render() {
    const {cartData, cartStatus} = this.state
    console.log(cartData)
    return (
      <>
        {cartStatus ? (
          <div>
            <Header />
            <div className="cart-container">
              <div className="cart-responsive-container">
                <ul className="cart-list-container">
                  <li className="cart-desktop-list-header">
                    <p className="list-header-name">Item</p>
                    <p className="list-header-name">Quantity</p>
                    <p className="list-header-name">Price</p>
                  </li>
                  {cartData.map(eachItem => (
                    <CartItem eachItem={eachItem} key={eachItem.id} />
                  ))}
                </ul>
                <hr className="cart-line" />
                <div className="total-cart-amount-container">
                  <p className="total-order-text">Order Total : </p>
                  <p className="total-order-amount">
                    <span>₹</span>1000
                  </p>
                </div>
                <div className="place-order-button-container">
                  <button type="button" className="cart-place-order-button">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <div>
            <Header />
            <div className="empty-cart-container">
              <div className="empty-cart-responsive-container">
                <img
                  className="empty-cart-image"
                  src="https://res.cloudinary.com/nsp/image/upload/v1636379708/tastyKitchens/empty_cart_1_1x_o1nekx.png"
                  alt=""
                />
                <h1 className="empty-cart-heading">No Orders Yet!</h1>
                <p className="empty-cart-para">
                  Your cart is empty. Add something from the menu.
                </p>
                <button className="empty-cart-button" type="button">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Cart
