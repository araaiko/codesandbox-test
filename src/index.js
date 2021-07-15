/**
 * const、let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let
// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数は上書き可能";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// constは上書き不可
// val3 = "const変数を上書き";

// constは再宣言も不可
// const val3 = "cosnt変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列は中身の編集や追加も可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "じゃけぇ";
// const age = 28;
// 「私の名前はじゃけぇです。年齢は28歳です。」

// 従来の方法
// const massage1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(massage1);

// テンプレート文字列を用いた方法　``（バッククォート）と${}を使う
// const massage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//  return str;
// }
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// }

// const massage1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(massage1);

// const { name, age } = myProfile;
// const massage2 = `私の名前は${name}です。年齢は${age}歳です。`
// console.log(massage2);

// const myProfile = ['じゃけぇ', 28];

// const massage3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(massage3);

// const [ name, age ] = myProfile;
// const massage4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(massage4);

/**
 * デフォルト値、引数・分割代入など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// map
const nameArr = ["田中", "山田", "じゃけぇ"];

// 従来の配列をループしてそれぞれの名前を表示させる方法
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// mapを使った方法：returnを使って新しい配列を生成する
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// mapを使った方法:従来の方法のように、配列の値を表示させる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filter
// numArrから奇数の値だけ取り出したい
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// じゃけぇ以外には名前の後ろに「さん」をつける
// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
