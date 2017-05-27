import React, { Component } from 'react';
import '../App.css';
import ItemList from './item_list_table'
class Item extends Component {
  render() {
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}
export default Item;
