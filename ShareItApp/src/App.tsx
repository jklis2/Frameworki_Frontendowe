import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Login';
import Home from './Home';
import Register from './Register';
import './Component/css/Main.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
