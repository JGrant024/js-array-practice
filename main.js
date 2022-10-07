// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------

function myFunction(str, i) {
  const result = [];
  for (let j = 0; j < i; j++) {
    result.push(str);
  }
  return result;
}

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reversesArra(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }
  return result;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function removsFalsyValue(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------
function answer1(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i][0]] = arr[i][1];
  }
  return result;
}

//  or

//  for(const index of arr) {
//     result[index[0]] = index[1];
//  }
//  return result  (for each is for side-effects)

function comapareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return falsse;
    }
  }
  return true;
}
