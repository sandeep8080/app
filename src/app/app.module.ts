import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { CalculatorComponent } from './start/calculator/calculator.component';
import { RangeComponent } from './start/calculator/range/range.component';
import { StartComponent } from './start/start.component';
import { BottomComponent } from './bottom/bottom.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    CalculatorComponent,
    RangeComponent,
    StartComponent,
    BottomComponent,
    AppButtonComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
