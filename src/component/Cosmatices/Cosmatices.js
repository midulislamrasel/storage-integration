import React from 'react';
import { addToDb } from '../../utility/fakedb';

const Cosmatices = (props) => {
    const { id, name, price } = props.cosmatie;

    const addToCard = (id) => {
        addToDb(id);
    }
    const loaceStorageAdd = (id) => {
        localStorage.setItem(id,1)
    }




    return (
        <div style={{
            backgroundColor: "yellow",
            padding: "10px",
            margin: "10px"}}>
            
            <p>Consmatices id: {id}</p>
            <p>Consmatices Name : {name}</p>
            <p>Consmatices Price : {price}</p>
            <button onClick={ ()=>addToCard(id)}>Add to card </button>
        </div>
    );
};

export default Cosmatices;