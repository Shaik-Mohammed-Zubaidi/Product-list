import React from 'react';

export default function DisplaySelectedFilters(props) {
    const {name, value, operator, deleteFilter} = props;
    return (
        <div>
            {name === 'brand' &&
            <div>Brand: {value}<span onClick={() => deleteFilter(name, value)} className="closeBtn">x</span></div>}
            {name === 'stock_available' &&
            <div>Check availability<span onClick={() => deleteFilter(name, value)} className="closeBtn">x</span></div>}
            {name === 'discount' && <div>Discount {operator === 'greater_than' ? '>' : '<'} {value}%<span
                onClick={() => deleteFilter(name, value)} className="closeBtn">x</span></div>}
            {name === 'created_at' && <div>
                <div>From: {value[0]}</div>
                <div>To: {value[1]}<span onClick={() => deleteFilter(name, value)} className="closeBtn">x</span>
                </div></div>}
        </div>
    );
};