import React, { useState, useCallback} from 'react';
import './App.css';

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../utilities/Spotify";

//mockdata for searchResults:
const mockSearchResults = [
    {
      id: 1,
      name: "Yoru ni Kakeru",
      artist: "Yoasobi",
      album: "THE BOOK",
    },
    {
      id: 2,
      name: "Kaibutsu",
      artist: "Yoasobi",
      album: "THE BOOK",
    },
    {
      id: 3,
      name: "Gunjo",
      artist: "Yoasobi",
      album: "THE BOOK",
    }
  ];

function App() {
  const [searchResults, setSearchResults] = useState(mockSearchResults)

  return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className="App">
        <p>here goes the search bar</p>
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} /*onAdd={addTrack}*//>
          <p>here goes the play list</p>
        </div>
      </div>
    </div>
  );
}

export default App;