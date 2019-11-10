import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MediaQuery from 'react-responsive';
import './Song.scss';
import * as layoutActions from '../../actions/layout';
import * as songThunks from '../../thunks/song';
import * as playlistThunks from '../../thunks/playlist';
import star from './assets/star.svg';
import star_yellow from './assets/star_yellow.svg';
import circle from './assets/circle.svg';
import check from './assets/check.svg';
import delete_icon from './assets/delete.svg';

class Song extends React.Component {


  updateSong(rating){
    let songData = Object.assign({});
    songData["title"] = this.props.title;
    songData["performer"] = this.props.performer;
    songData["rating"] = rating;
    this.props.updateSong(this.props.id, songData);
  }

  renderRateSong(){
    let stars = []
    for(let i=1;i<=5;i++){
      stars.push(<img src={i <= this.props.rating ? star_yellow : star} onClick={() => this.updateSong(i)}/>)
    }
    return stars;
  }

  handleSelectChange = (event) => {
//    this.props.addSongToPlaylist(this.props.id, event.value)
  }




  render() {

    let selectObject = [];
    this.props.playlists && this.props.playlists.map(list => {
      if(list.id && list.name){
        let playListData = Object.assign({});
        playListData["value"] = list.id;
        playListData["label"] = list.name;
        selectObject.push(playListData)
      }
    })

    const isSelected = this.props.selectedSongs.includes(this.props.id);

    return (
      <div className="song-container">
        <div className="title-and-performer-container">
          <div className="title">
            <span>
              {this.props.title}
            </span>
          </div>
          <div className="performer">
            <span>{this.props.performer}</span>
          </div>
        </div>
        <div className="action-container">
          <div>
            { this.renderRateSong()}
          </div>
          { this.props.playlistId ?
            <div>
              <span onClick={() => this.props.deleteFromPlaylist(this.props.playlistId, this.props.id)}><img src={delete_icon}/></span>
            </div>
            :
            <img onClick={()=> this.props.setSelectedSongs(this.props.id)} className="camera-check" src={isSelected ? check : circle}/>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playlists: state.playlist.playlists.playlists,
    selectedSongs: state.layout.selectedSongs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSongs: songThunks.getSongs,
    updateSong: songThunks.updateSong,
    addSongToPlaylist: playlistThunks.addSongToPlaylist,
    deleteFromPlaylist: playlistThunks.deleteFromPlaylist,
    setSelectedSongs: layoutActions.setSelectedSongs
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
