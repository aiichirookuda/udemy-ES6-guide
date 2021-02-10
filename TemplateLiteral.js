// 例）今年の年数を表示する。

// ES5の場合。
function getMessage() {
  const year = new Date().getFullYear();

  return '今年は' + year + '年です。';
}

getMessage(); /* 今年は2021年です。 */

// ES6の場合。
function getMessage() {
  const year = new Date().getFullYear();

  return `今年は${year}年です.`;
}

getMessage();

// ${} ←この中にはJSなら何を入れてもOK。
// テンプレートリテラルを使うことですっきりと記載できる。


// テンプレートリテラルの使いどころ。
/* 例）インスタグラムに自動的に写真をプログラムでアップロードしたい！ */

// PHP
// $data = '{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"}';

// ES5
var device_id = 4;
var guid = 20;
var username = 'hello';

var data = '{"device_id":"' + device_id + ' ","guid":"' + guid + '","username":"' + username + '","}';
data;
// => {"device_id":"4","guid":"20","username":"hello","}

// ES6
const device_id = 4;
const guid = 20;
const username = 'hello';

const data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}","}`;
data;
// => {"device_id":"4","guid":"20","username":"hello","}



