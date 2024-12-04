import React from 'react';

function Logo(props) {
    return (
        <div onClick={props.onClick} className='logo'><img src="/rabbit.png" alt="rabbit" width="32px" height="32px"/>Wonderland</div>
    );
}

export default Logo;