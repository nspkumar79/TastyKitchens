import {Component} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import './index.css'

class RestaurantFoodItem extends Component {
  state = {}

  componentDidMount() {
    const {eachFoodItem} = this.props
    const {id} = eachFoodItem
    const buttonStatus = localStorage.getItem(`isButtonClicked${id}`)
    const quantityStatus = localStorage.getItem(`quantity${id}`)

    this.setState({isButtonClicked: buttonStatus, itemQuantity: quantityStatus})
  }

  updateLocalStorage = () => {
    const {eachFoodItem} = this.props
    const {id} = eachFoodItem
    const {isButtonClicked, itemQuantity} = this.state
    const quantityKey = `quantity${id}`
    const buttonKey = `isButtonClicked${id}`
    localStorage.setItem(quantityKey, itemQuantity)
    localStorage.setItem(buttonKey, isButtonClicked)
  }

  onClickedAdd = () => {
    this.setState(
      prev => ({
        isButtonClicked: !prev.isButtonClicked,
        itemQuantity: prev.itemQuantity + 1,
      }),
      this.updateLocalStorage,
    )
  }

  onMinusClicked = () => {
    const {itemQuantity} = this.state
    if (itemQuantity === 1) {
      this.setState(
        prev => ({
          itemQuantity: prev.itemQuantity - 1,
          isButtonClicked: !prev.isButtonClicked,
        }),
        this.updateLocalStorage,
      )
    } else if (itemQuantity > 1) {
      this.setState(
        prev => ({
          itemQuantity: prev.itemQuantity - 1,
        }),
        this.updateLocalStorage,
      )
    }
  }

  onPlusClicked = () => {
    this.setState(
      prev => ({itemQuantity: prev.itemQuantity + 1}),
      this.updateLocalStorage,
    )
  }

  render() {
    const {eachFoodItem} = this.props
    const {imageUrl, name, cost, rating} = eachFoodItem
    const {isButtonClicked, itemQuantity} = this.state

    return (
      <li className="food-item-container">
        <img src={imageUrl} alt="" className="food-item-image" />
        <div className="food-item-details-container">
          <h1 className="food-item-name">{name}</h1>
          <p className="food-item-cost">{cost}</p>
          <div className="rating-container">
            <AiFillStar className="food-item-star" />
            <p className="food-item-rating">{rating}</p>
          </div>
          {isButtonClicked && itemQuantity > 0 ? (
            <div className="food-item-quantity-container">
              <BsDashSquare onClick={this.onMinusClicked} />
              <p className="item-quantity-number">{itemQuantity}</p>
              <BsPlusSquare onClick={this.onPlusClicked} />
            </div>
          ) : (
            <button
              type="button"
              className="food-item-button"
              onClick={this.onClickedAdd}
            >
              ADD
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default RestaurantFoodItem
