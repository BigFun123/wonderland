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
           <h1 className='shadow'>Play Outside. Play Chess. Chat with Genie. Play Wartorn.</h1>
        </div>
    );
}

export default Main;