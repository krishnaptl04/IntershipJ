/*
7.Print Pattern program for 

    1
   21
  321
 4321
54321*/

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = "";


    for (let space = 1; space <= rows - i; space++) {
        line = line + " ";
    }


    for (let num = i; num >= 1; num--) {
        line = line + num;
    }

    console.log(line);

}

/*i=1 ;i<=5
line=""
space=1;1<=5-1
line =""+"space" //"space"
space=2;2<=5-1
line="space"+"space"
space=3;3<=5-1
line="space"+"space"+"space"
space=4;4<=5-1
line="space"+"space"+"space"+"space"
sapce=5;5<=5-1
num=1;1>=1;
line= "space"+"space"+"space"+"space"+1  //  1
num=0
*/

/*
i=2;i<=5
line=""
space=1;1<=5-2
line =""+"space" //"space"
space=2;2<=5-2
line="space"+"space"
space=3;3<=5-2
line="space"+"space"+"space"
space=4;4<=5-2
num=2;2>=1;
line= ""+2      //"space"+"space"+"space"+2
num=1;1>=1;
line= "2"+1       //"space"+"space"+"space"+"2"+1 
num=0;0>=1   //"space"+"space"+"space"+21
*/
