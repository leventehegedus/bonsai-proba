import { types } from '../actions/layout';

export default function (state = {
  selectedSongs: [],
}, action) {
  switch (action.type) {
    case types.SET_SELECTED_SONGS:
      if (action.data === 'clear') {
        return {
          ...state,
          selectedSongs: []
        }
      }
      let newSelectedSongs = [ ...state.selectedSongs ];
      let indexOfElement = newSelectedSongs.indexOf(action.data);
      indexOfElement === -1 ?
      newSelectedSongs.push(action.data)
      : newSelectedSongs.splice(indexOfElement, 1);
      return {
        ...state,
        selectedSongs: newSelectedSongs
      }

    default:
      return state
  }
}
