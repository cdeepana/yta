import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {
  private backendUrl = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  saveAuthor(data):Observable<any>{
    console.log("data",data);
    return this.http.post(this.backendUrl + '/saveAuthor',data);
  }

  getAllAuthors(): Observable<any>{
    const url = this.backendUrl + '/getAllAuthors';
    return this.http.get(url);
  }

  saveBook(data): Observable<any>{
    const url = this.backendUrl + '/saveBook'
    return this.http.post(url ,data);
  }

  getAllBooks():Observable<any>{
    const url = this.backendUrl + '/getAllBooks';
    return this.http.get(url);
  }
}
