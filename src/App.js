import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Jimmy from './pages/Jimmy';
import Fetch from './pages/Fetch';
import Hooks from './pages/Hooks';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchDogs from './pages/FetchDogs';


const App = () => {

    //? Hooks ex:
    const [persons, setPersons] = useState([
      {
        name:'Anja',
        lname: 'Rasic',
        age: 11
      },
      {
        name:'Teodor',
        lname: 'Rasic',
        age: 5
      },
      {
        name:'Veljko',
        lname: 'Rasic',
        age: 5
      },
    ])

   


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Jimmy />} />
          <Route path='/fetch' element={<Fetch />} />
          <Route path='/hooks' element={<Hooks persons={persons} setPersons={setPersons} />} />
          <Route path='/fetch-dogs' element={<FetchDogs />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
