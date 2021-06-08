import React from 'react'

import './Card.css'

function Card(props) {
  return (
    <>
      <div className="card-container">
        <img alt="avatar" className="avatar-image" src={`https://avatars.dicebear.com/api/male/${props.monster.name}.svg`} />
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.email}</h3>
        <p>{console.log(props.monster)}</p>
      </div>
    </>
  )
}

export default Card
