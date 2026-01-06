let n = 4;
let num = 1;
let pattern = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern = pattern + num++;
    }
    pattern = pattern + "\n";
}
console.log(pattern);