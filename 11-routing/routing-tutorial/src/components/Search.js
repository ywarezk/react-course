import React from 'react';

export default function Search(props) {
    const search = (event) => {
        const searchString = event.target.value;
        props.history.push(`/?search=${searchString}`);
    }

    return (
        <form>
            <label>search</label>
            <input type="search" onChange={search} />
        </form>
    )
}


