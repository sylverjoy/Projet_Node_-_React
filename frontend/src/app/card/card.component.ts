import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  deckId: number | undefined;
  cards: any[] = [];
  currentCardIndex: number = 0;
  showAnswer: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.deckId = +idParam;
        this.apiService.getDeckById(this.deckId).subscribe((deck: any) => {
          console.log(deck); // Pour vérifier la structure
          if (deck[0].Cards) {
            console.log(deck[0].Cards)
            this.cards = deck[0].Cards;
          } else {
            this.cards = []; // Initialise avec un tableau vide si deck.Cards est undefined
            console.log('Aucune carte trouvée ou deck est indéfini');
          }
        });
      }
    });
  }

  loadNextCard(): void {
    if (this.currentCardIndex < this.cards.length - 1) {
      this.currentCardIndex++;
      this.showAnswer = false;
    } else {
      console.log('Fin des cartes');
    }
  }

  toggleAnswer(): void {
    this.showAnswer = !this.showAnswer;
  }
}