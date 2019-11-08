import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactStates from './components/states/ReactStates';
import ReactStates2 from './components/states/ReactStates2';
import Home from './components/Router_urlManagement/Home';


function App() {
  return (
    <div className="App">
      <Home />
     
     {/* <ReactStates />
     <ReactStates2 /> */}
    </div>
  );
}

export default App;
