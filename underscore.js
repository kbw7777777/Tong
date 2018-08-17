const _ = require("underscore");
var array = [1,2,3,4];

console.log(_.first(array));
console.log(_.last(array));


const fs = require("fs");
var data = fs.readFileSync('hello.txt', {encoding:'utf8'});
console.log(1); 
console.log(data);


 fs.readFile('hello.txt', {encoding:'utf8'}, function(err, data){
    console.log(2); 
    console.log(data);
 });
 console.log(3); 