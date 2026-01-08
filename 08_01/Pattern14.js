/*
 
14.Print Pattern Program for 

  *
 * *
* * *
 * *
  *
  
*/
let n = 3;

for (let i = 1; i <= n; i++) {
    let line = ""
    for (let s = 1; s <= n - i; s++) {
        line = line + " ";
    }
    for (let j = 1; j <= i; j++) {
        line = line + "*";
        if (j < i)
            line = line + " "
    }
    console.log(line);
}
for (let i = n - 1; i >= 1; i--) {
    let line = ""
    for (let s = 1; s <= n - i; s++) {
        line = line + " ";
    }
    for (let j = 1; j <= i; j++) {
        line = line + "*";
        if (j < i)
            line = line + " ";
    }
    console.log(line);
}


