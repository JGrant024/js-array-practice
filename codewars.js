// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

const number = function (array) {
  return array.map(function (item, index) {
    return `${index + 1}: ${item}`;
  });
};

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

function arr(n) {
  var newArr = [];
  for (var i = 0; i < n; i++) {
    newArr.push(i);
  }
  return newArr;
}

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone) {
  if (drone.length >= lamps.length) {
    return "o".repeat(lamps.length);
  }

  return "o".repeat(drone.length) + "x".repeat(lamps.length - drone.length);
}

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  const avg = marks.reduce((acc, i) => acc + i) / marks.length;
  return Math.floor(avg);
}

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

// reverse = a => a.map(a.pop, [...a]);

function reverse(arr) {
  // [1, 2, 3]
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }
  return result;
}
