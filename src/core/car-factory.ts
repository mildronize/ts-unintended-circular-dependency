import 'reflect-metadata';
import { Tokens } from './';
import { container } from 'tsyringe';
import { Car } from '@/car';

export class CarFactory {
  public static getCar() {
    container.register(Tokens.Color, { useValue: 'Red' });
    return container.resolve(Car);
  }
}
