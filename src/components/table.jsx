import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import '../App.css'
import { Link } from 'react-router'
class Table extends Component {
   render() {
      return (
         <div className="App">

            <div className="panel panel-primary">
               <div className="panel-heading">
                  <h3 className="panel-title">Inventory</h3>
               </div>
               <div className="panel-body">
                  <div className="btn-group" >
                     <Link to="/addInventory" className="btn btn-primary">Inventory In</Link>
                     <Link className="btn btn-primary">Inventory Out</Link>
                  </div>
                  <BootstrapTable search={true} data={this.props.data} pagination striped hover>
                     <TableHeaderColumn isKey dataField='id' dataSort={true}>Product ID</TableHeaderColumn>
                     <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                     <TableHeaderColumn dataField='details' width="50%" height='20%'>Details</TableHeaderColumn>
                     <TableHeaderColumn dataField='price' dataSort={true}>Product Price</TableHeaderColumn>
                     <TableHeaderColumn dataField='catagorey'>Catagorey</TableHeaderColumn>
                     <TableHeaderColumn dataField='quantity' dataSort={true}>Quantity</TableHeaderColumn>
                  </BootstrapTable>
               </div>
            </div>
         </div>
      );
   }
}

export default Table;
