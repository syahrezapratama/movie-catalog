import React from 'react';


export default function Button(props) {
    return (
        <button
            type='button'
            className='load-button'
            onClick={props.callback}
        >
            {props.text}
        </button>
    )
}