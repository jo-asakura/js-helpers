/*
 * Here you can find some useful and interesting tricks about JS.
 */

(function tricksWithNumbers() {
    var number = 1,
        string = "1",
        bool = false,
        empty = null;

    number;         // 1
    number + "";    // "1"

    string;         // "1"
    +string;        // 1 - this's my favourite string to int convertion in JS
    +string++;      // 1
    string;         // 2

    bool;           // false
    +bool;          // 0
    bool + "";      // "false"

    empty;          // null
    +empty;         // 0
    empty + "";     // "null"

    var num = 2.5;
    parseInt(num, 10);  // 2
    // is the same as...
    ~~num;              // 2
    num >> 0;           // 2
    num >>> 0;          // 2

    // Keep in mind however, that negative numbers will be treated differently...
    var neg = -2.5;
    parseInt(neg, 10);  // -2
    // is the same as...
    ~~neg;              // -2
    neg >> 0;           // -2

    // However...
    neg >>> 0;          // 4294967294
})();

/* Break word with spaces */
(function spacify() {
    var word = 'something';
    word.split('').join(' '); // s o m e t h i n g
})();

/* Find the index of the smallest element in an array */
(function smallestIndex() {
    var array = [10, 5, 2, 5, 3, 1, 4];
    array.indexOf(Math.min.apply(Math, array)); // 5
})();

/* Function declarations are hoisted */
(function hoisting() {
    var f = function () {
        console.log('original message');
    };

    function f() {
        console.log('second message');
    }

    f(); // original message
})();