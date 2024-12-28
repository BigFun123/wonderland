import './App.css';
import { useEffect, useState } from 'react';
import Main from './pages/main';

import Logo from './components/logo/logo';
import WaitingList from './pages/waitinglist';
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
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    isRegistered();
  }, []);

  function isRegistered() {
    const signedup = localStorage.getItem('wonderland-signup');
    if (signedup) {
      setRegistered(true);
      return true;
    }
  }

  function saveRegistered() {
    setRegistered(true);
    localStorage.setItem('wonderland-signup', 'true');
  }

  return (
    <div className="App">
      <Menu setPage={setPage} registered={registered}></Menu>
      {page === "search" && <Main onSearch={() => setPage("search")} />}
      {page === "main" && !registered && <WaitingList saveRegistered={saveRegistered} />}
      {page === "main" && registered && <Main onSearch={() => setPage("search")} />}
    </div>
  );
}

export default App;
