import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  decks: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllDecks().subscribe((data:any) => {
      this.decks = data;
    });
  }
}