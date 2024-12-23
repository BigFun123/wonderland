import './App.css';
import { useEffect, useState } from 'react';
import Main from './pages/main';

import Logo from './components/logo/logo';
import WaitingList from './pages/waitinglist';

let banned = [];
banned.push('bing.com');
banned.push('amazon.com');
banned.push('cloudflare.com');
banned.push('facebook.com');
banned.push('google.com');
banned.push('handle.net');
banned.push('sucuri.net');
banned.push('twitter.com');
banned.push('yahoo.com');
banned.push('w3.org');
banned.push('wikipedia.org');
banned.push('x.com');
banned.push('youtube.com');

function App() {
  const [page, setPage] = useState("main");

  return (
    <div className="App">
      <div className="menu">        
        <Logo onClick={() => setPage("main")}></Logo>        
        <div className='spaceout'>  </div>        
      </div>      
      {page === "search" && <Main onSearch={() => setPage("search")} />}
      {page === "main" && <WaitingList />}
    </div>
  );
}

export default App;
