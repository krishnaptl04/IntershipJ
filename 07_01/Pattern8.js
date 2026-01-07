/*
8. Print pattern program for 
      
    1
   12
  123
 1234
12345

*/
let n = 5
for (let i = 1; i <= n; i++) {
    line = ""
    for (let space = 1; space <= n - i; space++)
        line = line + " ";
    for (let num = 1; num <= i; num++) {
        line = line + num;
    }
    console.log(line);
}
/*i=1;1<=5
line=""
space=1;1<=5-1
line=""""""""
num=1;num<=1;num++//1
*/

