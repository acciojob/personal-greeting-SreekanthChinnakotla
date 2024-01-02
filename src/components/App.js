
import React from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState('');
  
  const updateGreeting = (inputName) => {
    setName(inputName);
  };
  
  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        type="text"
        id="nameInput"
        onChange={(e) => updateGreeting(e.target.value)}
      />
      <h1>Hello {name}!</h1>  
    </div>
  )
}

export default App
