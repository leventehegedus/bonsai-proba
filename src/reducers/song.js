import { types } from '../actions/song';

export default function (state = {
  songs: [],
}, action) {
  switch (action.type) {
    case types.SET_SONGS:
      return {
        ...state,
        songs: action.data
      }

    default:
      return state
  }
}
