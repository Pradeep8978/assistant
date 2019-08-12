import React from 'react'

const User = () => (
    <div className="card">
        <form className="m-2">
            <div class="form-group row">
                <label className="col-md-2 text-left font-weight-bold col-form-label">First Name</label>
                <div className="col-md-10">
                    <input type="text" className="form-control" placeholder="First Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-md-2 text-left font-weight-bold col-form-label">Last Name</label>
                <div className="col-md-10">
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-md-2 text-left font-weight-bold col-form-label">Employee Id</label>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder=" Employee Id"/>
                </div>
            </div>
            <div className="row col-md-12">
                <div className="col-md-12 text-right">
                    <button type="button" className="btn btn-primary col-md-2 mr-2 pr-2">Add</button>
                    <button type="button" className="btn btn-secondary col-md-2 ">Reset</button>
                </div>
            </div>

        </form>
    </div>
);

export default User