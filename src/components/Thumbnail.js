import React from 'react';

export default function Thumbnail(props) {
    return (
        <img className='thumbnail' src={props.image}/>
    )
}