// every、someと同じく、配列をひとつの値に集約していく動きをする。

// 例）配列numberの数字の合計を計算する。
var numbers = [10, 20, 30];

// forループの場合。
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// => 60

// reduceを使った場合。
numbers.reduce(function (sum, number) {
  return sum + number;
}, 0/* ←sumの初期値 */);
// => 60
/* 上記の動きの中身。
初期値0+10 => 10+20 => 30+30 => 60 */


// 例）
var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);
// => ["red","yellow","blue"]


/* reduceの面白い使い方。
'(((())))'←これが均衡がとれているか確認したい。

考え方：'('を+1、')'を-1とし、0になったら均衡が取れているとする。
ただし、最初に')'がきたら均衡がとれないのでケアが必要。
*/
function balancedParens(string) {
  return !string.split('')/*渡ってきた文字列を分解=>["(",")"]*/.reduce(function (previous, char) {
    if (previous < 0) { return previous; } /* マイナスになった時点で均衡がとれていない判定をする。 */
    if (char === '(') { return previous + 1; }
    if (char === ')') { return previous - 1; }
  }, 0);
};

balancedParens('()');
