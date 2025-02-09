import React from 'react';

function Greeting(props) {
    const name = 'aniel'
    
    return (
        <div>
            <p>Olá, {name}!</p>
            <p>A soma de 2 mais 3 é {2 + 3}.</p>
        </div>
    );
}

export default Greeting;
