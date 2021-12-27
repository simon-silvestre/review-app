import React from 'react'
import Block from './Components/Block'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <nav>
            <p>home</p>
            <span>{'>'}</span>
            <p>apps</p>
            <span>{'>'}</span>
            <p>Lighthouse</p>
          </nav>

          <Block />
      </div>
    </div>
  );
}

export default App;
