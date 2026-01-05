let n = 8;
let a = 0; b = 1;

console.log(a);
console.log(b);

for (let i = 0; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
} 