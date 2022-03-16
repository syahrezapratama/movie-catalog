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

export default function Movie() {
    
    const { movieId } = useParams
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    console.log(state);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                const directors = credits.crew.filter(member => member.job === 'Director');
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });
                setLoading(false);
            }
            catch (error) {
                setError(true);
            }
        }
        fetchData()
    }, [movieId])

    return (
        <>
            <div>Movie</div>
        </>
    );
}