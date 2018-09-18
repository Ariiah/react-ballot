import React, { Component } from 'react';
import SearchBar from './Components/SearchBar'
import UserInfo from './Components/UserInfo'
import ElectionInfo from './Components/ElectionInfo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className='banner'>Banner</h3>
        <SearchBar/>
        <UserInfo/>
        <ElectionInfo/>
      </div>
    );
  }
}

export default App;
