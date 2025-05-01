class Car {
    engine= "";
    wheels = 0;
    color = "";
  }
  
  class CarBuilder {
    car = new Car();
  
    setEngine(engine) {
      this.car.engine = engine;
      return this;
    }
  
    setWheels(count) {
      this.car.wheels = count;
      return this;
    }
  
    setColor(color) {
      this.car.color = color;
      return this;
    }
  
    build() {
      return this.car;
    }
  }
  
  // Usage
  const car = new CarBuilder().setEngine("V8").setWheels(4).setColor("red").build();
  console.log(car); // { engine: 'V8', wheels: 4, color: 'red' }
  