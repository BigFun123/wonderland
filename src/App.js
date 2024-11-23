import './App.css';
import { useState } from 'react';
import Admin from './pages/admin';
import Main from './pages/main';
import Submit from './pages/submit';
import Logo from './components/logo/logo';

function App() {

  const [results, setResults] = useState([]);
  const [page, setPage] = useState("main");
  const [message, setMessage] = useState("");

  function search(url) {
    console.log('searching...')
    fetch(`https://usermetrics.net/wonderland/search/wonderland😏/${url}`)
      .then(response => response.json())
      .then(data => setResults(data.results))
      .catch(error => console.error(error));
  }

  function submit(url) {
    console.log('submitting...')
    fetch('https://usermetrics.net/wonderland/add', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ url: url }),
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
    return results.map(result => {
      return <div><a href={result.link}>{result.title}</a></div>
    })
  }

  return (
    <div className="App">
      <div className="menu">
        <img src="/rabbit.png" alt="rabbit" width="32"/>
        <Logo></Logo>
        <div className='spaceout'>  </div>
        <button onClick={() => setPage("main")}>Home</button>
        <button onClick={() => setPage("submit")}>Submit a site</button>
        {/* <button onClick={() => setPage("admin")}>Admin</button> */}
        
      </div>
      <header className="App-header">
        {/* {page === "admin" && <Admin />} */}
        {page === "submit" && <Submit onSubmit={submit} />}
        {page === "main" && <Main onSearch={search} />}
        {page === "main" && renderResults()}
        <div>{message}</div>

      </header>
    </div>
  );
}

export default App;
