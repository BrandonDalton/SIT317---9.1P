import React from 'react'
import Card from './Card'
import requesterList from './RequesterList'

function cardComponent (requester , i){
    return <Card 
    key = {requester.key}
    avatar = {requester.image}
    name = {requester.name}
    position = {requester.position}
  />
}


const CardList = () =>
{  
    return <div className="cardlist">
    {requesterList.map(  (requester ) => 
      <Card 
    key = {requester.key}
    avatar = {requester.image}
    name = {requester.name}
    position = {requester.position}
  />
)}
     
    </div>
}

export default CardList