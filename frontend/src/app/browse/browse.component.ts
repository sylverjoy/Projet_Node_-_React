import { Component, Inject, Injector, OnInit } from '@angular/core';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-deck',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  decks: any[] = [];

  constructor(@Inject(Injector) private injector: Injector) {}

  ngOnInit(): void {
    const deckService = this.injector.get(DeckService);
    deckService.getDecks().subscribe(decks => {
      this.decks = decks;
    });
  }
}
