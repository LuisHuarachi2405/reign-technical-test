import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { GlobalProvider } from './context/globalState';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
