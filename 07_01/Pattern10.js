/*
10.Pattern program for 
      1
     212
    32123
   4321234
  543212345    

  */

let n = 5;

for (let i = 1; i <= n; i++) {
    line = "";

    for (let space = 1; space <= n - i; space++) {

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


