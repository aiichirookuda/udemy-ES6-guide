// classの裏側にはプロトタイプチェーンというものの仕組みが使われている。

// ES5
function Car(options) {
  this.title = options.title;
};

Car.prototype.drive = function () {
  return 'ウィーン';
}

var car = new Car({ title: 'プリウス' });

car; //=> {"title":"プリウス"}
car.drive(); //=> ウィーン

// classの継承っぽいものをプロトタイプチェーンで書く。
function Toyota(options) {
  Car.call(this.options);
  this.color = options.color;
};

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return 'ブブー！！'
}

const toyota = new Toyota({ color: 'red', title: 'アクア' });
toyota; //=> {"title":"アクア","color":"red"}
toyota.drive(); //=> ウィーン
toyota.honk(); //=> ブブー！！


// ES6
class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'ウィーン';
  }
}

const car = new Car({ title: 'アクア' });
car; //=>{"title":"アクア"}
car.drive(); //=>ウィーン


class Toyota extends Car{
  constructor(options) {
    super(options); // Car.constructor()を呼んでるのと同じこと。
    this.color = options.color;
  }

  honk() {
    return 'ブブー！！';
  }
}

const toyota = new Toyota({ color: 'red', title: 'アクア'});
toyota; //=> {"title":"アクア", "color":"red"}
toyota.drive(); //=>ウィーン
toyota.honk(); //=> ブブー！！


// classの使いどころ。
// Reactで開発を行うときなど。
// Reactが用意してくれたComponentクラスを継承してクラスを作成することができる。
class MyComponent extends Component {
  // その中で自分のカスタムロジックを入れていける。
  doSomething() {

  }

  doSomethingElse() {

  }
}

// また自分のコードの中で継承してclassを直感的に作成できる。
class MyOtherComponent extends MyComponent {

}

