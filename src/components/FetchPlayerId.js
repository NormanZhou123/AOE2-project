import React, {Component} from 'react'

const HistoryAPI = "https://aoe2.net/api/player/matches?game=aoe2de&steam_id=76561199003184910&count=5";
const proxyurl = "https://cors-anywhere.herokuapp.com/" // proxy url because of the blocked by CORS issure, remove it if needed.
class FetchPlayerId extends Component{
    constructor(){
        super()
        this.state = {
            isIdValid: false,
            playerHistory: [],
            // match_id: [],
            // player_id: [],
            // civUsed: [],
            // result: []
        }
    }

    componentDidMount(){
        this.setState({isIdValid: true})
        fetch(proxyurl +HistoryAPI)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                playerHistory: data
            })
        })
    }

    render(){
        //for now, i just display the match id and uuid, need some work to find out how to display player ids and match result(victory), 
        //and also this does not require display, it's only for us to read easier, will need those data to calculate the win rate and civ use rate
        let win;
        const History = this.state.playerHistory.map((item, i) => ( // here, the .won result won't be displayed because it's a boolean value
            <div>
              <span>{ item.match_id}, { item.match_uuid}， {item.players[0].civ}, {item.players[0].won}</span> 
            </div>
        ));
        return(
            <div>
               {History}
            </div>
        )
    }
}

export default FetchPlayerId