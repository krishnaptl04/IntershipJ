/*
3.print pattern program for 

*
**
***
****
*****
*/

let n = 5;
let line = "";

for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        line = line + "*";
    }
    line = line + "\n";
}
console.log(line);