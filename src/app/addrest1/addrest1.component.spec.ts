import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addrest1Component } from './addrest1.component';

describe('Addrest1Component', () => {
  let component: Addrest1Component;
  let fixture: ComponentFixture<Addrest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addrest1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addrest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
