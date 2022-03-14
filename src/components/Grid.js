import React from 'react'

export default function Grid(props) {
    return (
        <div className='grid-container'>
            <h1 className='grid-title'>{props.title}</h1>
            <div className='grid-content'>
                {props.children}
            </div>
        </div>
    )
}