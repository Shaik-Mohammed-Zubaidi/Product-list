const createFilter = (filters) => {
    const filterObj = {};

    filters.forEach(filter => {

        const filterKey = getDBValue(filter.key);
        if(!filterObj[filterKey]) {
            filterObj[filterKey] = {};
        }

        switch(filter.operator) {
            case "contains":
                filterObj[filterKey]['$regex'] = new RegExp('.*' + filter.value + '.*', 'i');
                return;
            case "equals":
                filterObj[filterKey]['$eq'] = filter.value;
                return;
            case "greater_than":
                filterObj[filterKey]['$gt'] =  filter.value;
                return;
            case "smaller_than":
                filterObj[filterKey]['$lt'] = filter.value;
                return;
            case "between":
                filterObj[filterKey]['$gte'] = filter.value[0];
                filterObj[filterKey]['$lte'] = filter.value[1];
                return;
        }
    });

    return filterObj;
}

const getDBValue = (value) => {
    switch(value) {
        case "stock_available":
            return "stock.available";
        case "brand":
            return "brand.name";
        case "offer_price":
            return "price.offer_price.value";
        default:
            return value;
    }
}

module.exports = {
    createFilter
}