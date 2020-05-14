import React, { useState } from 'react';
import './App.css';
import TestComponent, { onTestComponentChangeEvent } from './TestComponent';
import { sum } from './Utils';


function App() {
  const [value, setValue] = useState('');
  const result = sum(1, 3);
  console.log('result', result);

  return (
    <div className="App">
      <header className="App-header">
        <TestComponent
          id={'test'}
          label={'My Label'}
          value={value}
          onChange={(event: onTestComponentChangeEvent) => setValue(event.value)}
        />
        <hr />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
