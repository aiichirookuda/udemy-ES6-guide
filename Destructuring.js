// 分割代入(Destructuring)

// オブジェクトの分割代入・・・オブジェクトからプロパティを抽出する。
// 例）家計簿
// ES5
var expense = {
  type: '交際費',
  amount: '4500 JPY'
}

var type = expense.type;
var amount = expense.amount;

type; // =>交際費
amount; // => 4500 JPY

// ES6
const { type, amount } = expense; //expenseの中のtype, amount

type; // =>交際費
amount; // => 4500 JPY
// 超スッキリ！！


// 関数の中でも分割代入は使える。

// 例）
var savedFile = {
  extension: 'jpg',
  name: 'profile',
  size: ' 14040'
}

// ES5
function fileSummary(file) {
  return file.name + '.' + file.extension + 'の容量は' + file.size + 'です。'
}

fileSummary(saveFile); //=> profile.jpgの容量は14040です。

// ES6
// 関数の引数の中でも分割代入が使える！
function fileSummary({ name, extension, size }) {
  return `${name}.${extension}の容量は${size}です。`;
}

fileSummary(saveFile); //=> profile.jpgの容量は14040です。

// 他にも引数を渡したいときは第二引数で渡せばよい。
function fileSummary({ name, extension, size }, username) {
  return `${username}: ${name}.${extension}の容量は${size}です。`;
}

fileSummary(saveFile, { username: 'ken' }); //=> ken: profile.jpgの容量は14040です。


// 配列の分割代入・・・配列から要素を抽出する。
const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [name1, name2, name3] = companies;
name1; //=> Google
name2; //=> Facebook
name3; //=> Uber

// []なら要素、{}ならプロパティが抽出される。
// const [length] = companies;
// length; => Google

// const { length } = companies;
// length; => 3

// memo: 分割代入とRest演算子は組み合わせて使うことが多い。
const [name1, ...rest] = 'companies';
name1; //=> Google
rest; //=> ["Facebook","Uber"]


// 配列とオブジェクトの分割代入の組み合わせた使い方。
// 例）
const companies = [
  { name: 'Google', location: 'マウンテンビュー', },
  { name: 'Facebook', location: 'メロンパーク', },
  { name: 'Uber', location: 'サンフランシスコ', }
];

// 使っていない場合。
const location = companies[0].location;
location; //=> マウンテンビュー

// 使った場合。
const [{ location }] = companies;
location; //=> マウンテンビュー

// 正直好み。

// こんなこともできる。
const Google = {
  locations: ['マウンテンビュー', 'メロンパーク', 'サンフランシスコ']
};

const { locations: [first, ...rest] } = Google;
first; //=> マウンテンビュー
rest; //=> ["メロンパーク","サンフランシスコ"]


// 分割代入の使いどころ。
// 例）ユーザー名とパスワードを基にユーザーを作ってデータベースに保存する関数。
function signup(username, password, email, birthday, city) {
  // ここでユーザーを作成してDBに保存する
};

signup('myUsername', 'myPassword', 'myemail@example.com', '1990/1/1', '東京');

// ↑これだけ関数の引数が増えてくると後々メンテしにくい！！

// 関数の引数をオブジェクトで渡すことによってすっきりするし、プロパティを抽出しやすい！
function signup({ username, password, email, birthday, city }) {
  // ここでユーザーを作成してDBに保存する
};

const user = {
  username: 'myUsername',
  password: 'myPassword',
  email: 'myemail@example.com',
  birthday: '1991/1/1',
  city: '東京'
};

signup(user);


// 例）APIとってきた情報を自分の思った形に整形する方法。
// ↓これを...
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

// ↓こうしたい！
/*
[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 },
]
*/

points.map(([x, y]) => {
  return { x, y };
});
//=> [{"x":4,"y":5},{"x":10,"y":1},{"x":0,"y":40}]