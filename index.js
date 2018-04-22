var moment = require("moment");
var datejs = require("datejs");
var math = require("mathjs");

console.log("Date is", datejs);

console.log(math.sqrt(-4));

console.log("Hello from JavaScript!");
var datetime = moment()
  .startOf("day")
  .fromNow();
console.log(datetime);

var name = "Bob";
var time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

console.log("huh....");
console.log("huh....");
console.log("...");
console.log("...");
console.log("...");
console.log("...");
