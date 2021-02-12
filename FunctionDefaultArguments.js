// ES5
function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  }

  // ajaxリクエストがここにあると想定

  return method;
};

makeAjaxRequest('google.com'); /* =>GET */
makeAjaxRequest('google.com', POST); /* =>POST */


// ES6
function makeAjaxRequest(url, method = 'GET'){

  // ajaxリクエストがここにあると想定

  return method;
};

makeAjaxRequest('google.com'); /* =>GET */
makeAjaxRequest('google.com', POST); /* =>POST */
makeAjaxRequest('google.com', null); /* 空の値になる */
makeAjaxRequest('google.com', undefined); /* =>GET */


// 例）管理者権限を持ったユーザーを作る。
function User(id) {
  this.id = id;
};

function generateId() {
  return Math.random() * 999999;
};

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

createAdminUser();