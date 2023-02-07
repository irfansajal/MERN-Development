/* -----------------------------------------------
Problem 1: Let’s play a mind game
----------------------------------------------- */
function mindGame(number) {
  if (number < 0) {
    // arithmetic operation of a given number
    return (number * 3 + 10) / 2 - 5;
  }
  return "Oops! Please Give a Positive Number.";
}

/* -----------------------------------------------
Problem 2: Finding even or odd
----------------------------------------------- */
function evenOdd(str) {
  if (typeof str === "string") {
    if (str.length % 2 === 0) {
      return "Even";
    }
    return "Odd";
  }
  //If the input is not a string, it will return
  return "Oops! Please Give a String Input.";
}

/* -----------------------------------------------
Problem 3: Is Less or Greater than seven
----------------------------------------------- */
function isLGSeven(num) {
  if (typeof num === "number") {
    let absoluteDiff = num - 7;
    if (absoluteDiff < 7) {
      return absoluteDiff;
    }
    return absoluteDiff * 2;
  }
  return "Oops! Please Give Any Number.";
}

/* -----------------------------------------------
Problem 4: Finding Bad data
----------------------------------------------- */
function findingBadData(numbersArray) {
  if (Array.isArray(numbersArray)) {
    let badDataCounter = 0;
    const arrayLen = numbersArray.length;
    for (let i = 0; i < arrayLen; i++) {
      if (numbersArray[i] < 0) {
        badDataCounter++;
      }
    }
    return badDataCounter;
  }
  return "Oops! Please Give An Array.";
}
/* -----------------------------------------------
Problem 5: Convert your gems into diamond
----------------------------------------------- */
function gemsToDiamond(firstFrndGems, secondFrndGems, thirdFrndGems) {
  if (
    typeof firstFrndGems === "number" &&
    typeof secondFrndGems === "number" &&
    typeof thirdFrndGems === "number"
  ) {
    const firstFrndDiamonds = 21 * firstFrndGems;
    const secondFrndDiamonds = 32 * secondFrndGems;
    const thirdFrndDiamonds = 43 * thirdFrndGems;
    //add three friends diamonds
    let totalDiamonds =
      firstFrndDiamonds + secondFrndDiamonds + thirdFrndDiamonds;
    if (totalDiamonds > 1000 * 2) {
      return totalDiamonds - 2000;
    }
    return totalDiamonds;
  }
  return "Oops! Please Give a Valid Three Number.";
}
