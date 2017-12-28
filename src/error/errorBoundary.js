import React from 'react'

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true})
    console.log(error)
    console.log(info)
  }

  render() {
    if (this.state.hasError) {
      return (<p>Error</p>)
    }

    return this.props.children
  }
}