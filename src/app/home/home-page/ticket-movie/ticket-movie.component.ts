import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-movie',
  templateUrl: './ticket-movie.component.html',
  styleUrls: ['./ticket-movie.component.scss']
})
export class TicketMovieComponent implements OnInit {

  @Input() listMovie: any;

  id: any;
  detailMovie: any = [];
  subDetailMovie: any = new Subscription();
  selectedMovie: string = "";
  selectedCinema: string = "";
  selectedDate: string = "";
  selectedSession: string = "";
  enabledButton: boolean = true;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  getDetailMovie() {
    const uri = `api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.id}`;
    setTimeout(() => {
      this.subDetailMovie = this.dataService.get(uri).subscribe((data: any) => {
        this.detailMovie = data;
      })
    }, 0)
  }

  buyTicket() {
    this.router.navigate(['/ticket-movie-page', this.selectedSession], { queryParams: { maPhim: this.selectedMovie } });
  }

  selectMovie(movie) {
    this.selectedMovie = movie;
    this.selectedCinema = "";
    this.selectedDate = "";
    this.selectedSession = "";
    this.enabledButton = true;
    this.id = movie;
    this.getDetailMovie();
  }

  selectCinema(cineme) {
    this.selectedCinema = cineme;
    this.selectedDate = "";
    this.selectedSession = "";
    this.enabledButton = true;
  }

  selectDate(date) {
    this.selectedDate = date;
    this.selectedSession = "";
    this.enabledButton = true;
  }

  selectSession(session) {
    this.selectedSession = session;
    this.enabledButton = false;
  }

  ngOnDestroy() {
    this.subDetailMovie.unsubscribe();
  }

}
