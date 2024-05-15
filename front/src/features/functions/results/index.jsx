export const calculateResults = (dice) => {

  const sortedDice = dice.slice().sort((a, b) => a - b);

  let yams = false;
  let bigSuite = false;
  let square = false;

  const allValuesSame = (arr) => arr.every((el) => el === arr[0]);

  // Check for Yams (all dice have the same value)
  if (allValuesSame(sortedDice)) {
    yams = true;
  }

  // Check for Big Suite (five consecutive values)
  // Check if all dice are different and the difference between the first and fifth dice is 4
  bigSuite = new Set(sortedDice).size === 5 && sortedDice[4] - sortedDice[0] === 4;

  // Check for Square (four dice have the same value)
  let sameValueCount = 1; // Initialize to 1 as we start from the second die
  for (let i = 1; i < sortedDice.length; i++) {
    if (sortedDice[i] === sortedDice[i - 1]) {
      sameValueCount++;
      if (sameValueCount === 4) { // Four dice with the same value found
        square = true;
        break;
      }
    } else {
      sameValueCount = 1; // Reset the count if the next value is different
    }
  }

  // Return the winning combinations
  return { yams, bigSuite, square };
};