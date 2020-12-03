import React from 'react';

import './search-box.styles.css';


const SearchBox = ({placeholder, handleChange, value}) => (
    <input
        className="input"
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
    />  
);

export default SearchBox;
