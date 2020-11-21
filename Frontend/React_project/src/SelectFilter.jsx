import React from 'react';

export default function SelectFilter(props) {
    const {filter, setFilter} = props;
    return (
        <select name="filters" value={filter} onChange={(event) => setFilter(event.target.value)}>
            <option value="">{""}</option>
            <option value="brand">brand</option>
            <option value="discount">discount</option>
            <option value="stock_available">In stock</option>
            <option value="created_at">Created At</option>
        </select>
    );
};