import React from 'react';

const Cosmatices = (props) => {
    const { id, name, price } = props.cosmatie
    const addToCard = (id) => {
        localStorage.setItem(id ,1)
    }
    const loaceStorageAdd = (id) => {
        localStorage.setItem(id,1)
    }
    return (
        <div style={{
            backgroundColor: "yellow",
            padding: "10px",
            margin: "10px"
        }}>
            <p>Consmatices id: {id}</p>
            <p>Consmatices Name : {name}</p>
            <p>Consmatices Price : {price}</p>
            <button onClick={ ()=>addToCard(id)}>Add to card </button>
        </div>
    );
};

export default Cosmatices;