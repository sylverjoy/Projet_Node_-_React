import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { AddComponent } from './add/add.component';
import { BrowseComponent } from './browse/browse.component';
import { StatsComponent } from './stats/stats.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    AddComponent,
    BrowseComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
