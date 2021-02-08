var colors = ['red', 'blue', 'green'];

// forループ文は読みにくいし、書きづらい。
far(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEachの方が簡単に読めるし、書きやすい。
colors.forEach(function (color) {
  console.log(color);
});

// 例）配列の数字の合計を計算する。
// 数字の配列を用意する。
var numbers = [1, 2, 3, 4, 5];

// 合計を保持する変数を用意する。
var sum = 0;

// 配列の一つ一つの数字を合計に足す。
numbers.forEach(function (number) {
  sum += number;
});

// 合計を表示する。
sum; /* => 15 */

/*
なぜforEachを使うのか。
実は、map,filter,find,reduceなど便利メソッドはforEachでも書くことができる。
しかし、コードの読みやすさだとmapで出来ることはmapで書いた方が、より読みやすい。
forループを使って書くのならforEachを使ったほうがやはり簡単だから！
*/

// 例）選択したメール削除する。
emails.forEach(function (email) {
  deleteEmail(email);
});

// 演習問題
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image){
   areas.push(image.height * image.width);
});

console.log(areas); /* => [300, 1800, 1728] */
