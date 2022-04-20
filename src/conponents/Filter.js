import '../index.css'
import {useState, useEffect, useRef} from 'react'

export default function Filter({kaika, setKaika, sortlist, revsort, setrevsort, revlist, charslist, ismobile}) {

  const [shown, setShown] = useState(false);

  const [sort, setSort] = useState({former:'time', curr:'time'});

  const backupchecked = useRef([]);
  const [checkedState, setCheckedState] = useState([...charslist].map(x => x.name));
  
  useEffect(()=>{
    setCheckedState([...charslist].map(x => x.name));
    backupchecked.current = [...charslist].map(x => x.name);
  }, [charslist])

  useEffect(()=>{
    ismobile && shown?(document.body.style.overflow='hidden'):(document.body.style.overflow='unset');
  },[shown])


  const togglekaika = ()=> {
    setKaika(!kaika);
  }
  
  const togglerevsort = () => {
    setrevsort(!revsort);
    revlist();
  }
  
  const toggleshown = ()=> {
    setCheckedState([...backupchecked.current])
    setSort({former:sort.former, curr:sort.former});
    setShown(!shown);
  }

  const togglesort = (e) => {
    setSort({former:sort.former, curr:e.target.value});
  }

  const submit = () => {
    setSort({former:sort.curr, curr:sort.curr});
    sortlist(sort.curr, checkedState);
    backupchecked.current = [...checkedState];
    if(ismobile){
      setShown(!shown);
    }
  }

  const checkboxOnChange = (e) =>{
    var updatedList = [...checkedState];
    
    if (e.target.checked) {
      updatedList = [...checkedState, e.target.value];
    } else {
      updatedList = [...checkedState].filter(x => x != e.target.value);
    }

    setCheckedState(updatedList);
  }

  const ischecked = (value)=> {
    return checkedState.includes(value);
  }

  
  return (
    <>
      <div id='filterbox'>
        <button onClick={togglerevsort}>{revsort?'昇順':'降順'}</button>
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
                  <input type="radio" name="sort" value='time' onChange={togglesort} checked={sort.curr == 'time'}/>時間順
                </label>
                <label>
                  <input type="radio" name="sort" value='cid' onChange={togglesort} checked={sort.curr == 'cid'} />ID順
                </label>
                <label>
                  <input type="radio" name="sort" value='char' onChange={togglesort} checked={sort.curr == 'char'}/>キャラ順
                </label>
              </div>
            </div>
            <div className='siderbar-content-box' id='char-filter'>
              <span>キャラ</span>
              <div className='control'>
                {
                  charslist?.map((item) => 
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
