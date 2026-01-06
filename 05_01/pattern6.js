/*

6.Print Pattern program for 

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

let n = 5;
let num = 1;
let pattern = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += num++ + " ";
    }
    pattern += "\n";
}
console.log(pattern);
