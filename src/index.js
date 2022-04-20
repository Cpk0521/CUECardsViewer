import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route , Navigate} from "react-router-dom";

import Home from './pages/Home';
import CardDetail from './pages/CardDetail';

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path='/#' element={<Home />}/>
          <Route path='/CardDetail/:cid' element={<CardDetail />}/>

          <Route path='*' element={<Home />}/>
        </Routes>
    </HashRouter>
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
