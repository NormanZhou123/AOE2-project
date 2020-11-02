import React, { Component } from 'react';

const StringAPI = "https://aoe2.net/api/strings?game=aoe2de&language=en";
const LeaderBoard = "https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=3&start=1&count=10"
const proxyurl = "https://cors-anywhere.herokuapp.com/" // proxy url because of the blocked by CORS issure, remove it if needed.
let civsList = FetchStringAPI(StringAPI);
console.log(civsList)
class CivList extends Component{
    render(){
        return(
            <div>
                <p></p>
            </div>
        )
    }
}

function loadData(){
  let CivName = ""
  for (var i = 0; i < 35; i++){
    CivName += civsList[i];
  }
  //console.log(civsList.name)
}


function FetchStringAPI() {
  let Civs = [];
    fetch(proxyurl + StringAPI, {
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        return response.json();
    }).then((data) => data.civ.forEach(item => {
    let Civ = new Civilization(item.id, item.string);
    if(Civs.length<35){
      Civs.push(Civ);
    }
    }));
    return Civs;
  }
  class Civilization{
    constructor(id, name){
      this.id = id;
      this.name = name;
    }
    getId(){
      return this.id;
    }
    getName(){
      return this.name;
    }
  }
  loadData();

  export default CivList;