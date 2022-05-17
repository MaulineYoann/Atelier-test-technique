import React, { useState } from 'react';
import Search from '../Search/Search';
import Player from '../Player/Player';
import ball from '../../assets/ball.png';
import './Home.scss';

const Home = ({ players }) => {
  const [searchPlayer, setSearchPlayer] = useState('');

  
  return (
    <main className="home">
      <Search searchPlayer={searchPlayer} setSearchPlayer={setSearchPlayer} />
      <div className="container">
        <section>
          {searchPlayer
            ? players
                .filter(
                  (name) =>
                    name.firstname.toLowerCase().includes(searchPlayer) ||
                    name.lastname.toLowerCase().includes(searchPlayer)
                )
                .map((player) => (
                  <div className="player-contain" key={player.id}>
                    <Player player={player} />
                  </div>
                ))
            : players
                .sort((min, max) => min.data.rank - max.data.rank)
                .map((player) => (
                  <div className="player-contain" key={player.id}>
                    <Player player={player} />
                  </div>
                ))}
        </section>
        <img className="ball" src={ball} alt="tennis ball" />
      </div>
    </main>
  );
};

export default Home;
