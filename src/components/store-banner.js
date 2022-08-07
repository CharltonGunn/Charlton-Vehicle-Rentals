import React from 'react'

import PropTypes from 'prop-types'

import './store-banner.css'

const StoreBanner = (props) => {
  return (
    <div className="store-banner-store-banner">
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="store-banner-image"
      />
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="store-banner-image1"
      />
    </div>
  )
}

StoreBanner.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt1: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'image',
}

StoreBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StoreBanner
