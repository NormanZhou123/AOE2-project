import React, {Component} from 'react'

class FetchPlayerId extends Component{
    constructor(){
        super()
        this.state = {
            isIdValid: true
        }
    }
    render(){
        let display;
        if (this.state.isIdValid){
            display = "Valid"
        } 
        else{
            display = <PlayerProfile />
        }
        return(
            <div>
                <h3>
                    The player you are searching for is {display}
                </h3>
            </div>
        )
    }
}

export default FetchPlayerId