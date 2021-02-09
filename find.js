// 例）配列usersから次郎を探す。
// forループの場合。
var users = [
  { name: '太郎' },
  { name: '次郎' },
  { name: '三郎' },
];

var user;

for (var i = 0; i < users.length; i++) {
  if (user[i].name === '次郎') {
    user = [i];
    break; /* 次郎が見つかった時点でループを止める。 */
  }
}

user; /* => {"name":"次郎"} */

// findの場合。
users.find(function (user) {
  return user.name === '次郎';
});
// => {"name":"次郎"}

/* memo:
var users = [
  { name: '太郎' },
  { name: '次郎', id: 1 },
  { name: '三郎' },
  { name: '次郎', id: 10},
];
findは上記のように次郎が2人いる場合、id:1の次郎のみが出力される。
forループのbreakが標準で入っているような感じ。
*/

// 例）コメント(comment)に紐づく、投稿(post)を探す。
var posts = [
  { id: 1, title: '古い投稿' },
  { id: 2, title: '新しい投稿' }
];

var comment = {
  postId: 2, content: 'いいね！'
}

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  })
}

postForComment(posts, comment);


/* findの使いどころ。
URL: "forum.com/posts/45" → 全投稿(posts)の中からIDが45のものを探す。 */
const posts = [
  { id: 1, title: '投稿のタイトル1' },
  { id: 2, title: '投稿のタイトル2' },
  { id: 3, title: '投稿のタイトル3' },
  { id: 4, title: '投稿のタイトル4' },
  { id: 5, title: '投稿のタイトル5' },
  // .....
];

const posId = getFromURL();
posts.find(post => post.id === postId);


// 演習問題：管理者権限(admin)をもったユーザーを探す。
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin; /* NG例)user.admin === true; */
});


