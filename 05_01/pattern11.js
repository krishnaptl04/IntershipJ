
let n = 5;
let pattern = "";

for (let i = n; i >= 1; i--) {


    for (let space = 1; space <= n - i; space++) {
        pattern += " ";
    }


    for (let j = i; j >= 1; j--) {
        pattern += j;
    }


    for (let j = 2; j <= i; j++) {
        pattern += j;
    }

    pattern += "\n";
}

console.log(pattern);
