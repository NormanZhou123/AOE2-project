import React, {Component} from 'react'

// Reference from https://codesandbox.io/s/xpq171n1vz?file=/src/Test.js:0-1405 of how to build search bar

const proxyurl = "https://cors-anywhere.herokuapp.com/" // proxy url because of the blocked by CORS issure, remove it if needed.
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PlayerProfile: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event =>{
        this.setState({PlayerProfile: event.target.value});
    }

    handleSubmit = event =>{
        event.preventDefault();
        fetch(proxyurl + `https://aoe2.net/api/player/matches?game=aoe2de&steam_id=${this.state.PlayerProfile}&count=5`)
        .then(response => response.json())
        .then(searchRes => {
            return searchRes[0].players[0].name
        })
        .then(data =>{
            if (this.props.onResult) {
                this.props.onResult(data)
            }
        })
        .catch(err =>console.log(err))
    }
   
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.PlayerProfile} onChange={this.handleChange} placeholder="Search for player" />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SearchBar;