import {useState, useEffect, useContext} from 'react'

import '../../index.css'
import {CardsData, CharactorsData} from '../../data/Data'

import {FilterContext} from '../../index'

export default function Filter() {

  const {searchList, setSearchList, isReverse, setReverse, sortBy, setSortBy, checkedCharlist, setCheckedCharlist, kaika, setKaika, ismobile} = useContext(FilterContext);

  const [shown, setShown] = useState(false);

  const [displaySort, setDisplaySort] = useState(sortBy);
  const [displayCheckedList, setDisplayCheckedList] = useState([...checkedCharlist]);

  useEffect(()=>{
    ismobile && shown?(document.body.style.overflow='hidden'):(document.body.style.overflow='unset');
  },[shown])

  const togglekaika = ()=> {
    setKaika(!kaika);
  }
  
  const togglerevsort = () => {
    setReverse(!isReverse);
    revsort();
  }
  
  const toggleshown = () => {
    if(shown == false){
      setDisplaySort(sortBy);
      setDisplayCheckedList(checkedCharlist);
    }

    setShown(!shown);
  }

  const togglesort = (e) => {
    setDisplaySort(e.target.value);
  }

  const checkboxOnChange = (e) =>{
    let updatelist = [];

    if(e.target.checked){
      updatelist = [...displayCheckedList, e.target.value];
    }else{
      updatelist = [...displayCheckedList].filter(x => x != e.target.value);
    }

    setDisplayCheckedList(updatelist);
  }

  const ischecked = (value)=> {
    return displayCheckedList.includes(value);
  }

  const submit = () => {
    setSortBy(displaySort);
    setCheckedCharlist([...displayCheckedList]);

    SortList(displaySort, [...displayCheckedList]);

    if(ismobile){
      setShown(!shown);
    }
  }

  const SortList = (sortby, charlist) => {
    let newlist = [];

    switch (sortby) {
      case 'cid':
        newlist = [...CardsData].sort((a, b)=>{return a.cardId - b.cardId});
        break;
      case 'char':
        newlist = [...CardsData].sort((a, b)=>{return a.heroineId - b.heroineId});
        break;
      case 'time':
        newlist = [...CardsData];
        break;
    }

    newlist = [...newlist].filter(x => charlist.includes(x.heroine));

    if(isReverse){
      newlist = newlist.reverse();
    }

    setSearchList(newlist);
  }

  const revsort = () => {
    setSearchList([...searchList].reverse());
  }
  
  return (
    <>
      <div id='filterbox'>
        <button onClick={togglerevsort}>{isReverse?'昇順':'降順'}</button>
        <button onClick={togglekaika} className={kaika?'togglebtn':''}>開花</button>
        <button onClick={toggleshown} className={shown?'togglebtn':''}>フィルター</button>
      </div>

      <div id='filterSidebar' className={shown?'showbar':'hiddenbar'}>
        <div id='filterSidebar-content'>
          <div id='siderbar-header'>
            <h1>ソート • フィルター</h1>
          </div>
          <div id='siderbar-content'>
            <div className='siderbar-content-box' id='card-sort'>
              <span>ソート</span>
              <div className='control'>
                <label>
                  <input type="radio" name="sort" value='time' onChange={togglesort} checked={displaySort=='time'}/>時間順
                </label>
                <label>
                  <input type="radio" name="sort" value='cid' onChange={togglesort} checked={displaySort=='cid'} />ID順
                </label>
                <label>
                  <input type="radio" name="sort" value='char' onChange={togglesort} checked={displaySort=='char'}/>キャラ順
                </label>
              </div>
            </div>
            <div className='siderbar-content-box' id='char-filter'>
              <span>キャラ</span>
              <div className='control'>
                {
                  CharactorsData?.map((item) => 
                    <label key={item.id}>
                      <input type="checkbox" data-id={item.id} value={item.name} onChange={checkboxOnChange} checked={ischecked(item.name)}/>
                      <span style={{ color: `rgb(${256*item.imageColor.r},${256*item.imageColor.g},${256*item.imageColor.b})` }}>{item.name}</span>
                    </label>
                  )
                }
              </div>
            </div>
          </div>
          
          <div id='filterSidebar-footer'>
              {ismobile?<button onClick={toggleshown}>やめる</button>:<></>}
              <button id='submitbtn' onClick={submit}>決定</button>
          </div>
        </div>
      </div>
    </>
    
  )
}
