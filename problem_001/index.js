/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

module.exports = {
    solution: function(arrayNumbers, k) {
        if (arrayNumbers === undefined || list == null)
            return false;
        if (typeof k !== 'number')
            return false;
        for (var i = 0; i < arrayNumbers.length; i++) {
            for (var x = i + 1; x < arrayNumbers.length; x++) {
                if (i != x) {
                    if ((arrayNumbers[i] + arrayNumbers[x]) === k) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}