import React from 'react';
import { minus } from '../../utility/utility';
// import minus from '../../utility/utility';

const Minus = () => {
    const first = 20;
    const second = 30;
    const total = minus(first, second);
    return (
        <div>
            <h1>Minus : {total}</h1>
        </div>
    );
};

export default Minus;