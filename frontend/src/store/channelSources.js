import { fetch } from './csrf';


// DEFINE CONSTANTS //
const SET_CHANNEL_SOURCES = 'SET_CHANNEL_SOURCES;'


// DEFINE ACTION CREATORS - ASYNC/THUNK //
export const fetchChannelSources = ({ channelId }) => async (dispatch) => {
  const res = await fetch(`/api/users/channels/sources`);
  console.log(res);
}

export const addChannelSources = ({ channelId, sourceId }) => async (dispatch) => {
  const res = await fetch(`/api/users/channels/sources`, {
    method: 'POST',
    body: JSON.stringify({ channelId, sourceId })
  })
  dispatch(setChannelSources(res.data));
}


// DEFINE ACTION CREATORS - SYNC //
const setChannelSources = (sources) => {
  return {
    type: SET_CHANNEL_SOURCES,
    sources
  }
}


// DEFINE REDUCER //
export const channelSourcesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHANNEL_SOURCES:
      return [...action.sources]
    default:
      return state;
  }
}