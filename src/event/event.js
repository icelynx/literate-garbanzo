import React from 'react'
import Loader from '../loader/loader'
import Button from '../ui/button/button'
import H1 from '../ui/heading/h1'
import * as eventApi from './eventApi'

export default class Event extends React.Component {
  state = {
    isLoading: false,
    name: 'name',
    description: 'description',
    location: 'some location',
    start: '1.1.2018',
    end: '2.1.2018',
    participants: []
  }

  componentWillMount() {
    // TODO configure json-server and webpack
    // TODO save to state
    // TODO If not found, redirect to NotFound
    eventApi.getEvent(this.props.match.params.eventId)
  }

  render() {
    const {
      isLoading,
      name,
      description,
      location,
      start,
      end,
      participants
    } = this.state

    console.log('rendering')

    return (
      <Loader isLoading={isLoading}>
        <H1>{name}</H1>
        <p>Howdy</p>
        <p>
          {description}
          {location}
          {start} - {end}
        </p>
        {participants.map((participant, i) => (<div key={i}>{participant}</div>))}
        <Button>Participate</Button>
      </Loader>
    )
  }
}