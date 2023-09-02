import { React, useState, useEffect } from 'react';



const FetchDogs = () => {

    const [dogs, setDogs] = useState([]);
     //? Fetch dogs ex:
     const [counter, setCounter] = useState(0)

    useEffect(() => {

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(puppy => {
            setDogs(prev => [...prev, puppy.message])
        })

    }, [counter]);


    return (
        <div>
            <button onClick={() => { setCounter(prev => prev + 1) }} >Counter + 1</button>
            <h4>Count:{counter}</h4>
            <hr />
            {dogs.map((dog, idx) => {
                return <img src={dog} alt='' key={idx} height='200px' width='200px' />
            })}
        </div>
    )
};

export default FetchDogs;