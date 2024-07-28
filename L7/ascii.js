"use struct";

var defaultSpeed = 250; //the default speed
var time = null;
var temp = 0;
var word = "";

/*
 * when the user opens the page
 */
window.onload = function(){
    var ani = document.getElementById("de_animations");
    ani.onchange = changeAnimation;//change animation depending on user's selection
    ani.disabled = false;

    var biggieSmalls = document.getElementById("de_size");
    biggieSmalls.onchange = changeSize; //change size depending on user's selection

    var start = document.getElementById("start");
    start.onclick = startButton; //when button is clicked, do startButton function
    start.disabled = false; //start button is enabled

    var stop = document.getElementById("stop");
    stop.onclick = stopButton; //when button is clicked, do stopButton function
    stop.disabled = true; //stop button by default is disabled

    var amphetamine = document.getElementById("de_turbo");
    amphetamine.onchange = gottaGoFast; //activates turbo when user selects turbo
};

/*
 * function for the start button
 */
function startButton(){
    var ani = document.getElementById("de_animations");
    var contents = ANIMATIONS[ani.value];
    var box = document.getElementById("boxbox");

    word = box.value;

    var aniArray = contents.split("=====\n");
    var length = aniArray.length;

    ani.disabled = false;
    document.getElementById("start").disabled = true; //make the start button disabled
    document.getElementById("stop").disabled = false; //make the stop button enabled
    time = setInterval(aniFrames, defaultSpeed, aniArray, length);
}

/*
 * function for the stop button
 */
function stopButton(){
    var box = document.getElementById("boxbox");

    box.value = word;
    word = "";
    clearInterval(time);
    time = null;
    temp = 0;
    document.getElementById("de_animations").disabled = false;
    document.getElementById("start").disabled = false; //make the start button enabled
    document.getElementById("stop").disabled = true; //make the stop button disabled
}

function aniFrames(array, length){
    var box = document.getElementById("boxbox");
    box.value = array[(temp%length)];
    temp ++;
}

/*
 * changing the animation
 */
function changeAnimation(){
    var ani = document.getElementById("de_animations");
    document.getElementById("boxbox").value = ANIMATIONS[ani.value];
}

/*
 * changing the size of the animation
 */
function changeSize(){
    var biggieSmalls = document.getElementById("de_size");
    var box = document.getElementById("boxbox");
    box.style.fontSize = biggieSmalls.value;
}

/*
 * ACTIVATE TURBO THRUSTERS
 */
function gottaGoFast() {
    if (this.checked) {
        time = 500;
    } else {
        time = 1000;
    }
}
/* 4 Define a function sum() and a function multiply() that sums and multiplies
(respectively) all the numbers in an array of numbers
 */
// Function to sum all numbers in an array
function sum(numbers) {
    return numbers.reduce((summation, currentValue) => summation + currentValue, 0);
}
// Function to multiply all numbers in an array
function multiply(numbers) {
    return numbers.reduce((multiplication, currentValue) => multiplication * currentValue, 1);
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log("input array: "+ numbers);
console.log("Sum "+ sum(numbers)); // Output: 15
console.log("Multiply: "+ multiply(numbers)); // Output: 120

/* 5 Define a function reverse() that computes the reversal of a string.
*/
// Function to reverse a string using map and reduce
function reverse(str) {
    const chars = Array.from(str); //Convert to an array
    return chars.reduce((reversedStr, char) => char + reversedStr, ''); // Reverse the array
}

// Example usage
const originalString = "hello";
console.log("Reversing original string: " + originalString +" Found: " + reverse(originalString)); // Output: "olleh"

/* 7 Write a function filterLongWords() that takes an array of words
and an integer i and returns the array of words that are longer than i.
*/
function filterLongWords(words, i) {
    const mappedWords = words.map(word => ({ word, length: word.length }));
    const filteredWords = mappedWords.filter(item => item.length > i);
    return filteredWords.reduce((result, item) => {
        result.push(item.word);
        return result;
    }, []);
}
const wordsArray = ["apple", "banana", "cherry", "date", "fig", "grape"];
const minLength = 4;
console.log("Input Array: " + wordsArray+ "\n and input length: "+ minLength);
console.log(filterLongWords(wordsArray, minLength));

