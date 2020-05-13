import React from 'react';
import './search-box.css';

const SearchBox = ({placeholder,handleChange}) => {
    return (
        <div>
            <input type="text" placeholder={placeholder} onChange={handleChange}></input>
        </div>
    )
}


export default SearchBox;