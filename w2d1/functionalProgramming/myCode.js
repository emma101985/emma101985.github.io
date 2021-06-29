"use strict";
/**
 * 
 * @param {Number} x - integer 1 
 * @param {Number} n - integer 2
 * @returns {Number} result of x to the n
 */
function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}


let anArray = [1, 2, 3, 4];
const sum = anArray.reduce(function (accumulator, elem) {
    return accumulator + elem;
}, 0);

const sum22 = anArray => anArray.reduce((a, b) => a + b);

// product using reduce
const multiply = anArray.reduce(function (acc, item) {
    return acc * item;
}, 1);

const product = anArray => anArray.reduce((a, b) => a * b);

// reverse a string
const reverseString = (string) => string.split("").reverse().join('');


// find the longest 
const longestWords = (a, i) => a.filter(item => item.length > i);

function filterLongWords(arrayOfWords, i) {
    let resultArray = [];
    for (let j = 0; j < arrayOfWords.length; j++) {
        if (arrayOfWords[j].length > i) {
            resultArray.unshift(arrayOfWords[j]);
        }
    }

    return resultArray;
}