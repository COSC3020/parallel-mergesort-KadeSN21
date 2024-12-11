const jsc = require('jsverify');
const { mergeSort } = require('./code.js');

const testSort = async () => {
    const property = await jsc.forall("array nat", async function(arr) {
        const arrayToSort = JSON.parse(JSON.stringify(arr));
        const referenceArray = JSON.parse(JSON.stringify(arr));
        
        try {
            const sortedArray = await mergeSort(arrayToSort);
            const expectedArray = referenceArray.sort((a, b) => a - b);
            return JSON.stringify(sortedArray) === JSON.stringify(expectedArray);
        } catch (error) {
            console.error('Error during test:', error);
            return false;
        }
    });

    const result = await jsc.check(property, { tests: 50 });
    console.log('Test Results:', result);
    return result === true;
};
(async () => {
    try {
        const passed = await testSort();
        console.log(passed ? 'All tests passed!' : 'Some tests failed!');
        process.exit(passed ? 0 : 1);
    } catch (error) {
        console.error('Test suite error:', error);
        process.exit(1);
    }
})();