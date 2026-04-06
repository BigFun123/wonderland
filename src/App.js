import './App.css';
import { useState } from 'react';
import Main from './pages/main';

import Menu from './components/menu';

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
      <Menu setPage={setPage} registered={true}></Menu>
      {page === "search" && <Main onSearch={() => setPage("search")} />}
      {page === "main" && <Main onSearch={() => setPage("search")} />}
    </div>
  );
}

export default App;
