import {FaPinterestSquare} from 'react-icons/fa'
import {BsInstagram, BsTwitter} from 'react-icons/bs'

import {AiFillFacebook} from 'react-icons/ai'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-heading-container">
      <img
        src="https://res.cloudinary.com/nsp/image/upload/v1635840304/tastyKitchens/logowhite_t8wfhc.png"
        alt=""
        className="footer-heading-logo"
      />
      <h1 className="footer-heading">Tasty Kitchens</h1>
    </div>
    <p className="footer-para">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="social-container">
      <FaPinterestSquare className="social-icon" />
      <BsInstagram className="social-icon" />
      <BsTwitter className="social-icon" />
      <AiFillFacebook className="social-icon" />
    </div>
  </div>
)

export default Footer
