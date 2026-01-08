/*

12.Print pattern Program for
      *
     ***
    *****
   *******
  *********
  
*/

let n = 5;

for (let i = 1; i <= n; i++) {
    line = "";
    for (let s = 1; s <= n - i; s++) {
        line = line + " ";
    }
    for (let j = 1; j <= i; j++) {
        line = line + "*";
    }
    for (let k = 2; k <= i; k++) {
        line = line + "*";
    }
    console.log(line);
}