import React from 'react'
import CivList from './components/CivList'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'



function App() {
  return (
    <div>
      <Header />
      <SearchBar placeholder = "Enter your id here" handleChange = {(e) => console.log(e)} />
      <CivList />
      <Footer />
    </div>
  )
}



export default App;
