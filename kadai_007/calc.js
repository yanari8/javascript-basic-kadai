// 変数numに１以上の整数を代入（仮に最大値100まで）
let num = Math.floor(Math.random() * 100) + 1;

// 確認用
console.log(num);

// 条件式
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  console.log("5の倍数です");
} else {
  console.log(num);
}

// num に　０を含むとこうなる？
// if (num % 3 === 0 && num % 5 === 0 && num !== 0) {
//   console.log("3と5の倍数です");
// } else if (num % 3 === 0 && num !== 0) {
//   console.log("3の倍数です");
// } else if (num % 5 === 0 && num !== 0) {
//   console.log("5の倍数です");
// } else {
//   console.log(num);
// }
