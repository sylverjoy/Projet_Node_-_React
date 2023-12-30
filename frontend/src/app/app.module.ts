import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { AddComponent } from './add/add.component';
import { BrowseComponent } from './browse/browse.component';
import { StatsComponent } from './stats/stats.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

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
    HighchartsChartModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
