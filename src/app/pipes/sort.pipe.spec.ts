import { TestBed } from '@angular/core/testing';
import { Tariff } from '../models';
import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {

  let pipe: SortPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortPipe]
    });
    pipe = TestBed.inject(SortPipe);
  });


  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort tariffs by downloadSpeed in ascending order', () => {
    const tariffs: Tariff[] = [
      { id: 1, name: 'Basic Plan', downloadSpeed: 50, uploadSpeed: 10, price: 9.99, benefits: [] },
      { id: 2, name: 'Standard Plan', downloadSpeed: 100, uploadSpeed: 25, price: 19.99, benefits: [] },
      { id: 3, name: 'Premium Plan', downloadSpeed: 200, uploadSpeed: 50, price: 29.99, benefits: [] }
    ];

    const sortedTariffs = pipe.transform(tariffs, 'downloadSpeed');

    expect(sortedTariffs).toEqual([
      { id: 3, name: 'Premium Plan', downloadSpeed: 200, uploadSpeed: 50, price: 29.99, benefits: [] },
      { id: 2, name: 'Standard Plan', downloadSpeed: 100, uploadSpeed: 25, price: 19.99, benefits: [] },
      { id: 1, name: 'Basic Plan', downloadSpeed: 50, uploadSpeed: 10, price: 9.99, benefits: [] },
    ]);
  });

  it('should sort tariffs by price in ascending order', () => {
    const tariffs: Tariff[] = [
      { id: 1, name: 'Basic Plan', downloadSpeed: 50, uploadSpeed: 10, price: 9.99, benefits: [] },
      { id: 2, name: 'Standard Plan', downloadSpeed: 100, uploadSpeed: 25, price: 19.99, benefits: [] },
      { id: 3, name: 'Premium Plan', downloadSpeed: 200, uploadSpeed: 50, price: 29.99, benefits: [] }
    ];

    const sortedTariffs = pipe.transform(tariffs, 'price');

    expect(sortedTariffs).toEqual([
      { id: 1, name: 'Basic Plan', downloadSpeed: 50, uploadSpeed: 10, price: 9.99, benefits: [] },
      { id: 2, name: 'Standard Plan', downloadSpeed: 100, uploadSpeed: 25, price: 19.99, benefits: [] },
      { id: 3, name: 'Premium Plan', downloadSpeed: 200, uploadSpeed: 50, price: 29.99, benefits: [] }
    ]);
  });

  it('should sort tariffs by uploadSpeed in descending order', () => {
    const tariffs: Tariff[] = [
      { id: 1, name: 'Basic Plan', downloadSpeed: 50, uploadSpeed: 10, price: 9.99, benefits: [] },
      { id: 2, name: 'Standard Plan', downloadSpeed: 100, uploadSpeed: 25, price: 19.99, benefits: [] },
      { id: 3, name: 'Premium Plan', downloadSpeed: 200, uploadSpeed: 50, price: 29.99, benefits: [] }
    ];

    const sortedTariffs = pipe.transform(tariffs, 'uploadSpeed');

    expect(sortedTariffs).toEqual([
      { id: 3, name: 'Premium Plan', downloadSpeed: 200, uploadSpeed: 50, price: 29.99, benefits: [] },
      { id: 2, name: 'Standard Plan', downloadSpeed: 100, uploadSpeed: 25, price: 19.99, benefits: [] },
      { id: 1, name: 'Basic Plan', downloadSpeed: 50, uploadSpeed: 10, price: 9.99, benefits: [] }
    ]);
  });

});
