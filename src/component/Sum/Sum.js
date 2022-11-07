import React from 'react';
import { sum } from '../../utility/utility';

const Sum = () => {
    const a = 50;
    const b = 100;
    const c = sum(a, b);

    return (
        <div>
            <h2>Sum : {c}</h2>
        </div>
    );
};

export default Sum;