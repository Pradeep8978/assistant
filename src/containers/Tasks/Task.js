import React from 'react';
import Slider from '../../components/Slider/Slider'

const Task = ()=>(
    <div className="card ">
    <form className="m-2">
    <div className="form-group row">
            <label for="Project" className="col-md-2 text-left font-weight-bold col-form-label">Project</label>
            <div className="col-md-8">
                <input type="text" className="form-control" id="inputPassword3" placeholder="Project" />
            </div>
            <div className="col-md-2 text-right">
            <button type="button" className="btn btn-outline-secondary">Search</button>
            </div>
        </div>
        <div className="form-group row">
            <label for="Task" className="col-md-2 text-left font-weight-bold col-form-label">Task</label>
            <div class="col-md-10">
                <input type="text" className="form-control" id="Task" placeholder="Task" />
            </div>
        </div>
        <div className="form-group row">
            <div className="col-md-2"></div>
            <div className="col-md-4 ">
                <div className="form-check text-left">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label " for="gridCheck1">
                        Parent Task</label>
                </div>
            </div>
           
            
        </div>
        <div className="form-group row">
              <label  className="col-md-2 text-left font-weight-bold col-form-label">Priority</label>
              <div className="col-md-8">
              <Slider/>
              </div>
              </div>
        <div className="form-group row">
            <label for="parent_task" className="col-md-2 text-left font-weight-bold col-form-label">Parent Task</label>
            <div class="col-md-8">
                <input type="text" className="form-control" id="parent_task" placeholder="Parent Task" />
            </div>
            <div className="col-md-2 text-right">
            <button type="button" className="btn btn-outline-secondary">Search</button>
            </div>
        </div>
        <div class="form-group row col-md-12">
            <div className="col-md-2">
                <label className="col-form-label text-left font-weight-bold ">Start Date</label>
            </div>
            <div className="col-md-4">
            <input type="text" className="form-control" placeholder="dd/mm/yyyy"></input>
            </div>
            <div className="col-md-2">
                <label className="col-form-label text-left font-weight-bold ">End Date</label>
            </div>
            <div className="col-md-4">
            <input type="text" className="form-control"  placeholder="dd/mm/yyyy"></input>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-md-2 text-left font-weight-bold col-form-label">User</label>
            <div className="col-md-8">
                <input type="text" className="form-control"  placeholder="User" />
            </div>
            <div className="col-md-2 text-right">
            <button type="button" className="btn btn-outline-success">Search</button>
            </div>
        </div>
        <div className="row col-md-12">
        <div className="col-md-12 text-right">
        <button type="button" className="btn btn-secondary col-md-2 mr-2 pr-2">Add</button>
        <button type="button" className="btn btn-secondary col-md-2 ">Reset</button>
        </div>
        </div>
        
        
    </form>
</div >
);

export default Task;