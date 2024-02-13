import React, { useState, useCallback} from 'react';
import './App.css';

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../utilities/Spotify";

function App() {
  return (
    <div className="App">
      <h1>Ja<span>MMM</span>ing</h1>
      <div>
        <p>here goes the search bar</p>
        <div>
          <p>here goes the search results</p>
          <p>here goes the play list</p>
        </div>
      </div>
    </div>
  );
}

export default App;