const temp = [15, 12, 14, 30, 20, 22];

// average temp
let sum = 0;
for (i = 0; i < temp.length; i++) {
  sum += temp[i];
}
console.log(sum / temp.length);

// highest and lowest temp
let max = temp[0],
  min = temp[0];
for (let i = 0; i < temp.length; i++) {
  if (temp[i] > max) {
    max = temp[i];
  }
  if (temp[i] < min) {
    min = temp[i];
  }
}
console.log("max = " + max);
console.log("min = " + min);
