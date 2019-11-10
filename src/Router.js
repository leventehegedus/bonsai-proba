import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import HomePage from './components/HomePage';
import Layout from './components/Layout';
import Playlists from './components/Playlists';
import Playlist from './components/Playlist';

export default (
  <Provider store={store}>
    <Router>
      <Switch>
          <Layout className="layout-wrapper">
            <Route exact path="/" component={HomePage}/>
            <Route path={`/playlists`} component={Playlists}/>
            <Route path={`/playlist/:playlistId`} component={Playlist}/>
          </Layout>
      </Switch>
    </Router>
  </Provider>
)
