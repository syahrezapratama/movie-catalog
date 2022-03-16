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
// get movie data with hook
import { useMovieFetch } from './useMovieFetch';

export default function Movie() {
    
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    return (
        <>
            <div>Movie</div>
        </>
    );
}