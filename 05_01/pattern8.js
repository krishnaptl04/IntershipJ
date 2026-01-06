/*
8. Print pattern program for 
      
    1
   12
  123
 1234
12345

*/

let n = 5;
let pattern = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    pattern += "\n";
}
console.log(pattern);
