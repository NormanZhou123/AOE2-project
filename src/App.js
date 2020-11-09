import React from 'react'
import CivList from './components/CivList'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import FetchPlayerId from './components/FetchPlayerId'

class App extends React.Component {
  state ={
    data: ""
  }

  render(){
    return (
      <div>
      <Header />
      <SearchBar onResult={data =>{
        this.setState({data})
      }} />
      {this.state.data}
      {/* <CivList /> */}
      <FetchPlayerId />
      <Footer />
    </div>
    )
  }
}

export default App;
