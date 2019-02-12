import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredictionComponent } from './prediction/prediction.component';
import { PlotlyModule } from 'angular-plotly.js';

@NgModule({
  declarations: [
    AppComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,PlotlyModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
