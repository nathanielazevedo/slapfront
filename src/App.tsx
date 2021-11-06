import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [message, setMessage] = useState()

  async function slap(){
    let result = await axios.get('https://slaphim.herokuapp.com/addslap');
    setMessage(result.data.message)
  }


  return (
    <div className="App">
    <div>{message}</div>
      <button onClick={slap}>Slap Him!</button>
    </div>
  );
}

export default App;
