import './App.css';
import { useEffect, useState } from 'react';
import Admin from './pages/admin';
import Main from './pages/main';
import Submit from './pages/submit';
import Logo from './components/logo/logo';

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

  const [results, setResults] = useState([]);
  const [page, setPage] = useState("main");
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const site = "https://usermetrics.net";
  let banned = [];

  useEffect(() => {
    // get querystring param isadmin
    const urlParams = new URLSearchParams(window.location.search);
    setIsAdmin(urlParams.get('isadmin') === "1");
  }, []);

  function search(url) {
    console.log('searching...')
    fetch(`${site}/wonderland/search/wonderland😏/${url}`)
      .then(response => response.json())
      .then(data => setResults(data.results))
      .catch(error => console.error(error));
  }

  function submit(url) {
    console.log('submitting...')

    // get the host from the url
    const hostname = new URL(url).hostname;
    if (!hostname) {
      setMessage("Could not parse hostname");
      return;
    }
    if (banned.some(str => hostname.includes(str))) {
      setMessage("This host is not allowed. Submit personal sites!");
      return;
    }

    fetch(`${site}/wonderland/submit/wonderland😏`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ link: url }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //setPage("main");
        setMessage(data.message);
      })
      .catch(error => console.error(error));
  }

  function renderResults() {
    return <div>
      {results.map(result => {
        return <div className='searchresult'><img src={result.icon} width="32" alt="" /> <a href={result.link}>{result.title}</a></div>
      })}
    </div>
  }

  return (
    <div className="App">
      <div className="menu">        
        <Logo onClick={() => setPage("main")}></Logo>        
        <div className='spaceout'>  </div>
        <button onClick={() => { window.location = "https://chess.wonderland.social" }}>Play Chess</button>
        <button onClick={() => { window.location = "https://goplay.wonderland.social" }}>GoPlay Outside™</button>
        <button onClick={() => { setPage("submit"); setMessage("") }}>Submit a site</button>
        {isAdmin && <button onClick={() => setPage("admin")}>Admin</button>}
      </div>
      {page === "main" && <div className='topsearch'><Main onSearch={search} /> </div>}
      <header className="App-header">
        {isAdmin && page === "admin" && <Admin />}
        {page === "submit" && <Submit onSubmit={submit} />}
        {results.length > 0 && page === "main" && renderResults()}
        <div>{message}</div>

      </header>
    </div>
  );
}

export default App;
