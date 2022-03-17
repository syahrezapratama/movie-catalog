import React from 'react';

export default function MovieInfoBar(props) {

    function calculateTime(time) {
        const hours = Math.floor(time / 60);
        const mins = time % 60;
        return `${hours}h ${mins}m`;
    }

    function convertToUSD(number) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        });
        return formatter.format(number);
    }

    return(
        <div className='movieInfoBar-container'>
            <div className='movieInfoBar'>
                <div className='column'>
                    <p>Running time: {calculateTime(props.time)}</p>
                </div>
                <div className='column'>
                    <p>Budget: {convertToUSD(props.budget)}</p>
                </div>
                <div className='column'>
                    <p>Revenue: {convertToUSD(props.revenue)}</p>
                </div>
            </div>
        </div>
    );
}