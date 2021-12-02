function isNumbers(...array) {
  //if any number value within the array is NOT a number throw error, else return the sum
    if (!array.every((value) => Number.isNumber(value)))
      throw "All arguments must be numbers.";

    return array.reduce((firstNum, secondNum) => firstNum + secondNum);

      console.log(a)
    return c.reduce((a, b) => a + b);

  }
  
  isNumbers(1, 2, 3); //> 6
  isNumbers(10, "B", 20); //> error All arguments must be numbers.
  // 