import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSize } from './add-size';

describe('AddSize', () => {
  let component: AddSize;
  let fixture: ComponentFixture<AddSize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSize);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
