import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as songThunks from '../../thunks/song';
import * as playlistThunks from '../../thunks/playlist';
import * as layoutActions from '../../actions/layout';
import Playlist from '../Playlist';

class Playlists extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      newPlaylistName: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    let val = e.target.value
    this.setState({
      newPlaylistName: val
    })
  }

  submitNewPlaylist(){
    let playlistName = this.state.newPlaylistName;
    console.log(this.props.selected);
    if(this.state.newPlaylistName !== null && this.state.newPlaylistName !== ""){
      this.setState({
        newPlaylistName: ""
      }, () => this.props.addPlaylist(playlistName, this.props.selected))
    }
  }



  render() {

    return (<div>
      <h2>Playlists</h2>
      <div className="input-button-container">
        <input placeholder="create new playlist" value={this.state.newPlaylistName} onChange={this.handleChange}/>
        <button onClick={() => this.submitNewPlaylist()}>create new playlist</button>
      </div>
      <ul>
        {
          this.props.playlists && this.props.playlists.map((list, index) => {
            return (list.id && list.name && <li key={index}><Playlist {...list}/></li>)
          })
        }
      </ul>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    playlists: state.playlist.playlists.playlists,
    selected: state.layout.selectedSongs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPlaylist: playlistThunks.addPlaylist,
    getPlaylists: playlistThunks.getPlaylists,
    deletePlaylist: playlistThunks.deletePlaylist,
    addSongToPlaylist: playlistThunks.addSongToPlaylist,
    setSelectedSongs: layoutActions.setSelectedSongs
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
