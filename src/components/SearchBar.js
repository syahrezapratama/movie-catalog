import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(props) {
    const [state, setState] = useState('');

    function handleChange(event) {
        setState(event.currentTarget.value);
        console.log(state);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            props.setSearchTerm(state);
        }, 500);
        return () => clearTimeout(timer)
    }, [props.setSearchTerm, state])

    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
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