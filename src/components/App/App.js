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

const mockPlaylist = [
    {
        id: 4,
        name: "Yūsha",
        artist: "Yoasobi",
        album: "THE BOOK",
      },
      {
        id: 5,
        name: "Tabun",
        artist: "Yoasobi",
        album: "THE BOOK",
      },
      {
        id: 6,
        name: "Ano Yume o Nazotte",
        artist: "Yoasobi",
        album: "THE BOOK",
      }
];

function App() {
  const [searchResults, setSearchResults] = useState(mockSearchResults)
  const [playlistName, setPlaylistName] = useState("New Playlist")
  const [playlistTracks, setPlaylistTracks] = useState(mockPlaylist)

  //handlers
  const addTrack = useCallback(
    (track) => {
        if(playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
            return;
        };
        setPlaylistTracks((prevTracks) => [...prevTracks, track])
    }, [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevTracks) =>
            prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
        );
    }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className="App">
        <p>here goes the search bar</p>
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          /*onSave={savePlaylist}*/
          />
        </div>
      </div>
    </div>
  );
};

export default App;