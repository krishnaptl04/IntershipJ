/* 

13.Print Pattern Program for
  *********
   *******
    *****
     ***
      * 
      
*/
let n = 5;

for (let i = 1; i <= n; i++) {
    let line = "";
    for (s = 1; s <= i - 1; s++) {
        line = line + " ";
    }
    for (j = 1; j <= 2 * (n - i) + 1; j++) {
        line = line + "*";
    }

    console.log(line);
}

