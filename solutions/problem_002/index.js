/* 
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

module.exports = {
    solution: function(arrayIntegers) {
        var newArray = [];
        arrayIntegers.forEach(function(integer1, index1) {
            var product = 1;
            arrayIntegers.forEach(function(integer2, index2) {
                if (index1 != index2) {
                    product = product * integer2;
                }
            });
            newArray.push(product);
        });
        return newArray;
    }
}