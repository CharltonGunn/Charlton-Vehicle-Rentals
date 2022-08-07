import React from 'react'

import PropTypes from 'prop-types'

import PrimaryButton from './primary-button'
import './hero.css'

const Hero = (props) => {
  return (
    <div className={`hero-hero ${props.rootClassName} `}>
      <h1 className="hero-text">
        <span className="">WE MANAGE YOUR VEHICLE</span>
        <br className=""></br>
        <span className=""></span>
      </h1>
      <div className="hero-container">
        <a
          href="mailto:charltonrentalsadelaide@gmail.com?subject=Vehicle Management Enquiry"
          className="hero-link"
        >
          <PrimaryButton
            button="Get Started"
            className="hero-component"
          ></PrimaryButton>
        </a>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  rootClassName: '',
}

Hero.propTypes = {
  rootClassName: PropTypes.string,
}

export default Hero
