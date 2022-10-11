import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Login';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage></WelcomePage>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
