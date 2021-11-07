import './index.css'

const NotFound = () => (
  <div className="restaurant-error-view-container">
    <img
      src="https://res.cloudinary.com/nsp/image/upload/v1635664104/tastyKitchens/error_1x_csgpog.png"
      alt="not found"
      className="restaurant-failure-img"
    />
    <h1 className="restaurant-failure-heading-text">Page Not Found</h1>
    <p className="restaurant-failure-description">
      we are sorry, the page you requested could not be found Please go back to
      the homepage
    </p>
    <button className="error-button" type="button">
      Home Page
    </button>
  </div>
)

export default NotFound
