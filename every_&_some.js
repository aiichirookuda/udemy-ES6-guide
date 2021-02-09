// everyとsomeは動きが似ている。配列を一個の値に集約していく動き。真偽の確認。

// 例）
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

// 16GB ramが必要なソフトあったとして、上記のコンピュータで動くか調べる。

// forループの場合
// 全てで動かせるフラグ
var allComputersCanRun = true;

// どれかでは動かせるフラグ
var someComputersCanRun = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
}

allComputersCanRun; /* => false */
someComputersCanRun; /* => true */

// everyを使った場合
computers.every(function (computer) {
  return computer.ram >= 16;
});
// => false

// 短くてわかりやすい！

//someを使った場合
computers.some(function (computer) {
  return computer >= 16;
});
// => true

// 「every」 ...全てtrueならtrueを返す。 true && false && true = false;
// 「some」...ひとつでもtrueならtrueを返す。 true || false || true = true;


// 例）配列nameのname値が全て3文字以上かどうかを確認する。
var names = [
  'けん',
  'はなこ',
  'そういちろう'
];

names.every(function (name) {
  return name.length >= 3;
});
// => false

name.some(function (name) {
  return name.length >= 3;
});
// => true


/* everyとsomeの使いどころ。
ログインフォームで、ID、パスをバリデーション(検証)するときなど。 */
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
}
// valueが0文字以上かのバリデート。

var username = new Field('my_username');
var password = new Field('my_password');
var birthday = new Field('2010/10/10');

var fields = [
  username,
  password
];

var formIsValid = fields.every(function(field) {
  return field.validate();
});

if(formIsValid) {
  // サーバーにリクエストを投げる。
} else {
  // エラーを表示する。
}