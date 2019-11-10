export const types = {
  SET_PLAYLISTS: 'SET_PLAYLISTS'
}

export function setPlaylists(data) {
  return {
    type: types.SET_PLAYLISTS,
    data
  }
}
