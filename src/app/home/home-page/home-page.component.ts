import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/_core/models/movie';
import { DataService } from 'src/app/_core/services/data.service';
import { Subscription } from 'rxjs';
import { ShareDataService } from 'src/app/_core/shared/services/share-data.service';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  listMovie: Movie[] = [];
  isHomePage: boolean = true;
  subListMovie: any = new Subscription();

  constructor(
    private dataService: DataService,
    private shareDataService: ShareDataService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getListMovie();
    this.shareDataService.sharingIsHomePage(true);
  }

  getListMovie() {
    const uri = "api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02";
    setTimeout(() => {
      this.subListMovie = this.dataService.get(uri).subscribe((data: any) => {
        this.listMovie = data;
      })
    }, 0);
  }

  ngOnDestroy() {
    $("#modalTrailer").modal('hide');
    $("#modalUser").modal('hide');
    this.shareDataService.sharingIsHomePage(false);
    this.subListMovie.unsubscribe();
  }
}
