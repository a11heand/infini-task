/**
 * FILE: sophisticated_program.js
 *
 * DESCRIPTION:
 * This code represents a complex and sophisticated program that showcases various JavaScript features
 * and demonstrates advanced programming techniques.
 *
 * FEATURES DEMONSTRATED:
 * - Object-oriented programming (OOP) using classes, inheritance, and encapsulation
 * - Asynchronous programming using Promises and async/await
 * - Error handling using try/catch blocks
 * - Manipulation of complex data structures like arrays and objects
 * - DOM manipulation and event handling
 *
 * NOTE:
 * Although this code aims to be elaborate and complex, it may not necessarily have a specific real-world application.
 * Its purpose is to demonstrate advanced JavaScript programming techniques.
 */

// Helper function to simulate an asynchronous API call
function simulateAPICall(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, Math.random() * 2000 + 1000);
  });
}

// Parent class representing a vehicle
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    return simulateAPICall(`${this.make} ${this.model} engine started.`);
  }

  stopEngine() {
    return simulateAPICall(`${this.make} ${this.model} engine stopped.`);
  }

  accelerate() {
    return simulateAPICall(`${this.make} ${this.model} accelerating...`);
  }

  brake() {
    return simulateAPICall(`${this.make} ${this.model} braking...`);
  }
}

// Child class representing an electric vehicle
class ElectricVehicle extends Vehicle {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  chargeBattery() {
    return simulateAPICall(`Charging ${this.make} ${this.model} battery...`);
  }
}

// Create instances of vehicles
const car = new Vehicle('Toyota', 'Camry', 2021);
const bike = new ElectricVehicle('Zero', 'SR/F', 2022, '75 kWh');

// Start the engines and demonstrate async/await
(async () => {
  try {
    const carEngineStart = await car.startEngine();
    console.log(carEngineStart);

    const bikeEngineStart = await bike.startEngine();
    console.log(bikeEngineStart);

    const carAccelerate = await car.accelerate();
    console.log(carAccelerate);

    const bikeAccelerate = await bike.accelerate();
    console.log(bikeAccelerate);

    const carBrake = await car.brake();
    console.log(carBrake);

    const bikeBrake = await bike.brake();
    console.log(bikeBrake);

    const carEngineStop = await car.stopEngine();
    console.log(carEngineStop);

    const bikeEngineStop = await bike.stopEngine();
    console.log(bikeEngineStop);

    const bikeChargeBattery = await bike.chargeBattery();
    console.log(bikeChargeBattery);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();

// Event handling example
const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Complex data manipulation
const data = {
  fruits: ['apple', 'banana', 'orange'],
  vegetables: ['carrot', 'broccoli', 'spinach'],
  protein: ['chicken', 'beef', 'tofu'],
};

for (const key in data) {
  console.log(`Category: ${key}`);
  console.log(`Items: ${data[key].join(', ')}`);
}