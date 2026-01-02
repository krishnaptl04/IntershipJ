let num = 11
let isPrime = true;

if (num <= 1) {
    isPrime = false;

}
for (i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(num + " Is Prime")
}
else {
    console.log(num + "+ is not Prime")
}














