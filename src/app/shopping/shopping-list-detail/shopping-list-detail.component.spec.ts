import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDetailComponent } from './shopping-list-detail.component';

describe('ShoppingListDetailComponent', () => {
  let component: ShoppingListDetailComponent;
  let fixture: ComponentFixture<ShoppingListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
