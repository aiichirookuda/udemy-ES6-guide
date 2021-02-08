/* filterメソッドもよく使う。
アマゾンなどの商品リストで、商品検索をする際の絞り込み機能などで使われる。 */

// 例）商品の絞り込み。
var products = [
  { name: 'きゅうり', type: '野菜' },
  { name: 'バナナ', type: 'フルーツ' },
  { name: 'セロリ', type: '野菜' },
  { name: 'オレンジ', type: 'フルーツ' },
];
// memo:既にあるデータはやっぱりミューテイトしない。

// forループの場合。
var filteredProducts = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'フルーツ') {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;
/* => [{name:"バナナ",type:"フルーツ"},{name:"オレンジ",type:"フルーツ"}] */

// filterの場合。
products.filter(function (product) {
  return product.type === 'フルーツ';
});
/* => [{name:"バナナ",type:"フルーツ"},{name:"オレンジ",type:"フルーツ"}] */


// 例）応用：もっと複雑に絞り込む。種類が野菜で、量が0より多く、値段が10より小さいもの。
var products = [
  { name: 'きゅうり', type: '野菜', quantity: 0, price: 1 },
  { name: 'バナナ', type: 'フルーツ', quantity: 10, price: 15 },
  { name: 'セロリ', type: '野菜', quantity: 30, price: 9 },
  { name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5 },
];

products.filter(function (product) {
  return product.type === '野菜' && product.quantity > 0 && product.price < 10;
});
/* => ["name":"セロリ","type":"野菜","quantity":"30","price":9] */


/*filterの使いどころ。
ブログアプリで、ある投稿(Post)に対してのコメント(Comment)をとってきたいときなど。 */
var post = { id: 4, title: '初めての投稿' };
var comments = [
  { postId: 4, content: 'いい記事ですね！' },
  { postId: 3, content: '勉強になりました' },
  { postId: 4, content: 'なるほど' }
];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.posId === post.Id;
  });
};

commentsForPost(post, comments);
/* => [{"postId":4,"content":"いい記事ですね!"},{"postId":4,"content":"なるほど"}] */

// 興味のあるデータのみに絞り込む。関連するデータのみに絞り込むためなどに使える！