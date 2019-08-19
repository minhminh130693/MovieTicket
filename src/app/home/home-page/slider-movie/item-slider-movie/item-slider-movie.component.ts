import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';

@Component({
  selector: 'app-item-slider-movie',
  templateUrl: './item-slider-movie.component.html',
  styleUrls: ['./item-slider-movie.component.scss']
})
export class ItemSliderMovieComponent implements OnInit {

  @Input() sliderMovie;

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
  }

  viewTrailer(){
    this.shareDataService.sharingTrailerMovie(this.sliderMovie.trailer);
  }
}
