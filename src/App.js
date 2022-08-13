import './App.css';
import { useEffect, useState } from 'react';
import Counter from './Components/counter';
import Name from './Components/name';
import Array from './Components/array';
import Effect from './Components/effect';
import Callfunction from './Components/callfunction';
function App() {
  useEffect(() => {
    // console.log('Hello')
  })
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Name /> */}
      {/* <Array /> */}
      {/* <Effect /> */}
      <Callfunction />
    </div>
  );
}

export default App;
