import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  decks: any;

  constructor(private router: Router,private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllDecks().subscribe((data:any) => {
      this.decks = data;
    });
  }
  onDeckSelect(deckId: number): void {
    this.router.navigate(['/card', deckId]);
  }
}