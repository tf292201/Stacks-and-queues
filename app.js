//Challenges
// 1. Browser
let backStack = []; // Stack for back navigation
let forwardStack = []; // Stack for forward navigation

function goToPage(url) {
    backStack.push(url);
    forwardStack = [];
    navigate(url);
}

function goBack() {
    if (backStack.length > 1) { 
        let currentPage = backStack.pop();
        forwardStack.push(currentPage);
        navigate(backStack[backStack.length - 1]);
    }
}
function goForward() {
    if (forwardStack.length > 0) { 
        let nextPage = forwardStack.pop();
        backStack.push(nextPage);
        navigate(nextPage);
    }
}

function navigate(url) {
    console.log("Navigating to:", url);
}
// 2. Reversed String
//defines new variable for reversed string, loops through the string and adds each character to the new variable
function reverseString(str) {
  let reversed = ''; 
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str.charAt(i);
  }
  
  return reversed; 
}
//3.brackets
function isBalanced(str) {
  const stack = []; 
  
  const bracketPairs = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  for (let char of str) {
    
      if (bracketPairs[char]) {
          stack.push(char);
      }
      // If the character is a closing bracket
      else if (char === ')' || char === ']' || char === '}') {
    
          const lastBracket = stack.pop();
         
          if (bracketPairs[lastBracket] !== char) {
              return false;
          }
      }
  }

  return stack.length === 0;
}
//4. Josephus Problem
function findSurvivor(numPeople, skip) {
  let circle = [];
  for (let i = 1; i <= numPeople; i++) {
      circle.push(i);
  }

  let currentPosition = 0;

  // Iterate through the circle until only one person remains
  while (circle.length > 1) {
      // Calculate the index of the person to be eliminated
      currentPosition = (currentPosition + skip - 1) % circle.length;

      // Remove the eliminated person from the circle
      circle.splice(currentPosition, 1);
  }


  return circle[0];
}

