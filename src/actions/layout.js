export const types = {
  SET_SELECTED_SONGS: 'SET_SELECTED_SONGS',
}

export function setSelectedSongs (songId) {
  return {
    type: types.SET_SELECTED_SONGS,
    data: songId
  }
}
