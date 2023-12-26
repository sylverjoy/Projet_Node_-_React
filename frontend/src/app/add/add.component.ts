import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public recto: string;
  public verso: string;

  constructor() {
    this.recto = '';
    this.verso = '';
  }

  public updateInputs() {
    console.log(this.recto, this.verso);
  }

  public addFunction(): void {
    console.log('Bouton Add cliqué');
    // Ici, vous pourriez ajouter des éléments à une liste, ouvrir un formulaire, etc.
  }
}
