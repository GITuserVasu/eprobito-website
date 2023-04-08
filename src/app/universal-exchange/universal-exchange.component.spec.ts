import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalExchangeComponent } from './universal-exchange.component';

describe('UniversalExchangeComponent', () => {
  let component: UniversalExchangeComponent;
  let fixture: ComponentFixture<UniversalExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalExchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversalExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
