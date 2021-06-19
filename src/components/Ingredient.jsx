import React from 'react';

export default function Ingredient({ name, amount }) {
    return (
        <React.Fragment>
            <span>{name}</span>
            <span>{amount}</span>
        </React.Fragment>
    );
}