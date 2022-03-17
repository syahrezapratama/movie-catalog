import React from 'react';
import Thumbnail from './Thumbnail';
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import Movie from './Movie';

export default function MovieInfo(props) {
    return(
        <div className='movieInfo-container'>
            <div className='movieInfo'>
                <Thumbnail 
                    image={
                        props.movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                        : ''
                    }
                    clickable={false}
                />
                <div className='movieInfo-text'>
                    <h1>{props.movie.title}</h1>
                    <p>{props.movie.overview}</p>
                    <div className='movieInfo-details'>
                        <div>
                            <h3>Rating</h3>
                            <div className='rating'>{props.movie.vote_average}</div>
                        </div>
                        <div className='director'>
                            <h3>Director{props.movie.length > 1 ? 's' : ''}</h3>
                            {props.movie.directors.map(director => {
                                return <p key={director.credit_id}>{director.name}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}