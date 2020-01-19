import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreetComponent } from './decreet.component';

describe('DecreetComponent', () => {
  let component: DecreetComponent;
  let fixture: ComponentFixture<DecreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
