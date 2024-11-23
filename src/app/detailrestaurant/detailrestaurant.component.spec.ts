import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailrestaurantComponent } from './detailrestaurant.component';

describe('DetailrestaurantComponent', () => {
  let component: DetailrestaurantComponent;
  let fixture: ComponentFixture<DetailrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailrestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
