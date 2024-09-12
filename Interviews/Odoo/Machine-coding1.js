function processKeypresses(str) {
    const result = [];
    
    // Split the string by commas to process each keypress
    const keypresses = str.split(',');
    
    for (const key of keypresses) {
      if (key === '-B') {
        // Simulate a backspace: remove the last character if there is one
        if (result.length > 0) {
          result.pop();
        }
      } else {
        // Append the normal keypress to the result
        result.push(key);
      }
    }
    
    // Return the final processed string
    return result.join('');
  }
  
  function EquivalentKeypresses(strArr) {
    const firstProcessed = processKeypresses(strArr[0]);
    const secondProcessed = processKeypresses(strArr[1]);
    
    // Return true if both processed strings are equal, false otherwise
    return firstProcessed === secondProcessed;
  }
  
  // Test cases
  console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,-B,d"]));  // Output: true
  console.log(EquivalentKeypresses(["c,a,r,d", "c,a,-B,r,d"]));    // Output: false
  