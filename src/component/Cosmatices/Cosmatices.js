import React from 'react';

const Cosmatices = (props) => {
    const {id,name,price} = props.cosmatie
    return (
        <div style={{
            backgroundColor: "yellow",
            padding: "10px",
            margin: "10px"
        }}>
            <p>Consmatices id: {id}</p>
            <p>Consmatices Name : {name}</p>
            <p>Consmatices Price : {price}</p>
        </div>
    );
};

export default Cosmatices;