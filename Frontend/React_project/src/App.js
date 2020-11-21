import './App.css';
import React from 'react';
import Filters from './Filters';
import ProductResults from "./ProductResults";

const axios = require('axios');

function App() {
    const [filteredResults, setFilteredResults] = React.useState([]);
    const onSearch = (receivedFilters) => {
        console.log(receivedFilters);
        getProduct(receivedFilters).then((result) => {
            setFilteredResults(result);
            console.log("done")
        }).catch(() => console.log("some error occured"));
    }

    async function getProduct(filters) {
        let data= await axios.post('/api/v1/greenDeck',filters);
        return data;
    }

    return (
        <div className="App">
            <h1>GreenDeck FullStack</h1>
            <div className="Components">
                <Filters onSearch={onSearch}/>
                {filteredResults.map((result)=><ProductResults name={result.name} />)}
            </div>
        </div>
    );
}

export default App;
