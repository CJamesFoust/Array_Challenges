// High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);
// 

// Evens or Odds
function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]%2 == 0) {
            totalEvens += arr[i];
        }

        else {
            totalOdds += arr[i];
        }
    }

    if(totalOdds > totalEvens) {
        return "odds are larger"
    }

    else {
        return "evens are larger"
    }
}
   
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result);
//

// Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    sum = sum/arr.length;
    var count = 0

    for(var i=0; i < arr.length; i++) {
        if(arr[i] > sum) {
            count++;
        }
    }
    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);
//

// Fibonacci Array
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i = 0; fibArr.length < n; i++) {
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result);
//