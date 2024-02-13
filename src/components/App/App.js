import React, { useState, useCallback} from 'react';
import './App.css';

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../utilities/Spotify";

function App() {
  return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className="App">
        <p>here goes the search bar</p>
        <div className='App-playlist'>
          <p>here goes the search results</p>
          <p>here goes the play list</p>
        </div>
      </div>
    </div>
  );
}

export default App;