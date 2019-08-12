import React from 'react';

const Project = () => (
    <div className="card">
        <form>
            <div class="form-group row">
                <label for="project" class="col-sm-2 col-form-label">project</label>
                <div class="col-md-6">
                    <input type="text" class="form-control" id="project" placeholder="project" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-2"></div>
                <div class="col-md-4 ">
                    <div class="form-check text-left">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label " for="gridCheck1">
                            set Start date and end date</label>
                    </div>
                </div>
                <div class="col-md-4 text-left">
                    <button className="mr-2 btn btn-outline-secondary" type="button">Start Date</button>
                    <button   className="mr-2 btn btn-outline-secondary" type="button">End Date</button>
                </div>
                
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-md-2 col-form-label">Manager</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="inputPassword3" placeholder="Manager" />
                </div>
                <div className="col-md-2 text-right">
                <button type="button" class="btn btn-outline-secondary">Search</button>
                </div>
            </div>
            <div className="row col-md-10">
                <div className="col-md-4"></div>
            <div className="col-md-6 text-right">
            <button type="button" class="btn btn-secondary mr-2 pr-2">Add</button>
            <button type="button" class="btn btn-secondary mr-8 pr-2">Reset</button>
            </div>
            </div>
            
            
        </form>
    </div >

)


export default Project;