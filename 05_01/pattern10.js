/*

10.Print Pattern Program 

    1
   212
  32123
 4321234
543212345

*/
let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {

    for (let space = 1; space <= n - i; space++) {
        pattern += " ";
    }

    for (let j = 1; j <= i; j++) {
        pattern += j;
    }

    for (let j = i - 1; j >= 1; j--) {
        pattern += j;
    }

    pattern += "\n";
}
console.log(pattern);
