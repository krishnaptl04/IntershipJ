/*
print pattern program for 

1  2  3  4   5
6  7  8  9  10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25

*/

let rows = 5;
let cols = 5;
let num = 1;

for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= cols; j++) {

        if (num < 10) {
            line = line + " " + num + " ";
        } else {
            line = line + num + " ";
        }
        num++;
    }
    console.log(line);

}
