/*
2.print pattern program for 

5
54
543
5432
54321
*/

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 5; j >= 6 - i; j--)
        line = line + j;
    console.log(line);
}


/*i=1;1<=5
line=""
j=5;j>=6-1
line=""+5
j=4;4>=5    //5
*/

