const problem002Solution = require('../solutions/problem_002');

test('Test 002', () => {
    expect(problem002Solution.solution([1, 2, 3, 4, 5])).toEqual(expect.arrayContaining([120, 60, 40, 30, 24]));
});