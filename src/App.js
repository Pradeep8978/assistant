import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import Projects from './containers/Projects/Projects';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Route path="/projects" component={Projects}/>
        <Route path="/users" component={Projects}/>
        <Route path="/tasks" component={Projects}/>
        <Route path="/task/details" component={Projects}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
