const wordSearch = (letters, word) => {

  // Check to see if matrix formatted properly
  for (let i of letters) {

    // Check to see if element is nested array is a single letter
    for (let e of i) {
      if ((!e.length === 1 ||  typeof e !== "string") || !/[a-zA-Z]/.test(e)) {
        return false;
      }
    }
    // Check to see if elements in outer array are arrays
    if (!Array.isArray(i)) {
      return false;
    }
  }

  if (letters.length === 0) {
    return false;
  }
  if (letters.includes([])) {
    return false;
  }

  // horizontal case
  if (horizontalCheck(letters, word)) {
    return true;
  }

  // vertical case
  if (horizontalCheck(transpose(letters), word)) {
    return true;
  }
    
  return false;
};

// Horizontal check
const horizontalCheck = function(letters, word) {
  const horizontalJoin = letters.map(ls => ls.join(''));
  console.log(horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
};

// Helper function to transpose matrices
const transpose = function(matrix) {

  let resultsArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    resultsArr.push([]);
    for (let j = 0; j < matrix.length; j++) {
      resultsArr[i].push(matrix[j][i]);
    }
  }
  return resultsArr;
};

module.exports = wordSearch;