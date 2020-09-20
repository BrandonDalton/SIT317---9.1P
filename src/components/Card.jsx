import React from 'react';

const Card = (props) =>
{
    return <div className='card'>
    <img src={props.avatar}  />
    <h3>{props.name}</h3>
    <p>{props.position}</p>
    </div>
}

export default Card