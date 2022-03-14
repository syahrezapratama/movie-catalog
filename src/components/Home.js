import React, { useEffect, useState } from 'react';
// API
import API from '../API';
// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// components
import Hero from './Hero';
import Grid from './Grid';
import Thumbnail from './Thumbnail';

export default function Home() {

    const initialState = {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }

    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    // fetch data from API
    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true); 
            const movies = await API.fetchMovies(searchTerm, page);
            // console.log(result);
            setState(prevState => ({
                ...movies,
                results: page > 1 
                    ? [...prevState.results, ...movies.results]
                    : [...movies.results]
            }));
        } catch (error) {
            setError(true);
            console.log(error);
        }
        setLoading(false);
    }

    // initial render
    useEffect(() => {
        fetchMovies(1)
    }, []);

    console.log(state);

    return(
        <>
            {
                state.results[0] && 
                <Hero 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />  
            }
            <Grid title='Popular Movies'>
                {state.results.map(movie => (
                    <Thumbnail 
                        key={movie.id} 
                        clickable={true}
                        image={
                            movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : ''
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
        </>
    )
}