import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/_core/services/data.service';
declare var $: any;

@Component({
  selector: 'app-detail-movie-page',
  templateUrl: './detail-movie-page.component.html',
  styleUrls: ['./detail-movie-page.component.scss']
})
export class DetailMoviePageComponent implements OnInit {

  id: any;
  isClickBuyTicket: boolean = false;
  detailMovie: any = [];
  subDetailMovie: any = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getParamsFromURL();
    this.getDetailMovie();
  }

  getParamsFromURL() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  getDetailMovie() {
    const uri = `api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.id}`;
    setTimeout(() => {
      this.subDetailMovie = this.dataService.get(uri).subscribe((data: any) => {
        this.detailMovie = data;
      }, () => { this.router.navigate(["/"]); })
    }, 0)
  }

  ngOnDestroy() {
    $("#modalTrailer").modal('hide');
    $("#modalUser").modal('hide');
    $("#modalMap").modal('hide');
    this.subDetailMovie.unsubscribe();
  }
}
