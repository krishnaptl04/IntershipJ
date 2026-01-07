/*
5.Print pattern program for

*****
****
***
**
*

*/
let n = 5;
let pattern = "";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern = pattern + "*";

    }
    pattern = pattern + "\n";
}
console.log(pattern);

/*
i=5;5>=1
j=1;1<=5 
pattern=""+*
j=2;2<=5
pattern=**
j=3;3<=5
pattern=***
j=4;4<=5
pattern=****
j=5;5<=5
pattern=*****    //***** 
*/

/*
i=4;4>=1
j=1;1<=4 
pattern=""+*
j=2;2<=4
pattern=**
j=3;3<=4
pattern=***
j=4;4<=4
pattern=****   //**** 
*/