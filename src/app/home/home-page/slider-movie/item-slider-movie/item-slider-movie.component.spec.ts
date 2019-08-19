import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSliderMovieComponent } from './item-slider-movie.component';

describe('ItemSliderMovieComponent', () => {
  let component: ItemSliderMovieComponent;
  let fixture: ComponentFixture<ItemSliderMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSliderMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSliderMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
