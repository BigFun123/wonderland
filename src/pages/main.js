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
           <h1 className='shadow'>COMING SOON</h1>
        </div>
    );
}

export default Main;