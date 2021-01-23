// define class declaration
// class Car{
//   constructor(doors, engine, color) {
//     this.doors =  doors;
//     this.engine = engine;
//     this.color = color;
//   }
// }

// const cx5 = new Car(4, 'V6', 'gray')
// console.log("🚀 ~ file: 0.introductionClass.js ~ line 9 ~ cx5", cx5)

//when you change the initial => the value of cx5 changes too;

// if constructor this.color = 'white' > cx5.color = white

// CLASS EXPRESSION

const Car = class {
  constructor(doors, engine, color) {
    this.doors =  doors;
    this.engine = engine;
    this.color = color;
  }
}

const cx6 = new Car(4, 'V6', 'gray')
console.log("🚀 ~ file: 0.introductionClass.js ~ line 28 ~ cx6", cx6)
