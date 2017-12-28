import {fetchWith, readJSON} from '../services/http'

export const getEvent = id => fetchWith(`/api/events/${id}`).then(readJSON)