import React from 'react';

export default function Home(props) {
    const handleClick = () => {
        props.history.push('/about');
    }

    return (
        <div>
            <h1>Hello home page</h1>
            <button onClick={handleClick}>goto about page</button>
        </div>
        
    )
}