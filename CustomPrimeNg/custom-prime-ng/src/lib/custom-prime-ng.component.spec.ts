import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPrimeNgComponent } from './custom-prime-ng.component';

describe('CustomPrimeNgComponent', () => {
  let component: CustomPrimeNgComponent;
  let fixture: ComponentFixture<CustomPrimeNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPrimeNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
