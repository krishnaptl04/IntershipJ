/*

9.Print pattern for

    *
   **
  ***
 ****
*****

*/
let n = 5

for (let i = 1; i <= n; i++) {
    line = "";
    for (let space = 1; space <= n - i; space++) {
        line = line + " ";
    }
    for (let star = 1; star <= i; star++) {
        line = line + "*";
    }
    console.log(line);
}

/*
i=1;1<=5
line=""
space=1;1<=5-1
line= """"""""
space=5;5<=4
star=1;1<=1;
line=""""""""1
star=0
*/