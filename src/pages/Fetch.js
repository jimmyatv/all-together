import { React, useState, useEffect, useMemo } from 'react';

const Fetch = () => {

  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    setLoading(true);
    (async () => {
      const res = await fetch('http://universities.hipolabs.com/search?country=United+States')
      const uni = await res.json();
      setUniversities(uni);
      setLoading(false);
    })();

  }, []);


  return (
    <div>
      <input type='text' placeholder='Search' />
      <hr />
      {loading
        ?
        <h3>Loading...</h3>
        :
        <ul style={{ listStyle: 'none' }}>
          {universities.map((uni, idx) => {
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