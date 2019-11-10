import { types } from '../actions/playlist';

export default function (state = {
  playlists: [],
}, action) {
  switch (action.type) {
    case types.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.data
      }

    default:
      return state
  }
}
