// Rest演算子[...]・・・バラバラなものを配列にまとめてくれる。
// 例）
function addNumber(a, b, c, d, e) {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumber(1, 2, 3, 4, 5);

/* 上記だとaddNumber()に入れる数字を増やすのに、
addNumber()の引数と定数numberの中身を修正しなければならない。
とても面倒くさい！！*/

// どうすればよいか。

function addNumber(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);/* =>55 */


// Spread演算子[...]・・・まとまっている配列を分解してくれる。
const defaultColors = ['赤', '緑'];
const userFavoriteColors = ['オレンジ', '黄'];

defaultColors.concat(userFavoriteColors);
// => ["赤","緑","オレンジ","黄"]

// Spread演算子を使うとどうなるか。
[...defaultColors, ...userFavoriteColors];
// => ["赤","緑","オレンジ","黄"]

// concatじゃだめなの？

// 例えば・・・
const fallColors = ['茶', '紅葉']; /* 新しく配列を先頭に加えたいとき */
// 1個、2個だけ値を使いしたいときなど便利！

['青', ...fallColors, '紫', ...defaultColors, ...userFavoriteColors];
// 超簡単に調整できる！！


// 例）ショッピングカートに牛乳がなかったら自動的に牛乳が入る関数。
function validateShoppingCart(...items) {
  if (items.indexOf('牛乳') < 0) {
    return ['牛乳', ...items];
  }

  return items;
};

validateShoppingCart('オレンジ', 'パン');
// => ["牛乳","オレンジ","パン"]


// RestとSpread演算子の使いどころ。
// 例）MathLibraryの掛け算プログラムcalculateProductをmultiplyという名前に変えたい。
const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

MathLibrary.calculateProduct(2, 3); // => 6
MathLibrary.multiply(2, 3); // => 6



// [...]はまとめてくれるしバラバラにもしてくれる。