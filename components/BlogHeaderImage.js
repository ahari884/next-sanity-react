import React from "react"
import  { urlFor } from '../utils'
import PropTypes from 'prop-types'

const BlogHeaderImage = ({image}) => {
  return (
    <div>
      <img width="100%" height="20%" src={urlFor(image)} />
    </div>
  )
}

BlogHeaderImage.propTypes = {
    image: PropTypes.string
}

export default BlogHeaderImage
