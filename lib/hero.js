module.exports = {
    randomizer: (length) => {
        if (typeof length !== 'number' && typeof length !== 'undefined') {
            throw new Error("Randomizer length should be an integer!");
        }

        if (length < 1) {
            throw new Error("Randomizer length needs to be at least 1 character!");
        }

        var result = '';
        var characters = 'ABCD&^EFGHI==JKLMNOPQRSTUVW_-XYZabcdefghijklmnopqrstuvwxyz01^23456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    
    //Pagination Parser
    paginate : (
        totalItems = 0,
        currentPage = 1,
        pageSize = 10
    ) => {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        
        // return object with all pager properties required by the view
        return {
            totalItems: parseInt(totalItems),
            currentPage: parseInt(currentPage),
            pageSize: parseInt(pageSize),
            totalPages: parseInt(totalPages),
        };
    },

    /**
     * @param {array} allowedParam Array of allowed parameters
     * @param {object} receivedParam Data that retreived from req.query
     * @returns {object} Return filtered object
     */
    paramFilter: (allowedParam, receivedParam) => {
        let result = {};
        allowedParam.map(v => {
            if(receivedParam[v]){
                result[v] = receivedParam[v]
            }
        });

        return result;
    }
}

