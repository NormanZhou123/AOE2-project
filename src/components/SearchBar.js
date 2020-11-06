import React from 'react'

function SearchBar(props){
    return (
        <div>
            <input type = 'search' placeholder = {props.placeholder} onChange = {props.handleChange} />
        </div>
    )
}

export default SearchBar;