import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './deck/deck.component';
import { AddComponent } from './add/add.component';
import { BrowseComponent } from './browse/browse.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [  { path: 'deck', component: DeckComponent },
{ path: 'add', component: AddComponent },
{ path: 'browse', component: BrowseComponent },
{ path: 'stats', component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
