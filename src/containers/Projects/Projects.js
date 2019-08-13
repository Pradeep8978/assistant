import React from 'react';
import Slider from '../../components/Slider/Slider'

const Project = () => (
    <div className="card ">
        <form className="m-2">
            <div className="form-group row">
                <label for="project" className="col-md-2 text-left font-weight-bold col-form-label">Project</label>
                <div className="col-md-10">
                    <input type="text" className="form-control" id="project" placeholder="Project" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-md-2"></div>
                <div className="col-md-4 ">
                    <div className="form-check text-left">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label " for="gridCheck1">
                            set Start date and end date</label>
                    </div>
                </div>
                <div className="col-md-6 text-right ">
                    <button className="mr-2 btn btn-outline-secondary" type="button">Start Date</button>
                    <button   className=" btn btn-outline-secondary" type="button">End Date</button>
                </div>
                
            </div>
            <div className="form-group row">
              <label  className="col-md-2 text-left font-weight-bold col-form-label">Priority</label>
              <div className="col-md-8">
              <Slider/>
              </div>
              </div>

            <div className="form-group row">
                <label for="inputPassword3" className="col-md-2 text-left font-weight-bold col-form-label">Manager</label>
                <div className="col-md-8">
                    <input type="text" className="form-control" id="inputPassword3" placeholder="Manager" />
                </div>
                <div className="col-md-2 text-right">
                <button type="button" className="btn btn-outline-secondary">Search</button>
                </div>
            </div>
            <div className="row col-md-12">
            <div className="col-md-12 text-right">
            <button type="button" className="btn btn-primary col-md-2 mr-2 pr-2">Add</button>
            <button type="button" className="btn btn-secondary col-md-2 ">Reset</button>
            </div>
            </div>
            
            
        </form>
    </div >

)


export default Project;