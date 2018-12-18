import React from 'react';
import {Route} from 'react-router-dom';
import Search from './Search';

export default function Home(props) {
    const handleClick = () => {
        props.history.push('/about');
    }
    return (
        <div>
            <h1>Hello home page</h1>
            <Route component={Search} />
            <button onClick={handleClick}>goto about page</button>

            <h1>We want to grab the query params {props.location.search}</h1>

        </div>
        
    )
}