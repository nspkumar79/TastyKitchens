import {Component} from 'react'
import Loader from 'react-loader-spinner'

import ReactSlider from '../ReactSlider'
import RestaurantHeader from '../RestaurantHeader'
import RestaurantCard from '../RestaurantCard'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllRestaurantSection extends Component {
  state = {
    activeOptionId: '',
    apiStatus: apiStatusConstants.initial,
  }

  changeSortBy = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderRestaurantListView = () => {
    const {productsList, activeOptionId} = this.state

    return (
      <>
        <RestaurantHeader
          activeOptionId={activeOptionId}
          sortByOptions={sortByOptions}
          changeSortBy={this.changeSortBy}
        />
        <hr className="hr-line" />
        <ul className="restaurant-list">
          {productsList.map(product => (
            <RestaurantCard productData={product} key={product.id} />
          ))}
        </ul>
      </>
    )
  }

  renderFailureView = () => (
    <div className="restaurant-error-view-container">
      <img
        src="https://res.cloudinary.com/nsp/image/upload/v1635664104/tastyKitchens/error_1x_csgpog.png"
        alt="products failure"
        className="restaurant-failure-img"
      />
      <h1 className="restaurant-failure-heading-text">Page Not Found</h1>
      <p className="restaurant-failure-description">
        we are sorry, the page you requested could not be found Please go back
        to the homepage
      </p>
      <button className="error-button">Home Page</button>
    </div>
  )

  renderLoadingView = () => (
    <div className="restaurant-loader-container">
      <Loader type="Oval" color="#F7931E" height="50" width="50" />
    </div>
  )

  renderRestaurants = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {activeOptionId} = this.state
    return (
      <div>
        <ReactSlider />
        <div className="all-restaurant-responsive-container">
          {this.renderRestaurants()}
        </div>
      </div>
    )
  }
}

export default AllRestaurantSection
