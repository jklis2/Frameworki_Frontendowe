import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Login';
import WelcomePage from './WelcomePage';
import Register from './Register';
import './Component/css/Main.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage></WelcomePage>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
