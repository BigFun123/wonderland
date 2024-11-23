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
        <div className='flexbox'>
            <input type="text" id="url" onChange={onInput} />
            <button onClick={search}>Search</button>
        </div>
    );
}

export default Main;