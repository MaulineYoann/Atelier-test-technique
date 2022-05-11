import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.scss';
import PlayerId from './components/PlayerId/PlayerId';
import axios from 'axios';

function App() {

  const url = 'https://data.latelier.co/training/tennis_stats/headtohead.json';
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    axios
    .get(url)
    .then(res => res.data)
    .then(data => setPlayers(data.players))
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home players={players}/>} />
        <Route path='/player/:playerId' element={<PlayerId  players={players}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
