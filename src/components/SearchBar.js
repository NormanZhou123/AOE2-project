import React from 'react'

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <input type = 'search' placeholder = {this.props.placeholder} onChange = {this.props.handleChange} />
            </div>
        )
    }
}

export default SearchBar;