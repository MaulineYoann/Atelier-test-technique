import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { carrer } from '../../data/carrer';
import './PlayerId.scss';

const PlayerId = ({ players }) => {
  const params = useParams();
  const idPlayer = Object.values(params)[0];
  const singlePlayer = parseInt(idPlayer);
  const player = players.filter((el) => el.id === singlePlayer);
  const playerCarrer = carrer.filter(el => el.name === player[0].firstname)

  let birthday = null;
  
  if (player[0].firstname === 'Rafael') {
    birthday = '3 / 06 / 1986';
  } else if (player[0].firstname === 'Novak') {
    birthday = '22 / 05 / 1987';
  } else if (player[0].firstname === 'Venus') {
    birthday = '17 / 06 / 1980';
  } else if (player[0].firstname === 'Stan') {
    birthday = '28 / 03 / 1985';
  } else if (player[0].firstname === 'Serena') {
    birthday = '26 / 09 / 1981'
  }


  return (
    <div className="playerId">
      <Link className="close" to="/">
        +
      </Link>
      <section className="player-contain">
          <h1 className="name">
            {player[0].firstname}{' '}
            <span className="lastname">{player[0].lastname}</span>
          </h1>
        <div className="block-info">
          <img src={player[0].picture} 
          className='player-picture'
          alt="player" />
          <div className="stats">
            <h4 className="info">
              rank <span className="info-data">{player[0].data.rank}</span>
            </h4>
            <h4 className="info">
              birthday<span className="info-data">{birthday}</span>
            </h4>
            <h4 className="info">
              weight<span className="info-data">{player[0].data.weight}</span>
              
            </h4>
            <h4 className="info">
              points<span className="info-data">{player[0].data.points}</span>
              
            </h4>
            <h4 className="info">
              age<span className="info-data">{player[0].data.age}</span>
              
            </h4>
            <h4 className="info">
              height<span className="info-data">{player[0].data.height}</span>
              
            </h4>
            <h4 className="info">
              country<span className="info-data">{player[0].country.code}</span>
              
            </h4>
          </div>
          <div className="resume">
            <h4 className="info">
              carrer title
              <span className="info-data">
                <p  className='years'>{playerCarrer[0].palmares.recent.years}</p>
                <p className='description'>{playerCarrer[0].palmares.recent.description}</p>
                <p className='years'>{playerCarrer[0].palmares.old.years}</p>
                <p className='description'>{playerCarrer[0].palmares.old.description}</p>
              </span>
            </h4>
          </div>
        </div>
        <div className="flag">
          <img
          src={player[0].country.picture} 
          alt="country" srcset="" />
          <p className='info-data'>{player[0].country.code}</p>
        </div>
      </section>
    </div>
  );
};

export default PlayerId;
