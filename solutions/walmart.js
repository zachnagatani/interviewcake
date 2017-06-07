/**
* get a page of data from server, page size is fixed and always = 25
* @param {number} pageIndex
 * @return Promise, resolved with page data when the data arrive from server
*   e.g. when called with pageIndex=0 will return [0, 1, 2, ... 24] - 1st page of data set
*        when called with pageIndex=1 will return [25, 26, 7, ... 49] - 2nd page of data set
* consider this function implemented and working
*/
function getPageFromServer(pageIndex){
    return new Promise(function(resolve){
        let pageData = [],
            i,
            high;

        switch(pageIndex) {
            default:
            case 0:
                i = 0;
                high = 25;
                break;
            case 1:
                i = 25;
                high = 50;
                break;
            case 2:
                i = 50;
                high = 75;
                break;
            case 3:
                i = 75;
                high = 100;
                break;
        }


        while (i < high) {
            pageData.push(i);
            i++;
        }
        // The above is a simple stub for testing purposes, not an actual implementation

        resolve(pageData);
    });
}

/**
* fetch any range of data from server using function getPageFromServer()
* @param {number} startIndex of data
* @param {number} endIndex of data
* @returns Promise resolved when all data arrive from server
 */
function getDataRangeFromServer(startIndex, endIndex){
    return new Promise(function(resolve){
        const pagePromises = createPromiseIterable();

        // Resolves with an array of all the resolve values (dataRanges) from the promises array
        Promise.all(pagePromises)
            .then(dataRanges => {
                let combinedDataRange = combineDataRanges(dataRanges);
                trimDataRange(combinedDataRange, startIndex, endIndex);
                resolve(combinedDataRange);
            });

        /**
         * Creates an iterable (array) of getPageFromServer promises
         * @returns {object[]} pagePromises - An array of promises (from getPageFromServer function calls)
         */
        function createPromiseIterable() {
            const pageIndexRange = getIndexRange(startIndex, endIndex);

            let pagePromises = [],
                i = pageIndexRange.low;

            while (i <= pageIndexRange.high) {
                pagePromises.push(getPageFromServer(i));
                i++;
            }

            return pagePromises;
        }

        /**
         * Gets the highest and lowest page indices needed for calls to getPageFromServer
         * @param {number} startIndex - The low (start index) of the range of data
         * @param {number} endIndex - The high (end index) of the range of data
         * @returns {object} Object with a low and high property referring to their respective index
         */
        function getIndexRange(startIndex, endIndex) {
            const pageSize = 25;

            return {
                low: Math.floor(startIndex / pageSize),
                high: Math.floor(endIndex / pageSize)
            }
        }

        /**
         * Combines a multi-dimensional array of dataRanges into one combinedDataRange
         * @param {number[][]} dataRanges - An multi-dimensional array of dataRanges
         * @returns {number[]} combinedDataRange - A range of data formed from combining dataRanges
         */
        function combineDataRanges(dataRanges) {
            let combinedDataRange = [];

            dataRanges.forEach(dataRange => {
                combinedDataRange = combinedDataRange.concat(dataRange);
            });

            return combinedDataRange;
        }

        /**
         * Trims the data range to match the startIndex and endIndex
         * @param {array} dataRange - the data range to trim
         * @param {number} startIndex of data
         * @param {number} endIndex of data
         * @returns {number[]} dataRange - A dataRange, trimmed according to startIndex and endIndex
         */
        function trimDataRange(dataRange, startIndex, endIndex) {
            dataRange.splice(0, dataRange.indexOf(startIndex));
            dataRange.splice((endIndex - startIndex) + 1);

            return dataRange;
        }
    });
}

module.exports = {
    getDataRangeFromServer
};