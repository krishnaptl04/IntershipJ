let n = 5;
let pattern = "";
for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 1; j--) {
        pattern += j;
    }
    pattern += "\n";
}
console.log(pattern);
