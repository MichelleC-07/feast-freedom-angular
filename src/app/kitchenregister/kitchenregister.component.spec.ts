import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenregisterComponent } from './kitchenregister.component';

describe('KitchenregisterComponent', () => {
  let component: KitchenregisterComponent;
  let fixture: ComponentFixture<KitchenregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
