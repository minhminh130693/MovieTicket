import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-movie-info',
  templateUrl: './detail-movie-info.component.html',
  styleUrls: ['./detail-movie-info.component.scss']
})
export class DetailMovieInfoComponent implements OnInit {

  @Input() detailMovie;

  stringTrailer: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  viewInfo() {
    if (this.detailMovie.trailer != '' && this.detailMovie.trailer != 'null') {
      this.stringTrailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.detailMovie.trailer.replace('watch?v=', 'embed/'));
    }
  }

}
