import React, { useState } from 'react';

function Submit(options) {
    const [url, setUrl] = useState('');

    function onInput(e) {
        setUrl(e.target.value);
    }

    function submit() {
        options.onSubmit(url);
    }

    return (
        <div className='flexbox'>
            <input type="text" id="url" onChange={onInput} />
            <button className="button2" onClick={submit}>Submit</button>
        </div>
    );
}

export default Submit;