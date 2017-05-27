import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import Data from './data'
import '../App.css'
import { Link } from 'react-router'
import { Remove } from './buttons'
class ItemList extends Component {
    constructor(props) {
        super(props);
    }
    removeFormatter(cell, row, a, b) {
        console.log(a)
        return <Remove data={a} />
    }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="panel-title">Item List</h2>
                </div>
                <div className="panel-body">
                    <div className="App">
                        <div className="btn-group" >
                            <Link to="/addItem" className="btn btn-primary">Add New</Link>
                        </div>
                        <BootstrapTable search={true} data={Data} pagination striped hover>
                            <TableHeaderColumn isKey dataField='id' width="60px" dataSort={true}>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='name' >Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='photoUrl'></TableHeaderColumn>
                            <TableHeaderColumn dataField='details' width="50%" height='20%'>Details</TableHeaderColumn>
                            <TableHeaderColumn dataField='catagorey'>Catagorey</TableHeaderColumn>
                            <TableHeaderColumn dataField='id' dataFormat={this.removeFormatter} formatExtraData={Data}>Action</TableHeaderColumn>
                        </BootstrapTable>
                        <Link to="/" className="btn btn-primary">Go Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemList;