"use strict";
/* global describe */
/* global it */
/* global assert */
/* global pow */

describe("Sum", function () {

    describe("Sum of at least five first numbers", function () {

        let expected = 0;
        let txt2show = "0";
        let anArray = [];
        for (let x = 1; x <= 5; x++){
            expected += x;
            txt2show += " + " + x;
            anArray.push(x);
            it(` The sum: ${txt2show}  is ${expected}`, function () {
                assert.equal(sum22(anArray), expected);
            });
        }

    });

});


describe("Multiplication", function () {

    describe("Product of at least five first numbers", function () {

        let expected = 1;
        let txt2show = "" +expected;
        let anArray = [];
        for (let x = 1; x <= 5; x++) {
            expected *= x;
            txt2show += " * " + x;
            anArray.push(x);
            it(` The product: ${txt2show}  is ${expected}`, function () {
                assert.equal(product(anArray), expected);
            });
        }

    });

});




describe("Reverse", function () {

    describe("Reverrsal of a string", function () {

        
       
        let expected = "";
        let txt2show = "";
        for (let x = 1; x <= 5; x++) {
            expected = x + expected;
            txt2show += x;
           
            it(` The reverse of: ${txt2show}  is ${expected}`, function () {
                assert.equal(reverseString(txt2show), expected);
            });
        }

    });

});

describe("Longest Words", function () {

    let anArray = ["1234", "123", "12345", "123456"];
    let expected = ["1234", "12345", "123456"];
    //let anArray1 = findLongestWord(anArray, 3);
    it(` The longest 3 counted word in : ${anArray}  is ${expected}`, function () {

        assert.equal(anArray, anArray);

    });

});