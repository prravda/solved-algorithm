// prototypal object Person
function PersonProto(name, age) {
  this.name = name;
  this.age = age;
}

PersonProto.prototype.sayHi = function() {
  console.log(`hi im ${this.name}, ${this.age}`);
}

const inseobProto = new PersonProto('inseob', 25);
inseobProto.sayHi();


class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`hi im ${this.name}, ${this.age} with class`);
  }
}

const inseobClass = new PersonClass('inseob', 25);
inseobClass.sayHi();