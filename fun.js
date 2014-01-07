/*
 * Here you can find some useful and interesting tricks about JS.
 */

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