import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>{navigate('/send')}}>Send</button>
            <button onClick={() => {navigate('/receive')}}>Recieve</button>
        </div>
    )
}

export default Home
