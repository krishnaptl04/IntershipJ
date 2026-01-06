/*
4.Print pattern program for

12345
1234
123
12
1

*/

let n = 5;
let pattern = "";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    pattern += "\n";
}
console.log(pattern);