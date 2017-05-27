import React, { Component } from 'react';
// import './App.css';
// import Table from './components/table'
// import {Link} from 'react-router'
export class Remove extends Component {
    removeItem(e) {
        const id = this.props.data
        console.log(id)
        this.props.data.splice(1, 3);
    }
    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-danger btn-sm" onClick={(a) => this.removeItem(a)}>Remove</button>
                <button className="btn btn-primary btn-sm">Edit</button>
            </div>
        );
    }
}


