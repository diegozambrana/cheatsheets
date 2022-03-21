import './App.css';
import 'highlight.js/styles/nord.css';
import {MarkDown} from './components/MarkDown';
import markDownPath from './MarkDown/index.md'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(markDownPath)
      .then((res) => res.text())
      .then((text) => {setData(text)});
  }, []);

  return (
    <div className="App paper">
      <MarkDown value={data}/>
    </div>
  );
}

export default App;
