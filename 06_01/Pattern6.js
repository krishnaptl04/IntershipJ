/*

6.Print Pattern program for 

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

let n = 5;
let num = 1;
let pattern = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern = pattern + num++;
    }
    pattern = pattern + "\n";
}
console.log(pattern);

/* num=1
// pattern="" i=1;1<=5
// j=1;1<1
// pattern="" +1   
// j=2;2<1   //1

/*num=2 paattern=""
i=2 ;2<=5
j=1;1<2
pattern=""+2
j=2;2<=2
pattern="2"+3
 j=3;3<2    //23
 */
