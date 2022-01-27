import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  fruits: string[] = [];

  public add(x: number, y: number) {
    return x + y;
  }

  public substract(x: number, y: number) {
    return x - y;
  }

  public addFruit(fruit: string) {
    this.fruits.push(fruit);
  }
}
