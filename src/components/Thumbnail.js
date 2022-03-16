import React from 'react';
import { Link } from 'react-router-dom';

export default function Thumbnail(props) {
    return (
        <div>
            {
                props.clickable
                ? (
                    <Link to={`/${props.movieId}`}>
                        <img className='thumbnail' src={props.image} />
                    </Link>
                )
                : <img className='thumbnail' src={props.image} />
            }
        </div>
        
    )
}