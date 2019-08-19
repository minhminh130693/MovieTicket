import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
declare var $:any;

@Component({
  selector: 'app-detail-movie-top',
  templateUrl: './detail-movie-top.component.html',
  styleUrls: ['./detail-movie-top.component.scss']
})
export class DetailMovieTopComponent implements OnInit {

  @Input() detailMovie: any;

  avgRating: number = -1;
  avgRatingPer: number = 0;
  countRating: number = 0;

  constructor(private shareDataService: ShareDataService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.shareDataService.shareAvgRating.subscribe((data: any) => {
        if (data != null && data != '') {
          this.avgRating = data;
          this.avgRatingPer = data * (100 / 5);
        }
      })

      this.shareDataService.shareCountRating.subscribe((data: any) => {
        if (data != null && data != '') {
          this.countRating = data;
        }
      })
    }, 0)
  }

  viewTrailer() {
    this.shareDataService.sharingTrailerMovie(this.detailMovie.trailer);
  }

  scrollTo(id) {
    document.querySelector('#' + id).scrollIntoView({ behavior: "smooth", block: "start" });
    $("#showtimesMovie").click();
  }

}
