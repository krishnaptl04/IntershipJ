let n = 5;
let pattern = "";
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        pattern += "*";

    }
    pattern += "\n";
}
console.log(pattern);