import React, {Component} from 'react'

// Reference from https://codesandbox.io/s/xpq171n1vz?file=/src/Test.js:0-1405 of how to build search bar

const proxyurl = "https://cors-anywhere.herokuapp.com/" // proxy url because of the blocked by CORS issure, remove it if needed.
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputItems: "",
            playerList: [],
            singlePlayer: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event =>{
        this.setState({inputItems: event.target.value});
    }

    handleSubmit = event =>{
        event.preventDefault();
        fetch(proxyurl + 'https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=3&start=1&count=100')
        .then(response => response.json())
        .then(searchRes => {
            return searchRes.leaderboard
            
        })
        .then(data =>{
            // if (this.props.onResult) {
            //     this.props.onResult(data)
            // }          
            
            this.setState({playerList: data})  
            return this.state.playerList
        })
        .then(items => {
            items.filter(
                (item) => item.name.toLowerCase().startsWith(this.inputItems.toLowerCase())  // Cannot read property 'toLowerCase' of undefined(Why is 'item' undifined? it's supposed to be the list item of playerList)
                )
        })
        .catch(err =>console.log(err))
    }
   
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.inputItems} onChange={this.handleChange} placeholder="Search for player" />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SearchBar;