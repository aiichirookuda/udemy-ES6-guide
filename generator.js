// generatorはfor...ofループと組み合わせると非常に強力！
// for...ofループってなんだ？

// 例）
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

// 例）
const numbers = [1, 2, 3, 4];

let total = 0;

for (let number of numbers) {
  total += number;
}
//=> 10


// generatorって何？
// generatorは何回も入れるし、何回も値を返すことのできる不思議な関数。
function* numbers() {
  yield;
}

const gen = numbers();
gen.next();//=> {"done":false}
gen.next();//=>{"done":true}

// 訳わかんないね。
// わかったことは...function*でgeneratorになる。yield、.nextっていう構文がある。


function* shopping() {
  // 歩道

  // 歩道を歩いてお店に行く

  // お店に到着したのでお金を持ってお店に入る
  const stuffFromStore = yield 'お金';

  // コインランドリーに到着したので、服を持って入る。
  const cleanClothes = yield '汚れた服';

  // 家に歩いて帰る。
  return [stuffFromStore, cleanClothes];
}

// お店関連の世界
const gen = shopping();
gen.next();// 家から歩道にでる。
gen.next('日用品');// お店で買い物をして日用品を持って歩道にでる。
gen.next('綺麗な服');

/*=>
{"value":"お金","done":false}
{"value":"汚れた服","done":false}
{"value":["日用品","綺麗な服"],"done":true}
 */

// generatorの使い方
function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
gen.next();//=> {"value":"red","done":false}
gen.next();//=> {"value":"blue","done":false}
gen.next();//=> {"value":"green","done":false}
gen.next();//=> {"done":true}

// .next()書くの面倒！何回呼んだらいいかも確認するのも面倒！
// for...ofループを使おう！

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

myColors;//=> "red","blue","green"]


// generatorの実用的な使い方
// チームのメンバーだけを抽出する。
const testingTeam = {
  lead: '典子',
  tester: '隆'
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎'
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);//ここと
  yield* testingTeamGenerator;//ここで2つのジェネレーターを連携させている。
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names;//=> ["太郎","花子","次郎"]

// 便利だけどぱっと見でちょっと分かりにくい。メンテしにくそう。

// Symbol.iteratorで解決
const testingTeam = {
  lead: '典子',
  tester: '隆',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}

names;


// generatorはどういうときに使うのか。
// 掲示板などのコメントのツリー構造の構築などに使う。

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('賛成！！', []),
  new Comment('反対！！', []),
  new Comment('うーん。。。',[])
];

const tree = new Comment('非常に良い記事です！',children);

const values = [];
for (let value of tree) {
  values.push(value);
}

values;
//=> 4
//=> ["非常に良い記事です！","賛成！！","反対！！","うーん。。。"]