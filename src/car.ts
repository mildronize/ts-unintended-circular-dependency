import { injectable, inject } from 'tsyringe';

// 1. Error (Circular Dependency)
import { Tokens } from './core';
// 2. No Error
// import { Tokens } from './core/constant';

@injectable()
export class Car {
  constructor(@inject(Tokens.Color) private color: string) {}

  public getColor() {
    return this.color;
  }
}
