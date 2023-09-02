import {React, useState, useEffect, useMemo} from 'react';

const Fetch = () => {

    const [universities, setUniversities] = useState([]);

  fetch('http://universities.hipolabs.com/search?country=United+States')
  .then(res => res.json())
  .then(unix => {
    setUniversities(unix)
  });


  return (
    <div>
        <input type='text' placeholder='Search' /> 
        <hr/>
        <ul style={{listStyle:'none'}}>
        {universities.map((uni, idx) => {
          return(
            <li key={idx}>
              {uni.name}
            </li>
          )
        })}
        </ul>
    </div>
  )
};

export default Fetch;