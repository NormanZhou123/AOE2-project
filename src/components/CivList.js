import React, { Component } from 'react';

const StringAPI = "https://aoe2.net/api/strings?game=aoe2de&language=en";
const proxyurl = "https://cors-anywhere.herokuapp.com/" // proxy url because of the blocked by CORS issure, remove it if needed.
class CivList extends Component{
  constructor() {
    super();

    this.state = {Civs: []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
      fetch(proxyurl + StringAPI, {
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        return response.json();
    }).then((data) => this.setState({ Civs: data.civ }));
  }

  render() {
    const Civs = this.state.Civs.map((item, i) => (
      <div>
        <span>{ item.id + 1 }, { item.string }</span>
      </div>
    ));

    return (
      <div>
        <div>{ Civs }</div>
      </div>
    );
  }
}


  export default CivList;