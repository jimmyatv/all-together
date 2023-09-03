import {React,useState} from 'react';

const Hooks = ({ persons, setPersons }) => {

  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');

  const deletePerson = (idx) => {
    let newState = [...persons];
    newState.splice(idx, 1);

    setPersons(newState);
  };

  const formSubmitted = (e) => {
    e.preventDefault();

    let newPerson = {
      id:'',
      name: name,
      lname: lname,
      age: age
    }

    if(name !== '' && lname !== '' && age !== ''){
      setPersons(prev => [...prev, newPerson]);

      setName('');
      setLname('');
      setAge('');

      e.target.focused.focus();

    }
    
  }

  return (

    <div>
      <form onSubmit={formSubmitted}>
        <input onChange={(e) => {setName(e.target.value)}} style={{padding:'6px', marginRight:'6px'}} name='focused' type='text' value={name} placeholder='Name' />
        <input onChange={(e) => {setLname(e.target.value)}} style={{padding:'6px', marginRight:'6px'}} type='text' value={lname} placeholder='Last Name' />
        <input onChange={(e) => {setAge(e.target.value)}} style={{padding:'6px', marginRight:'6px'}} type='text' value={age} placeholder='Age' />
        <input style={{marginLeft:'16px'}} type='submit' value='Add New Person' />
      </form>
      <h3 style={{marginTop:'16px'}}>Name: {name}</h3>
      <h3>Last Name: {lname}</h3>
      <h3>Age: {age}</h3>
      <hr />
      <ul style={{ listStyle: 'none' }}>
        {persons.map((person, idx) => {
          return (
            <li key={idx}>
              <strong>{idx + 1}</strong> {person.name} {person.lname} {person.age} 
              <button onClick={() => deletePerson(idx)} style={{marginLeft:'30px', borderRadius:'8px'}}>DELETE</button>
              <hr/>
            </li>
          )
        })}
      </ul>

    </div>
  )
};

export default Hooks;