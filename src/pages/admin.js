import React, { useState } from 'react';

function Admin(options) {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState("ready");

    function submiturl() {
        setResult("crawling...");
        fetch('http://localhost:8080/wonderland/add', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ url: url }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setResult(data.message);
            })
            .catch(error => console.error(error));
    }

    function setUrlValue(value) {
        setUrl(value.target.value);
    }

    function maintain() {
        setResult("maintaining...");
        fetch('http://localhost:8080/wonderland/maintain/wonderland😏')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setResult(data.message);
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className='flexbox'>
                <input type="text" id="url" value={url} onChange={(e) => setUrlValue(e)} />
                <button onClick={submiturl} className="button2">Submit</button>
                <button onClick={maintain} className="button2">Maintain</button>
            </div>
            <div>{result}</div>
        </div>
    );
}

export default Admin;