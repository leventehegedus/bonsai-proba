import React from 'react';
import Playlists from '../Playlists';
import SongsList from '../SongsList';

class HomePage extends React.Component {


  render() {

    return (
      <main className="home-main-content">
        <div>
          <Playlists/>
          <SongsList/>
        </div>
      </main>
    )
  }
}

export default HomePage;
