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
        name: "勇者",
        artist: "Yoasobi",
        album: "THE BOOK",
        uri:"spotify:track:0YTM7bCx451c6LQbkddy4Q"
      },
      {
        id: 5,
        name: "アイドル",
        artist: "Yoasobi",
        album: "THE BOOK",
        uri:"spotify:track:7ovUcF5uHTBRzUpB6ZOmvt",
      },
      {
        id: 6,
        name: "夜にかける",
        artist: "Yoasobi",
        album: "THE BOOK",
        uri:"spotify:track:3dPtXHP0oXQ4HCWHsOA9js"
      }
];

const SpotifyPlaylistmock = [
    {id:"7", artist: "YOASOBI", name:"アイドル", uri:"spotify:track:7ovUcF5uHTBRzUpB6ZOmvt"},
    {id:"8", artist: "YOASOBI", name:"夜にかける", uri:"spotify:track:3dPtXHP0oXQ4HCWHsOA9js"},
    {id:"9", artist: "YOASOBI", name:"勇者", uri:"spotify:track:0YTM7bCx451c6LQbkddy4Q"}
    ]
    

function App() {
  const [searchResults, setSearchResults] = useState(mockSearchResults)
  const [playlistName, setPlaylistName] = useState("New Playlist")
  const [playlistTracks, setPlaylistTracks] = useState(mockPlaylist)

  //handlers
  const addTrack = useCallback(
    (track) => {
        if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) 
            return;

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

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

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
          onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;