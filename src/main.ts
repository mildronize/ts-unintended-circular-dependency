import 'reflect-metadata';
// 1. Error (Circular Dependency)
import { CarFactory } from './core';
// 2. No Error
// import { CarFactory } from './core/core';

const car = CarFactory.getCar();
console.log(`Car color is ${car.getColor()}`);
