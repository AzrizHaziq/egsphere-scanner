import * as PropTypes from 'prop-types'
import React, { Component } from 'react'

const ToggleContext = React.createContext({
  isCollapse: false,
})

const ToggleProvider = ToggleContext.Provider
const ToggleConsumer = ToggleContext.Consumer

class Toggler extends Component {
  state = {
    isCollapse: false,
  }

  handleCollapse = (isCollapse) => {
    this.setState({ isCollapse })
  }

  toggleCollapse = () => {
    this.setState(({ isCollapse }) => !isCollapse)
  }

  render() {
    const { isCollapse } = this.state
    const { children } = this.props

    return (
      <ToggleProvider
        value={{
          isCollapse,
          handleCollapse: this.handleCollapse,
          toggleCollapse: this.toggleCollapse,
        }}
      >
        {children}
      </ToggleProvider>
    )
  }
}

Toggler.propTypes = {
  children: PropTypes.any,
  initCollapse: PropTypes.bool,
}

export { Toggler, ToggleContext, ToggleConsumer }
