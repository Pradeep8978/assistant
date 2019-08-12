import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Projects from './containers/Projects/Projects';
import Header from './components/Header/Header';
import NavHeader from './components/NavHeader/NavHeader';
import Task from "./containers/Tasks/Task";
import User from "./containers/User/User"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="col-8 m-auto pt-5">
      <BrowserRouter>
      <NavHeader/>
        <Route path="/projects" component={Projects}/>
        <Route path="/users" component={User}/>
        <Route path="/tasks" component={Task}/>
        <Route path="/task/details" component={Task}/>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
