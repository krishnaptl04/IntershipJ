/*

19.Print Pattern Program for 
       2
      23
     235
    2357
  235711
23571113

*/

line = "";
count = 0;
for (num = 2; count < 6; num++) {
    isPrime = true;

    for (j = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        count++;

        line = line + num;
        let space = "";

        for (s = 1; s <= 6 - count; s++) {
            space = space + " ";

        }

        console.log(space + line)
    }
}







