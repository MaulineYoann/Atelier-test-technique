import React, { useState } from 'react';
import Search from '../Search/Search';
import Player from '../Player/Player';
import './Home.scss'

const Home = ({players}) => {

  const [searchPlayer, setSearchPlayer] = useState('');

  return (
    <main className='home'>
      
      <Search searchPlayer={searchPlayer} 
      setSearchPlayer={setSearchPlayer}
      />
      <section>
      {
        searchPlayer 
        ? 
        players
        .filter((name) => name.firstname.toLowerCase().includes(searchPlayer))
        .map((player, index) => (
          <div className='player-contain' key={player.id} >
            <Player player={player}/>
          </div>
        ))
        :
        players
        .sort((min, max) => min.data.rank - max.data.rank)
        .map((player, index) => (
          <div className='player-contain' key={player.id} >
            <Player player={player}/>
          </div>
        ))
      }
      </section>
      
    </main>
  );
};

export default Home;
