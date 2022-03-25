import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import CardDetail from './pages/CardDetail';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/CardDetail/:cid' element={<CardDetail />}/>

          <Route path='*' element={<Home />}/>
        </Routes>
    </BrowserRouter>
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
