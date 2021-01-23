class Car {
  constructor(doors, engine, color){
    this.doors =doors;
    this.engine = engine;
    this.color = color;
  }

  carStats (){
    return `This car has ${this.doors} doors, a ${this.engine} engine and ${this.color} color`
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2;
  }
}

class SUV extends Car {
  constructor(doors, engine, color, brand, carStats){
    super(doors, engine, color, carStats);
    this.brand = brand;
    this.wheel = 4;
    this.ac = true;
  }

  myBrand() {
    return console.log(`this SUV is a ${this.brand}`)
  }
}

const cx5 = new SUV(4, 'V5', 'gray', 'mazda');
console.log("🚀 ~ file: app.js ~ line 34 ~ cx5", cx5)
console.log( cx5.myBrand())
