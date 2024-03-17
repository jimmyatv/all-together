import { React, useState, useEffect, useMemo } from 'react';

const Fetch = () => {

  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');


//* FETCHOVANJE
  useEffect(() => {

    setLoading(true);
    //! async
    (async () => {
      const res = await fetch('http://universities.hipolabs.com/search?country=United+States')
      const uni = await res.json();
      setUniversities(uni);
      setLoading(false);
    })();

  }, []);

  //* PRETRAGA
  const regrx = RegExp(search, 'gi');
  const finalSearch = useMemo(() => {
    return(
      universities.filter(uni => uni.name.match(regrx))
    )
  },[universities, regrx])




  return (
    <div>
      <label>Make a quick search:</label>
      <input style={{marginLeft:'10px'}} onChange={(e) => { setSearch(e.target.value) }} type='text' placeholder='Search' value={search} />
      <hr />
      {loading
        ?
        <div className='loading'></div>
        :
        <ul style={{ listStyle: 'none' }}>
          {finalSearch.map((uni, idx) => {
            return (
              <li key={idx}>
                {uni.name}
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
};

export default Fetch;