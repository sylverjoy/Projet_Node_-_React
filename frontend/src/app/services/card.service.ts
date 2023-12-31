import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) {}

  addCard(card: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, card);
  }
}