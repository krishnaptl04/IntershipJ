/*
4.Print pattern program for

12345
1234
123
12
1

*/

let n = 5;
let pattern = "";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern = pattern + j;
    }
    pattern = pattern + "\n";
}
console.log(pattern);

/*
i=5;5>=1
j=1;1<=5
pattetrn=""+1
j=2;2<=5
pattern="1"+2
j=3;3<=5
pattern="12"+3
j=4;4<=5
pattern="123"+4
j=5;5<=5
pattern="1234"+5  //12345
*/

/*
i=4;4>=1
j=1;1<=4
pattern=""+1
j=2;2<=4
pattern="1"+2
j=3;3<=4
pattern="12"+3
j=4;4<=4
pattern="123"+4
*/

