import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEventMovieComponent } from './item-event-movie.component';

describe('ItemEventMovieComponent', () => {
  let component: ItemEventMovieComponent;
  let fixture: ComponentFixture<ItemEventMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEventMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEventMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
