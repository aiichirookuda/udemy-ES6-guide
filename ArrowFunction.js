// ES5の場合。
const add = function (a, b) {
  return a + b;
}
add(1, 2);/* =>3 */

// ES6の場合。
const add = (a, b) => {
  return a + b;
}
add(1, 2);/* =>3 */

// さらにリファクタ。
// ひとつしか行がない場合。
// {}とreturnを省略できる。
const add = (a, b) => a + b;
add(1, 2);/* =>3 */

// さらに引数がひとつなら()も省略できる。
const double = number => 2 * number;
double(8); /* =>16 */


// 例）アロー関数を使ってリファクタしてみる。
const numbers = [1, 2, 3];

numbers.map(function (number) {
  return 2 * number;
});
/* =>[2,4,6] */

// ↓引数が一個なので()省略。評価行がひとつなのでreturnと{}を省略。
numbers.map(number => 2 * number); /* 超スッキリ！！ */
/* =>[2,4,6] */


// アロー関数のもうひとつの機能。

// ES5
const team = {
  members: ['太郎', '花子'],
  teamName: 'ス-パーチーム',
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member}は${this.teamName}の所属です。`;
    }/* .bind(this) */);
  }
};

team.teamSummary();
// TypeError: Cannot read property 'teamName' of undefined.
// thisがundefinedになっている。
// コールバック関数からteamNameを持ってこれない。
// .bind(this)で明示的に紐づけることで解決は可能。

// ES6
const team = {
  members: ['太郎', '花子'],
  teamName: 'ス-パーチーム',
  teamSummary: function () {
    // this === team にもなる。
    return this.members.map(member => `${member}は${this.teamName}の所属です。`);
  }
};

team.teamSummary();
// => ["太郎はスーパーチームの所属です。","花子はスーパーチームの所属です。"]

// アロー関数のおかげで感覚的にthisが使えるようになる！！
