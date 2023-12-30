import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  decks = [
    { id: 1, name: 'Deck de Biologie' },
    { id: 2, name: 'Deck de Histoire' },
    { id: 3, name: 'Deck de Mathématiques' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Les decks sont déjà initialisés ci-dessus pour les tests
  }

  onDeckSelect(deckId: string): void {
    this.router.navigate(['/card', deckId]);
  }
}