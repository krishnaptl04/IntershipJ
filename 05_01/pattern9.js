/*

9.Print pattern program

    *
   **
  ***
 ****
*****

*/
let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
    for (let space = 1; space <= n - i; space++) {
        pattern += " ";
    }
    for (let star = 1; star <= i; star++) {
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);

