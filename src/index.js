import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import {CardsData, CharactorsData} from './data/Data';

import Home from './pages/Home';
import CardDetail from './pages/CardDetail';

export const FilterContext = createContext();

const App = () => {

  //sorting
  const [searchList, setSearchList] = useState(CardsData);
  const [isReverse, setReverse] = useState(false); //降順
  const [sortBy, setSortBy] = useState('time');
  const [kaika, setKaika] = useState(false);
  const [checkedCharlist, setCheckedCharlist] = useState([...CharactorsData].map(x => x.name));

  const ismobile = useMediaQuery({query: '(max-width: 1023px)'});

  return (
    <FilterContext.Provider value={{searchList, setSearchList, isReverse, setReverse, sortBy, setSortBy, checkedCharlist, setCheckedCharlist, kaika, setKaika, ismobile}}>
      <HashRouter>
          <Routes>
            <Route path='/#' element={<Home />}/>
            <Route path='/CardDetail/:cid' element={<CardDetail />}/>

            <Route path='*' element={<Home />}/>
          </Routes>
      </HashRouter>
    </FilterContext.Provider>
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
