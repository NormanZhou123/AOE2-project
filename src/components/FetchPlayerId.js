import React, {Component} from 'react'

class FetchPlayerId extends Component{
    constructor(){
        super()
        this.state = {
            isIdValid: true
        }
    }
    render(){
        let testtext;
        if (this.state.isIdValid){
            testtext = "Valid"
        } 
        else{
            testtext = "Invalid"
        }
        return(
            <div>
                <h3>
                    The player you are searching for is {testtext}
                </h3>
            </div>
        )
    }
}

export default FetchPlayerId