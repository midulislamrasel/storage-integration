import { useEffect, useState } from 'react';
import './App.css';
import Cosmatices from './component/Cosmatices/Cosmatices';
import Minus from './component/Minus/Minus';
import Sum from './component/Sum/Sum';

function App() {
  const [cosmaties, setCosmaties ] = useState([]);
  useEffect( () => {
    fetch('data.json')
      .then(res => res.json())
      .then (data => setCosmaties(data))
  },[])
  return (
    <div className="App">
      {
        cosmaties.map(cosmatie => <Cosmatices cosmatie={cosmatie} key = {cosmatie.id}></Cosmatices>)
      }
    </div>
  );
}

export default App;
