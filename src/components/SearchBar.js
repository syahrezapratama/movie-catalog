import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(props) {
    const [state, setState] = useState('');

    // mutable value
    // only triggers when users type something in search bar
    const initial = useRef(true);

    function handleChange(event) {
        setState(event.currentTarget.value);
        // console.log(state);
    }

    // useEffect always triggers on initial render by default
    useEffect(() => {
        //skip initial render
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            props.setSearchTerm(state);
        }, 500);
        return () => clearTimeout(timer)
    }, [props.setSearchTerm, state])

    return (
        <div className='searchbar-container'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <div className='searchbar'>
                <input 
                    type='text'
                    placeholder='Search movies'
                    onChange={(event) => handleChange(event)}
                    value={state}
                />
            </div>
        </div>
    )
}