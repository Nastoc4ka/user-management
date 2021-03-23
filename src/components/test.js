let max = 1;
let current = 1;
const arr = [1, 2, 5, 6, 7, 10, 11, 12, 13];

function isNextElInRow(current, next) {
    return next - current === 1
}

for (let i = 0; i < arr.length - 1; i++) {
    const el = arr[i];
    const elNext = arr[i + 1];
    if (isNextElInRow(el, elNext)) {
        current++
    } else {
        if (current > max) {
            max = current
        }
        current = 1;
    }
}
console.log(max);