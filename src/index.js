
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  return matrix.reduce((acc, next, index) => {
    const isEven = checkEven(index + 1);
    const nextData = isEven ? next.reverse() : next;

    return [...acc, ...nextData];
  }, []);
}

const checkEven = (number) => number % 2 === 0;
