import React, { useState } from 'react';

const Teram = () => {
    const [plyers, setPlyers] =  useState(11);
    const handleAdd = () =>{
        setPlyers(plyers+1)
    }
    const termStyle = {
        border: '2px solid yellow',
        textAlign: 'center',
        padding: '20px', 
        borderRadius: '15px'
    }
    return (
        <div style={termStyle}>
            <h1>Plyers : {plyers} </h1>
            <button onClick={handleAdd}>add player</button>
        </div>
    );
};

export default Teram;