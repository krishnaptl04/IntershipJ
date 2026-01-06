/*
1.print pattern aso create common function for that
1
12
123
1234
12345
*/

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line = line + j;
    }
    console.log(line);
}


/*i=1;1<=5
line=""
j=1;1<=1
line=""+1
j=2;2<=1   //1
*/

/*i=2;2<=5
line="" 
j=1;1<=2
line=""+1
j=2;2<=2
line="1"+2
j=3;3<=2  //12
*/
