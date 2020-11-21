import React from 'react';

export default function SelectedFilter(props) {
    const {setFilterValue, filterName} = props;
    const [filter, setFilterChange] = React.useState("");
    const [filterSelect, setFilterSelect] = React.useState(true);
    const [discountOperator, setDiscountOperator] = React.useState("");
    const [fromDate, setFromDate] = React.useState("");
    const [toDate, setToDate] = React.useState("");
    const addFilterValue = () => {
        setFilterSelect(false);
        setFilterValue(getFilter(filter));
    }

    const getFilter = (filter) => {
        if (filterName === "brand") {
            return {key: filterName, value: filter, operator: 'contains'};
        }
        if (filterName === "stock_available") {
            return {key: filterName, value: true, operator: 'equals'};
        }
        if (filterName === "discount") {
            return {key: filterName, value: filter, operator: discountOperator}
        }
        if(filterName==="created_at"){
            return {key: filterName,value: [fromDate,toDate],operator: 'between'}
        }
        return {};
    }

    return (
        <span>{filterName === "brand" && <>
            {filterSelect && <><label>Enter Brand:</label><input key="filterInput" value={filter} onChange={(event) =>
                setFilterChange(event.target.value)} placeholder="Enter here.."/>
                <button onClick={addFilterValue}>Done</button>
            </>}</>}

            {filterName === "stock_available" && <button onClick={addFilterValue}>Check for Stock?</button>}

            {filterName === "discount" && <>{filterSelect && <><label>Choose a discount value</label><select
                value={discountOperator}
                onChange={(event) => setDiscountOperator(event.target.value)}>
                <option value="smaller_than">smaller than</option>
                <option value="greater_than">greater than</option>
            </select><input type="number" value={filter} onChange={(event) => setFilterChange(event.target.value)}/>
                <button onClick={addFilterValue}>Done</button>
            </>}</>}

            {filterName === "created_at" && <>{filterSelect && <>
                <label>Choose Date from:</label><input type="date" value={fromDate}
                                                       onChange={(event) => setFromDate(event.target.value)}/>
                <label>Choose Date To:</label><input type="date" value={toDate}
                                                     onChange={(event) => setToDate(event.target.value)}/>
                <button onClick={addFilterValue}>Done</button>
            </>}</>}
        </span>
    );
};