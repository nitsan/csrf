import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  sendFormData(data: any): Observable<any> {
    return this.httpClient.post('/api/update-form', data)
      .pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
      );
  }

  getToken(): Observable<{csrfToken: string}> {
    return this.httpClient.get<{csrfToken: string}>('/api/form');
  }
}
