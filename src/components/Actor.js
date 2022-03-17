import React from 'react';

export default function Actor(props) {
    return(
        <div className='actor-container'>
            <img src={props.imageUrl} />
            <h4>{props.name}</h4>
            <p>{props.character}</p>
        </div>
    )
}