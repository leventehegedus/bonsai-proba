import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import '../core.scss'
import * as playlistThunks from '../thunks/playlist';
import * as songThunks from '../thunks/song';

class Layout extends Component {

  componentDidMount(){
    this.props.getPlaylists();
    this.props.getSongs();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPlaylists: playlistThunks.getPlaylists,
    getSongs: songThunks.getSongs
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
