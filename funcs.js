function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  }

  return false;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== "number") {
    throw new TypeError("The argument must be a number");
  } else if (number % 2 !== 0) {
    return true;
  }

  return false;
}

function myRange(min, max, step = 1) {
  // Your code here
  const newArr = [];

  for (let i = min; i <= max; i += step) {
    newArr.push(i);
  }

  return newArr;
}


module.exports = { isFive, isOdd, myRange };
