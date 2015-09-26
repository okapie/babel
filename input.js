var salutation = "Hello";
var place = "Japan";
var greeting = `${salutation}, OKAP lives in ${place}! How about you?`;
console.log(greeting);

var x = 5;
var y = 3;
var equation = `${ x } + ${ y } = ${ x / y }`
console.log(equation); //1.6666666666666667

var r_equation = `${ x } + ${ y } = ${ Math.round(x / y) }`
console.log(r_equation); //2

// スプレッド演算子を使用し、可変長引数を配列で受け取る。
function tag(strings, ...values){
 if(values[0] < 20) {
  values[1] = "so happy";
 }
 return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

var short_msg = tag`${new Date().getHours()}${""}`;
var message = tag`It's ${new Date().getHours()} o'clock. I'm ${""}`;
console.log("取得した値 : " + short_msg);
console.log("値を繋げて完成したメッセージ : " + message);