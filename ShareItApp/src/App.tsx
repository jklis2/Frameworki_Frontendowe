import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Routers/Login';
import Home from './Routers/Home';
import Register from './Routers/Register';
import './Component/css/Main.css';
import Dashboard from './Routers/Dashboard';
import SearchUser from './Routers/SearchUser';
import SearchPhotos from './Routers/SearchPhotos';
import './Component/css/ScrollBar.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Photos' element={<SearchPhotos/>}></Route>
        <Route path='/Users' element={<SearchUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
