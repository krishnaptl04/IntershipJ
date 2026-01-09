/*

18.Print Pattern Program for 

2
24
246
2468

*/

let line = ""
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) {
        line = line + i;
        console.log(line)
    }

}

