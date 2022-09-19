import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
