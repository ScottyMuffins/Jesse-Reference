import React, {useState} from 'react';
import TestForm from './components/TestForm'
import { Input, Label } from 'reactstrap'
import './App.css';
import exampleJSON from './animals.json'

function App() {

  console.log(JSON.stringify(exampleJSON, null, 2))

  // Use State with default name
  const [name, setName] = useState('Jesse')

  // change handler for input
  const changeName = (e) => {
    setName(e.target.value ? e.target.value : 'Jesse');
  }

  return (
    <div className="App">
      <header className="App-header">Reference Project</header>
      <main style={{width: '700px', margin: '0 auto', alignContent: 'left' , padding: '5vmin'}}>
        <Label className='test-label' for="name-changer">Placeholder changer (Inside App.js - Top Level )</Label>
        <Input id='name-changer' onChange={changeName}/> 
        <h3 /*Inline styling (Fuck around with it) ---> */ style={{marginTop: '10vmin', color: '#16253f'}}>
          Everything below this tag is inside the TestForm component. TestForm is inside App.js. App.js keeps track of placeholder with useState. When you type in the above input, it changes the 'state' of placeholder
          and, since we pass placeholder prop to TestForm, TestForm will realize that the placeholder has changed, and will re-render below.
        </h3>
        <TestForm 
          currentName={name}
        />
        <h3 style={{marginTop: '25vmin', marginBottom: '15vmin', color: '#16253f'}}>JSON MAP EXAMPLE below into P tags. You could map into data set for instance.</h3>
        {exampleJSON.map((animal) => <p>{animal}</p>)}
      </main>
    </div>
  );
}

export default App;
