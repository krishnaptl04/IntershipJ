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

/*
i=1;1<=5
j=1;1<=1
pattern=""+*
j=2;2<=1    //*
*/

/*
i=2;2<=5
j=1;1<=2
pattern=""+*
j=2;2<=2
pattern="*"+*
j=3;3<=2     //** 
*/





















