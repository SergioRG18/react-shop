import React, {useState } from 'react';

const Button = () => {
    const [name, setName] = useState('Hola Mundo');
    return (
        <div>{name}</div>
    );
}

export default estado;