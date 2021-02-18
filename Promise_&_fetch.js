// Promiseとは・・・
// Promiseには3つの状態がある。
// unresolved=>待機 ,resolved=>成功 ,rejected=>失敗

// Promiseを使っているときはajaxがからんでいることが多い。


// Promiseを作ってみる。
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000)
});

promise
  // 成功(resolve)したときに呼ばれる。
  .then(() => console.log('処理が完了しました！！'))
  .then(() => console.log('ここも実行されるよ！！'))
  // 失敗(rejected)したときに呼ばれる。
  .catch(() => console.log('問題発生！！'));


  // fetchを使ってajaxリクエスト
  url = 'https://jsonplaceholder.typicode.com/posts/';

  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('問題発生！！',error))

// fetchの欠点・・・
// ネットワークのリクエストが失敗したときにだけcatchに入る。
// サーバーが何かしらレスポンスを返してきた場合はthenの方に入る。
// jQueryやaxiosなどのサードパーティ製のajaxライブラリは以上なステータスコードが入ってきた場合はcatchの方に入る。
// ネイティブのfetchは失敗の定義に注意しなければならない。

// なので...ajaxのリクエストを送るときはjQuery、axiosなどのライブラリを使う方が分かりやすいコードで書ける。