import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWeight } from './product-weight';

describe('ProductWeight', () => {
  let component: ProductWeight;
  let fixture: ComponentFixture<ProductWeight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductWeight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWeight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
