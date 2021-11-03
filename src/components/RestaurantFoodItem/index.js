import {AiFillStar} from 'react-icons/ai'

import './index.css'

const RestaurantFoodItem = props => {
  const {eachFoodItem} = props
  const {imageUrl, name, cost, rating} = eachFoodItem
  return (
    <li>
      <img src={imageUrl} alt="" className="food-item-image" />
      <div className="food-item-details-container">
        <h1>{name}</h1>
        <p>{cost}</p>
        <div className="rating-container">
          <AiFillStar className="star" />
          <p>{rating}</p>
        </div>
      </div>
    </li>
  )
}

export default RestaurantFoodItem
