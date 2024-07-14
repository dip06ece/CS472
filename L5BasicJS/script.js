// script.js
// Define a function max() that takes two numbers as arguments and returns e largest of them.
// Use the if-then-else construct available in Javascript.

function max(a,b){
    A = parseFloat(a);
    B = parseFloat(b);
    if (A>B)
        return A;
    else
        //alert("Maximum of " + A +" and "+ B +" is: " + B);
        return B;
}
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a,b,c){
    A = parseFloat(a);
    B = parseFloat(b);
    C = parseFloat(c);
    if (A > B){
        if (A > C)
            return A;
        else
            return C;
    }
    else{
        if (B > C)
            return B;
        else
            return C;
    }
}
//    Write a function isVowel() that takes a character (i.e. a string of length 1)
//    and returns true if it is a vowel, false otherwise.
function isVowel(a){
    switch (a) {
        case 'a':
            return true;
        case 'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true;
        default:
            return false;
    }
}

// Define a function sum() and a function multiply()
// that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(A){
    const length = A.length;
    sum = 0;
    for (let i = 0; i <length; i++){
        sum = sum + A[i];
    }
    return sum;
}
function multiply(A){
    const length = A.length;
    mul = 1;
    for (let i = 0; i <length; i++){
        mul = mul * A[i];
    }
    return mul;
}

// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(S){
    let RS = "";
    for (let i = S.length-1; i>=0; i--){
        RS = RS+S[i];
    }
    return RS;
}

// Write a function findLongestWord() that takes an array of words
// and returns the length of the longest one.
function findLongestWord(A){
    let maxSize = 0;
    for (let i=0; i<A.length; i++){
        if(maxSize<A[i].length)
            maxSize = A[i].length;
    }
    return maxSize;
}

// Write a function filterLongWords() that takes an array of words and an integer i
// and returns the array of words that are longer than i.
function filterLongWords(A, i){
    let B = [];
    for (let j=0; j<A.length; j++){
        if(A[j].length>i)
            B.push(A[j]);
    }
    return B;
}

/*
Modify the jsfiddle on the map/filter/reduce slide as follows:

a) multiply each element by 10;

b) return array with all elements equal to 3;

c) return the product of all elements; */

function jsfiddleMultiply(A){
    const B = A.map(function (elem, i, array){
        return elem*10;
    })
    return B;
}

function jsfiddleReturnAllEqualTo(A){
    const B = A.filter(function (elem, i, array){
        return elem == 3;
    })
    return B;
}

function jsfiddleReturnProductOfAll(A){
    prevValue = 1;
    B = A.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });
    return B;
}
function jsfiddle(){
    const a = [1,2,3,4,3];
    const b = a.map(function (elem, i, array){
        return elem*10;
    })
    console.log(b);
    const c = a.filter(function (elem, i, array){
        return elem == 3;})
    console.log(c);
    const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    }, 1); // 1 is initial value
    console.log(d);
}

// Testing function
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}
function myalert(){
    console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
        return max(20, 10);
    }));
    console.log("Expected output of maxOfThree(1,3,7) is 7  " + myFunctionTest(7, function () {
        return maxOfThree(1,3,7);
    }));
    console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, function () {
        return isVowel('a');
    }));
    console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
        return sum([1,2,3,4]);
    }));
    console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
        return multiply([1,2,3,4]);
    }));
    console.log("Expected output of reverse('This is Dip') is 'piD si sihT'  " + myFunctionTest("piD si sihT", function () {
        return reverse("This is Dip");
    }));
    console.log("Expected output of findLongestWord(['Dhaka', 'Delhi', 'Nobi']) is 5  " + myFunctionTest(5, function () {
        return findLongestWord(['Dhaka', 'Delhi', 'Nobi']);
    }));
    console.log("Expected output of filterLongWords(['This', 'is', 'Dip'], 2) is ['This','Dip']  " + myFunctionTest(["This","Dip"], function () {
        return filterLongWords(['This', 'is', 'Dip'], 2); // This will fail
    }));
    console.log("Map Reduce Problem Solution for input: [1,2,3,4,3]");
    jsfiddle();
}

