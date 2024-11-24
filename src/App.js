import './App.css';
import { useEffect, useState } from 'react';
import Admin from './pages/admin';
import Main from './pages/main';
import Submit from './pages/submit';
import Logo from './components/logo/logo';

function App() {

  const [results, setResults] = useState([]);
  const [page, setPage] = useState("main");
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const site = "http://localhost:8080";

  useEffect(() => {
    // get querystring param isadmin
    const urlParams = new URLSearchParams(window.location.search);
    setIsAdmin(urlParams.get('isadmin') == "1");

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
        <img src="/rabbit.png" alt="rabbit" width="32" />
        <Logo></Logo>
        <div className='spaceout'>  </div>
        <button onClick={() => { setPage("main"); setMessage("") }}>Home</button>
        <button onClick={() => { setPage("submit"); setMessage("") }}>Submit a site</button>
        {isAdmin && <button onClick={() => setPage("admin")}>Admin</button>}

      </div>
      {results.length && page === "main" && <div className='topsearch'><Main onSearch={search} /> </div>}
      <header className="App-header">
        {isAdmin && page === "admin" && <Admin />} 
        {page === "submit" && <Submit onSubmit={submit} />}
        {!results.length && page === "main" && <Main onSearch={search} />}
        {results.length && page === "main" && renderResults()}
        <div>{message}</div>

      </header>
    </div>
  );
}

export default App;
