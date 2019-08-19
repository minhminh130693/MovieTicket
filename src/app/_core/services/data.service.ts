import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

let urlApi = "";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': "application/json",
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

  public get(uri: string): Observable<any> {
    return this.http.get(urlApi + uri, httpOptions).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }

  public post(uri: string, data?: object): Observable<any> {
    if(localStorage.getItem("UserLogin")){
      let user = JSON.parse(localStorage.getItem("UserLogin"));
      httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${user.accessToken}`);
    }

    return this.http.post(urlApi + uri, data, httpOptions).pipe(
      tap(() => { }),
      catchError((err) => this.handleErr(err))
      )
  }

  handleErr(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.status === 400) {
      errorMessage = err.error;
    } else if (err.status === 401) {
      errorMessage = err.error;
    } else if (err.status === 404) {
      errorMessage = err.error;
    } else if (err.status === 500) {
      errorMessage = err.error;
    } else {
      errorMessage = 'Error';
    }
    return throwError(errorMessage);
  }
}
