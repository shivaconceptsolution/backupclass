let num = 10;
let rows = 4;

for (let i = 0; i < rows; i++) {
    let currentNum = num - i;
    for (let j = i; j < rows; j++) {
        process.stdout.write(currentNum + " ");
        currentNum -= (rows - j);
    }
    console.log();
}
