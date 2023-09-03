//?Libraries
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//?CSS
import './App.css';
//?Components
import Navbar from './components/Navbar';
//?Pages
import Jimmy from './pages/Jimmy';
import Fetch from './pages/Fetch';
import Hooks from './pages/Hooks';
import FetchDogs from './pages/FetchDogs';
import Crud from './pages/Crud';





const App = () => {

    //? Hooks ex:
    const [persons, setPersons] = useState([
      {
        id: 1,
        name:'Anja',
        lname: 'Rasic',
        age: 11
      },
      {
        id: 2,
        name:'Teodor',
        lname: 'Rasic',
        age: 5
      },
      {
        id:3,
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
          <Route path='/crud' element={<Crud persons={persons} setPersons={setPersons} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
