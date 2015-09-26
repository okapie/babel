"use strict";

var _templateObject = _taggedTemplateLiteral(["", "", ""], ["", "", ""]),
    _templateObject2 = _taggedTemplateLiteral(["It's ", " o'clock. I'm ", ""], ["It's ", " o'clock. I'm ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var salutation = "Hello";
var place = "Japan";
var greeting = salutation + ", OKAP lives in " + place + "! How about you?";
console.log(greeting);

var x = 5;
var y = 3;
var equation = x + " + " + y + " = " + x / y;
console.log(equation); //1.6666666666666667

var r_equation = x + " + " + y + " = " + Math.round(x / y);
console.log(r_equation); //2

// スプレッド演算子を使用し、可変長引数を配列で受け取る。
function tag(strings) {
  if (arguments[1] < 20) {
    arguments[2] = "so happy";
  }
  return "" + strings[0] + arguments[1] + strings[1] + arguments[2];
}

var short_msg = tag(_templateObject, new Date().getHours(), "");
var message = tag(_templateObject2, new Date().getHours(), "");
console.log("取得した値 : " + short_msg);
console.log("値を繋げて完成したメッセージ : " + message);
