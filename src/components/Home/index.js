import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'

import AllRestaurantSection from '../AllRestaurantSection'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <AllRestaurantSection />
    </>
  )
}

export default Home
