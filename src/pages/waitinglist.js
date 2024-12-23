import React, { useState } from 'react';

/**
 * Ask which games are you most looking forward to
 * walking games
 * driving games
 * casual stroll game
 * walking audio books
 * Guided tours
 * @returns 
 */

function WaitingList() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [sent, setSent] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Location:', location);
        // get the radio choice for gameType
        const gameType = document.querySelector('input[name="gameType"]:checked').value;
        console.log('Game Type:', gameType);
  

        const hostname = process.env.REACT_APP_HOSTNAME;
        //http://localhost:8080
        const result = await fetch(`${hostname}/goplay/waitinglist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, location, gameType }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setMessage(data.message);
                setSent(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    function renderForm() {
        return (<div>            
            <div className='pane'>
                <h3>We're turning the world into a geo game you play on your phone</h3>
                <h2>Walking | Driving | Bookwalks | Tours | Exploration</h2>
                <br></br>
                <h1>Join the Waiting List</h1>
            </div>

            <div className='flexbox pane'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>City</label>
                        <input
                            type='text'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className='waiting-type-list'>
                        <label>Which type of game are you most looking forward to?</label>
                        <div className='form-group'>
                            <input type='radio' id='walking' name='gameType' value='walking' required />
                            <label htmlFor='walking'>Walking games</label>
                        </div>
                        <div className='form-group'>
                            <input type='radio' id='driving' name='gameType' value='driving' required />
                            <label htmlFor='driving'>Driving games</label>
                        </div>
                        <div className='form-group'>
                            <input type='radio' id='casual' name='gameType' value='casual' required />
                            <label htmlFor='casual'>Casual games</label>
                        </div>
                        <div className='form-group'>
                            <input type='radio' id='audiobooks' name='gameType' value='audiobooks' required />
                            <label htmlFor='audiobooks'>Walking books</label>
                        </div>
                        <div className='form-group'>
                            <input type='radio' id='tours' name='gameType' value='tours' required />
                            <label htmlFor='tours'>Guided Tours</label>
                        </div>
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>);
    }

    return (
        <div className='waitinglist'>
            {message && <div className='pane'><div className="innerpane">{message}</div></div>}            
            {!sent && renderForm()}
        </div>
    );
}

export default WaitingList;