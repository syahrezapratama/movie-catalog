import React, { useEffect, useState } from 'react';
// API
import API from '../API';
// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// components
import Hero from './Hero';
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

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
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
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

    // initial render and search
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm)
    }, [searchTerm]);

    // load more movies
    useEffect(() => {
        if (!isLoadingMore) {
            return;
        }
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    if (error) {
        return <div>Something went wrong...</div>
    }

    return(
        <>
            {
                !searchTerm && state.results[0] && 
                <Hero 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />  
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid title={searchTerm ? 'Search Results' : 'Trending Movies'}>
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
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && <Button text='Load More Movies' callback={() => setIsLoadingMore(true)} />}
        </>
    )
}