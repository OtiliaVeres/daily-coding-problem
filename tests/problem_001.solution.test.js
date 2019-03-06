const problem001Solution = require('../solutions/problem_001');

test('Test 001', () => {
    expect(problem001Solution.solution([1, 2, 6, 9], 3)).toBe(true);
});

test('Test in problem description', () => {
    expect(problem001Solution.solution([10, 15, 3, 7], 17)).toBe(true);
});