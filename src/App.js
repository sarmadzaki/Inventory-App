import React, { Component } from 'react';
import './App.css';
import Data from './components/data'
import Table from './components/table'
import {Link} from 'react-router'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="btn-group home-btns">
          <Link to="/" className="btn btn-primary">Home</Link>
          <Link to="/items" className="btn btn-primary">Item List</Link>
        </div>
        <Table data={Data}/>
      </div>
    );
  }
}

export default App;
