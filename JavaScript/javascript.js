//Find sum of diagonals of a matrix + Absolute value
function diagonalDifference(arr) {
  let prime = 0; let second = 0;
  for(let i in arr) {
    prime += arr[i][i];
    second += arr[i][arr.length - i - 1];
  }
  return Math.abs(prime - second);
}

let a = [[3, 5, 12],[1, 3, 10],[4, 11, 15]];
console.log(diagonalDifference(a));

//PlusMinus
function plusMinus(arr) {
  let plus = 0; let minus = 0; let zero = 0;
   for(let i in arr) {
       if(arr[i] > 0) {
           plus++;
       } else if(arr[i] < 0) {
           minus++;
       } else if(arr[i] == 0) {
           zero++;
       }
   }
   console.log((plus/arr.length).toFixed(6) + '\n' +
           (minus/arr.length).toFixed(6) + '\n' +
           (zero/arr.length).toFixed(6));
}

//Staircase
function staircase(n) {
  for(let i = 0; i < n; i++) {
        let spaces = new Array(n-i).join(" ");
        let hashes = new Array(2+i).join("#");
        console.log(spaces+hashes);
    }
}

//Mini-Max sum
function miniMaxSum(arr) {
  let copy = [...arr];
  arr.sort(function(a, b) { return a-b });
  copy.sort(function(a, b) { return b-a });
  arr.pop(); copy.pop();
  //reduce method executes function in it to make a single element to return
  console.log(arr.reduce(function(a, b) { return a+b}) + ' ' + copy.reduce(function(a, b) { return a+b}));
}

//Birthday Cake Candles
function birthdayCakeCandles(ar) {
  let max = 0;
  let count = 0;
  ar.forEach(item => {
      if(item > max) {
          max = item;
          count = 1;
      } else if(item === max) {
          count++;
      }
  });
  return count;
}

//Time Conversion
function timeConversion(s) {
  let hour = 0;

  if(s.slice(-2) == 'PM' && s.slice(0,2) != '12') {
     hour += parseInt(s.slice(0, 2)) + 12;
     hour.toString();
  } else if(s.slice(-2) == 'PM' && s.slice(0, 2) == '12') {
     hour = 12;
     hour.toString();
  } else {
     hour += parseInt(s.slice(0, 2));
     if(hour < 10) {
         hour.toString();
         hour = '0' + hour;
       } else if(hour == 12) {
           hour.toString();
           hour = '00';
       } else {
           hour.toString();
       }
   }
   return hour + s.substr(2, 6);
 }

 //Apple and Orange
 function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let aCount = 0;
  let oCount = 0;
  let newApples = apples.map(function(i) {return a + i});
  let newOranges = oranges.map(function(i) {return b + i});
  for(let i in newApples) {
      if(s <= newApples[i] && newApples[i] <= t) {
          aCount++;
      }
  }
  for(let i in newOranges) {
      if(s <= newOranges[i] && newOranges[i] <= t) {
          oCount++;
      }
  }
  console.log(aCount);
  console.log(oCount);
}

const getSum => (a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return (max - min + 1) * (max + min)/2; //# of numbers including both of them * average
}
