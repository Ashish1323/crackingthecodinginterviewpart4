function StringCalculate(str) {
    // Replace ** with Math.pow(x, y) format
    str = str.replace(/(\d+)\*\*(\d+)/g, (match, base, exp) => `Math.pow(${base}, ${exp})`);
    
    // Evaluate the expression using eval
    let result = eval(str);
  
    return result;
  }
  
  // Test cases
  console.log(StringCalculate("(2+(3-1)+3)**3"));  // Output should be 512
  console.log(StringCalculate("(2-0)/(6/2)"));     // Output should be 6
  