import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [data, setData] = useState([]);


  const usernameHandler = (event) => {
    setUsername(event.target.value);


  }
  const ageHandler = (event) => {
    setAge(event.target.value);
  }

  const addDataHandler = (e) => {
    e.preventDefault();
    if (username.length === 0 || age.length === 0) {
      return;
    }
    if (age < 1) {
      return;
    }
    setUsername('');
    setAge('');
    setData((all) => {
      return [...all, { username, age }]
    })

  }
  return (
    <div className="aa">
      <h1>Udemy Project.</h1>
      <form onSubmit={(e) => { addDataHandler(e) }}>
        <label>username</label><br />
        <input type="text" value={username} onChange={(event) => { usernameHandler(event) }} required></input><br />
        <label>age</label><br />
        <input type="number" value={age} onChange={(event) => { ageHandler(event) }} required></input><br /><br />
        <button type="submit" style={{ margin: '5px', backgroundColor: 'green', color: 'white', border: '2px solid red', padding: '10px' }}>Add Data</button>
      </form>
      {
        data.map((da, index) => {
          return (<>
            <ul>
              <li key={index} >
                Name is {da.username} and age is {da.age}
              </li>
            </ul></>)
        })
      }
    </div>
  )
}

export default App;
