import React, { useState } from 'react';

function Main(options) {
    const [url, setUrl] = useState('');

    function onInput(e) {
        setUrl(e.target.value);
    }

    function search() {
        options.onSearch(url);
    }

    return (
        <div className='flexbox waitinglist'>
           <h1 className='shadow'>Play Outside. Play Chess. <a href="https://genie-g0fmfsdubrb8h8at.southafricanorth-01.azurewebsites.net/">Chat with Genie.</a> Play Wartorn.</h1>
        </div>
    );
}

export default Main;