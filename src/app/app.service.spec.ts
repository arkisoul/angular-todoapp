import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('[add] method adds two numbers x + y', () => {
    expect(service.add(10, 20)).toBe(30)
  })

  it('[substract] method substract two numbers x - y', () => {
    expect(service.substract(20, 10)).toBe(10);
  });

  it('adds a fruit to the fruits array', () => {
    service.addFruit('Apple');
    expect(service.fruits).toEqual(['Apple']);
  });
});
