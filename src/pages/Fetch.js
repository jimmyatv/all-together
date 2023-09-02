import { React, useState, useEffect, useMemo } from 'react';

const Fetch = () => {

  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [test, setTest] = useState('');


//* FETCHOVANJE
  useEffect(() => {

    setLoading(true);
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
  },[search, universities])




  return (
    <div>
      <input onChange={(e) => { setTest(e.target.value) }} type='text' placeholder='Test Search' value={test} />
      <h4>Typing Test for useMemo: {test}</h4>
      <input onChange={(e) => { setSearch(e.target.value) }} type='text' placeholder='Search' value={search} />
      <hr />
      {loading
        ?
        <h3>Loading...</h3>
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