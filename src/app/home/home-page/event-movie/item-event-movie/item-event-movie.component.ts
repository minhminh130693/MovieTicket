import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-event-movie',
  templateUrl: './item-event-movie.component.html',
  styleUrls: ['./item-event-movie.component.scss']
})
export class ItemEventMovieComponent implements OnInit {

  @Input() event;
  
  constructor() { }

  ngOnInit() {
  }
  
}
