/*
17.Print Pattern program for 

1
13
135
1357
13579

*/

let line = ""
for (let i = 1; i < 10; i++) {
    if (i % 2 !== 0) {
        line = line + i;
        console.log(line)
    }

}

