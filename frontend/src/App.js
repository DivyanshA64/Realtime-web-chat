import React from 'react'
// import {Route , Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './Routes/home';
import { SocketProvider } from './Routes/socketcontext';
function App(){

  return (
    <div className="App">
      <SocketProvider>
          <Home/>
      </SocketProvider>
    </div>
  );
}

export default App;
