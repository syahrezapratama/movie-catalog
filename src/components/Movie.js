import React, { useState, useEffect } from 'react';
// get movieId with router
import { useParams } from 'react-router-dom';
// API
import API from '../API';
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
// get movie data with hook
import { useMovieFetch } from './useMovieFetch';

export default function Movie() {
    
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;

    const actorElements = movie.actors.map(actor => {
        return (
            <Actor 
                key={actor.credit_id}
                name={actor.name}
                character={actor.character}
                imageUrl={
                    actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : ''
                }
            />
        )
    })

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                time={movie.runtime} 
                revenue={movie.revenue} 
                budget={movie.budget} 
            />
            <Grid header='Actors'>
                {actorElements}
            </Grid>
        </>
    );
}