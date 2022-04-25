// this is the "calculate.js" file...

import * as d3 from "d3" // see docs: https://github.com/d3/d3

var someIntegers = [9, 13, 99, 3]
console.log("THE ARRAY IS:", someIntegers)

var maxNumber = d3.max(someIntegers)
console.log("MAXIMUM NUMBER IN THE ARRAY IS:", maxNumber)
