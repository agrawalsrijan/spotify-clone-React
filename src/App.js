import React, {useEffect, useState} from 'react';

import {useDataLayerValue} from "./DataLayer"

import SpotifyWebApi from "spotify-web-api-js"
import { getTokenFromUrl } from './spotify';

import './App.css';

// Components import
import Login from "./Login";
import Player from "./Player"

const spotify = new SpotifyWebApi()

function App() {
  
  const [{ user, token }, dispatch] = useDataLayerValue();

  // run code based on given condition
  useEffect(() => {
    const hash  = getTokenFromUrl();
    window.location.hash= "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        
        dispatch({
          type: "SET_USER",
          user: user
        })

      })

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })

      spotify.getPlaylist("37i9dQZEVXcRg4VdFCH2SM").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })

    }

    
  }, [token, dispatch])



  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
