import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './SongsList.scss';
import * as playlistThunks from '../../thunks/playlist';
import * as songThunks from '../../thunks/song';
import Song from '../Song';

class SongsList extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      newSongTitle: "",
      newSongPerformer: ""
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangePerformer = this.handleChangePerformer.bind(this);
  }

  handleChangeTitle = (e) => {
    let val = e.target.value
    this.setState({
      newSongTitle: val
    })
  }

  handleChangePerformer = (e) => {
    let val = e.target.value
    this.setState({
      newSongPerformer: val
    })
  }

  submitNewSong(){
    let songTitle = this.state.newSongTitle;
    let songPerformer = this.state.newSongPerformer;
    if(this.state.newSongTitle !== null && this.state.newSongTitle !== "" && this.state.newSongPerformer !== null && this.state.newSongPerformer !== ""){
      this.setState({
        newSongTitle: "",
        newSongPerformer: ""
      }, () => this.props.addSong(songTitle, songPerformer))
    }
  }

  render() {
    return (
      <div>
        <h2>Songs</h2>
        <div className="input-button-container">
          <input placeholder="new song title" value={this.state.newSongTitle} onChange={this.handleChangeTitle}/>
          <input placeholder="new song performer" value={this.state.newSongPerformer} onChange={this.handleChangePerformer}/>
          <button onClick={() => this.submitNewSong()}>add new Song</button>
        </div>
        <ul>
          {
            this.props.songs && this.props.songs.map((song, index) => {
              return (
                <li key={index}><Song {...song}/></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {songs: state.song.songs.songs};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPlaylist: playlistThunks.addPlaylist,
    getPlaylists: playlistThunks.getPlaylists,
    deletePlaylist: playlistThunks.deletePlaylist,
    addSong: songThunks.addSong
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
