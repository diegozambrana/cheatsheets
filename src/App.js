import './App.css';
import 'highlight.js/styles/nord.css';
import {MarkDown} from './components/MarkDown';
import { useMardown } from './hooks/useMarkdown';
import { Sidebar } from './components/Sidebar';

function App() {
  const {currentMD, changeMD} = useMardown()

  return (
    <div className="App">
      <Sidebar onChangeLesson={changeMD} currentKey={currentMD.key}/>
      <div className='paper container'>
        <div className='md-wrapper'>
          <MarkDown value={currentMD.md}/>
        </div>
      </div>
      <div className='footer'>
        
      </div>
    </div>
  );
}

export default App;
