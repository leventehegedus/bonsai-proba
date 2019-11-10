import axios from 'axios';
import * as songActions from '../actions/song'
import { getServerAddress } from '../helper/functions'

export function getSongs() {
  return dispatch => {
    axios.get(`${getServerAddress()}songs`, {
      headers: {
        'access-token': 'rFxfO0Tid28E4JwU'
      }
    })
    .then(response => {
      dispatch(songActions.setSongs(response.data));
    }).catch(e => {
      console.log(e);
    })
  }
}

export function getSong(songId) {
  return dispatch => {
    axios.get(`${getServerAddress()}songs/${songId}`, {
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

export function updateSong(songId, songData) {
  let valuesToSend = Object.assign({});
  valuesToSend['title'] = songData.title;
  valuesToSend['performer'] = songData.performer;
  valuesToSend['rating'] = songData.rating;

  return dispatch => {
    axios.patch(`${getServerAddress()}songs/${songId}`, valuesToSend, {
      headers: {
        'access-token': 'rFxfO0Tid28E4JwU',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      dispatch(getSongs())
    }).catch(e => {
      console.log(e);
    })
  }
}

export function addSong(title, performer) {
  let valuesToSend = Object.assign({});
  valuesToSend['title'] = title;
  valuesToSend['performer'] = performer;
  return dispatch => {
    axios.post(`${getServerAddress()}songs`, valuesToSend, {
      headers: {
        'access-token': 'rFxfO0Tid28E4JwU',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      dispatch(getSongs())
    }).catch(e => {
      console.log(e);
    })
  }
}
