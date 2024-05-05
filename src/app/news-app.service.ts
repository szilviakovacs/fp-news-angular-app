import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from './news';
import { Observable, catchError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsAppService {
  
  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]>{
    return this.http.get<News[]>('http://127.0.0.1:8000/api/news')
      .pipe(catchError(this.handlerError<News[]>('getNews', [])));
  }

  private handlerError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
  
}