import { Component, OnInit } from '@angular/core';




// src/app/deck.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private apiUrl = 'http://localhost:3000'; // Remplacez avec l'URL de votre API

  constructor(private http: HttpClient) { }

  getDecks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/userdecks`);
  }
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public recto: string = '';
  public verso: string = '';
  public decks: any[] = [];
  public selectedDeckId!: number;

  constructor(private deckService: DeckService) {}

  ngOnInit() {
    this.deckService.getDecks().subscribe({
      next: (data) => {
        this.decks = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  public updateInputs() {
    console.log(this.recto, this.verso);
  }

  public addFlashcard() {
    console.log('Selected Deck ID:', this.selectedDeckId);
    // Ici, envoyez la requête POST avec l'ID du deck sélectionné
  }
}
