function convertToRoman(num) {
  let result = "";
  while (num !== 0) {
    if (num.toString().length >= 4) {
      while (num.toString().length >= 4) {
      result = result.concat("M");
      num -= 1000;
      } 
    } else if (num.toString().length === 3) {
      if (num % 500 === 0) {
        result = result.concat("D");
        num -= 500; 
      } else if (num % 100 === 0) {
        result = result.concat("C");
        num -= 100;
      }
    } else if (num.toString().length === 2) {
       if (num % 50 === 0) {
        result = result.concat("L");
        num -= 50; 
      } else if (num % 10 === 0) {
        result = result.concat("X");
        num -= 10; 
      }
    } else if (num.toString().length === 1) {
        if (num === 1 || num === 2 ||  num === 3) {
          result = result.concat("I".repeat(num)); 
          num -= num;    
        } else if (num === 4) {
          result = result.concat("IV");
          num -= num; 
        } else if (num === 5) {
          result = result.concat("V");
          num -= num; 
        } else if (num => 6 && num <= 8) {
          result = result.concat("V");
          result = result.concat("I".repeat(num -5));
          num -= num; 
        } else if (num === 9) {
          result = result.concat("IX");
          num -= num; 
        }
    }
  }
  return result;
}
convertToRoman(36);