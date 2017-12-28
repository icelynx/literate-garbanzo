import React from 'react'
import Loading from '../ui/layout/loading'

const Loader = ({isLoading, children}) =>
  isLoading ? (<Loading />) : children

export default Loader