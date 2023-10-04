import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteFoodsComponent } from './favourite-foods.component';

describe('FavouriteFoodsComponent', () => {
  let component: FavouriteFoodsComponent;
  let fixture: ComponentFixture<FavouriteFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
