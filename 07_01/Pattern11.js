/*
11.Print Pattern Program for
543212345
 4321234
  32123
   212
    1

*/

rows = 5;

for (let i = 5; i <= rows; i--) {
    line = "";
    for (let space = 1; space <= rows - i; space++) {
        line = line + " ";
    }
    for (let j = i; j >= 1; j--) {
        line = line + j;

    }
    for (let k = 2; k <= i; k++) {
        line = line + k;
    }
    console.log(line);
}
