import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {

  @Input() detailMovie;
  @Input() stringTrailer: SafeResourceUrl;
  
  constructor() { }

  ngOnInit() {
  }

}
