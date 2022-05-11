/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import './Player.scss'

const player = ({player}) => {

  return (
      // <Link to={`/player/${player.id}`} key={player.id}>
      <Link to={`/player/${player.id}`} key={player.id}>
    <div className='player'>
        <img 
        className='player-picture'
        src={player.picture} 
        alt="picture"  
        />
        <div className='info'>
        <h1 className='title-name'>{player.firstname}</h1>
        <div className="stats">
          <p className="data">rank <span>{player.data.rank}</span></p>
          <p className="data">Points <span>{player.data.points}</span></p>
          <p className="data">Country <span>{player.country.code}</span></p>
        </div>
        </div>
    </div>
      </Link>
  )
}

export default player