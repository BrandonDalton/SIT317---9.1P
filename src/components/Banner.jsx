import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'

export default function Banner() {
    let src = 'background-image:' + faker.image.imageUrl();
    console.log(src )
    
    return(
        <div className={'banner'}>
        </div>
    )
}