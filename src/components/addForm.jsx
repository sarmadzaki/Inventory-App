import React, { Component } from 'react';
import '../App.css';
import { Link, browserHistory } from 'react-router'
import Data from './data'
class AddForm extends Component {
  addItem(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const id = this.refs.code.value;
    const catagorey = this.refs.catagorey.value;
    const photoUrl = this.refs.photoUrl.value;
    const details = this.refs.details.value;
    let data = Data;
    data.push(
      {
        name: name,
        id: id,
        catagorey: catagorey,
        photoUrl: photoUrl,
        details: details
      }
    )
    browserHistory.push('/Items');
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="panel-title">Add New</h2>
        </div>
        <div className="panel-body">
          <div className="col-md-12">
            <br />
            <div className="form-horizontal">
              <form onSubmit={(e) => this.addItem(e)}>
                <fieldset>

                  <legend>Add New Phone</legend>
                  <br />
                  <div className="form-group">
                    <label className="col-sm-3 control-label" htmlFor="catagorey">Catagorey:*</label>
                    <div className="col-sm-9">
                      <select ref="catagorey" required="required" className="form-control" >
                        <option value="0">Select Country</option>
                        <option value="pakistan">Samsung</option>
                        <option value="usa">Iphone</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="Item Code">Item Code:*</label>
                        <div className="col-sm-9">
                          <input ref="code" maxLength="100" type="number" required="required" className="form-control" placeholder="01234..." />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-3 control-label" htmlFor="Item Name">Item Name:*</label>
                    <div className="col-sm-9">
                      <input ref="name" maxLength="100" type="text" required="required" className="form-control" placeholder="Enter Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="texarea" className="col-sm-3 control-label" >Item Description:*</label>
                    <div className="col-sm-9">
                      <textarea name="text" ref="details" className="form-group" cols="60" rows="5"></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="img" className="col-sm-3 control-label">Image (URL):</label>
                    <div className="col-sm-9">
                      <input ref="photoUrl" type="text" className="form-control" placeholder="www.example.com/photo.jpeg" />
                    </div>
                  </div>
                </fieldset>
                <div className="btn-group center">
                  <button className="btn btn-primary btn-lg full"   >Save</button>
                  <Link to="/items" className="btn btn-primary btn-lg">Back</Link>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default AddForm; 