import React from 'react';
import { Link } from 'react-router-dom';

export default function BreadCrumb(props) {
    return (
        <div className='breadcrumb-container'>
            <div className='breadcrumb'>
                <Link to='/' style={{textDecoration: 'none'}}>
                   <span>Home</span> 
                </Link>
                <span>|</span>
                <span>{props.movieTitle}</span>
            </div>
        </div>
    );
}