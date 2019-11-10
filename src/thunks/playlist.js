import axios from 'axios';
import * as playlistActions from '../actions/playlist'
import * as layoutActions from '../actions/layout'
import { getServerAddress } from '../helper/functions'

export function getPlaylists() {
  console.log("getPlaylists");
  return dispatch => {
    axios.get(`${getServerAddress()}playlists`, {
      headers: {
        'access-token': 'rFxfO0Tid28E4JwU'
      }
    })
    .then(response => {
      dispatch(playlistActions.setPlaylists(response.data));
    }).catch(e => {
      console.log(e);
    })
  }
}

export function getPlaylist(playlistId) {
  return dispatch => {
    axios.get(`${getServerAddress()}playlists/${playlistId}`, {
      headers: {
        'access-token': 'rFxfO0Tid28E4JwU'
      }
    })
    .then(response => {
      console.log("response", response.data);
    }).catch(e => {
      console.log(e);
    })
  }
}

export function deletePlaylist(playlistId) {
  return dispatch => {
    axios.delete(`${getServerAddress()}playlists/${playlistId}`, {
      headers: {
        'access-token': 'rFxfO0Tid28E4JwU'
      }
    })
    .then(response => {
      dispatch(getPlaylists());
    }).catch(e => {
      console.log(e);
    })
  }
}

export function deleteFromPlaylist(playlistId, songId) {
  return dispatch => {
    axios.delete(`${getServerAddress()}playlists/${playlistId}/songs/${songId}`, {
      headers: {
        'access-token': 'rFxfO0Tid28E4JwU'
      }
    })
    .then(response => {
      dispatch(getPlaylists());
    }).catch(e => {
      console.log(e);
    })
  }
}

export function addPlaylist(name, songs) {
  let valuesToSend = Object.assign({});
  valuesToSend['name'] = name;
  valuesToSend['songs'] = songs.map(s => Object.assign({"songId": s}));
console.log(valuesToSend);
  return dispatch => {
    axios.post(`${getServerAddress()}playlists`, valuesToSend, {
      headers: {
        'access-token': 'rFxfO0Tid28E4JwU'
      }
    })
    .then(response => {
      dispatch(getPlaylists())
      dispatch(layoutActions.setSelectedSongs('clear'))
    }).catch(e => {
      console.log(e);
    })
  }
}
