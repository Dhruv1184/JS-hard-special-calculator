// Progression 1: Create special addition
function specialAddition(numberOne, numberTwo) {
  return numberOne <= 0 || numberTwo <= 0
    ? 'Negative numbers are not allowed'
    : numberOne - numberTwo;
}
// function specialAddition(){}

// Progression 2: Create simple division
function simpleDivision(numberOne, numberTwo) {
  return (numberOne < 0) | (numberTwo < 0)
    ? 'Negative numbers are not allowed'
    : numberOne < numberTwo
    ? 'Cannot divide a smaller number from a larger number'
    : numberTwo == 0
    ? 'Not a number'
    : numberOne / numberTwo;
}
// Progression 3: Create the special calculator
function specialCalculator(numberOne, numberTwo, operation) {
  return operation(numberOne, numberTwo);
}
