// JavaScript Document
'use strict'

let x = Number(prompt("Enter value", "0"));

let start = new Date();
let b = isPrime(x);
let stop = new Date();
let elapsed = stop - start;

document.write("Is it a prime number? ", b)
document.write(elapsed);