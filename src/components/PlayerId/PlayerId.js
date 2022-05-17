import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { carrerPlayer } from '../../data/carrer';
import './PlayerId.scss';

const PlayerId = ({ players }) => {
  const params = useParams();
  const idPlayer = Object.values(params)[0];
  const singlePlayer = parseInt(idPlayer);
  
  //CHECK IF THE ID MATCH
  const player = players.filter(dataPlayer => dataPlayer.id === singlePlayer);  

  //CGET CARRER DATA  OF PLAYERS FROM CARRERPLAYER
  const carrer = carrerPlayer.filter(dataCarrer => dataCarrer.name === player[0].firstname);

  let birthday = null;
  switch(player[0].firstname) {
    case 'Rafael': 
       birthday = '3 / 06 / 1986';
       break
    case 'Novak':
       birthday = '22 / 05 / 1987';
       break
    case 'Venus': 
       birthday = '17 / 06 / 1980';
       break
    case 'Stan':
       birthday = '28 / 03 / 1985';
       break
    case 'Serena':
       birthday = '26 / 09 / 1981';
       break
    default:
      birthday = 'N/C';
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
                <p  className='years'>{carrer[0].palmares.recent.years}</p>
                <p className='description'>{carrer[0].palmares.recent.description}</p>
                <p className='years'>{carrer[0].palmares.old.years}</p>
                <p className='description'>{carrer[0].palmares.old.description}</p>
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
