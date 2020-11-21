import React from 'react';
import SelectedFilter from "./SelectedFilter";
import DisplaySelectedFilters from "./DisplaySelectedFilters";
import SelectFilter from "./SelectFilter";

export default function Filters(props) {
    const {onSearch} = props;
    const [selectedFilter, setSelectedFilter] = React.useState("");
    const [filterObj, setFilterObj] = React.useState([]);
    const [filter, setFilter] = React.useState("");

    const addFilter = () => {
        setSelectedFilter(filter);
        setFilter("");
    }
    const deleteFilter=(name,value)=>{
        const filterObjCopy= filterObj.filter((filter)=>{
            return !(filter.key===name && filter.value=== value);
        });
        setFilterObj(filterObjCopy);
    }
    const setFilterValue = (filterValue) => {
        let exist= false;
        const filterObjCopy = filterObj;
        filterObjCopy.forEach((f)=>{
            if(f.key===filterValue.key && f.value===filterValue.value && f.operator===filterValue.operator){
                exist= true;
            }
        });
        if(!exist){
            filterObjCopy.push(filterValue);
        }

        setFilterObj(filterObjCopy);
        setSelectedFilter("");
    }

    return (
        <div className="filters">
            <h2 className="headContent">Filters</h2>
            <div>{filterObj.map((filter, index) => <DisplaySelectedFilters key={filter + index} name={filter['key']}
                                                                           value={filter['value']}
                                                                           operator={filter['operator']}
                                                                           deleteFilter={deleteFilter}/>)}</div>
            <div>{selectedFilter!=="" &&<SelectedFilter filterName={selectedFilter} setFilterValue={setFilterValue}/>}</div>
            <label>filters:</label><SelectFilter filter={filter} setFilter={setFilter}/>
            <button onClick={addFilter}>Add</button>

            <button className="searchBtn"
                    onClick={() => onSearch(filterObj)}>Search
            </button>
        </div>
    );
};