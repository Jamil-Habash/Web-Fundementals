//1. Always Hungry
function alwaysHungry(arr){
    var check = 1;
    for(var i=0;i<arr.length;i++){
        if(arr[i] == "food"){
            check = 0;
            console.log("yummy");
        }
    }
    if(check)
        console.log("I'm hungry");
}

//alwaysHungry([3.14, "food", "pie", true, "food"]);
//alwaysHungry([4, 1, 5, 7, 2]);

//----------------------------------------------------------------

//2. High pass filter
function highpass(arr, cutoff){
    var filteredArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

//var result = highpass([6,8,3,10,-2,5,9], 5);
//console.log(result);

//-----------------------------------------------------------------

//3. Btter than average
function betterthanaverage(arr){
    var sum = 0;
    var count = 0;
    for(var i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    var avg = sum/arr.length;
    for(var i=0;i<arr.length;i++){
        if(arr[i] > avg)
            count++;
    }
    return count;
}

//var result = betterthanaverage([6, 8, 3, 10 ,-2, 5, 9]);
//console.log(result);

//-----------------------------------------------------------------

//4. Array Reverse
function reverse(arr){
    var temp;
    var half = Math.floor(arr.length/2);
    for(var i=0;i<half;i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

//var result = reverse(["a", "b", "c", "d", "e", "f"]);
//console.log(result);

//------------------------------------------------------------------

//5. Fibonacci Array
function fibonacciArray(n){
    var fibArr = [0, 1];
    var num;
    for(var i=0;i<n-2;i++){
        num = fibArr[i] + fibArr[i+1];
        fibArr.push(num);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);