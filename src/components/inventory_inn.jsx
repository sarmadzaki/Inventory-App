import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router'
class AddInventory extends Component {
    render() {
        return (
            <div className="App">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h2 className="panel-title">Item List</h2>
                    </div>
                    <div className="panel-body">
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select className="form-control">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </td>
                                <td><input type="text" className="form-control" /></td>
                                <td><input type="text" className="form-control" /></td>
                                <td><Link className="btn btn-primary">Save</Link></td>
                            </tr>

                        </tbody>
                    </table>
                    <Link to="/" className="btn btn-primary">Back</Link>
                </div>
            </div>
        )
    }
}
export default AddInventory;
