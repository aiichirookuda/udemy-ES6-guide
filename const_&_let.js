// constとletはES6ならではの新機能。
// 「const」 = 今後変わる予定の無いもの。（定数）
// 「let」 = 今後変わる予定のもの。（変数）

// 例）サラリーマンの社員データで例えると。
// var name = '太郎';
// var title = 'Webアプリケーションエンジニア';
// var hourlySalary = 4000;

// ES6の場合。

const name = '太郎';
let title = 'Webアプリケーションエンジニア';
let hourlySalary = '4000';

// 時間が経過したとして。。。

// name = '次郎' → TypeError: Assignment to constant variable.
// 定数を更新しようとするとエラーが発生する。
title = 'リードWebアプリケーションエンジニア';
hourlySalary = 4500;
// 変数は更新可能。


// なぜ「const」と「let」を使うのか。なぜES6に導入したのか。
/* 他人が書いたコードをリファクタリングするときなどに、代入されている値が変えていいものなのか、
そうではないものなのかが分かり、読みやすくなるから。*/