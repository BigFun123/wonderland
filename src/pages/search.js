import React, { useState } from 'react';

function Search(options) {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState([]);    
    const [message, setMessage] = useState("");
    const [page, setPage] = useState("main");

    const site = "https://usermetrics.net";
    let banned = [];

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
        <div>            
            <header className="App-header">
                {isAdmin && page === "admin" && <Admin />}
                {page === "submit" && <Submit onSubmit={submit} />}                
                <div>{message}</div>
            </header>
            {page === "main" && <div className='topsearch'><Main onSearch={search} /> </div>}
            {results.length > 0 && page === "main" && renderResults()}
        </div>
    );
}

export default Search;