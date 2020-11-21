import React from 'react';

export default function ProductResults(props) {
    const {name}=props;

    return (
        <div className="results">
            <h2 className="headContent">Result of your search</h2>
            <div>{name}</div>
        </div>
    );
};