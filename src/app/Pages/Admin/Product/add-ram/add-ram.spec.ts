import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRAM } from './add-ram';

describe('AddRAM', () => {
  let component: AddRAM;
  let fixture: ComponentFixture<AddRAM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRAM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRAM);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
