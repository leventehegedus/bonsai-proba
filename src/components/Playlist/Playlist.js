import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as songThunks from '../../thunks/song';
import './Playlist.scss';
import * as playlistThunks from '../../thunks/playlist';
import delete_icon from './assets/delete.svg';
import Song from '../Song';

class Playlist extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      isSongsVisible: false
    }
  }

  toggleSongsVisible(){
    this.setState({
      isSongsVisible: !this.state.isSongsVisible
    })
  }

  render() {

    let songsInPlaylist = [];
    if(this.props.allSongs && this.props.songs.length > 0){
      songsInPlaylist = this.props.allSongs.filter(as => this.props.songs.map(song => song.songId).includes(as.id));
    }


    return (
      <div className="playlist-container">
        <div className="playlist-name">
          <div className="playlist-header" onClick={() => this.toggleSongsVisible()}>
            <span className="name">{this.props.name}</span>
            <span>({songsInPlaylist.length})</span>
          </div>
          <img src={delete_icon} onClick={()=>this.props.deletePlaylist(this.props.id)}/>
        </div>
        { this.state.isSongsVisible &&
          <div className="songs-container">
            { songsInPlaylist.map((sip, index) => <Song key={index} {...sip} playlistId={this.props.id} position={this.props.songs.find(s => s.songId === sip.id).position}/>)}
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    allSongs: state.song.songs.songs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deletePlaylist: playlistThunks.deletePlaylist
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
