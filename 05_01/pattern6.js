let n = 5;
let num = 1;
let pattern = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += num++ + " ";
    }
    pattern += "\n";
}
console.log(pattern);
