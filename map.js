// mapメソッドはかなり頻繁に使う。

// 例）配列numberの数字を2倍に計算し、新しい配列に格納する。
var numbers = [1, 2, 3]; /* memo:既にあるものは変えない。ミューテイトしない。 */

// forループの場合
var doubledNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

doubleNumbers; /* =>[2, 4, 6] */

// mapの場合
var doubled = numbers.map(function (number) {
  return number * 2; /* returnしないと値が返らない。 */
});

doubled; /* =>[2, 4, 6] */


// 例）配列carのpriceだけ抜き出したい。
var car = [
  {type: '中古車', price: '安い'},
  {type: '新車', price: '高い'}
];

var price = cars.map(function(car){
  return car.price;
});

price; /* => ["安い","高い"] */

// 配列の中の一部だけを画面の部品に使いたいときなどに便利！


/* mapの使いどころ
WEBアプリケーションの開発では必ずと言って良いほど使う。
データのコレクション（データの一覧）を取り扱う際に、出力したい部分だけを抜き出してHTMLなどに当てはめていく。 */

