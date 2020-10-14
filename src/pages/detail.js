import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }
  render() {
    return <p>Detalle</p>
  }
}

export {Detail}