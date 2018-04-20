import { TestBed, inject } from '@angular/core/testing';

import { ShoppingService } from './shopping.service';

describe('ShoppingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingService]
    });
  });

  it('should be created', inject([ShoppingService], (service: ShoppingService) => {
    expect(service).toBeTruthy();
  }));
});
