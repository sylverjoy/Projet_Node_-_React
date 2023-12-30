import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  deckId: string | null = null;
  question: string = '';
  answer: string = '';
  showAnswer: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.deckId = params.get('id');
      this.loadContent();
    });
  }

  loadContent(): void {

    if (this.deckId === '1') {
      this.question = 'Quelle est la capitale de la France ?';
      this.answer = 'Paris';
    } 
    else if (this.deckId === '2') {
      this.question = '3 x 2 ?';
      this.answer = '6';
    }
    else if (this.deckId === '3') {
      this.question = 'boonjour  ?';
      this.answer = 'bonsoir';
    }
  }
  toggleAnswer(): void {
    this.showAnswer = !this.showAnswer;
  }
}
