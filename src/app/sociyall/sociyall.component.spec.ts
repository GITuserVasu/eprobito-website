import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociyallComponent } from './sociyall.component';

describe('SociyallComponent', () => {
  let component: SociyallComponent;
  let fixture: ComponentFixture<SociyallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociyallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociyallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
