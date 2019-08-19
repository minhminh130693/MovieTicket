import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private trailerMovie = new BehaviorSubject('' as string);
  private averageRating = new BehaviorSubject(0 as number);
  private countRating = new BehaviorSubject(0 as number);
  private mapLink = new BehaviorSubject('' as string);
  private messageContent = new BehaviorSubject('' as string);
  private isHomePage = new BehaviorSubject(false as boolean);
  shareTrailerMovie = this.trailerMovie.asObservable();
  shareAvgRating = this.averageRating.asObservable();
  shareCountRating = this.countRating.asObservable();
  shareMapLink = this.mapLink.asObservable();
  shareMessageContent = this.messageContent.asObservable();
  shareIsHomePage = this.isHomePage.asObservable();

  constructor() { }

  sharingTrailerMovie(trailerMovie: any) {
    this.trailerMovie.next(trailerMovie);
  }

  sharingAvgRating(averageRating: number) {
    this.averageRating.next(averageRating);
  }

  sharingCountRating(countRating: number) {
    this.countRating.next(countRating);
  }

  sharingMapLink(mapLink: string) {
    this.mapLink.next(mapLink);
  }

  sharingMessageContent(messageContent: string) {
    this.messageContent.next(messageContent);
  }

  sharingIsHomePage(isHomePage: boolean) {
    this.isHomePage.next(isHomePage);
  }
}
