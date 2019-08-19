import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReviewMovieComponent } from './item-review-movie.component';

describe('ItemReviewMovieComponent', () => {
  let component: ItemReviewMovieComponent;
  let fixture: ComponentFixture<ItemReviewMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReviewMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReviewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
