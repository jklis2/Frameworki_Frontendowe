import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Routers/Login';
import Home from './Routers/Home';
import Register from './Routers/Register';
import './Component/css/Global/Main.css';
import Dashboard from './Routers/Dashboard';
import SearchUser from './Routers/SearchUser';
import SearchPhotos from './Routers/SearchPhotos';
import './Component/css/Global/ScrollBar.css'
import { Test } from './Routers/Test';
import EditProfile from'./Routers/EditProfile'
import Posts from './Routers/Posts'
import Feed from './Routers/Feed';

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
        <Route path='/EditProfile' element={<EditProfile/>}></Route>
        <Route path='/Posts' element={<Posts/>}></Route>
        <Route path='/Feed' element={<Feed/>}></Route>
        <Route path='/Test' element={<Test></Test>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
