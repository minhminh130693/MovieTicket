import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss']
})
export class ItemMovieComponent implements OnInit {

  @Input() movie;
  @Input() isShowing;

  constructor(private shareDataService: ShareDataService, private router: Router) { }

  ngOnInit() {
  }

  viewTrailer() {
    this.shareDataService.sharingTrailerMovie(this.movie.trailer);
  }

  buyTicket(movieID) {
    this.router.navigate(['/detail-movie-page', movieID]);
  }
}
