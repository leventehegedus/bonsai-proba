export const types = {
  SET_SONGS: 'SET_SONGS'
}

export function setSongs(data) {
  return {
    type: types.SET_SONGS,
    data
  }
}
