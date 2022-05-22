class Person {
  constructor(name) {
    this.name = name;
  }

  greet1() {
    const doIt = function () {
      console.log(`Hi, I'm ${this.name}`);
    };
    const bindedDoIt = doIt.bind(this); // 1. 関数に this を束縛
    bindedDoIt();
  }

  greet2() {
    const doIt = function () {
      console.log(`Hi, I'm ${this.name}`);
    };
    doIt.call(this); // 2. this を指定して実行
  }

  greet3() {
    const _this = this; // 3. 変数 _this に値を移し替える
    const doIt = function() {
      console.log(`Hi, I'm ${_this.name}`);
    };
    doIt();
  }

  greet4() {
    const doIt = () => { // 4. アロー関数式で定義
      console.log(`Hi, I'm ${this.name}`);
    }
    doIt();
  }

  greet5 = () => {
    const doIt = () => {
      console.log(`Hi, I'm ${this.name}`);
    };
    doIt();
  }
}

const creamy = new Person('Mami');
creamy.greet1();
creamy.greet2();
creamy.greet3();
creamy.greet4();
creamy.greet5();
